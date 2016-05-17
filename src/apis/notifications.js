"use strict";

export default class Notifications {
  constructor(baseUrl, http, logger) {
    this.baseUrl = baseUrl;
    this.http = http;
    this.logger = logger;
    this.healthcheck = {
      get() {
        return this.http.execute("get", `${this.baseUrl}/notifications/healthcheck`);
      }
    };
    this.info = {
      get() {
        return this.http.execute("get", `${this.baseUrl}/notifications/info`);
      }
    };
    this.pdfs = {
      post(body) {
        return this.http.execute("post", `${this.baseUrl}/notifications/pdfs`, {body});
      }
    };
    this.emails = {
      post(body) {
        return this.http.execute("post", `${this.baseUrl}/notifications/emails`, {body});
      }
    };
  }
}
