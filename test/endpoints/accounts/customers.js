const { expect } = require("chai");
const base64 = require("base-64");
const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('accounts/customers', () => {
  const token = 'I owe you a token',
    jwtToken = 'I owe you a JWT token';

  afterEach(() => {
    axiosMock.reset();
  });

  it("should PUT a customer", () => {
    const customerId = "123123123123",
      customer = {firstName: "new name!"};
    axiosMock.onPut(`/customers/${customerId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.accounts.customers.put({ jwtToken, token, customerId, customer });
  });

  it("should GET a list of customers", () => {
    axiosMock.onGet("/customers").reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.accounts.customers.all({ jwtToken, token });
  });

  it("should GET a list of customers by customerNumber", () => {
    const query = {customerNumber: "123-123-123"};
    axiosMock.onGet("/customers", {params: query}).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.accounts.customers.all({ jwtToken, token, query });
  });

  it("should POST a customer", () => {
    const customer = {
      firstName: "someFirstName",
      lastName: "someLastName"
    };
    axiosMock.onPost("/customer").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.accounts.customers.create({jwtToken, token, customer});
  });


  it("should authenticate a customer/cas", () => {
    const service = "http://something.example.com";
    const ticket = "ST-1234";
    axiosMock.onPost("/customers/cas", {
      service, ticket
    }).reply((response) => {
      expect(response.data).to.be.eql(`{"service":"${service}","ticket":"${ticket}"}`);
      expect(response.headers["x-api-key"]).to.be.eql(token);
      return [200];
    });

    return api.accounts.customers.signInCas({
      token, service, ticket
    });
  });

  it("should sign in a customer", () => {
    const email = "coolCustomer@betterez.com";
    const password = "abc123";
    const apiKey = "customerApiKey";
    const encodedCredentials = base64.encode(`${email}:${password}`);
    const response = {
      customer: {
        foo: "bar"
      },
      token: "someToken",
      shortToken: "someShortToken"
    };

    axiosMock.onPost("/customers",).reply((config) => {
      expect(config.params).eql({
        "x-api-key": apiKey
      });
      expect(config.headers.Authorization).eql(`Basic ${encodedCredentials}`);
      return [200, response];
    });

    return api.accounts.customers.signIn({email, password, apiKey})
      .then((httpResponse) => {
        expect(httpResponse.status).eql(200);
        expect(httpResponse.data).eql(response);
      });
  });
});
