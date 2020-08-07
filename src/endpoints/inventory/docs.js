function docsFactory({client}) {
  function get() {
    return client.get("/api-docs-v2", {});
  }

  return {
    get
  };
}

module.exports = docsFactory;
