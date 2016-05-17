"use strict";

const http = require("request");

export default {
  execute(url, options) {
    return new Promise((resolve, reject) => {
      const httpOptions = {
        url,
        headers: options.headers
      };
      http(httpOptions, (err, resp, body) => {
        if (err) {
          reject(err);
          return;
        }
        resolve({resp, body});
      });
    });
  }
};
