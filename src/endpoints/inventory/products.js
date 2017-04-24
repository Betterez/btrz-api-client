function productsFactory({ client }) {
  function all({ token }) {
    return client.get("/inventory/products", { headers: { 'x-api-key': `${token}`} });
  }

  return { 
    all 
  };
}

module.exports = { productsFactory };