"use strict";
import BtrzApi from "../src";

describe("BtrzApi", () => {
	let client = new BtrzApi({execute: function () {} }),
		expect = require("chai").expect;

	it("should expose all apis", () => {
		const apis = [
			"accounts",
			"inventory",
			"notifications",
			"operations",
			"reports",
			"sales",
			"uploads"
		];
		apis.forEach((api) => {
			expect(client[api]).to.not.be.eql(undefined);
		});
	});
});
