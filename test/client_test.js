"use strict";

describe("", () => {
	let BtrzApi = require("../index").BtrzApi,
		expect = require("chai").expect,
		Chance = require("chance").Chance,
		chance = new Chance();
	let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJfaWQiOiI1MThjMGY4N2FlMTY4NDQ4MzUwMDAwMDYiLCJhY2NvdW50SWQiOiI0Zjc0YTIzNWIwZGZmYzAyMTAwMDAwMTUiLCJ1c2VySWQiOiI0Zjc0YTIzNWIwZGZmYzAyMTAwMDAwMWIiLCJrZXkiOiI3YjE5MTE1OC1hODFlLTQ0NzYtOTMyOS1kNDE5NWJkNmRlYTEiLCJwcml2YXRlS2V5IjoiOTE0M2VjYTItNjM0ZS00Y2UyLThkZTktMWQxNzE5ZjJlNGU2IiwibmFtZSI6ImJldHRlcmV6LWFwcCIsImRlc2NyaXB0aW9uIjoiQmV0dGVyZXogTWFpbiBBcHBsaWNhdGlvbiIsImludGVybmFsIjp0cnVlLCJpYXQiOjE0NjMwNjkzOTcsImV4cCI6MTQ2MzI0MjE5NywiYXVkIjoiYmV0dGVyZXotYXBwIiwiaXNzIjoiYnRyei1hcGktYWNjb3VudHMiLCJzdWIiOiJhY2NvdW50X3VzZXJfc2lnbl9pbiJ9.6evM01zNP3gj081v61H_sVT_yZnoSoKEUkE4xh_Md3biMuGv_46TBOSydg7vU8hyoAGWEfX3woWzjVBLVMtCVQ";
	let apiClient = new BtrzApi("http://localhost:3010/", "7b191158-a81e-4476-9329-d4195bd6dea1", token);

	it("should read stations from inventory api", (done) => {
		apiClient.inventory
			.then((client) => {
				return client.stations.list();
			})
			.then((stations) => {
				done();
			})
			.catch((err) => {
				done(err);
			});
	});

	it("should reconnect if the connection fails", (done) => {
		//new BtrzApi("http://localhost:3010/", "7b191158-a81e-4476-9329-d4195bd6dea1", token)
		done();
	});

	it.skip("should post stations", (done) => {
		let payload = {
			station: {
        accountId: "4f74a235b0dffc0210000015",
        userId: "1",
        name: chance.name(),
        province: "A",
        zone: "1",
        disabled: true,
        deleted: false
			}
		};

		apiClient.inventory
			.then((client) => {
				return client.stations.create({body: payload});
			})
			.then((stations) => {
				done();
			})
			.catch((err) => {
				done(err);
			});
	});

});