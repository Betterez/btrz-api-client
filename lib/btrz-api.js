(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("btrz-api", [], factory);
	else if(typeof exports === 'object')
		exports["btrz-api"] = factory();
	else
		root["btrz-api"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _apis = __webpack_require__(1);
	
	var _apis2 = _interopRequireDefault(_apis);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var BtrzApi = function BtrzApi(baseUrl, transport, logger) {
	  _classCallCheck(this, BtrzApi);
	
	  this.baseUrl = baseUrl;
	  this.transport = transport;
	  this.logger = logger;
	  for (var api in _apis2.default) {
	    this[api] = new _apis2.default[api](this.baseUrl, this.transport, this.logger);
	  }
	};
	
	exports.default = BtrzApi;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	
	  accounts: __webpack_require__(2),
	  inventory: __webpack_require__(3),
	  notifications: __webpack_require__(4),
	  operations: __webpack_require__(5),
	  reports: __webpack_require__(6),
	  sales: __webpack_require__(7),
	  uploads: __webpack_require__(8)
	};
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Accounts = function Accounts(baseUrl, http, logger) {
	  _classCallCheck(this, Accounts);
	
	  this.baseUrl = baseUrl;
	  this.http = http;
	  this.logger = logger;
	  this.healthcheck = {
	    get: function get() {
	      return this.http.execute("get", this.baseUrl + "/accounts/healthcheck");
	    }
	  };
	  this.info = {
	    get: function get() {
	      return this.http.execute("get", this.baseUrl + "/accounts/info");
	    }
	  };
	  this.users = {
	    post: function post(body) {
	      return this.http.execute("post", this.baseUrl + "/accounts/users", { body: body });
	    }
	  };
	  this.applications = {
	    post: function post() {
	      return this.http.execute("post", this.baseUrl + "/accounts/applications");
	    }
	  };
	};
	
	exports.default = Accounts;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Inventory = function Inventory(baseUrl, http, logger) {
	  _classCallCheck(this, Inventory);
	
	  this.baseUrl = baseUrl;
	  this.http = http;
	  this.logger = logger;
	  this.countries = {
	    get: function get(query) {
	      return this.http.execute("get", this.baseUrl + "/inventory/countries", { query: query });
	    }
	  };
	  this.event = {
	    get: function get(eventId) {
	      return this.http.execute("get", this.baseUrl + "/inventory/event/{eventId}", { path: { eventId: eventId } });
	    }
	  };
	  this.events = {
	    get: function get(query) {
	      return this.http.execute("get", this.baseUrl + "/inventory/events", { query: query });
	    }
	  };
	  this.fares = {
	    get: function get(query) {
	      return this.http.execute("get", this.baseUrl + "/inventory/fares", { query: query });
	    }
	  };
	  this.healthcheck = {
	    get: function get() {
	      return this.http.execute("get", this.baseUrl + "/inventory/healthcheck");
	    }
	  };
	  this.info = {
	    get: function get() {
	      return this.http.execute("get", this.baseUrl + "/inventory/info");
	    }
	  };
	  this.products = {
	    get: function get(query) {
	      return this.http.execute("get", this.baseUrl + "/inventory/products", { query: query });
	    }
	  };
	  this.promos = {
	    get: function get(query) {
	      return this.http.execute("get", this.baseUrl + "/inventory/promos", { query: query });
	    }
	  };
	  this.distanceBuckets = {
	    get: function get(query) {
	      return this.http.execute("get", this.baseUrl + "/inventory/distance-buckets", { query: query });
	    }
	  };
	  this.distanceBuckets = {
	    post: function post(body) {
	      return this.http.execute("post", this.baseUrl + "/inventory/distance-buckets", { body: body });
	    }
	  };
	  this.distanceBucket = {
	    get: function get(distanceBucketId) {
	      return this.http.execute("get", this.baseUrl + "/inventory/distance-bucket/{distanceBucketId}", { path: { distanceBucketId: distanceBucketId } });
	    }
	  };
	  this.distanceBucket = {
	    delete: function _delete(distanceBucketId) {
	      return this.http.execute("delete", this.baseUrl + "/inventory/distance-bucket/{distanceBucketId}", { path: { distanceBucketId: distanceBucketId } });
	    }
	  };
	  this.distanceBucket = {
	    put: function put(distanceBucketId, body) {
	      return this.http.execute("put", this.baseUrl + "/inventory/distance-bucket/{distanceBucketId}", { path: { distanceBucketId: distanceBucketId }, body: body });
	    }
	  };
	  this.stations = {
	    get: function get(query) {
	      return this.http.execute("get", this.baseUrl + "/inventory/stations", { query: query });
	    }
	  };
	  this.stations = {
	    types: {
	      get: function get() {
	        return this.http.execute("get", this.baseUrl + "/inventory/stations/types");
	      }
	    }
	  };
	  this.stations = {
	    provinces: {
	      get: function get() {
	        return this.http.execute("get", this.baseUrl + "/inventory/stations/provinces");
	      }
	    }
	  };
	  this.stations = {
	    post: function post(body) {
	      return this.http.execute("post", this.baseUrl + "/inventory/stations", { body: body });
	    }
	  };
	  this.station = {
	    get: function get(stationId) {
	      return this.http.execute("get", this.baseUrl + "/inventory/station/{stationId}", { path: { stationId: stationId } });
	    }
	  };
	  this.station = {
	    put: function put(stationId, body) {
	      return this.http.execute("put", this.baseUrl + "/inventory/station/{stationId}", { path: { stationId: stationId }, body: body });
	    }
	  };
	  this.ssrs = {
	    get: function get(query) {
	      return this.http.execute("get", this.baseUrl + "/inventory/ssrs", { query: query });
	    }
	  };
	  this.trip = {
	    get: function get(tripId) {
	      return this.http.execute("get", this.baseUrl + "/inventory/trip/{tripId}", { path: { tripId: tripId } });
	    }
	  };
	  this.trips = {
	    get: function get(query) {
	      return this.http.execute("get", this.baseUrl + "/inventory/trips", { query: query });
	    }
	  };
	  this.promo = {
	    patch: function patch(promoId, body) {
	      return this.http.execute("patch", this.baseUrl + "/inventory/promo/{promoId}", { path: { promoId: promoId }, body: body });
	    }
	  };
	  this.routes = {
	    prices: {
	      get: function get(query) {
	        return this.http.execute("get", this.baseUrl + "/inventory/routes/prices", { query: query });
	      }
	    }
	  };
	};
	
	exports.default = Inventory;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Notifications = function Notifications(baseUrl, http, logger) {
	  _classCallCheck(this, Notifications);
	
	  this.baseUrl = baseUrl;
	  this.http = http;
	  this.logger = logger;
	  this.healthcheck = {
	    get: function get() {
	      return this.http.execute("get", this.baseUrl + "/notifications/healthcheck");
	    }
	  };
	  this.info = {
	    get: function get() {
	      return this.http.execute("get", this.baseUrl + "/notifications/info");
	    }
	  };
	  this.pdfs = {
	    post: function post(body) {
	      return this.http.execute("post", this.baseUrl + "/notifications/pdfs", { body: body });
	    }
	  };
	  this.emails = {
	    post: function post(body) {
	      return this.http.execute("post", this.baseUrl + "/notifications/emails", { body: body });
	    }
	  };
	};
	
	exports.default = Notifications;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Operations = function Operations(baseUrl, http, logger) {
	  _classCallCheck(this, Operations);
	
	  this.baseUrl = baseUrl;
	  this.http = http;
	  this.logger = logger;
	  this.healthcheck = {
	    get: function get() {
	      return this.http.execute("get", this.baseUrl + "/operations/healthcheck");
	    }
	  };
	  this.info = {
	    get: function get() {
	      return this.http.execute("get", this.baseUrl + "/operations/info");
	    }
	  };
	};
	
	exports.default = Operations;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Reports = function Reports(baseUrl, http, logger) {
	  _classCallCheck(this, Reports);
	
	  this.baseUrl = baseUrl;
	  this.http = http;
	  this.logger = logger;
	  this.healthcheck = {
	    get: function get() {
	      return this.http.execute("get", this.baseUrl + "/reports/healthcheck");
	    }
	  };
	  this.info = {
	    get: function get() {
	      return this.http.execute("get", this.baseUrl + "/reports/info");
	    }
	  };
	  this.email = {
	    post: function post(body) {
	      return this.http.execute("post", this.baseUrl + "/reports/email", { body: body });
	    }
	  };
	};
	
	exports.default = Reports;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Sales = function Sales(baseUrl, http, logger) {
	  _classCallCheck(this, Sales);
	
	  this.baseUrl = baseUrl;
	  this.http = http;
	  this.logger = logger;
	  this.healthcheck = {
	    get: function get() {
	      return this.http.execute("get", this.baseUrl + "/sales/healthcheck");
	    }
	  };
	  this.info = {
	    get: function get() {
	      return this.http.execute("get", this.baseUrl + "/sales/info");
	    }
	  };
	  this.paymentProviders = {
	    get: function get(query) {
	      return this.http.execute("get", this.baseUrl + "/sales/payment-providers", { query: query });
	    }
	  };
	  this.customFields = {
	    get: function get(query) {
	      return this.http.execute("get", this.baseUrl + "/sales/custom-fields", { query: query });
	    }
	  };
	  this.cart = {
	    post: function post(body) {
	      return this.http.execute("post", this.baseUrl + "/sales/cart", { body: body });
	    }
	  };
	  this.cart = {
	    items: {
	      post: function post(cartId, body) {
	        return this.http.execute("post", this.baseUrl + "/sales/cart/{cartId}/items", { path: { cartId: cartId }, body: body });
	      }
	    }
	  };
	  this.cart = {
	    items: {
	      delete: function _delete(cartId, query) {
	        return this.http.execute("delete", this.baseUrl + "/sales/cart/{cartId}/items", { path: { cartId: cartId }, query: query });
	      }
	    }
	  };
	  this.cart = {
	    items: {
	      delete: function _delete(cartId, itemId, query) {
	        return this.http.execute("delete", this.baseUrl + "/sales/cart/{cartId}/items/{itemId}", { path: { cartId: cartId, itemId: itemId }, query: query });
	      }
	    }
	  };
	  this.order = {
	    post: function post(body) {
	      return this.http.execute("post", this.baseUrl + "/sales/order", { body: body });
	    }
	  };
	  this.vouchers = {
	    get: function get(internalId, query) {
	      return this.http.execute("get", this.baseUrl + "/sales/vouchers/{internalId}", { path: { internalId: internalId }, query: query });
	    }
	  };
	};
	
	exports.default = Sales;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Uploads = function Uploads(baseUrl, http, logger) {
	  _classCallCheck(this, Uploads);
	
	  this.baseUrl = baseUrl;
	  this.http = http;
	  this.logger = logger;
	  this.healthcheck = {
	    get: function get() {
	      return this.http.execute("get", this.baseUrl + "/uploads/healthcheck");
	    }
	  };
	  this.info = {
	    get: function get() {
	      return this.http.execute("get", this.baseUrl + "/uploads/info");
	    }
	  };
	  this.dataimports = {
	    get: function get() {
	      return this.http.execute("get", this.baseUrl + "/uploads/dataimports");
	    }
	  };
	  this.dataimports = {
	    get: function get(dataImportId) {
	      return this.http.execute("get", this.baseUrl + "/uploads/dataimports/{dataImportId}", { path: { dataImportId: dataImportId } });
	    }
	  };
	  this.dataimports = {
	    post: function post(body) {
	      return this.http.execute("post", this.baseUrl + "/uploads/dataimports", { body: body });
	    }
	  };
	  this.images = {
	    post: function post(body) {
	      return this.http.execute("post", this.baseUrl + "/uploads/images", { body: body });
	    }
	  };
	};
	
	exports.default = Uploads;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=btrz-api.js.map