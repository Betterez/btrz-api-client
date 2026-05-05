const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");
const http = require("http");
const {expect} = require("chai");

function patchAxiosForNockRecorder() {
  if (axios.__nockRecorderPatched) {
    return;
  }
  const {rememberRequestParams} = require("./nock-axios-mock.js");

  const originalCreate = axios.create.bind(axios);

  function wrapMethodWithConfigSupport(instance, methodName) {
    const originalMethod = instance[methodName].bind(instance);
    const wrappedInstance = instance;
    wrappedInstance[methodName] = (url, data, config) => {
      if (url && typeof url === "object" && !Array.isArray(url)) {
        const requestConfig = {
          ...url,
          method: url.method || methodName
        };
        return instance(requestConfig);
      }
      return originalMethod(url, data, config);
    };
  }

  axios.create = (config = {}) => {
    const safeConfig = {...config};
    if (!safeConfig.baseURL) {
      safeConfig.baseURL = "http://localhost";
    }

    const instance = originalCreate(safeConfig);
    instance.interceptors.request.use((requestConfig) => {
      const fullUri = axios.getUri(requestConfig);
      const parsedURL = new URL(fullUri, requestConfig.baseURL || safeConfig.baseURL || "http://localhost");
      rememberRequestParams({
        method: requestConfig.method || "get",
        uri: `${parsedURL.pathname}${parsedURL.search}`,
        params: requestConfig.params
      });
      return requestConfig;
    });

    wrapMethodWithConfigSupport(instance, "get");
    wrapMethodWithConfigSupport(instance, "delete");
    wrapMethodWithConfigSupport(instance, "post");
    wrapMethodWithConfigSupport(instance, "put");
    wrapMethodWithConfigSupport(instance, "patch");
    return instance;
  };

  axios.__nockRecorderPatched = true;
}

function createAxiosMock() {
  if (process.env.USE_UNDICI_FETCH_MOCK === "1") {
    const {createUndiciFetchMock} = require("./undici-fetch-mock.js");
    return createUndiciFetchMock({
      recordFilePath: process.env.HTTP_CALLS_RECORD_FILE_PATH
    });
  }

  if (process.env.USE_NOCK_RECORDER === "1") {
    const {createNockAxiosMock} = require("./nock-axios-mock.js");
    patchAxiosForNockRecorder();
    return createNockAxiosMock({
      recordFilePath: process.env.HTTP_CALLS_RECORD_FILE_PATH
    });
  }

  return new MockAdapter(axios);
}

module.exports = {
  axiosMock: createAxiosMock(),
  // eslint-disable-next-line max-len
  expectRequest: function _expectRequest({
    statusCode, token, jwtToken, internalAuthTokenProvider, withoutApiKey = false, requireJwtTokenOnGet = false, body, query
  }) {
    return ({headers, method, data, params}) => {
      if (body) {
        expect(data).to.eql(JSON.stringify(body));
      }
      if (query) {
        expect(params).to.eql(query);
      }
      if ((headers["x-api-key"] && headers["x-api-key"] === token) || withoutApiKey) {
        const methods = ["post", "put", "delete", "patch"];
        if (requireJwtTokenOnGet) {
          methods.push("get");
        }
        if (methods.includes(method)) {
          if (headers.authorization && (headers.authorization === `Bearer ${jwtToken}` ||
          headers.authorization === `Bearer ${internalAuthTokenProvider.getToken()}`)) {
            return [statusCode];
          }
          return [403];
        }
        return [statusCode];
      }
      return [403];
    };
  },
  createTestServer: (config = {}, reqCallback = () => {}) => {
    const sockets = new Set();
    const mockServer = http.createServer((req, res) => {
      reqCallback(req, res);
      res.writeHead(200, {"Content-Type": "text/plain"});
      res.end("OK");
    });

    mockServer.on("connection", (socket) => {
      sockets.add(socket);
      if (config.maxSockets) {
        expect(sockets.size).to.be.lessThanOrEqual(config.maxSockets);
      }
    });

    return {
      create: (callback) => {
        mockServer.listen(config.port || 8888, config.host || "localhost", callback);
      },
      getPort: () => {
        const address = mockServer.address();
        return address && address.port;
      },
      getSockets: () => {
        return sockets.size;
      },
      close: (callback) => {
        for (const socket of sockets) {
          socket.destroy();
          sockets.delete(socket);
        }
        sockets.clear();
        mockServer.close(callback);
      }
    };
  }
};
