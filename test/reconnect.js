"use strict";

let BtrzApi = require("../index").BtrzApi,
	apiClient = new BtrzApi("http://localhost:3010/", "7b191158-a81e-4476-9329-d4195bd6dea1");

// setInterval(function () {
// 	apiClient.inventory
// 		.then((client) => {
// 			return client.stations.list();
// 		})
// 		.then((stations) => {
// 			console.log("success");
// 		});
// }, 0.5*1000);