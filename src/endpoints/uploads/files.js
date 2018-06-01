const { authorizationHeaders } = require("./../endpoints_helpers");

function filesFactory({ client, internalAuthTokenProvider }) {

  function upload({ token, formData }) {
    return client({
      url: "/files",
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
        ...authorizationHeaders({token, internalAuthTokenProvider})
      },
      data: formData
    });
  }

  return {
    upload,
  };
}

module.exports = filesFactory;
