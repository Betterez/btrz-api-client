"use strict";
import http from "./request-p.js";

export default class RequestTransport {

  constructor(options) {
    this.options = options;
  }

  get(url) {
    return http.execute(url, this.options);
  }
}
