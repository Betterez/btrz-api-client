const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

function emailTemplatesFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/email-templates",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function get({token, jwtToken, emailTemplateId, query = {}, headers}) {
    return client({
      url: `/email-templates/${emailTemplateId}`,
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function create({token, jwtToken, data, headers}) {
    return client({
      url: "/email-templates",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  function update({token, jwtToken, emailTemplateId, data, headers}) {
    return client({
      url: `/email-templates/${emailTemplateId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  function remove({token, jwtToken, emailTemplateId, headers}) {
    return client({
      url: `/email-templates/${emailTemplateId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function createSub({token, jwtToken, mainTemplateId, agencyId, headers}) {
    return client({
      url: "/sub-email-templates",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {mainTemplateId, agencyId}
    });
  }

  const versions = {
    update({token, jwtToken, emailTemplateId, versionId, query = {}, headers}) {
      return client({
        url: `/email-templates/${emailTemplateId}/versions/${versionId}`,
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

module.exports = emailTemplatesFactory;
