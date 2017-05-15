function authorizationHeaders({ token, jwtToken }) {
  const headers =  {};

  if(token) {
    headers['x-api-key'] = `${token}`;
  }

  if(jwtToken) {
    headers['authorization'] = `Bearer ${jwtToken}`;
  }

  return headers;
}

module.exports = {
  authorizationHeaders
}