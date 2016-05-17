"use strict";

export default class Operations {
  constructor(baseUrl, http, logger) {
    this.baseUrl = baseUrl;
    this.http = http;
    this.logger = logger;
    this.healthcheck = {
      get() {
        return this.http.execute("get", `${this.baseUrl}/operations/healthcheck`);
      }
    };
    this.info = {
      get() {
        return this.http.execute("get", `${this.baseUrl}/operations/info`);
      }
    };
  }
}
