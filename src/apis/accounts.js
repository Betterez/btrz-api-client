"use strict";

export default class Accounts {
  constructor(baseUrl, http, logger) {
    this.baseUrl = baseUrl;
    this.http = http;
    this.logger = logger;
    this.healthcheck = {
      get() {
        return this.http.execute("get", `${this.baseUrl}/accounts/healthcheck`);
      }
    };
    this.info = {
      get() {
        return this.http.execute("get", `${this.baseUrl}/accounts/info`);
      }
    };
    this.users = {
      post(body) {
        return this.http.execute("post", `${this.baseUrl}/accounts/users`, {body});
      }
    };
    this.applications = {
      post() {
        return this.http.execute("post", `${this.baseUrl}/accounts/applications`);
      }
    };
  }
}
