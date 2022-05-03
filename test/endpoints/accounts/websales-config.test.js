const {axiosMock, expectRequest} = require("../../test-helpers");
const api = require("../../../src/client").createApiClient({baseURL: "http://test.com"});
const {
  expect
} = require("chai");

describe("accounts/websales-config", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should GET a list of websales-config", () => {
    axiosMock.onGet("/websales-config").reply(expectRequest({
      statusCode: 200,
      token
    }));
    return api.accounts.websalesConfig.get({
      token,
      jwtToken, 
      query: {}
    }).then((httpResponse) => {
      expect(httpResponse.status).eql(200);
    });
  });

  it("should UPDATE a websales-config with provided Id", () => {
    const websalesConfigId = "6261875eaad6f32745351fe2"
    axiosMock.onPut(`/websales-config/${websalesConfigId}`).reply(expectRequest({statusCode: 200, token, jwtToken }));
    return api.accounts.websalesConfig.update({
        token,
        jwtToken,
        websalesConfigId,
        "update": {
          "websales_bgcolor": "",
          "customCss": "updated custom css",
          "socialSharing": false,
          "fullpageLogoLink": "",
          "fullpageHeadline": "",
          "fullpageInfoHeadline": "",
          "fullpageInfoDetails": "",
          "waitingMessage": "",
          "websales_logoredirecturl": "",
          "disableBackButtonOnTripResults": false,
          "forceLogin": false,
          "lexiconKeys": {
            "fullpageHeadline": {
                "key" : "624e08b5fdd69a15e973fcbc-websalesConfig-6261875eaad6f32745351fe2-fullpageHeadline",
                "values" : {
                    "en-us": "updated fullpageHeadline"
                }
            },
            "fullpageInfoHeadline":{
                "key" : "624e08b5fdd69a15e973fcbc-websalesConfig-6261875eaad6f32745351fe2-fullpageInfoHeadline",
                "values" : {
                    "en-us": "updated fullpageInfoHeadline"
                }
            },
            "fullpageInfoDetails": {
                "key" : "624e08b5fdd69a15e973fcbc-websalesConfig-6261875eaad6f32745351fe2-fullpageInfoDetails",
                "values" : {
                    "en-us": "fullpageInfoDetails"
                }
            },
            "ssoErrorMsg": {
                "key" : "624e08b5fdd69a15e973fcbc-websalesConfig-6261875eaad6f32745351fe2-ssoErrorMsg",
                "values" : {
                    "en-us": "updated ssoErrorMsg"
                }
            }
          }
        }
      });
  });

});
