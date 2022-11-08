/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { Business, User } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Api<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Businesses
   * @name BusinessesList
   * @request GET:/api/Businesses
   */
  businessesList = (params: RequestParams = {}) =>
    this.request<Business[], any>({
      path: `/api/Businesses`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Businesses
   * @name BusinessesCreate
   * @request POST:/api/Businesses
   */
  businessesCreate = (data: Business[], params: RequestParams = {}) =>
    this.request<Business, any>({
      path: `/api/Businesses`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Businesses
   * @name BusinessesDetail
   * @request GET:/api/Businesses/{id}
   */
  businessesDetail = (id: number, params: RequestParams = {}) =>
    this.request<Business, any>({
      path: `/api/Businesses/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Businesses
   * @name BusinessesUpdate
   * @request PUT:/api/Businesses/{id}
   */
  businessesUpdate = (id: number, data: Business, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Businesses/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Businesses
   * @name BusinessesDelete
   * @request DELETE:/api/Businesses/{id}
   */
  businessesDelete = (id: number, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Businesses/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UsersList
   * @request GET:/api/Users
   */
  usersList = (params: RequestParams = {}) =>
    this.request<User[], any>({
      path: `/api/Users`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UsersCreate
   * @request POST:/api/Users
   */
  usersCreate = (data: User, params: RequestParams = {}) =>
    this.request<User, any>({
      path: `/api/Users`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UsersDetail
   * @request GET:/api/Users/{id}
   */
  usersDetail = (id: number, params: RequestParams = {}) =>
    this.request<User, any>({
      path: `/api/Users/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UsersUpdate
   * @request PUT:/api/Users/{id}
   */
  usersUpdate = (id: number, data: User, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Users/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UsersDelete
   * @request DELETE:/api/Users/{id}
   */
  usersDelete = (id: number, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Users/${id}`,
      method: "DELETE",
      ...params,
    });
}
