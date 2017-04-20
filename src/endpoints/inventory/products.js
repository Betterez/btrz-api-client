function productsFactory({ client, authorizationHeaderName }) {
  const index = ({ token }) => {
    return client.get("/inventory/products", { headers: { [authorizationHeaderName]: `${token}` } });
  }

  return { 
    index 
  };
}

module.exports = { productsFactory };