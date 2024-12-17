function authFactory({client}) {
  function create({
    data,
    headers
  }) {
    return client({
      url: "/authenticate",
      method: "post",
      headers,
      data
    });
  }

  return {
    create
  };
}

module.exports = authFactory;
