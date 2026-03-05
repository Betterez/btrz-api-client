const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

function smsTemplatesFactory({client, internalAuthTokenProvider}) {
  function getTypes({token, jwtToken, headers}) {
    return client({
      url: "/sms-templates/types",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function all({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/sms-templates",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function get({token, jwtToken, smsTemplateId, query = {}, headers}) {
    return client({
      url: `/sms-templates/${smsTemplateId}`,
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function create({token, jwtToken, data, headers}) {
    return client({
      url: "/sms-templates",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  function update({token, jwtToken, smsTemplateId, data, headers}) {
    return client({
      url: `/sms-templates/${smsTemplateId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  function remove({token, jwtToken, smsTemplateId, headers}) {
    return client({
      url: `/sms-templates/${smsTemplateId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function createSub({token, jwtToken, mainTemplateId, agencyId, headers}) {
    return client({
      url: "/sub-sms-templates",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {mainTemplateId, agencyId}
    });
  }

  const versions = {
    update({token, jwtToken, smsTemplateId, versionId, query = {}, headers}) {
      return client({
        url: `/sms-templates/${smsTemplateId}/versions/${versionId}`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query
      });
    }
  };

  return {
    getTypes,
    all,
    get,
    create,
    update,
    remove,
    createSub,
    versions
  };
}

module.exports = smsTemplatesFactory;
