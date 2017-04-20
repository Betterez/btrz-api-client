function insurancesFactory({ client, authorizationHeaderName }) {
  const index = ({ token }) => {
    return client.get("/inventory/insurances", { headers: { [authorizationHeaderName]: `${token}` } });
  }

  return { 
    index 
  };
}

module.exports = { insurancesFactory };