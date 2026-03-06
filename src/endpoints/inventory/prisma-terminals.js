const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * @typedef {Object} InventoryPrismaTerminalsQuery
 * @property {string} [providerId] - Provider account ID
 */

/**
 * Factory for prisma-terminals API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */
function prismaTerminalFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /prisma-terminals - list prisma terminals.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {InventoryPrismaTerminalsQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({
    token,
    jwtToken,
    query = {},
    headers
  }) {
    return client.get("/prisma-terminals", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /prisma-terminals/:prismaTerminalId - get prisma terminal by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.prismaTerminalId - Prisma terminal id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({prismaTerminalId, token, jwtToken, headers}) {
    return client.get(`/prisma-terminals/${prismaTerminalId}`, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /prisma-terminals - create prisma terminal.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.prismaTerminal - Prisma terminal payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({jwtToken, token, prismaTerminal, headers}) {
    return client({
      url: "/prisma-terminals",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        prismaTerminal
      }
    });
  }

  /**
   * DELETE /prisma-terminals/:prismaTerminalId - remove prisma terminal.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.prismaTerminalId - Prisma terminal id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove({jwtToken, prismaTerminalId, token, headers}) {
    return client({
      url: `/prisma-terminals/${prismaTerminalId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /prisma-terminals/:prismaTerminalId - update prisma terminal.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.prismaTerminalId - Prisma terminal id
   * @param {Object} opts.prismaTerminal - Prisma terminal payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({jwtToken, token, prismaTerminalId, prismaTerminal, headers}) {
    return client({
      url: `/prisma-terminals/${prismaTerminalId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        prismaTerminal
      }
    });
  }

  return {
    all,
    get,
    create,
    update,
    remove
  };
}

module.exports = prismaTerminalFactory;
