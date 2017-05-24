const { authorizationHeaders } = require("./../endpoints_helpers");

function lexiconsFactory({ client }) {
  
  function all({ token, lexiconName, context }) {

    return client({
      url: `lexicons/lexicon_${lexiconName}`,
      params: { context },
      headers: authorizationHeaders({token})
    });
  }

  return { 
    all 
  };

}

module.exports = lexiconsFactory;