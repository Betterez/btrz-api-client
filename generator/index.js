"use strict";

const http = require("request"),
  fs = require("fs"),
  ejs = require("ejs"),
  apiList = ["accounts",
  "inventory",
  "notifications",
  "operations",
  "reports",
  "sales",
  "uploads"
  ];

function requestP(api, url) {
  return new Promise((resolve, reject) => {
    http(url, (err, resp, body) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({api, base: url, docs: JSON.parse(body)});
    });
  });
}

function getAllResourcesUrls(apiResources) {
  return apiResources.map((r) => {
    return r.docs.apis.map((a) => {
      return {api: r.api, url: `${r.base}${a.path}`};
    });
  })
  .reduce((a, b) => {
    return a.concat(b);
  }, []);
}

function pathToMethod(path) {
  return path.split("/").filter((x) => {
    return x.length > 0;
  })
  .map((x) => {
    const index = x.indexOf("-");
    if (index !== -1) {
      return `${x.substr(0, index)}${x[index + 1].toUpperCase()}${x.substr(index + 2)}`;
    }
    return x;
  })
  .reduce((ma, x) => {
    if (x.indexOf("{") === -1) {
      ma.methods.push(x);
    } else {
      ma.args.push(x.replace(/[{,}]/ig, ""));
    }
    return ma;
  }, {methods: [], args: []});
}

function swaggerArgs(parameters) {
  if (!parameters) {
    return [];
  }
  const options = [],
    query = parameters.find((p) => {
      return p.paramType === "query";
    }),
    body = parameters.find((p) => {
      return p.paramType === "body";
    });
  if (query) {
    options.push("query");
  }
  if (body) {
    options.push("body");
  }
  return options;
}

function getUrl(api, name) {
  const path = `/${name}${api.path}`;
  return "`${this.baseUrl}" + path + "`";
}

function spaces(index, seed) {
  let s = "";
  const n = seed + index * 2;
  for (let i = 0; i < n; i++) {
    s += " ";
  }
  return s;
}

function openingName(args) {
  return args.methods.map((n, index) => {
    if (index === 0) {
      return `${n} = {\n${spaces(index, 6)}`;
    }
    return `${n}: {\n${spaces(index, 6)}`;
  }).join("");
}

function closingName(args) {
  return args.methods.map((n, index) => {
    return `\n${spaces(index, 4)}}`;
  })
  .reverse()
  .join("");
}

function httpSpaces(args) {
  return spaces(args.methods.length, 6);
}

function metodify(name) {
  return function int(api) {
    const nameArgs = pathToMethod(api.path),
      argsArray = [];
    let httpArgs = "";

    if (nameArgs.args.length > 0) {
      argsArray.push(`path: {${nameArgs.args.join(", ")}}`);
    }
    nameArgs.args = nameArgs.args.concat(swaggerArgs(api.operations[0].parameters));
    if (nameArgs.args.indexOf("body") !== -1) {
      argsArray.push("body");
    }
    if (nameArgs.args.indexOf("query") !== -1) {
      argsArray.push("query");
    }
    if (argsArray.length > 0) {
      httpArgs = `{${argsArray.join(", ")}}`;
    }
    return {
      name: nameArgs.methods,
      openingName: openingName(nameArgs),
      closingName: closingName(nameArgs),
      httpArgs,
      httpMethod: api.operations[0].method.toLowerCase(),
      httpMethodSpaces: httpSpaces(nameArgs),
      url: getUrl(api, name),
      args: nameArgs.args
    };
  };
}

function classify(resources) {
  Object.keys(resources).forEach((key) => {
    const resource = resources[key];
    resource.className = `${resource.name[0].toUpperCase()}${resource.name.substr(1)}`;
    resource.methods = resource.apis.map(metodify(resource.name));
  });
  return resources;
}

function reduceResources(unreducedResources) {
  return unreducedResources.reduce((unified, resource) => {
    if (!unified[resource.api]) {
      unified[resource.api] = {name: resource.api, apis: []};
    }
    unified[resource.api].apis = unified[resource.api].apis.concat(resource.docs.apis);
    return unified;
  }, {});
}

function getResourceDocs(urls) {
  const resourcesPromises = urls.map((u) => {
    return requestP(u.api, u.url);
  });
  return Promise.all(resourcesPromises);
}

function tpl(url, data, dest) {
  return new Promise((resolve, reject) => {
    ejs.renderFile(url, data, (err, fileStr) => {
      if (err) {
        console.log(err);
        reject(err);
        return;
      }
      fs.writeFileSync(dest, fileStr);
      resolve(true);
    });
  });
}

function generateIndex(resources) {
  return tpl("./templates/index.ejs", {resources}, "../src/apis/index.js");
}

function generateClients(resourceDocs) {
  generateIndex(apiList);
  Object.keys(resourceDocs).forEach((key) => {
    const resource = resourceDocs[key];
    return tpl("./templates/class.ejs", {resource}, `../src/apis/${resource.name}.js`);
  });
}

function getApiDocs(url, apis) {
  const apiDocsPromises = apis.map((api) => {
    return requestP(api, `${url}/${api}/api-docs`);
  });
  Promise
    .all(apiDocsPromises)
    .then(getAllResourcesUrls)
    .then(getResourceDocs)
    .then(reduceResources)
    .then(classify)
    .then(generateClients)
    .catch((err) => {
      console.log("ERROR_REQUESTING_DOCS", err);
      throw err;
    });
}

getApiDocs(process.argv[2], apiList);
