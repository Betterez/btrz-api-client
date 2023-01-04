const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;
const providerId = process.env.PROVIDER_ID;
const giftcertificateId = process.env.GIFT_CERTIFICATE_ID;

const api = require("./../../../src/client").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    inventory: (baseUrl) => `${baseUrl}/inventory`
  }
});

const { matchHeaders, statusCode } = require("./../../test-integration-helpers");

function randomText() {
  return (Math.random() + 1).toString(36).substring(7);
}

describe("inventory/gift-certificate-definitions", () => {
  it("should list gift certificate definitions for the given provider id", () => {
    const query = {providerId};
    return api.inventory.giftCertificateDefinitions.all({ token, query })
      .then(matchHeaders('x-api-key'))
      .then(statusCode(200));
  });

  it("should get one gift certificate definition for the given provider id having the right cert id", () => {
    const query = {providerId};
    return api.inventory.giftCertificateDefinitions.get({token, query, giftcertificateId})
      .then(matchHeaders("x-api-key"))
      .then(statusCode(200));
  });

  it("should create a new gift certificate definition", () => {
    const query = {providerId};
    const giftcertificate = {
      name: randomText(),
      description: randomText(),
      savings: 0,
      price: 0,
      value: 0,
      disabled: true,
      taxable: false
    };
    return api.inventory.giftCertificateDefinitions.create({token, query, jwtToken, giftcertificate})
      .then(matchHeaders("x-api-key"))
      .then(statusCode(200));
  });

  it("should update an existing gift certificate definition", () => {
    const query = {providerId};
    const giftcertificate = {
      name: randomText(),
      description: randomText(),
      savings: 50,
      price: 10000,
      value: 20000,
      disabled: true,
      taxable: false
    };
    return api.inventory.giftCertificateDefinitions.update({token, query, jwtToken, giftcertificate, giftcertificateId})
      .then(matchHeaders("x-api-key"))
      .then(statusCode(200));
  });

  it("should delete an existing gift certificate definition", () => {
    const query = {providerId};
    return api.inventory.giftCertificateDefinitions.remove({token, query, jwtToken, giftcertificateId})
      .then(matchHeaders("x-api-key"))
      .then(statusCode(200));
  });
});
