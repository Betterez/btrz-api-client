const url = require("url");

function insurancesFactory({ client }) {
  
  function all({ token }) {
    return client.get("/inventory/insurances/", {
      headers: { 'x-api-key': `${token}`}
    });
  }

  function create({ token, insurance }) {
    return client.post("/inventory/insurances/", {
      headers: { 'x-api-key': `${token}`},
      data: insurance
    });
  }

  function enabled({ token, insurance }) {
    const one = url.resolve("/inventory/insurances/", insurance._id);
    console.log(one);
    return client.patch(one, {
      headers: { 'x-api-key': `${token}`},
      data: { enabled: insurance.enabled }
    });
  }

  return { 
    all,
    create,
    enabled
  };
}

module.exports = { insurancesFactory };