export interface OperatorNotificationsListQuery {
  page?: number | string;
}

export interface OperatorNotificationsApi {
  all(opts: {
    token?: string;
    jwtToken?: string;
    query?: OperatorNotificationsListQuery;
    headers?: Record<string, string>;
  }): Promise<import("axios").AxiosResponse>;
  get(opts: {
    token?: string;
    jwtToken?: string;
    id: string;
    headers?: Record<string, string>;
  }): Promise<import("axios").AxiosResponse>;
  create(opts: {
    token?: string;
    jwtToken?: string;
    data: unknown;
    headers?: Record<string, string>;
  }): Promise<import("axios").AxiosResponse>;
  update(opts: {
    token?: string;
    jwtToken?: string;
    id: string;
    data: unknown;
    headers?: Record<string, string>;
  }): Promise<import("axios").AxiosResponse>;
  remove(opts: {
    token?: string;
    jwtToken?: string;
    id: string;
    headers?: Record<string, string>;
  }): Promise<import("axios").AxiosResponse>;
}

declare const operatorNotificationsFactory: (deps: {
  client: import("axios").AxiosInstance;
  internalAuthTokenProvider?: {getToken: () => string};
}) => OperatorNotificationsApi;

export = operatorNotificationsFactory;
