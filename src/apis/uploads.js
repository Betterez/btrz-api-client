"use strict";

export default class Uploads {
  constructor(baseUrl, http, logger) {
    this.baseUrl = baseUrl;
    this.http = http;
    this.logger = logger;
    this.healthcheck = {
      get() {
        return this.http.execute("get", `${this.baseUrl}/uploads/healthcheck`);
      }
    };
    this.info = {
      get() {
        return this.http.execute("get", `${this.baseUrl}/uploads/info`);
      }
    };
    this.dataimports = {
      get() {
        return this.http.execute("get", `${this.baseUrl}/uploads/dataimports`);
      }
    };
    this.dataimports = {
      get(dataImportId) {
        return this.http.execute("get", `${this.baseUrl}/uploads/dataimports/{dataImportId}`, {path: {dataImportId}});
      }
    };
    this.dataimports = {
      post(body) {
        return this.http.execute("post", `${this.baseUrl}/uploads/dataimports`, {body});
      }
    };
    this.images = {
      post(body) {
        return this.http.execute("post", `${this.baseUrl}/uploads/images`, {body});
      }
    };
  }
}
