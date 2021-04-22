module.exports = {
  baseURL: "https://api.betterez.com",
  timeout: 15000,
  baseURLOverride: {
    inventory: (url) => `${url}/inventory`,
    trips: (url) => `${url}/inventory`
  }
};
