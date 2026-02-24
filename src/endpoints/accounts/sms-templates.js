const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

function smsTemplatesFactory({client, internalAuthTokenProvider}) {
  const basePath = "/accounts/sms-templates";

  function all({token, jwtToken, query = {}, headers}) {
    return client({
      url: basePath,
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function get({token, jwtToken, smsTemplateId, query = {}, headers}) {
    return client({
      url: `${basePath}/${smsTemplateId}`,
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function create({token, jwtToken, data, headers}) {
    return client({
      url: basePath,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  function update({token, jwtToken, smsTemplateId, data, headers}) {
    return client({
      url: `${basePath}/${smsTemplateId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  function remove({token, jwtToken, smsTemplateId, headers}) {
    return client({
      url: `${basePath}/${smsTemplateId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function createSub({token, jwtToken, mainTemplateId, agencyId, headers}) {
    return client({
      url: "/accounts/sub-sms-templates",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {mainTemplateId, agencyId}
    });
  }

  const versions = {
    update({token, jwtToken, smsTemplateId, versionId, query = {}, headers}) {
      return client({
        url: `${basePath}/${smsTemplateId}/versions/${versionId}`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query
      });
    }
  };

  return {
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
