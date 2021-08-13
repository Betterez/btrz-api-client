const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function printSettingsFactory({client, internalAuthTokenProvider}) {
  function all({token, query}) {
    return client({
      url: "/print-settings",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function update({jwtToken, token, printSettings}) {
    return client({
      url: "/print-settings",
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider
      }),
      data: {
        printSettings
      }
    });
  }
  const productTemplates = {
    create({jwtToken, token, productTemplate}) {
      return client({
        url: "/print-settings/product-templates",
        method: "post",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider
        }),
        data: {
          productTemplate
        }
      });
    },
    remove({productTemplateId, token, jwtToken}) {
      return client({
        url: `/print-settings/product-templates/${productTemplateId}`,
        method: "delete",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider
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
