"use strict";
let Swagger = require('swagger-client');
let http = require("./http");

class BtrzApi {

	constructor(domain, apiKey, token, logger) {
		this.inventory = new Swagger({url: `${domain}inventory/api-docs`, usePromise: true })
			.then((client) => {
        client.clientAuthorizations.add("apiKey", new Swagger.ApiKeyAuthorization("X-API-KEY", apiKey, "header"));
        client.clientAuthorizations.add("token", new Swagger.ApiKeyAuthorization("authorization", `Bearer ${token}`, "header"));
        return client;
    	})
    	.catch((err) => {
        console.log("in the constructor: ", err);
    	});
	}

	help() {
		return Promise.resolve("inventory");
	}
}

exports.BtrzApi = BtrzApi;