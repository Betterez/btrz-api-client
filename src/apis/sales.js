"use strict";

export default class Sales {
  constructor(baseUrl, http, logger) {
    this.baseUrl = baseUrl;
    this.http = http;
    this.logger = logger;
    this.healthcheck = {
      get() {
        return this.http.execute("get", `${this.baseUrl}/sales/healthcheck`);
      }
    };
    this.info = {
      get() {
        return this.http.execute("get", `${this.baseUrl}/sales/info`);
      }
    };
    this.paymentProviders = {
      get(query) {
        return this.http.execute("get", `${this.baseUrl}/sales/payment-providers`, {query});
      }
    };
    this.customFields = {
      get(query) {
        return this.http.execute("get", `${this.baseUrl}/sales/custom-fields`, {query});
      }
    };
    this.cart = {
      post(body) {
        return this.http.execute("post", `${this.baseUrl}/sales/cart`, {body});
      }
    };
    this.cart = {
      items: {
        post(cartId, body) {
          return this.http.execute("post", `${this.baseUrl}/sales/cart/{cartId}/items`, {path: {cartId}, body});
        }
      }
    };
    this.cart = {
      items: {
        delete(cartId, query) {
          return this.http.execute("delete", `${this.baseUrl}/sales/cart/{cartId}/items`, {path: {cartId}, query});
        }
      }
    };
    this.cart = {
      items: {
        delete(cartId, itemId, query) {
          return this.http.execute("delete", `${this.baseUrl}/sales/cart/{cartId}/items/{itemId}`, {path: {cartId, itemId}, query});
        }
      }
    };
    this.order = {
      post(body) {
        return this.http.execute("post", `${this.baseUrl}/sales/order`, {body});
      }
    };
    this.vouchers = {
      get(internalId, query) {
        return this.http.execute("get", `${this.baseUrl}/sales/vouchers/{internalId}`, {path: {internalId}, query});
      }
    };
  }
}
