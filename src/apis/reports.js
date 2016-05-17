"use strict";

export default class Reports {
  constructor(baseUrl, http, logger) {
    this.baseUrl = baseUrl;
    this.http = http;
    this.logger = logger;
    this.healthcheck = {
      get() {
        return this.http.execute("get", `${this.baseUrl}/reports/healthcheck`);
      }
    };
    this.info = {
      get() {
        return this.http.execute("get", `${this.baseUrl}/reports/info`);
      }
    };
    this.email = {
      post(body) {
        return this.http.execute("post", `${this.baseUrl}/reports/email`, {body});
      }
    };
  }
}
