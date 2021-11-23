const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");
const http = require("http");
const {expect} = require("chai");

module.exports = {
  axiosMock: new MockAdapter(axios),
  // eslint-disable-next-line max-len
  expectRequest: function _expectRequest({statusCode, token, jwtToken, internalAuthTokenProvider, withoutApiKey = false, requireJwtTokenOnGet = false}) {
    return ({headers, method}) => {
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
      mockServer.once("close", () => {
        sockets.delete(socket);
      });
      if (config.maxSockets) {
        expect(sockets.size).to.be.lessThanOrEqual(config.maxSockets);
      }
    });

    return {
      create: (callback) => {
        mockServer.listen(config.port || 8888, config.host || "localhost", callback);
      },
      getSockets: () => {
        return sockets.size;
      },
      close: (callback) => {
        for (const socket of sockets) {
          socket.destroy();
          sockets.delete(socket);
        }
        mockServer.close(callback);
      }
    };
  }
};
