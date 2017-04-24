module.exports = {

  baseURL: "http://betterez.com",
  timeout: 15000,
  baseURLOverride: {
    inventory: (url) => `${url}/inventory`
  }

}