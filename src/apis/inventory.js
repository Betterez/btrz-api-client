"use strict";

export default class Inventory {
  constructor(baseUrl, http, logger) {
    this.baseUrl = baseUrl;
    this.http = http;
    this.logger = logger;
    this.countries = {
      get(query) {
        return this.http.execute("get", `${this.baseUrl}/inventory/countries`, {query});
      }
    };
    this.event = {
      get(eventId) {
        return this.http.execute("get", `${this.baseUrl}/inventory/event/{eventId}`, {path: {eventId}});
      }
    };
    this.events = {
      get(query) {
        return this.http.execute("get", `${this.baseUrl}/inventory/events`, {query});
      }
    };
    this.fares = {
      get(query) {
        return this.http.execute("get", `${this.baseUrl}/inventory/fares`, {query});
      }
    };
    this.healthcheck = {
      get() {
        return this.http.execute("get", `${this.baseUrl}/inventory/healthcheck`);
      }
    };
    this.info = {
      get() {
        return this.http.execute("get", `${this.baseUrl}/inventory/info`);
      }
    };
    this.products = {
      get(query) {
        return this.http.execute("get", `${this.baseUrl}/inventory/products`, {query});
      }
    };
    this.promos = {
      get(query) {
        return this.http.execute("get", `${this.baseUrl}/inventory/promos`, {query});
      }
    };
    this.distanceBuckets = {
      get(query) {
        return this.http.execute("get", `${this.baseUrl}/inventory/distance-buckets`, {query});
      }
    };
    this.distanceBuckets = {
      post(body) {
        return this.http.execute("post", `${this.baseUrl}/inventory/distance-buckets`, {body});
      }
    };
    this.distanceBucket = {
      get(distanceBucketId) {
        return this.http.execute("get", `${this.baseUrl}/inventory/distance-bucket/{distanceBucketId}`, {path: {distanceBucketId}});
      }
    };
    this.distanceBucket = {
      delete(distanceBucketId) {
        return this.http.execute("delete", `${this.baseUrl}/inventory/distance-bucket/{distanceBucketId}`, {path: {distanceBucketId}});
      }
    };
    this.distanceBucket = {
      put(distanceBucketId, body) {
        return this.http.execute("put", `${this.baseUrl}/inventory/distance-bucket/{distanceBucketId}`, {path: {distanceBucketId}, body});
      }
    };
    this.stations = {
      get(query) {
        return this.http.execute("get", `${this.baseUrl}/inventory/stations`, {query});
      }
    };
    this.stations = {
      types: {
        get() {
          return this.http.execute("get", `${this.baseUrl}/inventory/stations/types`);
        }
      }
    };
    this.stations = {
      provinces: {
        get() {
          return this.http.execute("get", `${this.baseUrl}/inventory/stations/provinces`);
        }
      }
    };
    this.stations = {
      post(body) {
        return this.http.execute("post", `${this.baseUrl}/inventory/stations`, {body});
      }
    };
    this.station = {
      get(stationId) {
        return this.http.execute("get", `${this.baseUrl}/inventory/station/{stationId}`, {path: {stationId}});
      }
    };
    this.station = {
      put(stationId, body) {
        return this.http.execute("put", `${this.baseUrl}/inventory/station/{stationId}`, {path: {stationId}, body});
      }
    };
    this.ssrs = {
      get(query) {
        return this.http.execute("get", `${this.baseUrl}/inventory/ssrs`, {query});
      }
    };
    this.trip = {
      get(tripId) {
        return this.http.execute("get", `${this.baseUrl}/inventory/trip/{tripId}`, {path: {tripId}});
      }
    };
    this.trips = {
      get(query) {
        return this.http.execute("get", `${this.baseUrl}/inventory/trips`, {query});
      }
    };
    this.promo = {
      patch(promoId, body) {
        return this.http.execute("patch", `${this.baseUrl}/inventory/promo/{promoId}`, {path: {promoId}, body});
      }
    };
    this.routes = {
      prices: {
        get(query) {
          return this.http.execute("get", `${this.baseUrl}/inventory/routes/prices`, {query});
        }
      }
    };
  }
}
