/*
 * Copyright © 2018 FINBOURNE TECHNOLOGY LTD
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

import { ServiceClient, ServiceClientOptions, ServiceCallback, HttpOperationResponse, ServiceClientCredentials } from 'ms-rest';
import * as models from "./models";

export default class LUSIDAPI extends ServiceClient {
  /**
   * @class
   * Initializes a new instance of the LUSIDAPI class.
   * @constructor
   *
   * @param {credentials} credentials - Subscription credentials which uniquely identify client subscription.
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   */
  constructor(credentials: ServiceClientCredentials, baseUri?: string, options?: ServiceClientOptions);

  credentials: ServiceClientCredentials;


  /**
   * @summary Clears the entity caches on the instance that serves this request
   * only.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ClearEntityCachesDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  clearEntityCachesWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ClearEntityCachesDto>>;

  /**
   * @summary Clears the entity caches on the instance that serves this request
   * only.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ClearEntityCachesDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ClearEntityCachesDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ClearEntityCachesDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  clearEntityCaches(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.ClearEntityCachesDto>;
  clearEntityCaches(callback: ServiceCallback<models.ClearEntityCachesDto>): void;
  clearEntityCaches(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ClearEntityCachesDto>): void;


  /**
   * @summary Aggregate data in a group hierarchy
   *
   * @param {string} scope
   *
   * @param {string} groupCode
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {string} [options.request.recipeScope]
   *
   * @param {string} [options.request.recipeKey]
   *
   * @param {boolean} [options.request.loadReferencePortfolio]
   *
   * @param {date} [options.request.asAt] The asAt date to use
   *
   * @param {date} [options.request.effectiveAt]
   *
   * @param {array} [options.request.metrics]
   *
   * @param {array} [options.request.groupBy]
   *
   * @param {array} [options.request.filters]
   *
   * @param {number} [options.request.limit]
   *
   * @param {string} [options.request.sort]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ListAggregationResponse>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getAggregationByGroupWithHttpOperationResponse(scope: string, groupCode: string, options?: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ListAggregationResponse>>;

  /**
   * @summary Aggregate data in a group hierarchy
   *
   * @param {string} scope
   *
   * @param {string} groupCode
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {string} [options.request.recipeScope]
   *
   * @param {string} [options.request.recipeKey]
   *
   * @param {boolean} [options.request.loadReferencePortfolio]
   *
   * @param {date} [options.request.asAt] The asAt date to use
   *
   * @param {date} [options.request.effectiveAt]
   *
   * @param {array} [options.request.metrics]
   *
   * @param {array} [options.request.groupBy]
   *
   * @param {array} [options.request.filters]
   *
   * @param {number} [options.request.limit]
   *
   * @param {string} [options.request.sort]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ListAggregationResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ListAggregationResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ListAggregationResponse} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getAggregationByGroup(scope: string, groupCode: string, options?: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }): Promise<models.ListAggregationResponse>;
  getAggregationByGroup(scope: string, groupCode: string, callback: ServiceCallback<models.ListAggregationResponse>): void;
  getAggregationByGroup(scope: string, groupCode: string, options: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ListAggregationResponse>): void;


  /**
   * @summary Aggregation request data in a group hierarchy into a data tree
   *
   * @param {string} scope
   *
   * @param {string} groupCode
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {string} [options.request.recipeScope]
   *
   * @param {string} [options.request.recipeKey]
   *
   * @param {boolean} [options.request.loadReferencePortfolio]
   *
   * @param {date} [options.request.asAt] The asAt date to use
   *
   * @param {date} [options.request.effectiveAt]
   *
   * @param {array} [options.request.metrics]
   *
   * @param {array} [options.request.groupBy]
   *
   * @param {array} [options.request.filters]
   *
   * @param {number} [options.request.limit]
   *
   * @param {string} [options.request.sort]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<NestedAggregationResponse>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getNestedAggregationByGroupWithHttpOperationResponse(scope: string, groupCode: string, options?: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.NestedAggregationResponse>>;

  /**
   * @summary Aggregation request data in a group hierarchy into a data tree
   *
   * @param {string} scope
   *
   * @param {string} groupCode
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {string} [options.request.recipeScope]
   *
   * @param {string} [options.request.recipeKey]
   *
   * @param {boolean} [options.request.loadReferencePortfolio]
   *
   * @param {date} [options.request.asAt] The asAt date to use
   *
   * @param {date} [options.request.effectiveAt]
   *
   * @param {array} [options.request.metrics]
   *
   * @param {array} [options.request.groupBy]
   *
   * @param {array} [options.request.filters]
   *
   * @param {number} [options.request.limit]
   *
   * @param {string} [options.request.sort]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {NestedAggregationResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {NestedAggregationResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link NestedAggregationResponse} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getNestedAggregationByGroup(scope: string, groupCode: string, options?: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }): Promise<models.NestedAggregationResponse>;
  getNestedAggregationByGroup(scope: string, groupCode: string, callback: ServiceCallback<models.NestedAggregationResponse>): void;
  getNestedAggregationByGroup(scope: string, groupCode: string, options: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.NestedAggregationResponse>): void;


  /**
   * @summary Aggregate data in a portfolio
   *
   * @param {string} scope
   *
   * @param {string} portfolioCode
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {string} [options.request.recipeScope]
   *
   * @param {string} [options.request.recipeKey]
   *
   * @param {boolean} [options.request.loadReferencePortfolio]
   *
   * @param {date} [options.request.asAt] The asAt date to use
   *
   * @param {date} [options.request.effectiveAt]
   *
   * @param {array} [options.request.metrics]
   *
   * @param {array} [options.request.groupBy]
   *
   * @param {array} [options.request.filters]
   *
   * @param {number} [options.request.limit]
   *
   * @param {string} [options.request.sort]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ListAggregationResponse>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getAggregationByPortfolioWithHttpOperationResponse(scope: string, portfolioCode: string, options?: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ListAggregationResponse>>;

  /**
   * @summary Aggregate data in a portfolio
   *
   * @param {string} scope
   *
   * @param {string} portfolioCode
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {string} [options.request.recipeScope]
   *
   * @param {string} [options.request.recipeKey]
   *
   * @param {boolean} [options.request.loadReferencePortfolio]
   *
   * @param {date} [options.request.asAt] The asAt date to use
   *
   * @param {date} [options.request.effectiveAt]
   *
   * @param {array} [options.request.metrics]
   *
   * @param {array} [options.request.groupBy]
   *
   * @param {array} [options.request.filters]
   *
   * @param {number} [options.request.limit]
   *
   * @param {string} [options.request.sort]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ListAggregationResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ListAggregationResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ListAggregationResponse} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getAggregationByPortfolio(scope: string, portfolioCode: string, options?: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }): Promise<models.ListAggregationResponse>;
  getAggregationByPortfolio(scope: string, portfolioCode: string, callback: ServiceCallback<models.ListAggregationResponse>): void;
  getAggregationByPortfolio(scope: string, portfolioCode: string, options: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ListAggregationResponse>): void;


  /**
   * @summary Aggregation request data in a portfolio into a data tree
   *
   * @param {string} scope
   *
   * @param {string} portfolioCode
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {string} [options.request.recipeScope]
   *
   * @param {string} [options.request.recipeKey]
   *
   * @param {boolean} [options.request.loadReferencePortfolio]
   *
   * @param {date} [options.request.asAt] The asAt date to use
   *
   * @param {date} [options.request.effectiveAt]
   *
   * @param {array} [options.request.metrics]
   *
   * @param {array} [options.request.groupBy]
   *
   * @param {array} [options.request.filters]
   *
   * @param {number} [options.request.limit]
   *
   * @param {string} [options.request.sort]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<NestedAggregationResponse>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getNestedAggregationByPortfolioWithHttpOperationResponse(scope: string, portfolioCode: string, options?: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.NestedAggregationResponse>>;

  /**
   * @summary Aggregation request data in a portfolio into a data tree
   *
   * @param {string} scope
   *
   * @param {string} portfolioCode
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {string} [options.request.recipeScope]
   *
   * @param {string} [options.request.recipeKey]
   *
   * @param {boolean} [options.request.loadReferencePortfolio]
   *
   * @param {date} [options.request.asAt] The asAt date to use
   *
   * @param {date} [options.request.effectiveAt]
   *
   * @param {array} [options.request.metrics]
   *
   * @param {array} [options.request.groupBy]
   *
   * @param {array} [options.request.filters]
   *
   * @param {number} [options.request.limit]
   *
   * @param {string} [options.request.sort]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {NestedAggregationResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {NestedAggregationResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link NestedAggregationResponse} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getNestedAggregationByPortfolio(scope: string, portfolioCode: string, options?: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }): Promise<models.NestedAggregationResponse>;
  getNestedAggregationByPortfolio(scope: string, portfolioCode: string, callback: ServiceCallback<models.NestedAggregationResponse>): void;
  getNestedAggregationByPortfolio(scope: string, portfolioCode: string, options: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.NestedAggregationResponse>): void;


  /**
   * @summary Aggregate data from a result set
   *
   * @param {string} scope
   *
   * @param {string} resultsKey
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {string} [options.request.recipeScope]
   *
   * @param {string} [options.request.recipeKey]
   *
   * @param {boolean} [options.request.loadReferencePortfolio]
   *
   * @param {date} [options.request.asAt] The asAt date to use
   *
   * @param {date} [options.request.effectiveAt]
   *
   * @param {array} [options.request.metrics]
   *
   * @param {array} [options.request.groupBy]
   *
   * @param {array} [options.request.filters]
   *
   * @param {number} [options.request.limit]
   *
   * @param {string} [options.request.sort]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ListAggregationResponse>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getAggregationByResultSetWithHttpOperationResponse(scope: string, resultsKey: string, options?: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ListAggregationResponse>>;

  /**
   * @summary Aggregate data from a result set
   *
   * @param {string} scope
   *
   * @param {string} resultsKey
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {string} [options.request.recipeScope]
   *
   * @param {string} [options.request.recipeKey]
   *
   * @param {boolean} [options.request.loadReferencePortfolio]
   *
   * @param {date} [options.request.asAt] The asAt date to use
   *
   * @param {date} [options.request.effectiveAt]
   *
   * @param {array} [options.request.metrics]
   *
   * @param {array} [options.request.groupBy]
   *
   * @param {array} [options.request.filters]
   *
   * @param {number} [options.request.limit]
   *
   * @param {string} [options.request.sort]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ListAggregationResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ListAggregationResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ListAggregationResponse} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getAggregationByResultSet(scope: string, resultsKey: string, options?: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }): Promise<models.ListAggregationResponse>;
  getAggregationByResultSet(scope: string, resultsKey: string, callback: ServiceCallback<models.ListAggregationResponse>): void;
  getAggregationByResultSet(scope: string, resultsKey: string, options: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ListAggregationResponse>): void;


  /**
   * @summary Aggregate data from a result set into a nested structure
   *
   * @param {string} scope
   *
   * @param {string} resultsKey
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {string} [options.request.recipeScope]
   *
   * @param {string} [options.request.recipeKey]
   *
   * @param {boolean} [options.request.loadReferencePortfolio]
   *
   * @param {date} [options.request.asAt] The asAt date to use
   *
   * @param {date} [options.request.effectiveAt]
   *
   * @param {array} [options.request.metrics]
   *
   * @param {array} [options.request.groupBy]
   *
   * @param {array} [options.request.filters]
   *
   * @param {number} [options.request.limit]
   *
   * @param {string} [options.request.sort]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<NestedAggregationResponse>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getNestedAggregationByResultSetWithHttpOperationResponse(scope: string, resultsKey: string, options?: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.NestedAggregationResponse>>;

  /**
   * @summary Aggregate data from a result set into a nested structure
   *
   * @param {string} scope
   *
   * @param {string} resultsKey
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {string} [options.request.recipeScope]
   *
   * @param {string} [options.request.recipeKey]
   *
   * @param {boolean} [options.request.loadReferencePortfolio]
   *
   * @param {date} [options.request.asAt] The asAt date to use
   *
   * @param {date} [options.request.effectiveAt]
   *
   * @param {array} [options.request.metrics]
   *
   * @param {array} [options.request.groupBy]
   *
   * @param {array} [options.request.filters]
   *
   * @param {number} [options.request.limit]
   *
   * @param {string} [options.request.sort]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {NestedAggregationResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {NestedAggregationResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link NestedAggregationResponse} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getNestedAggregationByResultSet(scope: string, resultsKey: string, options?: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }): Promise<models.NestedAggregationResponse>;
  getNestedAggregationByResultSet(scope: string, resultsKey: string, callback: ServiceCallback<models.NestedAggregationResponse>): void;
  getNestedAggregationByResultSet(scope: string, resultsKey: string, options: { request? : models.AggregationRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.NestedAggregationResponse>): void;


  /**
   * @summary List all analytic stores in client
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfAnalyticStoreKeyDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  listAnalyticStoresWithHttpOperationResponse(options?: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfAnalyticStoreKeyDto>>;

  /**
   * @summary List all analytic stores in client
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfAnalyticStoreKeyDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfAnalyticStoreKeyDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfAnalyticStoreKeyDto} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  listAnalyticStores(options?: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfAnalyticStoreKeyDto>;
  listAnalyticStores(callback: ServiceCallback<models.ResourceListOfAnalyticStoreKeyDto>): void;
  listAnalyticStores(options: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfAnalyticStoreKeyDto>): void;


  /**
   * @summary Create a new analytic store for the given scope for the given date
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] A valid and fully populated analytic store
   * creation request
   *
   * @param {string} [options.request.scope]
   *
   * @param {date} [options.request.date]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<AnalyticStoreDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  createAnalyticStoreWithHttpOperationResponse(options?: { request? : models.CreateAnalyticStoreRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.AnalyticStoreDto>>;

  /**
   * @summary Create a new analytic store for the given scope for the given date
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] A valid and fully populated analytic store
   * creation request
   *
   * @param {string} [options.request.scope]
   *
   * @param {date} [options.request.date]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {AnalyticStoreDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {AnalyticStoreDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link AnalyticStoreDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  createAnalyticStore(options?: { request? : models.CreateAnalyticStoreRequest, customHeaders? : { [headerName: string]: string; } }): Promise<models.AnalyticStoreDto>;
  createAnalyticStore(callback: ServiceCallback<models.AnalyticStoreDto>): void;
  createAnalyticStore(options: { request? : models.CreateAnalyticStoreRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AnalyticStoreDto>): void;


  /**
   * @summary Get an analytic store
   *
   * @param {string} scope The analytics data scope
   *
   * @param {number} year The year component of the date for the data in the
   * scope
   *
   * @param {number} month The month component of the date for the data in the
   * scope
   *
   * @param {number} day The day component of the date for the data in the scope
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt] AsAt date
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<AnalyticStoreDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getAnalyticStoreWithHttpOperationResponse(scope: string, year: number, month: number, day: number, options?: { asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.AnalyticStoreDto>>;

  /**
   * @summary Get an analytic store
   *
   * @param {string} scope The analytics data scope
   *
   * @param {number} year The year component of the date for the data in the
   * scope
   *
   * @param {number} month The month component of the date for the data in the
   * scope
   *
   * @param {number} day The day component of the date for the data in the scope
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt] AsAt date
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {AnalyticStoreDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {AnalyticStoreDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link AnalyticStoreDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getAnalyticStore(scope: string, year: number, month: number, day: number, options?: { asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<models.AnalyticStoreDto>;
  getAnalyticStore(scope: string, year: number, month: number, day: number, callback: ServiceCallback<models.AnalyticStoreDto>): void;
  getAnalyticStore(scope: string, year: number, month: number, day: number, options: { asAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AnalyticStoreDto>): void;


  /**
   * @summary Create a new analytic store for the given scope for the given date
   *
   * @param {string} scope The analytics data scope
   *
   * @param {number} year The year component of the date for the data in the
   * scope
   *
   * @param {number} month The month component of the date for the data in the
   * scope
   *
   * @param {number} day The day component of the date for the data in the scope
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<DeletedEntityResponse>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  deleteAnalyticStoreWithHttpOperationResponse(scope: string, year: number, month: number, day: number, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.DeletedEntityResponse>>;

  /**
   * @summary Create a new analytic store for the given scope for the given date
   *
   * @param {string} scope The analytics data scope
   *
   * @param {number} year The year component of the date for the data in the
   * scope
   *
   * @param {number} month The month component of the date for the data in the
   * scope
   *
   * @param {number} day The day component of the date for the data in the scope
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {DeletedEntityResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deleteAnalyticStore(scope: string, year: number, month: number, day: number, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.DeletedEntityResponse>;
  deleteAnalyticStore(scope: string, year: number, month: number, day: number, callback: ServiceCallback<models.DeletedEntityResponse>): void;
  deleteAnalyticStore(scope: string, year: number, month: number, day: number, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DeletedEntityResponse>): void;


  /**
   * @summary Insert analytics into an existing analytic store for the given
   * scope and date.
   *
   * @param {string} scope The analytics data scope
   *
   * @param {number} year The year component of the date for the data in the
   * scope
   *
   * @param {number} month The month component of the date for the data in the
   * scope
   *
   * @param {number} day The day component of the date for the data in the scope
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.data]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<AnalyticStoreDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  insertAnalyticsWithHttpOperationResponse(scope: string, year: number, month: number, day: number, options?: { data? : models.SecurityAnalyticDataDto[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.AnalyticStoreDto>>;

  /**
   * @summary Insert analytics into an existing analytic store for the given
   * scope and date.
   *
   * @param {string} scope The analytics data scope
   *
   * @param {number} year The year component of the date for the data in the
   * scope
   *
   * @param {number} month The month component of the date for the data in the
   * scope
   *
   * @param {number} day The day component of the date for the data in the scope
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.data]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {AnalyticStoreDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {AnalyticStoreDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link AnalyticStoreDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  insertAnalytics(scope: string, year: number, month: number, day: number, options?: { data? : models.SecurityAnalyticDataDto[], customHeaders? : { [headerName: string]: string; } }): Promise<models.AnalyticStoreDto>;
  insertAnalytics(scope: string, year: number, month: number, day: number, callback: ServiceCallback<models.AnalyticStoreDto>): void;
  insertAnalytics(scope: string, year: number, month: number, day: number, options: { data? : models.SecurityAnalyticDataDto[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AnalyticStoreDto>): void;


  /**
   * @summary Upsert Analytics
   *
   * @param {string} scope Scope of the analytic
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] A valid and fully populated analytic store
   * creation request
   *
   * @param {array} [options.request.items]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  upsertAnalyticsWithHttpOperationResponse(scope: string, options?: { request? : models.AnalyticsStorageRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Upsert Analytics
   *
   * @param {string} scope Scope of the analytic
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] A valid and fully populated analytic store
   * creation request
   *
   * @param {array} [options.request.items]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertAnalytics(scope: string, options?: { request? : models.AnalyticsStorageRequest, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  upsertAnalytics(scope: string, callback: ServiceCallback<any>): void;
  upsertAnalytics(scope: string, options: { request? : models.AnalyticsStorageRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Update classification data
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.classifications]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ClassificationsDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  upsertClassificationWithHttpOperationResponse(options?: { classifications? : models.SecurityClassificationDto[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ClassificationsDto>>;

  /**
   * @summary Update classification data
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.classifications]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ClassificationsDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ClassificationsDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ClassificationsDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertClassification(options?: { classifications? : models.SecurityClassificationDto[], customHeaders? : { [headerName: string]: string; } }): Promise<models.ClassificationsDto>;
  upsertClassification(callback: ServiceCallback<models.ClassificationsDto>): void;
  upsertClassification(options: { classifications? : models.SecurityClassificationDto[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ClassificationsDto>): void;


  /**
   * @summary Adds a new transaction type movement to the list of existing types
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.type]
   *
   * @param {array} options.type.aliases List of transaction codes that map to
   * this specific transaction model
   *
   * @param {array} options.type.movements Movement data for the transaction code
   *
   * @param {array} [options.type.properties]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<TxnMetaDataDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  addConfigurationTransactionTypeWithHttpOperationResponse(options?: { type? : models.TxnMetaDataDto, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.TxnMetaDataDto>>;

  /**
   * @summary Adds a new transaction type movement to the list of existing types
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.type]
   *
   * @param {array} options.type.aliases List of transaction codes that map to
   * this specific transaction model
   *
   * @param {array} options.type.movements Movement data for the transaction code
   *
   * @param {array} [options.type.properties]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {TxnMetaDataDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {TxnMetaDataDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link TxnMetaDataDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  addConfigurationTransactionType(options?: { type? : models.TxnMetaDataDto, customHeaders? : { [headerName: string]: string; } }): Promise<models.TxnMetaDataDto>;
  addConfigurationTransactionType(callback: ServiceCallback<models.TxnMetaDataDto>): void;
  addConfigurationTransactionType(options: { type? : models.TxnMetaDataDto, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.TxnMetaDataDto>): void;


  /**
   * @summary Gets the list of persisted transaction types
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfTxnMetaDataDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getConfigurationTransactionTypesWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfTxnMetaDataDto>>;

  /**
   * @summary Gets the list of persisted transaction types
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfTxnMetaDataDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfTxnMetaDataDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfTxnMetaDataDto} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getConfigurationTransactionTypes(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfTxnMetaDataDto>;
  getConfigurationTransactionTypes(callback: ServiceCallback<models.ResourceListOfTxnMetaDataDto>): void;
  getConfigurationTransactionTypes(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfTxnMetaDataDto>): void;


  /**
   * @summary Uploads a list of transaction types to be used by the movements
   * engine
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.types]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfTxnMetaDataDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  uploadConfigurationTransactionTypesWithHttpOperationResponse(options?: { types? : models.TxnMetaDataDto[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfTxnMetaDataDto>>;

  /**
   * @summary Uploads a list of transaction types to be used by the movements
   * engine
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.types]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfTxnMetaDataDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfTxnMetaDataDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfTxnMetaDataDto} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  uploadConfigurationTransactionTypes(options?: { types? : models.TxnMetaDataDto[], customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfTxnMetaDataDto>;
  uploadConfigurationTransactionTypes(callback: ServiceCallback<models.ResourceListOfTxnMetaDataDto>): void;
  uploadConfigurationTransactionTypes(options: { types? : models.TxnMetaDataDto[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfTxnMetaDataDto>): void;


  /**
   * @summary Gets a corporate action based on dates
   *
   * @param {string} scope Scope
   *
   * @param {string} corporateActionSourceCode Corporate action source id
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Effective Date
   *
   * @param {date} [options.asAt] AsAt Date filter
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Array>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  listCorporateActionsWithHttpOperationResponse(scope: string, corporateActionSourceCode: string, options?: { effectiveAt? : Date, asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.CorporateActionEventDto[]>>;

  /**
   * @summary Gets a corporate action based on dates
   *
   * @param {string} scope Scope
   *
   * @param {string} corporateActionSourceCode Corporate action source id
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Effective Date
   *
   * @param {date} [options.asAt] AsAt Date filter
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Array} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Array} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  listCorporateActions(scope: string, corporateActionSourceCode: string, options?: { effectiveAt? : Date, asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<models.CorporateActionEventDto[]>;
  listCorporateActions(scope: string, corporateActionSourceCode: string, callback: ServiceCallback<models.CorporateActionEventDto[]>): void;
  listCorporateActions(scope: string, corporateActionSourceCode: string, options: { effectiveAt? : Date, asAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.CorporateActionEventDto[]>): void;


  /**
   * @summary Attempt to create/update one or more corporate action. Failed
   * actions will be identified in the body of the response.
   *
   * @param {string} scope The intended scope of the corporate action
   *
   * @param {string} corporateActionSourceCode Source of the corporate action
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.actions] The corporate actions to create
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<TryUpsertCorporateActionsDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  batchUpsertCorporateActionsWithHttpOperationResponse(scope: string, corporateActionSourceCode: string, options?: { actions? : models.UpsertCorporateActionRequest[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.TryUpsertCorporateActionsDto>>;

  /**
   * @summary Attempt to create/update one or more corporate action. Failed
   * actions will be identified in the body of the response.
   *
   * @param {string} scope The intended scope of the corporate action
   *
   * @param {string} corporateActionSourceCode Source of the corporate action
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.actions] The corporate actions to create
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {TryUpsertCorporateActionsDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {TryUpsertCorporateActionsDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link TryUpsertCorporateActionsDto} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  batchUpsertCorporateActions(scope: string, corporateActionSourceCode: string, options?: { actions? : models.UpsertCorporateActionRequest[], customHeaders? : { [headerName: string]: string; } }): Promise<models.TryUpsertCorporateActionsDto>;
  batchUpsertCorporateActions(scope: string, corporateActionSourceCode: string, callback: ServiceCallback<models.TryUpsertCorporateActionsDto>): void;
  batchUpsertCorporateActions(scope: string, corporateActionSourceCode: string, options: { actions? : models.UpsertCorporateActionRequest[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.TryUpsertCorporateActionsDto>): void;


  /**
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.version]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<String>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getDownloadUrlWithHttpOperationResponse(options?: { version? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<string>>;

  /**
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.version]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {String} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {String} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getDownloadUrl(options?: { version? : string, customHeaders? : { [headerName: string]: string; } }): Promise<string>;
  getDownloadUrl(callback: ServiceCallback<string>): void;
  getDownloadUrl(options: { version? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<string>): void;


  /**
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<String>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getLatestVersionWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<string>>;

  /**
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {String} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {String} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getLatestVersion(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<string>;
  getLatestVersion(callback: ServiceCallback<string>): void;
  getLatestVersion(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<string>): void;


  /**
   * @summary List all groups in a specified scope
   *
   * @param {string} scope
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter] A filter expression to apply to the result
   * set
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfGroupDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  listPortfolioGroupsWithHttpOperationResponse(scope: string, options?: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfGroupDto>>;

  /**
   * @summary List all groups in a specified scope
   *
   * @param {string} scope
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter] A filter expression to apply to the result
   * set
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfGroupDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfGroupDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfGroupDto} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  listPortfolioGroups(scope: string, options?: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfGroupDto>;
  listPortfolioGroups(scope: string, callback: ServiceCallback<models.ResourceListOfGroupDto>): void;
  listPortfolioGroups(scope: string, options: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfGroupDto>): void;


  /**
   * @summary Create a new group
   *
   * @param {string} scope
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {string} options.request.id
   *
   * @param {array} [options.request.values]
   *
   * @param {array} [options.request.subGroups]
   *
   * @param {string} options.request.name
   *
   * @param {string} [options.request.description]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<GroupDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  createPortfolioGroupWithHttpOperationResponse(scope: string, options?: { request? : models.CreateGroupRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.GroupDto>>;

  /**
   * @summary Create a new group
   *
   * @param {string} scope
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {string} options.request.id
   *
   * @param {array} [options.request.values]
   *
   * @param {array} [options.request.subGroups]
   *
   * @param {string} options.request.name
   *
   * @param {string} [options.request.description]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {GroupDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {GroupDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link GroupDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  createPortfolioGroup(scope: string, options?: { request? : models.CreateGroupRequest, customHeaders? : { [headerName: string]: string; } }): Promise<models.GroupDto>;
  createPortfolioGroup(scope: string, callback: ServiceCallback<models.GroupDto>): void;
  createPortfolioGroup(scope: string, options: { request? : models.CreateGroupRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.GroupDto>): void;


  /**
   * @summary Get an existing group
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<GroupDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getPortfolioGroupWithHttpOperationResponse(scope: string, code: string, options?: { asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.GroupDto>>;

  /**
   * @summary Get an existing group
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {GroupDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {GroupDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link GroupDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getPortfolioGroup(scope: string, code: string, options?: { asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<models.GroupDto>;
  getPortfolioGroup(scope: string, code: string, callback: ServiceCallback<models.GroupDto>): void;
  getPortfolioGroup(scope: string, code: string, options: { asAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.GroupDto>): void;


  /**
   * @summary Delete a group
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<DeletedEntityResponse>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  deletePortfolioGroupWithHttpOperationResponse(scope: string, code: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.DeletedEntityResponse>>;

  /**
   * @summary Delete a group
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {DeletedEntityResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePortfolioGroup(scope: string, code: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.DeletedEntityResponse>;
  deletePortfolioGroup(scope: string, code: string, callback: ServiceCallback<models.DeletedEntityResponse>): void;
  deletePortfolioGroup(scope: string, code: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DeletedEntityResponse>): void;


  /**
   * @summary Gets all commands that modified the portfolio groups(s) with the
   * specified id.
   *
   * @param {string} scope The scope of the portfolio group
   *
   * @param {string} code The portfolio group id
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.fromAsAt] Filters commands by those that were
   * processed at or after this time. Null means there is no lower limit.
   *
   * @param {date} [options.toAsAt] Filters commands by those that were processed
   * at or before this time. Null means there is no upper limit (latest).
   *
   * @param {string} [options.filter] A filter expression to apply to the result
   * set
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfProcessedCommandDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getPortfolioGroupCommandsWithHttpOperationResponse(scope: string, code: string, options?: { fromAsAt? : Date, toAsAt? : Date, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfProcessedCommandDto>>;

  /**
   * @summary Gets all commands that modified the portfolio groups(s) with the
   * specified id.
   *
   * @param {string} scope The scope of the portfolio group
   *
   * @param {string} code The portfolio group id
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.fromAsAt] Filters commands by those that were
   * processed at or after this time. Null means there is no lower limit.
   *
   * @param {date} [options.toAsAt] Filters commands by those that were processed
   * at or before this time. Null means there is no upper limit (latest).
   *
   * @param {string} [options.filter] A filter expression to apply to the result
   * set
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfProcessedCommandDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfProcessedCommandDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfProcessedCommandDto} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getPortfolioGroupCommands(scope: string, code: string, options?: { fromAsAt? : Date, toAsAt? : Date, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfProcessedCommandDto>;
  getPortfolioGroupCommands(scope: string, code: string, callback: ServiceCallback<models.ResourceListOfProcessedCommandDto>): void;
  getPortfolioGroupCommands(scope: string, code: string, options: { fromAsAt? : Date, toAsAt? : Date, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfProcessedCommandDto>): void;


  /**
   * @summary Get a full expansion of an existing group
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt]
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.propertyFilter]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ExpandedGroupDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getPortfolioGroupExpansionWithHttpOperationResponse(scope: string, code: string, options?: { effectiveAt? : Date, asAt? : Date, propertyFilter? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ExpandedGroupDto>>;

  /**
   * @summary Get a full expansion of an existing group
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt]
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.propertyFilter]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ExpandedGroupDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ExpandedGroupDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ExpandedGroupDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getPortfolioGroupExpansion(scope: string, code: string, options?: { effectiveAt? : Date, asAt? : Date, propertyFilter? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<models.ExpandedGroupDto>;
  getPortfolioGroupExpansion(scope: string, code: string, callback: ServiceCallback<models.ExpandedGroupDto>): void;
  getPortfolioGroupExpansion(scope: string, code: string, options: { effectiveAt? : Date, asAt? : Date, propertyFilter? : string[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ExpandedGroupDto>): void;


  /**
   * @summary Add a portfolio to an existing group
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.identifier]
   *
   * @param {string} [options.identifier.scope]
   *
   * @param {string} [options.identifier.code]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<GroupDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  addPortfolioToGroupWithHttpOperationResponse(scope: string, code: string, options?: { identifier? : models.ResourceId, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.GroupDto>>;

  /**
   * @summary Add a portfolio to an existing group
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.identifier]
   *
   * @param {string} [options.identifier.scope]
   *
   * @param {string} [options.identifier.code]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {GroupDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {GroupDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link GroupDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  addPortfolioToGroup(scope: string, code: string, options?: { identifier? : models.ResourceId, customHeaders? : { [headerName: string]: string; } }): Promise<models.GroupDto>;
  addPortfolioToGroup(scope: string, code: string, callback: ServiceCallback<models.GroupDto>): void;
  addPortfolioToGroup(scope: string, code: string, options: { identifier? : models.ResourceId, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.GroupDto>): void;


  /**
   * @summary Remove a portfolio that is currently present within an existing
   * group
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {string} portfolioScope
   *
   * @param {string} portfolioCode
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<GroupDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  deletePortfolioFromGroupWithHttpOperationResponse(scope: string, code: string, portfolioScope: string, portfolioCode: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.GroupDto>>;

  /**
   * @summary Remove a portfolio that is currently present within an existing
   * group
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {string} portfolioScope
   *
   * @param {string} portfolioCode
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {GroupDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {GroupDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link GroupDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePortfolioFromGroup(scope: string, code: string, portfolioScope: string, portfolioCode: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.GroupDto>;
  deletePortfolioFromGroup(scope: string, code: string, portfolioScope: string, portfolioCode: string, callback: ServiceCallback<models.GroupDto>): void;
  deletePortfolioFromGroup(scope: string, code: string, portfolioScope: string, portfolioCode: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.GroupDto>): void;


  /**
   * @summary Add a sub group to an existing group
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.identifier]
   *
   * @param {string} [options.identifier.scope]
   *
   * @param {string} [options.identifier.code]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<GroupDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  addSubGroupToGroupWithHttpOperationResponse(scope: string, code: string, options?: { identifier? : models.ResourceId, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.GroupDto>>;

  /**
   * @summary Add a sub group to an existing group
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.identifier]
   *
   * @param {string} [options.identifier.scope]
   *
   * @param {string} [options.identifier.code]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {GroupDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {GroupDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link GroupDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  addSubGroupToGroup(scope: string, code: string, options?: { identifier? : models.ResourceId, customHeaders? : { [headerName: string]: string; } }): Promise<models.GroupDto>;
  addSubGroupToGroup(scope: string, code: string, callback: ServiceCallback<models.GroupDto>): void;
  addSubGroupToGroup(scope: string, code: string, options: { identifier? : models.ResourceId, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.GroupDto>): void;


  /**
   * @summary Remove a subgroup that is currently present within an existing
   * group
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {string} subgroupScope
   *
   * @param {string} subgroupCode
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<GroupDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  deleteSubGroupFromGroupWithHttpOperationResponse(scope: string, code: string, subgroupScope: string, subgroupCode: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.GroupDto>>;

  /**
   * @summary Remove a subgroup that is currently present within an existing
   * group
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {string} subgroupScope
   *
   * @param {string} subgroupCode
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {GroupDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {GroupDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link GroupDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deleteSubGroupFromGroup(scope: string, code: string, subgroupScope: string, subgroupCode: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.GroupDto>;
  deleteSubGroupFromGroup(scope: string, code: string, subgroupScope: string, subgroupCode: string, callback: ServiceCallback<models.GroupDto>): void;
  deleteSubGroupFromGroup(scope: string, code: string, subgroupScope: string, subgroupCode: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.GroupDto>): void;


  /**
   * @summary Update an existing group
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {string} options.request.name
   *
   * @param {string} [options.request.description]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<GroupDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  updatePortfolioGroupWithHttpOperationResponse(scope: string, code: string, options?: { request? : models.UpdateGroupRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.GroupDto>>;

  /**
   * @summary Update an existing group
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {string} options.request.name
   *
   * @param {string} [options.request.description]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {GroupDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {GroupDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link GroupDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  updatePortfolioGroup(scope: string, code: string, options?: { request? : models.UpdateGroupRequest, customHeaders? : { [headerName: string]: string; } }): Promise<models.GroupDto>;
  updatePortfolioGroup(scope: string, code: string, callback: ServiceCallback<models.GroupDto>): void;
  updatePortfolioGroup(scope: string, code: string, options: { request? : models.UpdateGroupRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.GroupDto>): void;


  /**
   * @summary Search portfolio groups
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfGroupDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  portfolioGroupsSearchWithHttpOperationResponse(options?: { request? : any, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfGroupDto>>;

  /**
   * @summary Search portfolio groups
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfGroupDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfGroupDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfGroupDto} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  portfolioGroupsSearch(options?: { request? : any, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfGroupDto>;
  portfolioGroupsSearch(callback: ServiceCallback<models.ResourceListOfGroupDto>): void;
  portfolioGroupsSearch(options: { request? : any, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfGroupDto>): void;


  /**
   * @summary Simple heartbeat method for the api
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<String>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getHealthWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<string>>;

  /**
   * @summary Simple heartbeat method for the api
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {String} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {String} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getHealth(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<string>;
  getHealth(callback: ServiceCallback<string>): void;
  getHealth(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<string>): void;


  /**
   * @summary Gets the login information.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<LoginResponse>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getLoginInfoWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.LoginResponse>>;

  /**
   * @summary Gets the login information.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {LoginResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {LoginResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link LoginResponse} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getLoginInfo(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.LoginResponse>;
  getLoginInfo(callback: ServiceCallback<models.LoginResponse>): void;
  getLoginInfo(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.LoginResponse>): void;


  /**
   * @summary Get the unique identifier for the SAML Identity Provider to be used
   * by domain.
   *
   * @param {string} domain The domain that the user will be logging in to.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<String>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getSamlIdentityProviderIdWithHttpOperationResponse(domain: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<string>>;

  /**
   * @summary Get the unique identifier for the SAML Identity Provider to be used
   * by domain.
   *
   * @param {string} domain The domain that the user will be logging in to.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {String} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {String} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getSamlIdentityProviderId(domain: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<string>;
  getSamlIdentityProviderId(domain: string, callback: ServiceCallback<string>): void;
  getSamlIdentityProviderId(domain: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<string>): void;


  /**
   * @summary Store a log message
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.message]
   *
   * @param {string} [options.message.version] The semantic version of the remote
   * application submitting the log
   *
   * @param {string} [options.message.url] The url of the resource from which the
   * message originated
   *
   * @param {string} [options.message.message] The body of the message
   *
   * @param {string} [options.message.context] Context as to the occurance of the
   * message
   *
   * @param {string} [options.message.severity] The severity of the message.
   * Possible values include: 'Warn', 'Error'
   *
   * @param {string} [options.message.stacktrace] Any stacktrace that may be
   * relavent
   *
   * @param {string} [options.message.browser] Any browser/user-agent/os related
   * context
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<String>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  storeWebLogsWithHttpOperationResponse(options?: { message? : models.WebLogMessage, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<string>>;

  /**
   * @summary Store a log message
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.message]
   *
   * @param {string} [options.message.version] The semantic version of the remote
   * application submitting the log
   *
   * @param {string} [options.message.url] The url of the resource from which the
   * message originated
   *
   * @param {string} [options.message.message] The body of the message
   *
   * @param {string} [options.message.context] Context as to the occurance of the
   * message
   *
   * @param {string} [options.message.severity] The severity of the message.
   * Possible values include: 'Warn', 'Error'
   *
   * @param {string} [options.message.stacktrace] Any stacktrace that may be
   * relavent
   *
   * @param {string} [options.message.browser] Any browser/user-agent/os related
   * context
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {String} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {String} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  storeWebLogs(options?: { message? : models.WebLogMessage, customHeaders? : { [headerName: string]: string; } }): Promise<string>;
  storeWebLogs(callback: ServiceCallback<string>): void;
  storeWebLogs(options: { message? : models.WebLogMessage, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<string>): void;


  /**
   * @summary Returns the current assembly version
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<String>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getBuildVersionWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<string>>;

  /**
   * @summary Returns the current assembly version
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {String} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {String} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getBuildVersion(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<string>;
  getBuildVersion(callback: ServiceCallback<string>): void;
  getBuildVersion(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<string>): void;


  /**
   * @summary Returns the current assembly version
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<String>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  verifyConnectivityWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<string>>;

  /**
   * @summary Returns the current assembly version
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {String} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {String} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  verifyConnectivity(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<string>;
  verifyConnectivity(callback: ServiceCallback<string>): void;
  verifyConnectivity(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<string>): void;


  /**
   * @summary Returns the current assembly version
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<String>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getVersionWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<string>>;

  /**
   * @summary Returns the current assembly version
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {String} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {String} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getVersion(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<string>;
  getVersion(callback: ServiceCallback<string>): void;
  getVersion(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<string>): void;


  /**
   * @summary Get a personalisation, recursing to get any referenced if required.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.pattern] The search pattern or specific key
   *
   * @param {string} [options.scope] The scope level to request for. Possible
   * values include: 'User', 'Group', 'Default', 'All'
   *
   * @param {boolean} [options.recursive] Whether to recurse into dereference
   * recursive settings
   *
   * @param {boolean} [options.wildcards] Whether to apply wildcards to the
   * provided pattern and pull back any matching
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfPersonalisationDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getPersonalisationsWithHttpOperationResponse(options?: { pattern? : string, scope? : string, recursive? : boolean, wildcards? : boolean, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfPersonalisationDto>>;

  /**
   * @summary Get a personalisation, recursing to get any referenced if required.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.pattern] The search pattern or specific key
   *
   * @param {string} [options.scope] The scope level to request for. Possible
   * values include: 'User', 'Group', 'Default', 'All'
   *
   * @param {boolean} [options.recursive] Whether to recurse into dereference
   * recursive settings
   *
   * @param {boolean} [options.wildcards] Whether to apply wildcards to the
   * provided pattern and pull back any matching
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfPersonalisationDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfPersonalisationDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfPersonalisationDto} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getPersonalisations(options?: { pattern? : string, scope? : string, recursive? : boolean, wildcards? : boolean, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfPersonalisationDto>;
  getPersonalisations(callback: ServiceCallback<models.ResourceListOfPersonalisationDto>): void;
  getPersonalisations(options: { pattern? : string, scope? : string, recursive? : boolean, wildcards? : boolean, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfPersonalisationDto>): void;


  /**
   * @summary Upsert one or more personalisations
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.personalisations]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<UpsertPersonalisationsResponse>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  upsertPersonalisationsWithHttpOperationResponse(options?: { personalisations? : models.PersonalisationDto[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.UpsertPersonalisationsResponse>>;

  /**
   * @summary Upsert one or more personalisations
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.personalisations]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {UpsertPersonalisationsResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {UpsertPersonalisationsResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link UpsertPersonalisationsResponse} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertPersonalisations(options?: { personalisations? : models.PersonalisationDto[], customHeaders? : { [headerName: string]: string; } }): Promise<models.UpsertPersonalisationsResponse>;
  upsertPersonalisations(callback: ServiceCallback<models.UpsertPersonalisationsResponse>): void;
  upsertPersonalisations(options: { personalisations? : models.PersonalisationDto[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.UpsertPersonalisationsResponse>): void;


  /**
   * @summary Delete a personalisation at a specific scope (or use scope ALL to
   * purge the setting entirely)
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.key] The key of the setting to be deleted
   *
   * @param {string} [options.scope] The scope to delete at (use ALL to purge the
   * setting entirely). Possible values include: 'User', 'Group', 'Default',
   * 'All'
   *
   * @param {string} [options.group] If deleting a setting at group level,
   * specify the group here
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<DeletedEntityResponse>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  deletePersonalisationWithHttpOperationResponse(options?: { key? : string, scope? : string, group? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.DeletedEntityResponse>>;

  /**
   * @summary Delete a personalisation at a specific scope (or use scope ALL to
   * purge the setting entirely)
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.key] The key of the setting to be deleted
   *
   * @param {string} [options.scope] The scope to delete at (use ALL to purge the
   * setting entirely). Possible values include: 'User', 'Group', 'Default',
   * 'All'
   *
   * @param {string} [options.group] If deleting a setting at group level,
   * specify the group here
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {DeletedEntityResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePersonalisation(options?: { key? : string, scope? : string, group? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.DeletedEntityResponse>;
  deletePersonalisation(callback: ServiceCallback<models.DeletedEntityResponse>): void;
  deletePersonalisation(options: { key? : string, scope? : string, group? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DeletedEntityResponse>): void;


  /**
   * @summary List scopes that contain portfolios
   *
   * Lists all scopes that have previously been used
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.sortBy] How to order the returned scopes
   *
   * @param {number} [options.start] The starting index for the returned scopes
   *
   * @param {number} [options.limit] The final index for the returned scopes
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfScope>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  listPortfolioScopesWithHttpOperationResponse(options?: { sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfScope>>;

  /**
   * @summary List scopes that contain portfolios
   *
   * Lists all scopes that have previously been used
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.sortBy] How to order the returned scopes
   *
   * @param {number} [options.start] The starting index for the returned scopes
   *
   * @param {number} [options.limit] The final index for the returned scopes
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfScope} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfScope} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfScope} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  listPortfolioScopes(options?: { sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfScope>;
  listPortfolioScopes(callback: ServiceCallback<models.ResourceListOfScope>): void;
  listPortfolioScopes(options: { sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfScope>): void;


  /**
   * @summary Get all portfolios
   *
   * Get all portfolios in a scope
   *
   * @param {string} scope The scope to get portfolios from
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Effective date
   *
   * @param {date} [options.asAt] The asAt date to use
   *
   * @param {array} [options.sortBy] The columns to sort the returned data by
   *
   * @param {number} [options.start] How many items to skip from the returned set
   *
   * @param {number} [options.limit] How many items to return from the set
   *
   * @param {string} [options.filter]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfPortfolioDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  listPortfoliosWithHttpOperationResponse(scope: string, options?: { effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfPortfolioDto>>;

  /**
   * @summary Get all portfolios
   *
   * Get all portfolios in a scope
   *
   * @param {string} scope The scope to get portfolios from
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Effective date
   *
   * @param {date} [options.asAt] The asAt date to use
   *
   * @param {array} [options.sortBy] The columns to sort the returned data by
   *
   * @param {number} [options.start] How many items to skip from the returned set
   *
   * @param {number} [options.limit] How many items to return from the set
   *
   * @param {string} [options.filter]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfPortfolioDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfPortfolioDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfPortfolioDto} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  listPortfolios(scope: string, options?: { effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfPortfolioDto>;
  listPortfolios(scope: string, callback: ServiceCallback<models.ResourceListOfPortfolioDto>): void;
  listPortfolios(scope: string, options: { effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfPortfolioDto>): void;


  /**
   * @summary Create portfolio
   *
   * Creates a new portfolio
   *
   * @param {string} scope The intended scope of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.createRequest] The portfolio creation request
   * object
   *
   * @param {string} options.createRequest.name
   *
   * @param {string} options.createRequest.code
   *
   * @param {date} [options.createRequest.created]
   *
   * @param {string} options.createRequest.baseCurrency
   *
   * @param {object} [options.createRequest.corporateActionSourceId]
   *
   * @param {string} [options.createRequest.corporateActionSourceId.scope]
   *
   * @param {string} [options.createRequest.corporateActionSourceId.code]
   *
   * @param {string} [options.createRequest.accountingMethod] Possible values
   * include: 'Default', 'AverageCost', 'FirstInFirstOut', 'LastInFirstOut',
   * 'HighestCostFirst', 'LowestCostFirst'
   *
   * @param {array} [options.createRequest.subHoldingKeys]
   *
   * @param {array} [options.createRequest.properties] Portfolio properties to
   * add to the portfolio
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<PortfolioDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  createPortfolioWithHttpOperationResponse(scope: string, options?: { createRequest? : models.CreatePortfolioRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.PortfolioDto>>;

  /**
   * @summary Create portfolio
   *
   * Creates a new portfolio
   *
   * @param {string} scope The intended scope of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.createRequest] The portfolio creation request
   * object
   *
   * @param {string} options.createRequest.name
   *
   * @param {string} options.createRequest.code
   *
   * @param {date} [options.createRequest.created]
   *
   * @param {string} options.createRequest.baseCurrency
   *
   * @param {object} [options.createRequest.corporateActionSourceId]
   *
   * @param {string} [options.createRequest.corporateActionSourceId.scope]
   *
   * @param {string} [options.createRequest.corporateActionSourceId.code]
   *
   * @param {string} [options.createRequest.accountingMethod] Possible values
   * include: 'Default', 'AverageCost', 'FirstInFirstOut', 'LastInFirstOut',
   * 'HighestCostFirst', 'LowestCostFirst'
   *
   * @param {array} [options.createRequest.subHoldingKeys]
   *
   * @param {array} [options.createRequest.properties] Portfolio properties to
   * add to the portfolio
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {PortfolioDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {PortfolioDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  createPortfolio(scope: string, options?: { createRequest? : models.CreatePortfolioRequest, customHeaders? : { [headerName: string]: string; } }): Promise<models.PortfolioDto>;
  createPortfolio(scope: string, callback: ServiceCallback<models.PortfolioDto>): void;
  createPortfolio(scope: string, options: { createRequest? : models.CreatePortfolioRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PortfolioDto>): void;


  /**
   * @summary Get portfolio
   *
   * Gets a single portfolio by code
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Effective date
   *
   * @param {date} [options.asAt] The asAt date to use
   *
   * @param {array} [options.propertyFilter] Optional property filter
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<PortfolioDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getPortfolioWithHttpOperationResponse(scope: string, code: string, options?: { effectiveAt? : Date, asAt? : Date, propertyFilter? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.PortfolioDto>>;

  /**
   * @summary Get portfolio
   *
   * Gets a single portfolio by code
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Effective date
   *
   * @param {date} [options.asAt] The asAt date to use
   *
   * @param {array} [options.propertyFilter] Optional property filter
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {PortfolioDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {PortfolioDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getPortfolio(scope: string, code: string, options?: { effectiveAt? : Date, asAt? : Date, propertyFilter? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<models.PortfolioDto>;
  getPortfolio(scope: string, code: string, callback: ServiceCallback<models.PortfolioDto>): void;
  getPortfolio(scope: string, code: string, options: { effectiveAt? : Date, asAt? : Date, propertyFilter? : string[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PortfolioDto>): void;


  /**
   * @summary Update portfolio
   *
   * @param {string} scope The scope of the portfolio to be updated
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] The update request
   *
   * @param {string} options.request.name
   *
   * @param {date} [options.request.created]
   *
   * @param {date} [options.effectiveAt] The effective date for the change
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<PortfolioDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  updatePortfolioWithHttpOperationResponse(scope: string, code: string, options?: { request? : models.UpdatePortfolioRequest, effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.PortfolioDto>>;

  /**
   * @summary Update portfolio
   *
   * @param {string} scope The scope of the portfolio to be updated
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] The update request
   *
   * @param {string} options.request.name
   *
   * @param {date} [options.request.created]
   *
   * @param {date} [options.effectiveAt] The effective date for the change
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {PortfolioDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {PortfolioDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  updatePortfolio(scope: string, code: string, options?: { request? : models.UpdatePortfolioRequest, effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<models.PortfolioDto>;
  updatePortfolio(scope: string, code: string, callback: ServiceCallback<models.PortfolioDto>): void;
  updatePortfolio(scope: string, code: string, options: { request? : models.UpdatePortfolioRequest, effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PortfolioDto>): void;


  /**
   * @summary Delete portfolio
   *
   * Deletes a portfolio from the given effectiveAt
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Effective date
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<DeletedEntityResponse>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  deletePortfolioWithHttpOperationResponse(scope: string, code: string, options?: { effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.DeletedEntityResponse>>;

  /**
   * @summary Delete portfolio
   *
   * Deletes a portfolio from the given effectiveAt
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Effective date
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {DeletedEntityResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePortfolio(scope: string, code: string, options?: { effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<models.DeletedEntityResponse>;
  deletePortfolio(scope: string, code: string, callback: ServiceCallback<models.DeletedEntityResponse>): void;
  deletePortfolio(scope: string, code: string, options: { effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DeletedEntityResponse>): void;


  /**
   * @summary Get modifications
   *
   * Gets all commands that modified the portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The portfolio id
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.fromAsAt] Filters commands by those that were
   * processed at or after this time. Null means there is no lower limit.
   *
   * @param {date} [options.toAsAt] Filters commands by those that were processed
   * at or before this time. Null means there is no upper limit (latest).
   *
   * @param {string} [options.filter] Command filter
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfProcessedCommandDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getCommandsWithHttpOperationResponse(scope: string, code: string, options?: { fromAsAt? : Date, toAsAt? : Date, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfProcessedCommandDto>>;

  /**
   * @summary Get modifications
   *
   * Gets all commands that modified the portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code The portfolio id
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.fromAsAt] Filters commands by those that were
   * processed at or after this time. Null means there is no lower limit.
   *
   * @param {date} [options.toAsAt] Filters commands by those that were processed
   * at or before this time. Null means there is no upper limit (latest).
   *
   * @param {string} [options.filter] Command filter
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfProcessedCommandDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfProcessedCommandDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfProcessedCommandDto} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getCommands(scope: string, code: string, options?: { fromAsAt? : Date, toAsAt? : Date, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfProcessedCommandDto>;
  getCommands(scope: string, code: string, callback: ServiceCallback<models.ResourceListOfProcessedCommandDto>): void;
  getCommands(scope: string, code: string, options: { fromAsAt? : Date, toAsAt? : Date, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfProcessedCommandDto>): void;


  /**
   * @summary Get portfolio details
   *
   * Gets the details for a portfolio.  For a derived portfolio this can be
   * the details of another reference portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Effective date
   *
   * @param {date} [options.asAt] The asAt date to use
   *
   * @param {array} [options.propertyFilter] Optional property filter
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<PortfolioDetailsDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getDetailsWithHttpOperationResponse(scope: string, code: string, options?: { effectiveAt? : Date, asAt? : Date, propertyFilter? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.PortfolioDetailsDto>>;

  /**
   * @summary Get portfolio details
   *
   * Gets the details for a portfolio.  For a derived portfolio this can be
   * the details of another reference portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Effective date
   *
   * @param {date} [options.asAt] The asAt date to use
   *
   * @param {array} [options.propertyFilter] Optional property filter
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {PortfolioDetailsDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {PortfolioDetailsDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioDetailsDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getDetails(scope: string, code: string, options?: { effectiveAt? : Date, asAt? : Date, propertyFilter? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<models.PortfolioDetailsDto>;
  getDetails(scope: string, code: string, callback: ServiceCallback<models.PortfolioDetailsDto>): void;
  getDetails(scope: string, code: string, options: { effectiveAt? : Date, asAt? : Date, propertyFilter? : string[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PortfolioDetailsDto>): void;


  /**
   * @summary Add/update portfolio details
   *
   * Update the portfolio details for the given code or add if it doesn't already
   * exist. Updates with
   * null values will remove any existing values
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.details]
   *
   * @param {string} [options.details.baseCurrency]
   *
   * @param {date} [options.effectiveAt] The effective date of the change
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<PortfolioDetailsDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  upsertPortfolioDetailsWithHttpOperationResponse(scope: string, code: string, options?: { details? : models.PortfolioDetailsRequest, effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.PortfolioDetailsDto>>;

  /**
   * @summary Add/update portfolio details
   *
   * Update the portfolio details for the given code or add if it doesn't already
   * exist. Updates with
   * null values will remove any existing values
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.details]
   *
   * @param {string} [options.details.baseCurrency]
   *
   * @param {date} [options.effectiveAt] The effective date of the change
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {PortfolioDetailsDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {PortfolioDetailsDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioDetailsDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertPortfolioDetails(scope: string, code: string, options?: { details? : models.PortfolioDetailsRequest, effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<models.PortfolioDetailsDto>;
  upsertPortfolioDetails(scope: string, code: string, callback: ServiceCallback<models.PortfolioDetailsDto>): void;
  upsertPortfolioDetails(scope: string, code: string, options: { details? : models.PortfolioDetailsRequest, effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PortfolioDetailsDto>): void;


  /**
   * @summary Delete portfolio details
   *
   * Deletes the portfolio details for the given code
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] The effective date of the change
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<DeletedEntityResponse>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  deletePortfolioDetailsWithHttpOperationResponse(scope: string, code: string, options?: { effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.DeletedEntityResponse>>;

  /**
   * @summary Delete portfolio details
   *
   * Deletes the portfolio details for the given code
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] The effective date of the change
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {DeletedEntityResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePortfolioDetails(scope: string, code: string, options?: { effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<models.DeletedEntityResponse>;
  deletePortfolioDetails(scope: string, code: string, callback: ServiceCallback<models.DeletedEntityResponse>): void;
  deletePortfolioDetails(scope: string, code: string, options: { effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DeletedEntityResponse>): void;


  /**
   * @summary Get holdings
   *
   * Get the aggregate holdings of a portfolio.  If no effectiveAt or asAt
   * are supplied then values will be defaulted to the latest system time.
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Effective date
   *
   * @param {date} [options.asAt] As at date
   *
   * @param {array} [options.sortBy] The columns to sort the returned data by
   *
   * @param {number} [options.start] How many items to skip from the returned set
   *
   * @param {number} [options.limit] How many items to return from the set
   *
   * @param {string} [options.filter] A filter on the results
   *
   * @param {array} [options.securityPropertyKeys] Keys for the security
   * properties to be decorated onto the holdings
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<VersionedResourceListOfHoldingDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getAggregateHoldingsWithHttpOperationResponse(scope: string, code: string, options?: { effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, securityPropertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.VersionedResourceListOfHoldingDto>>;

  /**
   * @summary Get holdings
   *
   * Get the aggregate holdings of a portfolio.  If no effectiveAt or asAt
   * are supplied then values will be defaulted to the latest system time.
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Effective date
   *
   * @param {date} [options.asAt] As at date
   *
   * @param {array} [options.sortBy] The columns to sort the returned data by
   *
   * @param {number} [options.start] How many items to skip from the returned set
   *
   * @param {number} [options.limit] How many items to return from the set
   *
   * @param {string} [options.filter] A filter on the results
   *
   * @param {array} [options.securityPropertyKeys] Keys for the security
   * properties to be decorated onto the holdings
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {VersionedResourceListOfHoldingDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {VersionedResourceListOfHoldingDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link VersionedResourceListOfHoldingDto} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getAggregateHoldings(scope: string, code: string, options?: { effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, securityPropertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<models.VersionedResourceListOfHoldingDto>;
  getAggregateHoldings(scope: string, code: string, callback: ServiceCallback<models.VersionedResourceListOfHoldingDto>): void;
  getAggregateHoldings(scope: string, code: string, options: { effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, securityPropertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.VersionedResourceListOfHoldingDto>): void;


  /**
   * @summary Adjust holdings
   *
   * Create trades in a specific portfolio to bring it to the specified holdings
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {date} effectiveAt Effective date
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.holdingAdjustments]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<AdjustHoldingsDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  adjustAllHoldingsWithHttpOperationResponse(scope: string, code: string, effectiveAt: Date|string, options?: { holdingAdjustments? : models.AdjustHoldingRequest[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.AdjustHoldingsDto>>;

  /**
   * @summary Adjust holdings
   *
   * Create trades in a specific portfolio to bring it to the specified holdings
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {date} effectiveAt Effective date
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.holdingAdjustments]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {AdjustHoldingsDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {AdjustHoldingsDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link AdjustHoldingsDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  adjustAllHoldings(scope: string, code: string, effectiveAt: Date|string, options?: { holdingAdjustments? : models.AdjustHoldingRequest[], customHeaders? : { [headerName: string]: string; } }): Promise<models.AdjustHoldingsDto>;
  adjustAllHoldings(scope: string, code: string, effectiveAt: Date|string, callback: ServiceCallback<models.AdjustHoldingsDto>): void;
  adjustAllHoldings(scope: string, code: string, effectiveAt: Date|string, options: { holdingAdjustments? : models.AdjustHoldingRequest[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AdjustHoldingsDto>): void;


  /**
   * @summary Cancel adjust-holdings
   *
   * Cancels a previous adjust holdings request
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {date} effectiveAt Effective date
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<DeletedEntityResponse>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  cancelAdjustHoldingsWithHttpOperationResponse(scope: string, code: string, effectiveAt: Date|string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.DeletedEntityResponse>>;

  /**
   * @summary Cancel adjust-holdings
   *
   * Cancels a previous adjust holdings request
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {date} effectiveAt Effective date
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {DeletedEntityResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  cancelAdjustHoldings(scope: string, code: string, effectiveAt: Date|string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.DeletedEntityResponse>;
  cancelAdjustHoldings(scope: string, code: string, effectiveAt: Date|string, callback: ServiceCallback<models.DeletedEntityResponse>): void;
  cancelAdjustHoldings(scope: string, code: string, effectiveAt: Date|string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DeletedEntityResponse>): void;


  /**
   * @summary Adjust holdings
   *
   * Create trades in a specific portfolio to bring it to the specified holdings
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {date} effectiveAt Effective date
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.holdingAdjustments]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<AdjustHoldingsDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  adjustHoldingsWithHttpOperationResponse(scope: string, code: string, effectiveAt: Date|string, options?: { holdingAdjustments? : models.AdjustHoldingRequest[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.AdjustHoldingsDto>>;

  /**
   * @summary Adjust holdings
   *
   * Create trades in a specific portfolio to bring it to the specified holdings
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {date} effectiveAt Effective date
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.holdingAdjustments]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {AdjustHoldingsDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {AdjustHoldingsDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link AdjustHoldingsDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  adjustHoldings(scope: string, code: string, effectiveAt: Date|string, options?: { holdingAdjustments? : models.AdjustHoldingRequest[], customHeaders? : { [headerName: string]: string; } }): Promise<models.AdjustHoldingsDto>;
  adjustHoldings(scope: string, code: string, effectiveAt: Date|string, callback: ServiceCallback<models.AdjustHoldingsDto>): void;
  adjustHoldings(scope: string, code: string, effectiveAt: Date|string, options: { holdingAdjustments? : models.AdjustHoldingRequest[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AdjustHoldingsDto>): void;


  /**
   * @summary Gets holdings adjustments in an interval of effective time.
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.fromEffectiveAt] Events between this time (inclusive)
   * and the toEffectiveAt are returned.
   *
   * @param {date} [options.toEffectiveAt] Events between this time (inclusive)
   * and the fromEffectiveAt are returned.
   *
   * @param {date} [options.asAtTime] The as-at time for which the result is
   * valid.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<HoldingsAdjustmentHeaderDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  listHoldingsAdjustmentsWithHttpOperationResponse(scope: string, code: string, options?: { fromEffectiveAt? : Date, toEffectiveAt? : Date, asAtTime? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.HoldingsAdjustmentHeaderDto>>;

  /**
   * @summary Gets holdings adjustments in an interval of effective time.
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.fromEffectiveAt] Events between this time (inclusive)
   * and the toEffectiveAt are returned.
   *
   * @param {date} [options.toEffectiveAt] Events between this time (inclusive)
   * and the fromEffectiveAt are returned.
   *
   * @param {date} [options.asAtTime] The as-at time for which the result is
   * valid.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {HoldingsAdjustmentHeaderDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {HoldingsAdjustmentHeaderDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link HoldingsAdjustmentHeaderDto} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  listHoldingsAdjustments(scope: string, code: string, options?: { fromEffectiveAt? : Date, toEffectiveAt? : Date, asAtTime? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<models.HoldingsAdjustmentHeaderDto>;
  listHoldingsAdjustments(scope: string, code: string, callback: ServiceCallback<models.HoldingsAdjustmentHeaderDto>): void;
  listHoldingsAdjustments(scope: string, code: string, options: { fromEffectiveAt? : Date, toEffectiveAt? : Date, asAtTime? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.HoldingsAdjustmentHeaderDto>): void;


  /**
   * @summary Get a holdings adjustment for a single portfolio at a specific
   * effective time.
   * If no adjustment exists at this effective time, not found is returned.
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {date} effectiveAt The effective time of the holdings adjustment.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAtTime] The as-at time for which the result is
   * valid.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<HoldingsAdjustmentDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getHoldingsAdjustmentWithHttpOperationResponse(scope: string, code: string, effectiveAt: Date|string, options?: { asAtTime? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.HoldingsAdjustmentDto>>;

  /**
   * @summary Get a holdings adjustment for a single portfolio at a specific
   * effective time.
   * If no adjustment exists at this effective time, not found is returned.
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {date} effectiveAt The effective time of the holdings adjustment.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAtTime] The as-at time for which the result is
   * valid.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {HoldingsAdjustmentDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {HoldingsAdjustmentDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link HoldingsAdjustmentDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getHoldingsAdjustment(scope: string, code: string, effectiveAt: Date|string, options?: { asAtTime? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<models.HoldingsAdjustmentDto>;
  getHoldingsAdjustment(scope: string, code: string, effectiveAt: Date|string, callback: ServiceCallback<models.HoldingsAdjustmentDto>): void;
  getHoldingsAdjustment(scope: string, code: string, effectiveAt: Date|string, options: { asAtTime? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.HoldingsAdjustmentDto>): void;


  /**
   * @summary Get properties
   *
   * Get properties attached to the portfolio.  If the asAt is not specified then
   * the latest system time is used
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Effective date
   *
   * @param {date} [options.asAt] The asAt date to use
   *
   * @param {array} [options.sortBy] Property to sort the results by
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<PortfolioPropertiesDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getPropertiesWithHttpOperationResponse(scope: string, code: string, options?: { effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.PortfolioPropertiesDto>>;

  /**
   * @summary Get properties
   *
   * Get properties attached to the portfolio.  If the asAt is not specified then
   * the latest system time is used
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] Effective date
   *
   * @param {date} [options.asAt] The asAt date to use
   *
   * @param {array} [options.sortBy] Property to sort the results by
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {PortfolioPropertiesDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {PortfolioPropertiesDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioPropertiesDto} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getProperties(scope: string, code: string, options?: { effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<models.PortfolioPropertiesDto>;
  getProperties(scope: string, code: string, callback: ServiceCallback<models.PortfolioPropertiesDto>): void;
  getProperties(scope: string, code: string, options: { effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PortfolioPropertiesDto>): void;


  /**
   * @summary Update properties
   *
   * Create one or more properties on a portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.properties]
   *
   * @param {date} [options.effectiveAt] The effective date for the change
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<PortfolioPropertiesDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  upsertPortfolioPropertiesWithHttpOperationResponse(scope: string, code: string, options?: { properties? : models.CreatePropertyRequest[], effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.PortfolioPropertiesDto>>;

  /**
   * @summary Update properties
   *
   * Create one or more properties on a portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.properties]
   *
   * @param {date} [options.effectiveAt] The effective date for the change
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {PortfolioPropertiesDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {PortfolioPropertiesDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioPropertiesDto} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertPortfolioProperties(scope: string, code: string, options?: { properties? : models.CreatePropertyRequest[], effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<models.PortfolioPropertiesDto>;
  upsertPortfolioProperties(scope: string, code: string, callback: ServiceCallback<models.PortfolioPropertiesDto>): void;
  upsertPortfolioProperties(scope: string, code: string, options: { properties? : models.CreatePropertyRequest[], effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PortfolioPropertiesDto>): void;


  /**
   * @summary Delete property
   *
   * Delete a property from a portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.property] The key of the property to be deleted
   *
   * @param {date} [options.effectiveAt] Effective date
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<DeletedEntityResponse>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  deletePortfolioPropertyWithHttpOperationResponse(scope: string, code: string, options?: { property? : string, effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.DeletedEntityResponse>>;

  /**
   * @summary Delete property
   *
   * Delete a property from a portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.property] The key of the property to be deleted
   *
   * @param {date} [options.effectiveAt] Effective date
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {DeletedEntityResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePortfolioProperty(scope: string, code: string, options?: { property? : string, effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<models.DeletedEntityResponse>;
  deletePortfolioProperty(scope: string, code: string, callback: ServiceCallback<models.DeletedEntityResponse>): void;
  deletePortfolioProperty(scope: string, code: string, options: { property? : string, effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DeletedEntityResponse>): void;


  /**
   * @summary Delete properties
   *
   * Delete all properties from a portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] The effective date for the change
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<DeletedEntityResponse>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  deletePortfolioPropertiesWithHttpOperationResponse(scope: string, code: string, options?: { effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.DeletedEntityResponse>>;

  /**
   * @summary Delete properties
   *
   * Delete all properties from a portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt] The effective date for the change
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {DeletedEntityResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePortfolioProperties(scope: string, code: string, options?: { effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<models.DeletedEntityResponse>;
  deletePortfolioProperties(scope: string, code: string, callback: ServiceCallback<models.DeletedEntityResponse>): void;
  deletePortfolioProperties(scope: string, code: string, options: { effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DeletedEntityResponse>): void;


  /**
   * @summary Get trades
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.fromTradeDate] Exclude trades with a trade-date less
   * than this date. If not supplied, no lower filter is applied
   *
   * @param {date} [options.toTradeDate] Exclude trades with a trade-date greater
   * than this date. If not supplied, no upper filter is applied
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.sortBy] The columns to sort the returned data by
   *
   * @param {number} [options.start] How many items to skip from the returned set
   *
   * @param {number} [options.limit] How many items to return from the set
   *
   * @param {array} [options.securityPropertyKeys] Keys for the security
   * properties to be decorated onto the trades
   *
   * @param {string} [options.filter] Trade filter
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<VersionedResourceListOfTradeDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getTradesWithHttpOperationResponse(scope: string, code: string, options?: { fromTradeDate? : Date, toTradeDate? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, securityPropertyKeys? : string[], filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.VersionedResourceListOfTradeDto>>;

  /**
   * @summary Get trades
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.fromTradeDate] Exclude trades with a trade-date less
   * than this date. If not supplied, no lower filter is applied
   *
   * @param {date} [options.toTradeDate] Exclude trades with a trade-date greater
   * than this date. If not supplied, no upper filter is applied
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.sortBy] The columns to sort the returned data by
   *
   * @param {number} [options.start] How many items to skip from the returned set
   *
   * @param {number} [options.limit] How many items to return from the set
   *
   * @param {array} [options.securityPropertyKeys] Keys for the security
   * properties to be decorated onto the trades
   *
   * @param {string} [options.filter] Trade filter
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {VersionedResourceListOfTradeDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {VersionedResourceListOfTradeDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link VersionedResourceListOfTradeDto} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getTrades(scope: string, code: string, options?: { fromTradeDate? : Date, toTradeDate? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, securityPropertyKeys? : string[], filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.VersionedResourceListOfTradeDto>;
  getTrades(scope: string, code: string, callback: ServiceCallback<models.VersionedResourceListOfTradeDto>): void;
  getTrades(scope: string, code: string, options: { fromTradeDate? : Date, toTradeDate? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, securityPropertyKeys? : string[], filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.VersionedResourceListOfTradeDto>): void;


  /**
   * @summary Add/update trades
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.trades] The trades to be updated
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<UpsertPortfolioTradesDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  upsertTradesWithHttpOperationResponse(scope: string, code: string, options?: { trades? : models.UpsertPortfolioTradeRequest[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.UpsertPortfolioTradesDto>>;

  /**
   * @summary Add/update trades
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.trades] The trades to be updated
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {UpsertPortfolioTradesDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {UpsertPortfolioTradesDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link UpsertPortfolioTradesDto} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertTrades(scope: string, code: string, options?: { trades? : models.UpsertPortfolioTradeRequest[], customHeaders? : { [headerName: string]: string; } }): Promise<models.UpsertPortfolioTradesDto>;
  upsertTrades(scope: string, code: string, callback: ServiceCallback<models.UpsertPortfolioTradesDto>): void;
  upsertTrades(scope: string, code: string, options: { trades? : models.UpsertPortfolioTradeRequest[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.UpsertPortfolioTradesDto>): void;


  /**
   * @summary Delete trades
   *
   * Delete one or more trades from a portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.id] Ids of trades to delete
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<DeletedEntityResponse>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  deleteTradesWithHttpOperationResponse(scope: string, code: string, options?: { id? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.DeletedEntityResponse>>;

  /**
   * @summary Delete trades
   *
   * Delete one or more trades from a portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.id] Ids of trades to delete
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {DeletedEntityResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deleteTrades(scope: string, code: string, options?: { id? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<models.DeletedEntityResponse>;
  deleteTrades(scope: string, code: string, callback: ServiceCallback<models.DeletedEntityResponse>): void;
  deleteTrades(scope: string, code: string, options: { id? : string[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DeletedEntityResponse>): void;


  /**
   * @summary Add/update trade properties
   *
   * Add one or more properties to a specific trade in a portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {string} tradeId Id of trade to add properties to
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.properties] Trade properties to add
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<AddTradePropertyDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  addTradePropertyWithHttpOperationResponse(scope: string, code: string, tradeId: string, options?: { properties? : models.CreatePerpetualPropertyRequest[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.AddTradePropertyDto>>;

  /**
   * @summary Add/update trade properties
   *
   * Add one or more properties to a specific trade in a portfolio
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {string} tradeId Id of trade to add properties to
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.properties] Trade properties to add
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {AddTradePropertyDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {AddTradePropertyDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link AddTradePropertyDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  addTradeProperty(scope: string, code: string, tradeId: string, options?: { properties? : models.CreatePerpetualPropertyRequest[], customHeaders? : { [headerName: string]: string; } }): Promise<models.AddTradePropertyDto>;
  addTradeProperty(scope: string, code: string, tradeId: string, callback: ServiceCallback<models.AddTradePropertyDto>): void;
  addTradeProperty(scope: string, code: string, tradeId: string, options: { properties? : models.CreatePerpetualPropertyRequest[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AddTradePropertyDto>): void;


  /**
   * @summary Delete trade property
   *
   * Delete a property from a specific trade
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {string} tradeId Id of the trade to delete the property from
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.property] The key of the property to be deleted
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<DeletedEntityResponse>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  deletePropertyFromTradeWithHttpOperationResponse(scope: string, code: string, tradeId: string, options?: { property? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.DeletedEntityResponse>>;

  /**
   * @summary Delete trade property
   *
   * Delete a property from a specific trade
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {string} tradeId Id of the trade to delete the property from
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.property] The key of the property to be deleted
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {DeletedEntityResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePropertyFromTrade(scope: string, code: string, tradeId: string, options?: { property? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.DeletedEntityResponse>;
  deletePropertyFromTrade(scope: string, code: string, tradeId: string, callback: ServiceCallback<models.DeletedEntityResponse>): void;
  deletePropertyFromTrade(scope: string, code: string, tradeId: string, options: { property? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DeletedEntityResponse>): void;


  /**
   * @summary Create derived portfolio
   *
   * Creates a portfolio that derives from an existing portfolio
   *
   * @param {string} scope The scope into which to create the new derived
   * portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.portfolio] The root object of the new derived
   * portfolio, containing a populated reference portfolio id and reference scope
   *
   * @param {string} options.portfolio.name
   *
   * @param {string} [options.portfolio.id]
   *
   * @param {object} [options.portfolio.parentPortfolio]
   *
   * @param {string} [options.portfolio.parentPortfolio.scope]
   *
   * @param {string} [options.portfolio.parentPortfolio.code]
   *
   * @param {date} [options.portfolio.created]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<PortfolioDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  createDerivedPortfolioWithHttpOperationResponse(scope: string, options?: { portfolio? : models.CreateDerivedPortfolioRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.PortfolioDto>>;

  /**
   * @summary Create derived portfolio
   *
   * Creates a portfolio that derives from an existing portfolio
   *
   * @param {string} scope The scope into which to create the new derived
   * portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.portfolio] The root object of the new derived
   * portfolio, containing a populated reference portfolio id and reference scope
   *
   * @param {string} options.portfolio.name
   *
   * @param {string} [options.portfolio.id]
   *
   * @param {object} [options.portfolio.parentPortfolio]
   *
   * @param {string} [options.portfolio.parentPortfolio.scope]
   *
   * @param {string} [options.portfolio.parentPortfolio.code]
   *
   * @param {date} [options.portfolio.created]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {PortfolioDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {PortfolioDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  createDerivedPortfolio(scope: string, options?: { portfolio? : models.CreateDerivedPortfolioRequest, customHeaders? : { [headerName: string]: string; } }): Promise<models.PortfolioDto>;
  createDerivedPortfolio(scope: string, callback: ServiceCallback<models.PortfolioDto>): void;
  createDerivedPortfolio(scope: string, options: { portfolio? : models.CreateDerivedPortfolioRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PortfolioDto>): void;


  /**
   * @summary Search portfolios
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfPortfolioSearchResult>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  portfoliosSearchWithHttpOperationResponse(options?: { request? : any, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfPortfolioSearchResult>>;

  /**
   * @summary Search portfolios
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfPortfolioSearchResult} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfPortfolioSearchResult} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfPortfolioSearchResult} for
   *                      more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  portfoliosSearch(options?: { request? : any, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfPortfolioSearchResult>;
  portfoliosSearch(callback: ServiceCallback<models.ResourceListOfPortfolioSearchResult>): void;
  portfoliosSearch(options: { request? : any, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfPortfolioSearchResult>): void;


  /**
   * @summary Search properties
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfPropertyDefinitionDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  propertiesSearchWithHttpOperationResponse(options?: { request? : any, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfPropertyDefinitionDto>>;

  /**
   * @summary Search properties
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfPropertyDefinitionDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfPropertyDefinitionDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfPropertyDefinitionDto} for
   *                      more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  propertiesSearch(options?: { request? : any, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfPropertyDefinitionDto>;
  propertiesSearch(callback: ServiceCallback<models.ResourceListOfPropertyDefinitionDto>): void;
  propertiesSearch(options: { request? : any, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfPropertyDefinitionDto>): void;


  /**
   * @summary Gets the available property-definition domains.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfPropertyDomain>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getPropertyDefinitionDomainsWithHttpOperationResponse(options?: { sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfPropertyDomain>>;

  /**
   * @summary Gets the available property-definition domains.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfPropertyDomain} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfPropertyDomain} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfPropertyDomain} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getPropertyDefinitionDomains(options?: { sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfPropertyDomain>;
  getPropertyDefinitionDomains(callback: ServiceCallback<models.ResourceListOfPropertyDomain>): void;
  getPropertyDefinitionDomains(options: { sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfPropertyDomain>): void;


  /**
   * @summary Creates a new property definition.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.definition]
   *
   * @param {string} [options.definition.domain] Possible values include:
   * 'Trade', 'Portfolio', 'Security', 'Holding', 'ReferenceHolding', 'TxnType'
   *
   * @param {string} [options.definition.scope]
   *
   * @param {string} [options.definition.name]
   *
   * @param {boolean} [options.definition.valueRequired]
   *
   * @param {string} [options.definition.displayName]
   *
   * @param {object} [options.definition.dataFormatId]
   *
   * @param {string} [options.definition.dataFormatId.scope]
   *
   * @param {string} [options.definition.dataFormatId.code]
   *
   * @param {string} [options.definition.sort]
   *
   * @param {string} [options.definition.lifeTime] Possible values include:
   * 'Perpetual', 'TimeVariant'
   *
   * @param {string} [options.definition.type] Possible values include: 'Label',
   * 'Metric'
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<PropertyDefinitionDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  createPropertyDefinitionWithHttpOperationResponse(options?: { definition? : models.CreatePropertyDefinitionRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.PropertyDefinitionDto>>;

  /**
   * @summary Creates a new property definition.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.definition]
   *
   * @param {string} [options.definition.domain] Possible values include:
   * 'Trade', 'Portfolio', 'Security', 'Holding', 'ReferenceHolding', 'TxnType'
   *
   * @param {string} [options.definition.scope]
   *
   * @param {string} [options.definition.name]
   *
   * @param {boolean} [options.definition.valueRequired]
   *
   * @param {string} [options.definition.displayName]
   *
   * @param {object} [options.definition.dataFormatId]
   *
   * @param {string} [options.definition.dataFormatId.scope]
   *
   * @param {string} [options.definition.dataFormatId.code]
   *
   * @param {string} [options.definition.sort]
   *
   * @param {string} [options.definition.lifeTime] Possible values include:
   * 'Perpetual', 'TimeVariant'
   *
   * @param {string} [options.definition.type] Possible values include: 'Label',
   * 'Metric'
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {PropertyDefinitionDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {PropertyDefinitionDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PropertyDefinitionDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  createPropertyDefinition(options?: { definition? : models.CreatePropertyDefinitionRequest, customHeaders? : { [headerName: string]: string; } }): Promise<models.PropertyDefinitionDto>;
  createPropertyDefinition(callback: ServiceCallback<models.PropertyDefinitionDto>): void;
  createPropertyDefinition(options: { definition? : models.CreatePropertyDefinitionRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PropertyDefinitionDto>): void;


  /**
   * @summary Gets multiple property definitions.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.keys]
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfPropertyDefinitionDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getMultiplePropertyDefinitionsWithHttpOperationResponse(options?: { keys? : string[], asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfPropertyDefinitionDto>>;

  /**
   * @summary Gets multiple property definitions.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.keys]
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfPropertyDefinitionDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfPropertyDefinitionDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfPropertyDefinitionDto} for
   *                      more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getMultiplePropertyDefinitions(options?: { keys? : string[], asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfPropertyDefinitionDto>;
  getMultiplePropertyDefinitions(callback: ServiceCallback<models.ResourceListOfPropertyDefinitionDto>): void;
  getMultiplePropertyDefinitions(options: { keys? : string[], asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfPropertyDefinitionDto>): void;


  /**
   * @summary Gets all available property definitions.
   *
   * @param {string} domain Possible values include: 'Trade', 'Portfolio',
   * 'Security', 'Holding', 'ReferenceHolding', 'TxnType'
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfPropertyKey>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getAllPropertyKeysInDomainWithHttpOperationResponse(domain: string, options?: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfPropertyKey>>;

  /**
   * @summary Gets all available property definitions.
   *
   * @param {string} domain Possible values include: 'Trade', 'Portfolio',
   * 'Security', 'Holding', 'ReferenceHolding', 'TxnType'
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfPropertyKey} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfPropertyKey} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfPropertyKey} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getAllPropertyKeysInDomain(domain: string, options?: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfPropertyKey>;
  getAllPropertyKeysInDomain(domain: string, callback: ServiceCallback<models.ResourceListOfPropertyKey>): void;
  getAllPropertyKeysInDomain(domain: string, options: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfPropertyKey>): void;


  /**
   * @summary Gets the available property-definition scopes for the specified
   * domain.
   *
   * @param {string} domain Possible values include: 'Trade', 'Portfolio',
   * 'Security', 'Holding', 'ReferenceHolding', 'TxnType'
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfScope>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getPropertyDefinitionScopesInDomainWithHttpOperationResponse(domain: string, options?: { sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfScope>>;

  /**
   * @summary Gets the available property-definition scopes for the specified
   * domain.
   *
   * @param {string} domain Possible values include: 'Trade', 'Portfolio',
   * 'Security', 'Holding', 'ReferenceHolding', 'TxnType'
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfScope} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfScope} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfScope} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getPropertyDefinitionScopesInDomain(domain: string, options?: { sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfScope>;
  getPropertyDefinitionScopesInDomain(domain: string, callback: ServiceCallback<models.ResourceListOfScope>): void;
  getPropertyDefinitionScopesInDomain(domain: string, options: { sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfScope>): void;


  /**
   * @summary Gets all properties in a scope.
   *
   * @param {string} domain Possible values include: 'Trade', 'Portfolio',
   * 'Security', 'Holding', 'ReferenceHolding', 'TxnType'
   *
   * @param {string} scope
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfPropertyKey>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getAllPropertyKeysInScopeWithHttpOperationResponse(domain: string, scope: string, options?: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfPropertyKey>>;

  /**
   * @summary Gets all properties in a scope.
   *
   * @param {string} domain Possible values include: 'Trade', 'Portfolio',
   * 'Security', 'Holding', 'ReferenceHolding', 'TxnType'
   *
   * @param {string} scope
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfPropertyKey} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfPropertyKey} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfPropertyKey} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getAllPropertyKeysInScope(domain: string, scope: string, options?: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfPropertyKey>;
  getAllPropertyKeysInScope(domain: string, scope: string, callback: ServiceCallback<models.ResourceListOfPropertyKey>): void;
  getAllPropertyKeysInScope(domain: string, scope: string, options: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfPropertyKey>): void;


  /**
   * @summary Gets a property definition.
   *
   * @param {string} domain Possible values include: 'Trade', 'Portfolio',
   * 'Security', 'Holding', 'ReferenceHolding', 'TxnType'
   *
   * @param {string} scope
   *
   * @param {string} name
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<PropertyDefinitionDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getPropertyDefinitionWithHttpOperationResponse(domain: string, scope: string, name: string, options?: { asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.PropertyDefinitionDto>>;

  /**
   * @summary Gets a property definition.
   *
   * @param {string} domain Possible values include: 'Trade', 'Portfolio',
   * 'Security', 'Holding', 'ReferenceHolding', 'TxnType'
   *
   * @param {string} scope
   *
   * @param {string} name
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {PropertyDefinitionDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {PropertyDefinitionDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PropertyDefinitionDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getPropertyDefinition(domain: string, scope: string, name: string, options?: { asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<models.PropertyDefinitionDto>;
  getPropertyDefinition(domain: string, scope: string, name: string, callback: ServiceCallback<models.PropertyDefinitionDto>): void;
  getPropertyDefinition(domain: string, scope: string, name: string, options: { asAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PropertyDefinitionDto>): void;


  /**
   * @summary Updates the specified property definition.
   *
   * @param {string} domain Possible values include: 'Trade', 'Portfolio',
   * 'Security', 'Holding', 'ReferenceHolding', 'TxnType'
   *
   * @param {string} scope
   *
   * @param {string} name
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.definition]
   *
   * @param {boolean} [options.definition.valueRequired]
   *
   * @param {string} [options.definition.displayName]
   *
   * @param {object} [options.definition.dataFormatId]
   *
   * @param {string} [options.definition.dataFormatId.scope]
   *
   * @param {string} [options.definition.dataFormatId.code]
   *
   * @param {string} [options.definition.sort]
   *
   * @param {string} [options.definition.lifeTime] Possible values include:
   * 'Perpetual', 'TimeVariant'
   *
   * @param {string} [options.definition.type] Possible values include: 'Label',
   * 'Metric'
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<PropertyDefinitionDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  updatePropertyDefinitionWithHttpOperationResponse(domain: string, scope: string, name: string, options?: { definition? : models.UpdatePropertyDefinitionRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.PropertyDefinitionDto>>;

  /**
   * @summary Updates the specified property definition.
   *
   * @param {string} domain Possible values include: 'Trade', 'Portfolio',
   * 'Security', 'Holding', 'ReferenceHolding', 'TxnType'
   *
   * @param {string} scope
   *
   * @param {string} name
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.definition]
   *
   * @param {boolean} [options.definition.valueRequired]
   *
   * @param {string} [options.definition.displayName]
   *
   * @param {object} [options.definition.dataFormatId]
   *
   * @param {string} [options.definition.dataFormatId.scope]
   *
   * @param {string} [options.definition.dataFormatId.code]
   *
   * @param {string} [options.definition.sort]
   *
   * @param {string} [options.definition.lifeTime] Possible values include:
   * 'Perpetual', 'TimeVariant'
   *
   * @param {string} [options.definition.type] Possible values include: 'Label',
   * 'Metric'
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {PropertyDefinitionDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {PropertyDefinitionDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PropertyDefinitionDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  updatePropertyDefinition(domain: string, scope: string, name: string, options?: { definition? : models.UpdatePropertyDefinitionRequest, customHeaders? : { [headerName: string]: string; } }): Promise<models.PropertyDefinitionDto>;
  updatePropertyDefinition(domain: string, scope: string, name: string, callback: ServiceCallback<models.PropertyDefinitionDto>): void;
  updatePropertyDefinition(domain: string, scope: string, name: string, options: { definition? : models.UpdatePropertyDefinitionRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PropertyDefinitionDto>): void;


  /**
   * @summary Deletes the property definition.
   *
   * @param {string} domain Possible values include: 'Trade', 'Portfolio',
   * 'Security', 'Holding', 'ReferenceHolding', 'TxnType'
   *
   * @param {string} scope
   *
   * @param {string} name
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<DeletedEntityResponse>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  deletePropertyDefinitionWithHttpOperationResponse(domain: string, scope: string, name: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.DeletedEntityResponse>>;

  /**
   * @summary Deletes the property definition.
   *
   * @param {string} domain Possible values include: 'Trade', 'Portfolio',
   * 'Security', 'Holding', 'ReferenceHolding', 'TxnType'
   *
   * @param {string} scope
   *
   * @param {string} name
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {DeletedEntityResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePropertyDefinition(domain: string, scope: string, name: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.DeletedEntityResponse>;
  deletePropertyDefinition(domain: string, scope: string, name: string, callback: ServiceCallback<models.DeletedEntityResponse>): void;
  deletePropertyDefinition(domain: string, scope: string, name: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DeletedEntityResponse>): void;


  /**
   * @summary Create a new PropertyDataFormat. Note: Only non-default formats can
   * be created.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] The definition of the new format
   *
   * @param {string} options.request.scope
   *
   * @param {string} options.request.code
   *
   * @param {string} options.request.formatType Possible values include: 'Open',
   * 'Closed'
   *
   * @param {number} options.request.order
   *
   * @param {string} options.request.displayName
   *
   * @param {string} options.request.description
   *
   * @param {string} options.request.valueType Possible values include: 'String',
   * 'Int', 'Decimal', 'DateTime', 'Boolean', 'Map', 'List', 'PropertyArray',
   * 'Percentage', 'BenchmarkType', 'Code', 'Id', 'Uri', 'ArrayOfIds',
   * 'ArrayOfTxnAliases', 'ArrayofTxnMovements', 'ArrayofUnits', 'StringArray',
   * 'UnitCreation'
   *
   * @param {array} [options.request.acceptableValues]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<PropertyDataFormatDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  createPropertyDataFormatWithHttpOperationResponse(options?: { request? : models.CreatePropertyDataFormatRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.PropertyDataFormatDto>>;

  /**
   * @summary Create a new PropertyDataFormat. Note: Only non-default formats can
   * be created.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] The definition of the new format
   *
   * @param {string} options.request.scope
   *
   * @param {string} options.request.code
   *
   * @param {string} options.request.formatType Possible values include: 'Open',
   * 'Closed'
   *
   * @param {number} options.request.order
   *
   * @param {string} options.request.displayName
   *
   * @param {string} options.request.description
   *
   * @param {string} options.request.valueType Possible values include: 'String',
   * 'Int', 'Decimal', 'DateTime', 'Boolean', 'Map', 'List', 'PropertyArray',
   * 'Percentage', 'BenchmarkType', 'Code', 'Id', 'Uri', 'ArrayOfIds',
   * 'ArrayOfTxnAliases', 'ArrayofTxnMovements', 'ArrayofUnits', 'StringArray',
   * 'UnitCreation'
   *
   * @param {array} [options.request.acceptableValues]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {PropertyDataFormatDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {PropertyDataFormatDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PropertyDataFormatDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  createPropertyDataFormat(options?: { request? : models.CreatePropertyDataFormatRequest, customHeaders? : { [headerName: string]: string; } }): Promise<models.PropertyDataFormatDto>;
  createPropertyDataFormat(callback: ServiceCallback<models.PropertyDataFormatDto>): void;
  createPropertyDataFormat(options: { request? : models.CreatePropertyDataFormatRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PropertyDataFormatDto>): void;


  /**
   * @summary Lists all property data formats in the specified scope.
   *
   * @param {string} scope
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {boolean} [options.includeDefault]
   *
   * @param {boolean} [options.includeSystem]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfPropertyDataFormatDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  listPropertyDataFormatsWithHttpOperationResponse(scope: string, options?: { includeDefault? : boolean, includeSystem? : boolean, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfPropertyDataFormatDto>>;

  /**
   * @summary Lists all property data formats in the specified scope.
   *
   * @param {string} scope
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {boolean} [options.includeDefault]
   *
   * @param {boolean} [options.includeSystem]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfPropertyDataFormatDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfPropertyDataFormatDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfPropertyDataFormatDto} for
   *                      more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  listPropertyDataFormats(scope: string, options?: { includeDefault? : boolean, includeSystem? : boolean, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfPropertyDataFormatDto>;
  listPropertyDataFormats(scope: string, callback: ServiceCallback<models.ResourceListOfPropertyDataFormatDto>): void;
  listPropertyDataFormats(scope: string, options: { includeDefault? : boolean, includeSystem? : boolean, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfPropertyDataFormatDto>): void;


  /**
   * @summary Gets a property data format.
   *
   * @param {string} scope
   *
   * @param {string} name
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<PropertyDataFormatDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getPropertyDataFormatWithHttpOperationResponse(scope: string, name: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.PropertyDataFormatDto>>;

  /**
   * @summary Gets a property data format.
   *
   * @param {string} scope
   *
   * @param {string} name
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {PropertyDataFormatDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {PropertyDataFormatDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PropertyDataFormatDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getPropertyDataFormat(scope: string, name: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.PropertyDataFormatDto>;
  getPropertyDataFormat(scope: string, name: string, callback: ServiceCallback<models.PropertyDataFormatDto>): void;
  getPropertyDataFormat(scope: string, name: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PropertyDataFormatDto>): void;


  /**
   * @summary Update a PropertyDataFormat. Note: Only non-default formats can be
   * updated.
   *
   * @param {string} scope The scope of the format being updated
   *
   * @param {string} name The name of the format to update
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] The new definition of the format
   *
   * @param {string} options.request.formatType Possible values include: 'Open',
   * 'Closed'
   *
   * @param {number} options.request.order
   *
   * @param {string} options.request.displayName
   *
   * @param {string} options.request.description
   *
   * @param {string} options.request.valueType Possible values include: 'String',
   * 'Int', 'Decimal', 'DateTime', 'Boolean', 'Map', 'List', 'PropertyArray',
   * 'Percentage', 'BenchmarkType', 'Code', 'Id', 'Uri', 'ArrayOfIds',
   * 'ArrayOfTxnAliases', 'ArrayofTxnMovements', 'ArrayofUnits', 'StringArray',
   * 'UnitCreation'
   *
   * @param {array} [options.request.acceptableValues]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<PropertyDataFormatDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  updatePropertyDataFormatWithHttpOperationResponse(scope: string, name: string, options?: { request? : models.UpdatePropertyDataFormatRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.PropertyDataFormatDto>>;

  /**
   * @summary Update a PropertyDataFormat. Note: Only non-default formats can be
   * updated.
   *
   * @param {string} scope The scope of the format being updated
   *
   * @param {string} name The name of the format to update
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] The new definition of the format
   *
   * @param {string} options.request.formatType Possible values include: 'Open',
   * 'Closed'
   *
   * @param {number} options.request.order
   *
   * @param {string} options.request.displayName
   *
   * @param {string} options.request.description
   *
   * @param {string} options.request.valueType Possible values include: 'String',
   * 'Int', 'Decimal', 'DateTime', 'Boolean', 'Map', 'List', 'PropertyArray',
   * 'Percentage', 'BenchmarkType', 'Code', 'Id', 'Uri', 'ArrayOfIds',
   * 'ArrayOfTxnAliases', 'ArrayofTxnMovements', 'ArrayofUnits', 'StringArray',
   * 'UnitCreation'
   *
   * @param {array} [options.request.acceptableValues]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {PropertyDataFormatDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {PropertyDataFormatDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PropertyDataFormatDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  updatePropertyDataFormat(scope: string, name: string, options?: { request? : models.UpdatePropertyDataFormatRequest, customHeaders? : { [headerName: string]: string; } }): Promise<models.PropertyDataFormatDto>;
  updatePropertyDataFormat(scope: string, name: string, callback: ServiceCallback<models.PropertyDataFormatDto>): void;
  updatePropertyDataFormat(scope: string, name: string, options: { request? : models.UpdatePropertyDataFormatRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PropertyDataFormatDto>): void;


  /**
   * @summary Return the definitions for the specified list of units
   *
   * @param {string} scope
   *
   * @param {string} name
   *
   * @param {array} units
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<IUnitDefinitionDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getUnitsFromPropertyDataFormatWithHttpOperationResponse(scope: string, name: string, units: string[], options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.IUnitDefinitionDto>>;

  /**
   * @summary Return the definitions for the specified list of units
   *
   * @param {string} scope
   *
   * @param {string} name
   *
   * @param {array} units
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {IUnitDefinitionDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {IUnitDefinitionDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link IUnitDefinitionDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getUnitsFromPropertyDataFormat(scope: string, name: string, units: string[], options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.IUnitDefinitionDto>;
  getUnitsFromPropertyDataFormat(scope: string, name: string, units: string[], callback: ServiceCallback<models.IUnitDefinitionDto>): void;
  getUnitsFromPropertyDataFormat(scope: string, name: string, units: string[], options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.IUnitDefinitionDto>): void;


  /**
   * @summary Perform a reconciliation between two portfolios
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {string} [options.request.leftScope]
   *
   * @param {string} [options.request.leftCode]
   *
   * @param {date} [options.request.leftEffectiveAt]
   *
   * @param {date} [options.request.leftAsAt]
   *
   * @param {string} [options.request.rightScope]
   *
   * @param {string} [options.request.rightCode]
   *
   * @param {date} [options.request.rightEffectiveAt]
   *
   * @param {date} [options.request.rightAsAt]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfReconciliationBreakDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  performReconciliationWithHttpOperationResponse(options?: { request? : models.ReconciliationRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfReconciliationBreakDto>>;

  /**
   * @summary Perform a reconciliation between two portfolios
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request]
   *
   * @param {string} [options.request.leftScope]
   *
   * @param {string} [options.request.leftCode]
   *
   * @param {date} [options.request.leftEffectiveAt]
   *
   * @param {date} [options.request.leftAsAt]
   *
   * @param {string} [options.request.rightScope]
   *
   * @param {string} [options.request.rightCode]
   *
   * @param {date} [options.request.rightEffectiveAt]
   *
   * @param {date} [options.request.rightAsAt]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfReconciliationBreakDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfReconciliationBreakDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfReconciliationBreakDto} for
   *                      more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  performReconciliation(options?: { request? : models.ReconciliationRequest, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfReconciliationBreakDto>;
  performReconciliation(callback: ServiceCallback<models.ResourceListOfReconciliationBreakDto>): void;
  performReconciliation(options: { request? : models.ReconciliationRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfReconciliationBreakDto>): void;


  /**
   * @summary Get all reference portfolios in a scope
   *
   * @param {string} scope
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt]
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfPortfolioDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  listReferencePortfoliosWithHttpOperationResponse(scope: string, options?: { effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfPortfolioDto>>;

  /**
   * @summary Get all reference portfolios in a scope
   *
   * @param {string} scope
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt]
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {string} [options.filter]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfPortfolioDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfPortfolioDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfPortfolioDto} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  listReferencePortfolios(scope: string, options?: { effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfPortfolioDto>;
  listReferencePortfolios(scope: string, callback: ServiceCallback<models.ResourceListOfPortfolioDto>): void;
  listReferencePortfolios(scope: string, options: { effectiveAt? : Date, asAt? : Date, sortBy? : string[], start? : number, limit? : number, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfPortfolioDto>): void;


  /**
   * @summary Create a new reference portfolio
   *
   * @param {string} scope The intended scope of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.referencePortfolio] The portfolio creation request
   * object
   *
   * @param {string} options.referencePortfolio.name
   *
   * @param {string} options.referencePortfolio.code
   *
   * @param {date} [options.referencePortfolio.created]
   *
   * @param {string} options.referencePortfolio.baseCurrency
   *
   * @param {object} [options.referencePortfolio.corporateActionSourceId]
   *
   * @param {string} [options.referencePortfolio.corporateActionSourceId.scope]
   *
   * @param {string} [options.referencePortfolio.corporateActionSourceId.code]
   *
   * @param {string} [options.referencePortfolio.accountingMethod] Possible
   * values include: 'Default', 'AverageCost', 'FirstInFirstOut',
   * 'LastInFirstOut', 'HighestCostFirst', 'LowestCostFirst'
   *
   * @param {array} [options.referencePortfolio.subHoldingKeys]
   *
   * @param {array} [options.referencePortfolio.properties] Portfolio properties
   * to add to the portfolio
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<PortfolioDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  createReferencePortfolioWithHttpOperationResponse(scope: string, options?: { referencePortfolio? : models.CreatePortfolioRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.PortfolioDto>>;

  /**
   * @summary Create a new reference portfolio
   *
   * @param {string} scope The intended scope of the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.referencePortfolio] The portfolio creation request
   * object
   *
   * @param {string} options.referencePortfolio.name
   *
   * @param {string} options.referencePortfolio.code
   *
   * @param {date} [options.referencePortfolio.created]
   *
   * @param {string} options.referencePortfolio.baseCurrency
   *
   * @param {object} [options.referencePortfolio.corporateActionSourceId]
   *
   * @param {string} [options.referencePortfolio.corporateActionSourceId.scope]
   *
   * @param {string} [options.referencePortfolio.corporateActionSourceId.code]
   *
   * @param {string} [options.referencePortfolio.accountingMethod] Possible
   * values include: 'Default', 'AverageCost', 'FirstInFirstOut',
   * 'LastInFirstOut', 'HighestCostFirst', 'LowestCostFirst'
   *
   * @param {array} [options.referencePortfolio.subHoldingKeys]
   *
   * @param {array} [options.referencePortfolio.properties] Portfolio properties
   * to add to the portfolio
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {PortfolioDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {PortfolioDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  createReferencePortfolio(scope: string, options?: { referencePortfolio? : models.CreatePortfolioRequest, customHeaders? : { [headerName: string]: string; } }): Promise<models.PortfolioDto>;
  createReferencePortfolio(scope: string, callback: ServiceCallback<models.PortfolioDto>): void;
  createReferencePortfolio(scope: string, options: { referencePortfolio? : models.CreatePortfolioRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PortfolioDto>): void;


  /**
   * @summary Get a reference portfolio by name (as opposed to id)
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt]
   *
   * @param {date} [options.asAt]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfReferencePortfolioConstituentDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getReferencePortfolioWithHttpOperationResponse(scope: string, code: string, options?: { effectiveAt? : Date, asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfReferencePortfolioConstituentDto>>;

  /**
   * @summary Get a reference portfolio by name (as opposed to id)
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt]
   *
   * @param {date} [options.asAt]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfReferencePortfolioConstituentDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfReferencePortfolioConstituentDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link
   *                      ResourceListOfReferencePortfolioConstituentDto} for
   *                      more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getReferencePortfolio(scope: string, code: string, options?: { effectiveAt? : Date, asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfReferencePortfolioConstituentDto>;
  getReferencePortfolio(scope: string, code: string, callback: ServiceCallback<models.ResourceListOfReferencePortfolioConstituentDto>): void;
  getReferencePortfolio(scope: string, code: string, options: { effectiveAt? : Date, asAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfReferencePortfolioConstituentDto>): void;


  /**
   * @summary Delete a specific portfolio
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<DeletedEntityResponse>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  deleteReferencePortfolioWithHttpOperationResponse(scope: string, code: string, options?: { effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.DeletedEntityResponse>>;

  /**
   * @summary Delete a specific portfolio
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.effectiveAt]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {DeletedEntityResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  deleteReferencePortfolio(scope: string, code: string, options?: { effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<models.DeletedEntityResponse>;
  deleteReferencePortfolio(scope: string, code: string, callback: ServiceCallback<models.DeletedEntityResponse>): void;
  deleteReferencePortfolio(scope: string, code: string, options: { effectiveAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DeletedEntityResponse>): void;


  /**
   * @summary Get all the constituents in a reference portfolio
   *
   * @param {string} scope
   *
   * @param {date} effectiveAt
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.referencePortfolioId]
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfReferencePortfolioConstituentDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getReferencePortfolioConstituentsWithHttpOperationResponse(scope: string, effectiveAt: Date|string, code: string, options?: { referencePortfolioId? : string, asAt? : Date, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfReferencePortfolioConstituentDto>>;

  /**
   * @summary Get all the constituents in a reference portfolio
   *
   * @param {string} scope
   *
   * @param {date} effectiveAt
   *
   * @param {string} code
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.referencePortfolioId]
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfReferencePortfolioConstituentDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfReferencePortfolioConstituentDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link
   *                      ResourceListOfReferencePortfolioConstituentDto} for
   *                      more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getReferencePortfolioConstituents(scope: string, effectiveAt: Date|string, code: string, options?: { referencePortfolioId? : string, asAt? : Date, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfReferencePortfolioConstituentDto>;
  getReferencePortfolioConstituents(scope: string, effectiveAt: Date|string, code: string, callback: ServiceCallback<models.ResourceListOfReferencePortfolioConstituentDto>): void;
  getReferencePortfolioConstituents(scope: string, effectiveAt: Date|string, code: string, options: { referencePortfolioId? : string, asAt? : Date, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfReferencePortfolioConstituentDto>): void;


  /**
   * @summary Add constituents to a specific reference portfolio
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {date} effectiveAt
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.constituents]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<UpsertReferencePortfolioConstituentsDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  upsertReferencePortfolioConstituentsWithHttpOperationResponse(scope: string, code: string, effectiveAt: Date|string, options?: { constituents? : models.ReferencePortfolioConstituentDto[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.UpsertReferencePortfolioConstituentsDto>>;

  /**
   * @summary Add constituents to a specific reference portfolio
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {date} effectiveAt
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.constituents]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {UpsertReferencePortfolioConstituentsDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {UpsertReferencePortfolioConstituentsDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link UpsertReferencePortfolioConstituentsDto} for
   *                      more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertReferencePortfolioConstituents(scope: string, code: string, effectiveAt: Date|string, options?: { constituents? : models.ReferencePortfolioConstituentDto[], customHeaders? : { [headerName: string]: string; } }): Promise<models.UpsertReferencePortfolioConstituentsDto>;
  upsertReferencePortfolioConstituents(scope: string, code: string, effectiveAt: Date|string, callback: ServiceCallback<models.UpsertReferencePortfolioConstituentsDto>): void;
  upsertReferencePortfolioConstituents(scope: string, code: string, effectiveAt: Date|string, options: { constituents? : models.ReferencePortfolioConstituentDto[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.UpsertReferencePortfolioConstituentsDto>): void;


  /**
   * @summary Retrieve some previously stored results
   *
   * @param {string} scope The scope of the data
   *
   * @param {string} key The key that identifies the data
   *
   * @param {date} dateParameter The date for which the data was loaded
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResultsDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getResultsWithHttpOperationResponse(scope: string, key: string, dateParameter: Date|string, options?: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResultsDto>>;

  /**
   * @summary Retrieve some previously stored results
   *
   * @param {string} scope The scope of the data
   *
   * @param {string} key The key that identifies the data
   *
   * @param {date} dateParameter The date for which the data was loaded
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt]
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResultsDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResultsDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResultsDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getResults(scope: string, key: string, dateParameter: Date|string, options?: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResultsDto>;
  getResults(scope: string, key: string, dateParameter: Date|string, callback: ServiceCallback<models.ResultsDto>): void;
  getResults(scope: string, key: string, dateParameter: Date|string, options: { asAt? : Date, sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResultsDto>): void;


  /**
   * @summary Upsert precalculated results against a specified scope/key/date
   * combination
   *
   * @param {string} scope The scope of the data
   *
   * @param {string} key The key that identifies the data
   *
   * @param {date} dateParameter The date for which the data is relevant
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] The results to upload
   *
   * @param {object} [options.request.data]
   *
   * @param {string} [options.request.scope]
   *
   * @param {string} [options.request.key]
   *
   * @param {date} [options.request.date]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResultsDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  upsertResultsWithHttpOperationResponse(scope: string, key: string, dateParameter: Date|string, options?: { request? : models.CreateResultsRequest, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResultsDto>>;

  /**
   * @summary Upsert precalculated results against a specified scope/key/date
   * combination
   *
   * @param {string} scope The scope of the data
   *
   * @param {string} key The key that identifies the data
   *
   * @param {date} dateParameter The date for which the data is relevant
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.request] The results to upload
   *
   * @param {object} [options.request.data]
   *
   * @param {string} [options.request.scope]
   *
   * @param {string} [options.request.key]
   *
   * @param {date} [options.request.date]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResultsDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResultsDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResultsDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertResults(scope: string, key: string, dateParameter: Date|string, options?: { request? : models.CreateResultsRequest, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResultsDto>;
  upsertResults(scope: string, key: string, dateParameter: Date|string, callback: ServiceCallback<models.ResultsDto>): void;
  upsertResults(scope: string, key: string, dateParameter: Date|string, options: { request? : models.CreateResultsRequest, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResultsDto>): void;


  /**
   * @param {string} entity Possible values include: 'PropertyKey',
   * 'FieldSchema', 'Personalisation', 'Security', 'Property',
   * 'CreatePropertyRequest', 'CreatePerpetualPropertyRequest',
   * 'PerpetualProperty', 'Login', 'PropertyDefinition', 'PropertyDataFormat',
   * 'AggregationResponseNode', 'Portfolio', 'CompletePortfolio',
   * 'PortfolioSearchResult', 'PortfolioDetails', 'PortfolioProperties',
   * 'Version', 'AddTradeProperty', 'AnalyticStore', 'AnalyticStoreKey',
   * 'UpsertPortfolioTrades', 'Group', 'Constituent', 'Trade',
   * 'UpsertPortfolioTradesRequest', 'PortfolioHolding', 'AdjustHolding',
   * 'ErrorDetail', 'ErrorResponse', 'InstrumentDefinition', 'ProcessedCommand',
   * 'CreatePortfolio', 'CreateAnalyticStore', 'CreateClientSecurity',
   * 'CreateDerivedPortfolio', 'CreateGroup', 'CreatePropertyDataFormat',
   * 'CreatePropertyDefinition', 'UpdatePortfolio', 'UpdateGroup',
   * 'UpdatePropertyDataFormat', 'UpdatePropertyDefinition', 'SecurityAnalytic',
   * 'AggregationRequest', 'Aggregation', 'NestedAggregation',
   * 'ResultDataSchema', 'Classification', 'SecurityClassification',
   * 'WebLogMessage', 'UpsertPersonalisation', 'CreatePortfolioDetails',
   * 'UpsertConstituent', 'CreateResults', 'Results', 'TryAddClientSecurities',
   * 'TryDeleteClientSecurities', 'TryLookupSecuritiesFromCodes',
   * 'ExpandedGroup', 'CreateCorporateAction', 'CorporateAction',
   * 'CorporateActionTransition', 'ReconciliationRequest', 'ReconciliationBreak',
   * 'TransactionConfigurationData', 'TransactionConfigurationMovementData',
   * 'TransactionConfigurationTypeAlias', 'TryUpsertCorporateActions',
   * 'Iso4217CurrencyUnit', 'BasicUnit', 'CorporateActionTransitionComponent',
   * 'TargetTaxlot', 'AdjustHoldingRequest', 'HoldingsAdjustment',
   * 'HoldingsAdjustmentHeader'
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<SchemaDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getEntitySchemaWithHttpOperationResponse(entity: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.SchemaDto>>;

  /**
   * @param {string} entity Possible values include: 'PropertyKey',
   * 'FieldSchema', 'Personalisation', 'Security', 'Property',
   * 'CreatePropertyRequest', 'CreatePerpetualPropertyRequest',
   * 'PerpetualProperty', 'Login', 'PropertyDefinition', 'PropertyDataFormat',
   * 'AggregationResponseNode', 'Portfolio', 'CompletePortfolio',
   * 'PortfolioSearchResult', 'PortfolioDetails', 'PortfolioProperties',
   * 'Version', 'AddTradeProperty', 'AnalyticStore', 'AnalyticStoreKey',
   * 'UpsertPortfolioTrades', 'Group', 'Constituent', 'Trade',
   * 'UpsertPortfolioTradesRequest', 'PortfolioHolding', 'AdjustHolding',
   * 'ErrorDetail', 'ErrorResponse', 'InstrumentDefinition', 'ProcessedCommand',
   * 'CreatePortfolio', 'CreateAnalyticStore', 'CreateClientSecurity',
   * 'CreateDerivedPortfolio', 'CreateGroup', 'CreatePropertyDataFormat',
   * 'CreatePropertyDefinition', 'UpdatePortfolio', 'UpdateGroup',
   * 'UpdatePropertyDataFormat', 'UpdatePropertyDefinition', 'SecurityAnalytic',
   * 'AggregationRequest', 'Aggregation', 'NestedAggregation',
   * 'ResultDataSchema', 'Classification', 'SecurityClassification',
   * 'WebLogMessage', 'UpsertPersonalisation', 'CreatePortfolioDetails',
   * 'UpsertConstituent', 'CreateResults', 'Results', 'TryAddClientSecurities',
   * 'TryDeleteClientSecurities', 'TryLookupSecuritiesFromCodes',
   * 'ExpandedGroup', 'CreateCorporateAction', 'CorporateAction',
   * 'CorporateActionTransition', 'ReconciliationRequest', 'ReconciliationBreak',
   * 'TransactionConfigurationData', 'TransactionConfigurationMovementData',
   * 'TransactionConfigurationTypeAlias', 'TryUpsertCorporateActions',
   * 'Iso4217CurrencyUnit', 'BasicUnit', 'CorporateActionTransitionComponent',
   * 'TargetTaxlot', 'AdjustHoldingRequest', 'HoldingsAdjustment',
   * 'HoldingsAdjustmentHeader'
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {SchemaDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {SchemaDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link SchemaDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getEntitySchema(entity: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.SchemaDto>;
  getEntitySchema(entity: string, callback: ServiceCallback<models.SchemaDto>): void;
  getEntitySchema(entity: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.SchemaDto>): void;


  /**
   * @summary Get the schemas for the provided list of property keys
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.propertyKeys] A comma delimited list of property
   * keys in string format. e.g.
   * "Portfolio/default/PropertyName,Portfolio/differentScope/MyProperty"
   *
   * @param {date} [options.asAt]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<PropertySchemaDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getPropertySchemaWithHttpOperationResponse(options?: { propertyKeys? : string[], asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.PropertySchemaDto>>;

  /**
   * @summary Get the schemas for the provided list of property keys
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.propertyKeys] A comma delimited list of property
   * keys in string format. e.g.
   * "Portfolio/default/PropertyName,Portfolio/differentScope/MyProperty"
   *
   * @param {date} [options.asAt]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {PropertySchemaDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {PropertySchemaDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PropertySchemaDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getPropertySchema(options?: { propertyKeys? : string[], asAt? : Date, customHeaders? : { [headerName: string]: string; } }): Promise<models.PropertySchemaDto>;
  getPropertySchema(callback: ServiceCallback<models.PropertySchemaDto>): void;
  getPropertySchema(options: { propertyKeys? : string[], asAt? : Date, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PropertySchemaDto>): void;


  /**
   * @summary Gets the available value types that could be returned in a schema
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ResourceListOfUiDataType>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getValueTypesWithHttpOperationResponse(options?: { sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ResourceListOfUiDataType>>;

  /**
   * @summary Gets the available value types that could be returned in a schema
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.sortBy]
   *
   * @param {number} [options.start]
   *
   * @param {number} [options.limit]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ResourceListOfUiDataType} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ResourceListOfUiDataType} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListOfUiDataType} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getValueTypes(options?: { sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }): Promise<models.ResourceListOfUiDataType>;
  getValueTypes(callback: ServiceCallback<models.ResourceListOfUiDataType>): void;
  getValueTypes(options: { sortBy? : string[], start? : number, limit? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ResourceListOfUiDataType>): void;


  /**
   * @summary Attempt to create one or more client securities. Failed securities
   * will be identified in the body of the response.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.definitions]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<TryAddClientSecuritiesDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  batchAddClientSecuritiesWithHttpOperationResponse(options?: { definitions? : models.CreateClientSecurityRequest[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.TryAddClientSecuritiesDto>>;

  /**
   * @summary Attempt to create one or more client securities. Failed securities
   * will be identified in the body of the response.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.definitions]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {TryAddClientSecuritiesDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {TryAddClientSecuritiesDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link TryAddClientSecuritiesDto} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  batchAddClientSecurities(options?: { definitions? : models.CreateClientSecurityRequest[], customHeaders? : { [headerName: string]: string; } }): Promise<models.TryAddClientSecuritiesDto>;
  batchAddClientSecurities(callback: ServiceCallback<models.TryAddClientSecuritiesDto>): void;
  batchAddClientSecurities(options: { definitions? : models.CreateClientSecurityRequest[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.TryAddClientSecuritiesDto>): void;


  /**
   * @summary Attempt to delete one or more client securities. Failed securities
   * will be identified in the body of the response.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.uids]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<TryDeleteClientSecuritiesDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  batchDeleteClientSecuritiesWithHttpOperationResponse(options?: { uids? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.TryDeleteClientSecuritiesDto>>;

  /**
   * @summary Attempt to delete one or more client securities. Failed securities
   * will be identified in the body of the response.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.uids]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {TryDeleteClientSecuritiesDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {TryDeleteClientSecuritiesDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link TryDeleteClientSecuritiesDto} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  batchDeleteClientSecurities(options?: { uids? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<models.TryDeleteClientSecuritiesDto>;
  batchDeleteClientSecurities(callback: ServiceCallback<models.TryDeleteClientSecuritiesDto>): void;
  batchDeleteClientSecurities(options: { uids? : string[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.TryDeleteClientSecuritiesDto>): void;


  /**
   * @summary Get an individual security by the unique security uid.  Optionally,
   * decorate each security with specific properties.
   *
   * @param {string} uid The uid of the requested security
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt] As at date
   *
   * @param {array} [options.propertyKeys] Keys of the properties to be retrieved
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<SecurityDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getSecurityWithHttpOperationResponse(uid: string, options?: { asAt? : Date, propertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.SecurityDto>>;

  /**
   * @summary Get an individual security by the unique security uid.  Optionally,
   * decorate each security with specific properties.
   *
   * @param {string} uid The uid of the requested security
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt] As at date
   *
   * @param {array} [options.propertyKeys] Keys of the properties to be retrieved
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {SecurityDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {SecurityDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link SecurityDto} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getSecurity(uid: string, options?: { asAt? : Date, propertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<models.SecurityDto>;
  getSecurity(uid: string, callback: ServiceCallback<models.SecurityDto>): void;
  getSecurity(uid: string, options: { asAt? : Date, propertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.SecurityDto>): void;


  /**
   * @summary Lookup more than one security by supplying a collection of
   * non-Finbourne codes.  Optionally, decorate each security with specific
   * properties.
   *
   * @param {string} codeType The type of identifier. Possible values include:
   * 'Undefined', 'ReutersAssetId', 'CINS', 'Isin', 'Sedol', 'Cusip', 'Ticker',
   * 'ClientInternal', 'Figi', 'CompositeFigi', 'ShareClassFigi', 'Wertpapier'
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.codes] An array of codes
   *
   * @param {date} [options.asAt] As at date
   *
   * @param {array} [options.propertyKeys] Keys of the properties to be retrieved
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<TryLookupSecuritiesFromCodesDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  lookupSecuritiesFromCodesWithHttpOperationResponse(codeType: string, options?: { codes? : string[], asAt? : Date, propertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.TryLookupSecuritiesFromCodesDto>>;

  /**
   * @summary Lookup more than one security by supplying a collection of
   * non-Finbourne codes.  Optionally, decorate each security with specific
   * properties.
   *
   * @param {string} codeType The type of identifier. Possible values include:
   * 'Undefined', 'ReutersAssetId', 'CINS', 'Isin', 'Sedol', 'Cusip', 'Ticker',
   * 'ClientInternal', 'Figi', 'CompositeFigi', 'ShareClassFigi', 'Wertpapier'
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.codes] An array of codes
   *
   * @param {date} [options.asAt] As at date
   *
   * @param {array} [options.propertyKeys] Keys of the properties to be retrieved
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {TryLookupSecuritiesFromCodesDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {TryLookupSecuritiesFromCodesDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link TryLookupSecuritiesFromCodesDto} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  lookupSecuritiesFromCodes(codeType: string, options?: { codes? : string[], asAt? : Date, propertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<models.TryLookupSecuritiesFromCodesDto>;
  lookupSecuritiesFromCodes(codeType: string, callback: ServiceCallback<models.TryLookupSecuritiesFromCodesDto>): void;
  lookupSecuritiesFromCodes(codeType: string, options: { codes? : string[], asAt? : Date, propertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.TryLookupSecuritiesFromCodesDto>): void;


  /**
   * @summary Lookup a large number of securities by supplying a collection of
   * non-Finbourne codes.  Optionally, decorate each security with specific
   * properties.
   *
   * @param {string} codeType The type of identifier. Possible values include:
   * 'Undefined', 'ReutersAssetId', 'CINS', 'Isin', 'Sedol', 'Cusip', 'Ticker',
   * 'ClientInternal', 'Figi', 'CompositeFigi', 'ShareClassFigi', 'Wertpapier'
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.codes] An array of codes
   *
   * @param {date} [options.asAt] As at date
   *
   * @param {array} [options.propertyKeys] Keys of the properties to be retrieved
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<TryLookupSecuritiesFromCodesDto>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  lookupSecuritiesFromCodesBulkWithHttpOperationResponse(codeType: string, options?: { codes? : string[], asAt? : Date, propertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.TryLookupSecuritiesFromCodesDto>>;

  /**
   * @summary Lookup a large number of securities by supplying a collection of
   * non-Finbourne codes.  Optionally, decorate each security with specific
   * properties.
   *
   * @param {string} codeType The type of identifier. Possible values include:
   * 'Undefined', 'ReutersAssetId', 'CINS', 'Isin', 'Sedol', 'Cusip', 'Ticker',
   * 'ClientInternal', 'Figi', 'CompositeFigi', 'ShareClassFigi', 'Wertpapier'
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {array} [options.codes] An array of codes
   *
   * @param {date} [options.asAt] As at date
   *
   * @param {array} [options.propertyKeys] Keys of the properties to be retrieved
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {TryLookupSecuritiesFromCodesDto} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {TryLookupSecuritiesFromCodesDto} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link TryLookupSecuritiesFromCodesDto} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  lookupSecuritiesFromCodesBulk(codeType: string, options?: { codes? : string[], asAt? : Date, propertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }): Promise<models.TryLookupSecuritiesFromCodesDto>;
  lookupSecuritiesFromCodesBulk(codeType: string, callback: ServiceCallback<models.TryLookupSecuritiesFromCodesDto>): void;
  lookupSecuritiesFromCodesBulk(codeType: string, options: { codes? : string[], asAt? : Date, propertyKeys? : string[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.TryLookupSecuritiesFromCodesDto>): void;
}

export { LUSIDAPI, models as LUSIDAPIModels };
