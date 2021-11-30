const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function printSettingsFactory({client, internalAuthTokenProvider}) {
  function all({token, query, headers}) {
    return client({
      url: "/print-settings",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function update({jwtToken, token, printSettings, headers}) {
    return client({
      url: "/print-settings",
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: {
        printSettings
      }
    });
  }
  const productTemplates = {
    create({jwtToken, token, productTemplate, headers}) {
      return client({
        url: "/print-settings/product-templates",
        method: "post",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data: {
          productTemplate
        }
      });
    },
    remove({productTemplateId, token, jwtToken, headers}) {
      return client({
        url: `/print-settings/product-templates/${productTemplateId}`,
        method: "delete",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        })
      });
    }
  };

  return {
    all,
    update,
    productTemplates
  };
}

module.exports = printSettingsFactory;
