function insurancesFactory({ client }) {
  function all({ token }) {
    return client.get("/inventory/insurances", { headers: { 'x-api-key': `${token}`} });
  }

  return { 
    all 
  };
}

module.exports = { insurancesFactory };