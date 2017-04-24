function insurancesFactory({ client }) {
  
  function all({ token }) {
    return client.get("/inventory/insurances", {
      headers: { 'x-api-key': `${token}`}
    });
  }

  function create({ token, insurance }) {
    return client.post("/inventory/insurances", {
      headers: { 'x-api-key': `${token}`},
      data: insurance
    });
  }

  return { 
    all,
    create
  };
}

module.exports = { insurancesFactory };