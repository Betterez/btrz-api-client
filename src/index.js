"use strict";
import apis from "./apis";

export default class BtrzApi {

  constructor(baseUrl, transport, logger) {
    this.baseUrl = baseUrl;
    this.transport = transport;
    this.logger = logger;
    for (const api in apis) {
      this[api] = new apis[api](this.baseUrl, this.transport, this.logger);
    }
  }
}
