const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function printSettingsFactory({client, internalAuthTokenProvider}) {
  function all({token, query, headers}) {
    return client({
      url: "/print-templates",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function get({token, query, headers, printTemplateId}) {
    return client({
      url: `/print-templates/${printTemplateId}`,
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function update({jwtToken, token, printTemplateId, printTemplate, headers, query}) {
    return client({
      url: `/print-templates/${printTemplateId}`,
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: {
        printTemplate
      },
      params: query
    });
  }

  function create({jwtToken, token, printTemplate, headers}) {
    return client({
      url: "/print-templates",
      method: "post",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: {
        printTemplate
      }
    });
  }

  function remove({printTemplateId, token, jwtToken, headers}) {
    return client({
      url: `/print-templates/${printTemplateId}`,
      method: "delete",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      })
    });
  }

  const versions = {
    update({printTemplateId, token, jwtToken, headers, query, versionId}) {
      return client({
        url: "/print-templates/" + printTemplateId + "/versions/" + versionId,
        method: "put",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        }),
        params: query
      });
    }
  };

  return {
    all,
    get,
    update,
    create,
    remove,
    versions
  };
}

module.exports = printSettingsFactory;
