function productsFactory({ client }) {
  
  function all({ token, query = {} }) {
    return client.get("/inventory/products", {
      params: query,   
      headers: { 'x-api-key': `${token}`}
    });
  }

  return { 
    all 
  };
}

module.exports = productsFactory;