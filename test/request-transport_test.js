"use strict";

import Transport from "../src/request-transport.js";

describe.only("RequestTransport", () => {
  const nock = require("nock"),
    expect = require("chai").expect,
    Chance = require("chance").Chance,
    chance = new Chance(),
    baseUrl = "http://www.example.com";

  it("should send a request to the baseUrl with the X-API-KEY", (done) => {
    const expectation = chance.hash(),
      headers = {"x-api-key": expectation},
      client = new Transport({headers});

    nock(baseUrl, {
      reqheaders: {
        "X-API-KEY": expectation
      }
    })
    .get("/resource2")
    .reply(200, expectation);

    client.get(`${baseUrl}/resource2`)
      .then((result) => {
        expect(result.body).to.be.eql(expectation);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it("should send a request to the baseUrl with the token", (done) => {
    const apiKey = chance.hash(),
      token = chance.hash(),
      headers = {"x-api-key": apiKey, "auth": {"bearer": token}},
      client = new Transport({headers});

    nock.emitter.on("no match", (req) => {
      expect(req._headers.auth.bearer).to.be.eql(token);
      nock.emitter.removeAllListeners("no match");
      done();
    });

    nock(baseUrl, {
      reqheaders: {
        "X-API-KEY": apiKey,
        auth: {
          bearer: token
        }
      }
    })
    .get("/resource")
    .reply(200);

    client.get(`${baseUrl}/resource`);
  });
});
