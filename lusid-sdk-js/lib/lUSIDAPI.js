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

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

const msRest = require('ms-rest');
const ServiceClient = msRest.ServiceClient;
const WebResource = msRest.WebResource;

const models = require('./models');


/**
 * @summary Clears the entity caches on the instance that serves this request
 * only.
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ClearEntityCachesDto} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _clearEntityCaches(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/_internal/clearentitycaches';

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ClearEntityCachesDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ListAggregationResponse} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getAggregationByGroup(scope, groupCode, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let request = (options && options.request !== undefined) ? options.request : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (groupCode === null || groupCode === undefined || typeof groupCode.valueOf() !== 'string') {
      throw new Error('groupCode cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/aggregation/groups/{scope}/{groupCode}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{groupCode}', encodeURIComponent(groupCode));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (request !== null && request !== undefined) {
      let requestModelMapper = new client.models['AggregationRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, request, 'request');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(request, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ListAggregationResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link NestedAggregationResponse} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getNestedAggregationByGroup(scope, groupCode, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let request = (options && options.request !== undefined) ? options.request : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (groupCode === null || groupCode === undefined || typeof groupCode.valueOf() !== 'string') {
      throw new Error('groupCode cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/aggregation/groups/nested/{scope}/{groupCode}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{groupCode}', encodeURIComponent(groupCode));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (request !== null && request !== undefined) {
      let requestModelMapper = new client.models['AggregationRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, request, 'request');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(request, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['NestedAggregationResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ListAggregationResponse} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getAggregationByPortfolio(scope, portfolioCode, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let request = (options && options.request !== undefined) ? options.request : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (portfolioCode === null || portfolioCode === undefined || typeof portfolioCode.valueOf() !== 'string') {
      throw new Error('portfolioCode cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/aggregation/portfolios/{scope}/{portfolioCode}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{portfolioCode}', encodeURIComponent(portfolioCode));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (request !== null && request !== undefined) {
      let requestModelMapper = new client.models['AggregationRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, request, 'request');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(request, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ListAggregationResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link NestedAggregationResponse} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getNestedAggregationByPortfolio(scope, portfolioCode, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let request = (options && options.request !== undefined) ? options.request : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (portfolioCode === null || portfolioCode === undefined || typeof portfolioCode.valueOf() !== 'string') {
      throw new Error('portfolioCode cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/aggregation/portfolios/nested/{scope}/{portfolioCode}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{portfolioCode}', encodeURIComponent(portfolioCode));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (request !== null && request !== undefined) {
      let requestModelMapper = new client.models['AggregationRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, request, 'request');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(request, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['NestedAggregationResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ListAggregationResponse} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getAggregationByResultSet(scope, resultsKey, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let request = (options && options.request !== undefined) ? options.request : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (resultsKey === null || resultsKey === undefined || typeof resultsKey.valueOf() !== 'string') {
      throw new Error('resultsKey cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/aggregation/results/{scope}/{resultsKey}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{resultsKey}', encodeURIComponent(resultsKey));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (request !== null && request !== undefined) {
      let requestModelMapper = new client.models['AggregationRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, request, 'request');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(request, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ListAggregationResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link NestedAggregationResponse} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getNestedAggregationByResultSet(scope, resultsKey, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let request = (options && options.request !== undefined) ? options.request : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (resultsKey === null || resultsKey === undefined || typeof resultsKey.valueOf() !== 'string') {
      throw new Error('resultsKey cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/aggregation/results/nested/{scope}/{resultsKey}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{resultsKey}', encodeURIComponent(resultsKey));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (request !== null && request !== undefined) {
      let requestModelMapper = new client.models['AggregationRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, request, 'request');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(request, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['NestedAggregationResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListAnalyticStoreKeyDto} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _listAnalyticStores(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  let filter = (options && options.filter !== undefined) ? options.filter : undefined;
  // Validate
  try {
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/analytics';
  let queryParameters = [];
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (filter !== null && filter !== undefined) {
    queryParameters.push('filter=' + encodeURIComponent(filter));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListAnalyticStoreKeyDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link AnalyticStoreDto} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _createAnalyticStore(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let request = (options && options.request !== undefined) ? options.request : undefined;

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/analytics';

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (request !== null && request !== undefined) {
      let requestModelMapper = new client.models['CreateAnalyticStoreRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, request, 'request');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(request, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 201) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 201) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['AnalyticStoreDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link AnalyticStoreDto} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getAnalyticStore(scope, year, month, day, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (year === null || year === undefined || typeof year !== 'number') {
      throw new Error('year cannot be null or undefined and it must be of type number.');
    }
    if (month === null || month === undefined || typeof month !== 'number') {
      throw new Error('month cannot be null or undefined and it must be of type number.');
    }
    if (day === null || day === undefined || typeof day !== 'number') {
      throw new Error('day cannot be null or undefined and it must be of type number.');
    }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/analytics/{scope}/{year}/{month}/{day}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{year}', encodeURIComponent(year.toString()));
  requestUrl = requestUrl.replace('{month}', encodeURIComponent(month.toString()));
  requestUrl = requestUrl.replace('{day}', encodeURIComponent(day.toString()));
  let queryParameters = [];
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['AnalyticStoreDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link DeletedEntityResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _deleteAnalyticStore(scope, year, month, day, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (year === null || year === undefined || typeof year !== 'number') {
      throw new Error('year cannot be null or undefined and it must be of type number.');
    }
    if (month === null || month === undefined || typeof month !== 'number') {
      throw new Error('month cannot be null or undefined and it must be of type number.');
    }
    if (day === null || day === undefined || typeof day !== 'number') {
      throw new Error('day cannot be null or undefined and it must be of type number.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/analytics/{scope}/{year}/{month}/{day}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{year}', encodeURIComponent(year.toString()));
  requestUrl = requestUrl.replace('{month}', encodeURIComponent(month.toString()));
  requestUrl = requestUrl.replace('{day}', encodeURIComponent(day.toString()));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'DELETE';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['DeletedEntityResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link AnalyticStoreDto} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _insertAnalytics(scope, year, month, day, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let data = (options && options.data !== undefined) ? options.data : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (year === null || year === undefined || typeof year !== 'number') {
      throw new Error('year cannot be null or undefined and it must be of type number.');
    }
    if (month === null || month === undefined || typeof month !== 'number') {
      throw new Error('month cannot be null or undefined and it must be of type number.');
    }
    if (day === null || day === undefined || typeof day !== 'number') {
      throw new Error('day cannot be null or undefined and it must be of type number.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/analytics/{scope}/{year}/{month}/{day}/prices';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{year}', encodeURIComponent(year.toString()));
  requestUrl = requestUrl.replace('{month}', encodeURIComponent(month.toString()));
  requestUrl = requestUrl.replace('{day}', encodeURIComponent(day.toString()));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (data !== null && data !== undefined) {
      let requestModelMapper = {
        required: false,
        serializedName: 'data',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'SecurityAnalyticDataDtoElementType',
              type: {
                name: 'Composite',
                className: 'SecurityAnalyticDataDto'
              }
          }
        }
      };
      requestModel = client.serialize(requestModelMapper, data, 'data');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(data, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['AnalyticStoreDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ClassificationsDto} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _upsertClassification(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let classifications = (options && options.classifications !== undefined) ? options.classifications : undefined;

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/classifications';

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (classifications !== null && classifications !== undefined) {
      let requestModelMapper = {
        required: false,
        serializedName: 'classifications',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'SecurityClassificationDtoElementType',
              type: {
                name: 'Composite',
                className: 'SecurityClassificationDto'
              }
          }
        }
      };
      requestModel = client.serialize(requestModelMapper, classifications, 'classifications');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(classifications, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 201) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 201) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ClassificationsDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link TxnMetaDataDto} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _addConfigurationTransactionType(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let type = (options && options.type !== undefined) ? options.type : undefined;

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/configuration/transactiontype';

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (type !== null && type !== undefined) {
      let requestModelMapper = new client.models['TxnMetaDataDto']().mapper();
      requestModel = client.serialize(requestModelMapper, type, 'type');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(type, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 201) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 201) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['TxnMetaDataDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Gets the list of persisted transaction types
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListTxnMetaDataDto} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getConfigurationTransactionTypes(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/configuration/transactiontypes';

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListTxnMetaDataDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListTxnMetaDataDto} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _uploadConfigurationTransactionTypes(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let types = (options && options.types !== undefined) ? options.types : undefined;

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/configuration/transactiontypes';

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (types !== null && types !== undefined) {
      let requestModelMapper = {
        required: false,
        serializedName: 'types',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'TxnMetaDataDtoElementType',
              type: {
                name: 'Composite',
                className: 'TxnMetaDataDto'
              }
          }
        }
      };
      requestModel = client.serialize(requestModelMapper, types, 'types');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(types, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 201) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 201) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListTxnMetaDataDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {array} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _listCorporateActions(scope, corporateActionSourceCode, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let effectiveAt = (options && options.effectiveAt !== undefined) ? options.effectiveAt : undefined;
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (corporateActionSourceCode === null || corporateActionSourceCode === undefined || typeof corporateActionSourceCode.valueOf() !== 'string') {
      throw new Error('corporateActionSourceCode cannot be null or undefined and it must be of type string.');
    }
    if (effectiveAt && !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt must be of type date.');
        }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/corporateactions/{scope}/{corporateActionSourceCode}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{corporateActionSourceCode}', encodeURIComponent(corporateActionSourceCode));
  let queryParameters = [];
  if (effectiveAt !== null && effectiveAt !== undefined) {
    queryParameters.push('effectiveAt=' + encodeURIComponent(client.serializeObject(effectiveAt)));
  }
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = {
            required: false,
            serializedName: 'parsedResponse',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CorporateActionEventDtoElementType',
                  type: {
                    name: 'Composite',
                    className: 'CorporateActionEventDto'
                  }
              }
            }
          };
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link TryUpsertCorporateActionsDto} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _batchUpsertCorporateActions(scope, corporateActionSourceCode, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let actions = (options && options.actions !== undefined) ? options.actions : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (corporateActionSourceCode === null || corporateActionSourceCode === undefined || typeof corporateActionSourceCode.valueOf() !== 'string') {
      throw new Error('corporateActionSourceCode cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/corporateactions/{scope}/{corporateActionSourceCode}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{corporateActionSourceCode}', encodeURIComponent(corporateActionSourceCode));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (actions !== null && actions !== undefined) {
      let requestModelMapper = {
        required: false,
        serializedName: 'actions',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'UpsertCorporateActionRequestElementType',
              type: {
                name: 'Composite',
                className: 'UpsertCorporateActionRequest'
              }
          }
        }
      };
      requestModel = client.serialize(requestModelMapper, actions, 'actions');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(actions, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 201) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 201) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['TryUpsertCorporateActionsDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @param {object} [options] Optional Parameters.
 *
 * @param {string} [options.version]
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {string} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getDownloadUrl(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let version = (options && options.version !== undefined) ? options.version : undefined;
  // Validate
  try {
    if (version !== null && version !== undefined && typeof version.valueOf() !== 'string') {
      throw new Error('version must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/excel/download-token';
  let queryParameters = [];
  if (version !== null && version !== undefined) {
    queryParameters.push('version=' + encodeURIComponent(version));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = {
            required: false,
            serializedName: 'parsedResponse',
            type: {
              name: 'String'
            }
          };
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {string} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getLatestVersion(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/excel/latest-version';

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = {
            required: false,
            serializedName: 'parsedResponse',
            type: {
              name: 'String'
            }
          };
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListGroupDto} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _listPortfolioGroups(scope, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  let filter = (options && options.filter !== undefined) ? options.filter : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/groups/portfolios/{scope}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  let queryParameters = [];
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (filter !== null && filter !== undefined) {
    queryParameters.push('filter=' + encodeURIComponent(filter));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListGroupDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link GroupDto} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _createPortfolioGroup(scope, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let request = (options && options.request !== undefined) ? options.request : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/groups/portfolios/{scope}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (request !== null && request !== undefined) {
      let requestModelMapper = new client.models['CreateGroupRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, request, 'request');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(request, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 201) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 201) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['GroupDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link GroupDto} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getPortfolioGroup(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/groups/portfolios/{scope}/{code}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['GroupDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link DeletedEntityResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _deletePortfolioGroup(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/groups/portfolios/{scope}/{code}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'DELETE';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['DeletedEntityResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListProcessedCommandDto} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getPortfolioGroupCommands(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let fromAsAt = (options && options.fromAsAt !== undefined) ? options.fromAsAt : undefined;
  let toAsAt = (options && options.toAsAt !== undefined) ? options.toAsAt : undefined;
  let filter = (options && options.filter !== undefined) ? options.filter : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (fromAsAt && !(fromAsAt instanceof Date ||
        (typeof fromAsAt.valueOf() === 'string' && !isNaN(Date.parse(fromAsAt))))) {
          throw new Error('fromAsAt must be of type date.');
        }
    if (toAsAt && !(toAsAt instanceof Date ||
        (typeof toAsAt.valueOf() === 'string' && !isNaN(Date.parse(toAsAt))))) {
          throw new Error('toAsAt must be of type date.');
        }
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/groups/portfolios/{scope}/{code}/commands';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (fromAsAt !== null && fromAsAt !== undefined) {
    queryParameters.push('fromAsAt=' + encodeURIComponent(client.serializeObject(fromAsAt)));
  }
  if (toAsAt !== null && toAsAt !== undefined) {
    queryParameters.push('toAsAt=' + encodeURIComponent(client.serializeObject(toAsAt)));
  }
  if (filter !== null && filter !== undefined) {
    queryParameters.push('filter=' + encodeURIComponent(filter));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListProcessedCommandDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ExpandedGroupDto} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getPortfolioGroupExpansion(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let effectiveAt = (options && options.effectiveAt !== undefined) ? options.effectiveAt : undefined;
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  let propertyFilter = (options && options.propertyFilter !== undefined) ? options.propertyFilter : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (effectiveAt && !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt must be of type date.');
        }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
    if (Array.isArray(propertyFilter)) {
      for (let i = 0; i < propertyFilter.length; i++) {
        if (propertyFilter[i] !== null && propertyFilter[i] !== undefined && typeof propertyFilter[i].valueOf() !== 'string') {
          throw new Error('propertyFilter[i] must be of type string.');
        }
      }
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/groups/portfolios/{scope}/{code}/expansion';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (effectiveAt !== null && effectiveAt !== undefined) {
    queryParameters.push('effectiveAt=' + encodeURIComponent(client.serializeObject(effectiveAt)));
  }
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (propertyFilter !== null && propertyFilter !== undefined) {
    if (propertyFilter.length == 0) {
      queryParameters.push('propertyFilter=' + encodeURIComponent(''));
    } else {
      for (let item of propertyFilter) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('propertyFilter=' + encodeURIComponent('' + item));
      }
    }
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ExpandedGroupDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link GroupDto} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _addPortfolioToGroup(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let identifier = (options && options.identifier !== undefined) ? options.identifier : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/groups/portfolios/{scope}/{code}/portfolios';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (identifier !== null && identifier !== undefined) {
      let requestModelMapper = new client.models['ResourceId']().mapper();
      requestModel = client.serialize(requestModelMapper, identifier, 'identifier');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(identifier, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 201) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 201) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['GroupDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link GroupDto} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _deletePortfolioFromGroup(scope, code, portfolioScope, portfolioCode, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (portfolioScope === null || portfolioScope === undefined || typeof portfolioScope.valueOf() !== 'string') {
      throw new Error('portfolioScope cannot be null or undefined and it must be of type string.');
    }
    if (portfolioCode === null || portfolioCode === undefined || typeof portfolioCode.valueOf() !== 'string') {
      throw new Error('portfolioCode cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/groups/portfolios/{scope}/{code}/portfolios/{portfolioScope}/{portfolioCode}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  requestUrl = requestUrl.replace('{portfolioScope}', encodeURIComponent(portfolioScope));
  requestUrl = requestUrl.replace('{portfolioCode}', encodeURIComponent(portfolioCode));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'DELETE';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['GroupDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link GroupDto} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _addSubGroupToGroup(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let identifier = (options && options.identifier !== undefined) ? options.identifier : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/groups/portfolios/{scope}/{code}/subgroups';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (identifier !== null && identifier !== undefined) {
      let requestModelMapper = new client.models['ResourceId']().mapper();
      requestModel = client.serialize(requestModelMapper, identifier, 'identifier');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(identifier, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 201) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 201) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['GroupDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link GroupDto} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _deleteSubGroupFromGroup(scope, code, subgroupScope, subgroupCode, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (subgroupScope === null || subgroupScope === undefined || typeof subgroupScope.valueOf() !== 'string') {
      throw new Error('subgroupScope cannot be null or undefined and it must be of type string.');
    }
    if (subgroupCode === null || subgroupCode === undefined || typeof subgroupCode.valueOf() !== 'string') {
      throw new Error('subgroupCode cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/groups/portfolios/{scope}/{code}/subgroups/{subgroupScope}/{subgroupCode}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  requestUrl = requestUrl.replace('{subgroupScope}', encodeURIComponent(subgroupScope));
  requestUrl = requestUrl.replace('{subgroupCode}', encodeURIComponent(subgroupCode));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'DELETE';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['GroupDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link GroupDto} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _updatePortfolioGroup(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let request = (options && options.request !== undefined) ? options.request : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/groups/portfolios/{scope}/{code}/update';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'PUT';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (request !== null && request !== undefined) {
      let requestModelMapper = new client.models['UpdateGroupRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, request, 'request');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(request, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 201) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 201) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['GroupDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListGroupDto} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _portfolioGroupsSearch(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let request = (options && options.request !== undefined) ? options.request : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  let filter = (options && options.filter !== undefined) ? options.filter : undefined;
  // Validate
  try {
    if (request !== null && request !== undefined && typeof request !== 'object') {
      throw new Error('request must be of type object.');
    }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/groups/search';
  let queryParameters = [];
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (filter !== null && filter !== undefined) {
    queryParameters.push('filter=' + encodeURIComponent(filter));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (request !== null && request !== undefined) {
      let requestModelMapper = {
        required: false,
        serializedName: 'request',
        type: {
          name: 'Object'
        }
      };
      requestModel = client.serialize(requestModelMapper, request, 'request');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(request, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListGroupDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Simple heartbeat method for the api
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {string} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getHealth(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/health';

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = {
            required: false,
            serializedName: 'parsedResponse',
            type: {
              name: 'String'
            }
          };
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Gets the login information.
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link LoginResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getLoginInfo(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/login';

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['LoginResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {string} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _storeWebLogs(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let message = (options && options.message !== undefined) ? options.message : undefined;

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/logs/lusidweb';

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (message !== null && message !== undefined) {
      let requestModelMapper = new client.models['WebLogMessage']().mapper();
      requestModel = client.serialize(requestModelMapper, message, 'message');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(message, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 204) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 204) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = {
            required: false,
            serializedName: 'parsedResponse',
            type: {
              name: 'String'
            }
          };
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Returns the current assembly version
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {string} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getBuildVersion(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/metadata/buildversion';

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = {
            required: false,
            serializedName: 'parsedResponse',
            type: {
              name: 'String'
            }
          };
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Returns the current assembly version
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {string} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _verifyConnectivity(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/metadata/verifyconnectivity';

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = {
            required: false,
            serializedName: 'parsedResponse',
            type: {
              name: 'String'
            }
          };
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Returns the current assembly version
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {string} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getVersion(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/metadata/version';

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = {
            required: false,
            serializedName: 'parsedResponse',
            type: {
              name: 'String'
            }
          };
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Get a personalisation, recursing to get any referenced if required.
 *
 * @param {boolean} recursive Whether to recurse into dereference recursive
 * settings
 *
 * @param {boolean} wildcards Whether to apply wildcards to the provided
 * pattern and pull back any matching
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {string} [options.pattern] The search pattern or specific key
 *
 * @param {string} [options.scope] The scope level to request for. Possible
 * values include: 'User', 'Group', 'Default', 'All'
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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListPersonalisationDto} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getPersonalisations(recursive, wildcards, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let pattern = (options && options.pattern !== undefined) ? options.pattern : undefined;
  let scope = (options && options.scope !== undefined) ? options.scope : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  // Validate
  try {
    if (pattern !== null && pattern !== undefined && typeof pattern.valueOf() !== 'string') {
      throw new Error('pattern must be of type string.');
    }
    if (scope !== null && scope !== undefined && typeof scope.valueOf() !== 'string') {
      throw new Error('scope must be of type string.');
    }
    if (recursive === null || recursive === undefined || typeof recursive !== 'boolean') {
      throw new Error('recursive cannot be null or undefined and it must be of type boolean.');
    }
    if (wildcards === null || wildcards === undefined || typeof wildcards !== 'boolean') {
      throw new Error('wildcards cannot be null or undefined and it must be of type boolean.');
    }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/personalisations';
  let queryParameters = [];
  if (pattern !== null && pattern !== undefined) {
    queryParameters.push('pattern=' + encodeURIComponent(pattern));
  }
  if (scope !== null && scope !== undefined) {
    queryParameters.push('scope=' + encodeURIComponent(scope));
  }
  queryParameters.push('recursive=' + encodeURIComponent(recursive.toString()));
  queryParameters.push('wildcards=' + encodeURIComponent(wildcards.toString()));
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListPersonalisationDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link UpsertPersonalisationsResponse} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _upsertPersonalisations(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let personalisations = (options && options.personalisations !== undefined) ? options.personalisations : undefined;

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/personalisations';

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (personalisations !== null && personalisations !== undefined) {
      let requestModelMapper = {
        required: false,
        serializedName: 'personalisations',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'PersonalisationDtoElementType',
              type: {
                name: 'Composite',
                className: 'PersonalisationDto'
              }
          }
        }
      };
      requestModel = client.serialize(requestModelMapper, personalisations, 'personalisations');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(personalisations, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 201) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 201) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['UpsertPersonalisationsResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Delete a personalisation at a specific scope (or use scope ALL to
 * purge the setting entirely)
 *
 * @param {string} scope The scope to delete at (use ALL to purge the setting
 * entirely). Possible values include: 'User', 'Group', 'Default', 'All'
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {string} [options.key] The key of the setting to be deleted
 *
 * @param {string} [options.group] If deleting a setting at group level,
 * specify the group here
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link DeletedEntityResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _deletePersonalisation(scope, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let key = (options && options.key !== undefined) ? options.key : undefined;
  let group = (options && options.group !== undefined) ? options.group : undefined;
  // Validate
  try {
    if (key !== null && key !== undefined && typeof key.valueOf() !== 'string') {
      throw new Error('key must be of type string.');
    }
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (group !== null && group !== undefined && typeof group.valueOf() !== 'string') {
      throw new Error('group must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/personalisations';
  let queryParameters = [];
  if (key !== null && key !== undefined) {
    queryParameters.push('key=' + encodeURIComponent(key));
  }
  queryParameters.push('scope=' + encodeURIComponent(scope));
  if (group !== null && group !== undefined) {
    queryParameters.push('group=' + encodeURIComponent(group));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'DELETE';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['DeletedEntityResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListScope} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _listPortfolioScopes(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  // Validate
  try {
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/portfolios';
  let queryParameters = [];
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListScope']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListPortfolioDto} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _listPortfolios(scope, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let effectiveAt = (options && options.effectiveAt !== undefined) ? options.effectiveAt : undefined;
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  let filter = (options && options.filter !== undefined) ? options.filter : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (effectiveAt && !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt must be of type date.');
        }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/portfolios/{scope}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  let queryParameters = [];
  if (effectiveAt !== null && effectiveAt !== undefined) {
    queryParameters.push('effectiveAt=' + encodeURIComponent(client.serializeObject(effectiveAt)));
  }
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (filter !== null && filter !== undefined) {
    queryParameters.push('filter=' + encodeURIComponent(filter));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListPortfolioDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {array} [options.createRequest.properties] Portfolio properties to
 * add to the portfolio
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link PortfolioDto} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _createPortfolio(scope, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let createRequest = (options && options.createRequest !== undefined) ? options.createRequest : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/portfolios/{scope}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (createRequest !== null && createRequest !== undefined) {
      let requestModelMapper = new client.models['CreatePortfolioRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, createRequest, 'createRequest');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(createRequest, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 201) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 201) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['PortfolioDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link PortfolioDto} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getPortfolio(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let effectiveAt = (options && options.effectiveAt !== undefined) ? options.effectiveAt : undefined;
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  let propertyFilter = (options && options.propertyFilter !== undefined) ? options.propertyFilter : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (effectiveAt && !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt must be of type date.');
        }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
    if (Array.isArray(propertyFilter)) {
      for (let i = 0; i < propertyFilter.length; i++) {
        if (propertyFilter[i] !== null && propertyFilter[i] !== undefined && typeof propertyFilter[i].valueOf() !== 'string') {
          throw new Error('propertyFilter[i] must be of type string.');
        }
      }
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/portfolios/{scope}/{code}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (effectiveAt !== null && effectiveAt !== undefined) {
    queryParameters.push('effectiveAt=' + encodeURIComponent(client.serializeObject(effectiveAt)));
  }
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (propertyFilter !== null && propertyFilter !== undefined) {
    if (propertyFilter.length == 0) {
      queryParameters.push('propertyFilter=' + encodeURIComponent(''));
    } else {
      for (let item of propertyFilter) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('propertyFilter=' + encodeURIComponent('' + item));
      }
    }
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['PortfolioDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link PortfolioDto} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _updatePortfolio(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let request = (options && options.request !== undefined) ? options.request : undefined;
  let effectiveAt = (options && options.effectiveAt !== undefined) ? options.effectiveAt : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (effectiveAt && !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/portfolios/{scope}/{code}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (effectiveAt !== null && effectiveAt !== undefined) {
    queryParameters.push('effectiveAt=' + encodeURIComponent(client.serializeObject(effectiveAt)));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'PUT';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (request !== null && request !== undefined) {
      let requestModelMapper = new client.models['UpdatePortfolioRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, request, 'request');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(request, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['PortfolioDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link DeletedEntityResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _deletePortfolio(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let effectiveAt = (options && options.effectiveAt !== undefined) ? options.effectiveAt : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (effectiveAt && !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/portfolios/{scope}/{code}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (effectiveAt !== null && effectiveAt !== undefined) {
    queryParameters.push('effectiveAt=' + encodeURIComponent(client.serializeObject(effectiveAt)));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'DELETE';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['DeletedEntityResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListProcessedCommandDto} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getCommands(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let fromAsAt = (options && options.fromAsAt !== undefined) ? options.fromAsAt : undefined;
  let toAsAt = (options && options.toAsAt !== undefined) ? options.toAsAt : undefined;
  let filter = (options && options.filter !== undefined) ? options.filter : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (fromAsAt && !(fromAsAt instanceof Date ||
        (typeof fromAsAt.valueOf() === 'string' && !isNaN(Date.parse(fromAsAt))))) {
          throw new Error('fromAsAt must be of type date.');
        }
    if (toAsAt && !(toAsAt instanceof Date ||
        (typeof toAsAt.valueOf() === 'string' && !isNaN(Date.parse(toAsAt))))) {
          throw new Error('toAsAt must be of type date.');
        }
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/portfolios/{scope}/{code}/commands';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (fromAsAt !== null && fromAsAt !== undefined) {
    queryParameters.push('fromAsAt=' + encodeURIComponent(client.serializeObject(fromAsAt)));
  }
  if (toAsAt !== null && toAsAt !== undefined) {
    queryParameters.push('toAsAt=' + encodeURIComponent(client.serializeObject(toAsAt)));
  }
  if (filter !== null && filter !== undefined) {
    queryParameters.push('filter=' + encodeURIComponent(filter));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListProcessedCommandDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link PortfolioDetailsDto} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getDetails(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let effectiveAt = (options && options.effectiveAt !== undefined) ? options.effectiveAt : undefined;
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  let propertyFilter = (options && options.propertyFilter !== undefined) ? options.propertyFilter : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (effectiveAt && !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt must be of type date.');
        }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
    if (Array.isArray(propertyFilter)) {
      for (let i = 0; i < propertyFilter.length; i++) {
        if (propertyFilter[i] !== null && propertyFilter[i] !== undefined && typeof propertyFilter[i].valueOf() !== 'string') {
          throw new Error('propertyFilter[i] must be of type string.');
        }
      }
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/portfolios/{scope}/{code}/details';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (effectiveAt !== null && effectiveAt !== undefined) {
    queryParameters.push('effectiveAt=' + encodeURIComponent(client.serializeObject(effectiveAt)));
  }
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (propertyFilter !== null && propertyFilter !== undefined) {
    if (propertyFilter.length == 0) {
      queryParameters.push('propertyFilter=' + encodeURIComponent(''));
    } else {
      for (let item of propertyFilter) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('propertyFilter=' + encodeURIComponent('' + item));
      }
    }
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['PortfolioDetailsDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link PortfolioDetailsDto} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _upsertPortfolioDetails(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let details = (options && options.details !== undefined) ? options.details : undefined;
  let effectiveAt = (options && options.effectiveAt !== undefined) ? options.effectiveAt : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (effectiveAt && !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/portfolios/{scope}/{code}/details';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (effectiveAt !== null && effectiveAt !== undefined) {
    queryParameters.push('effectiveAt=' + encodeURIComponent(client.serializeObject(effectiveAt)));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (details !== null && details !== undefined) {
      let requestModelMapper = new client.models['PortfolioDetailsRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, details, 'details');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(details, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['PortfolioDetailsDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link DeletedEntityResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _deletePortfolioDetails(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let effectiveAt = (options && options.effectiveAt !== undefined) ? options.effectiveAt : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (effectiveAt && !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/portfolios/{scope}/{code}/details';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (effectiveAt !== null && effectiveAt !== undefined) {
    queryParameters.push('effectiveAt=' + encodeURIComponent(client.serializeObject(effectiveAt)));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'DELETE';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['DeletedEntityResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link VersionedResourceListHoldingDto} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getAggregateHoldings(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let effectiveAt = (options && options.effectiveAt !== undefined) ? options.effectiveAt : undefined;
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  let filter = (options && options.filter !== undefined) ? options.filter : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (effectiveAt && !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt must be of type date.');
        }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/portfolios/{scope}/{code}/holdings';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (effectiveAt !== null && effectiveAt !== undefined) {
    queryParameters.push('effectiveAt=' + encodeURIComponent(client.serializeObject(effectiveAt)));
  }
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (filter !== null && filter !== undefined) {
    queryParameters.push('filter=' + encodeURIComponent(filter));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['VersionedResourceListHoldingDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {array} [options.holdings]
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link UpsertPortfolioTradesDto} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _adjustHoldings(scope, code, effectiveAt, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let holdings = (options && options.holdings !== undefined) ? options.holdings : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if(!effectiveAt || !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt cannot be null or undefined and it must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/portfolios/{scope}/{code}/holdings/{effectiveAt}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  requestUrl = requestUrl.replace('{effectiveAt}', encodeURIComponent(client.serializeObject(effectiveAt)));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (holdings !== null && holdings !== undefined) {
      let requestModelMapper = {
        required: false,
        serializedName: 'holdings',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'HoldingAdjustmentDtoElementType',
              type: {
                name: 'Composite',
                className: 'HoldingAdjustmentDto'
              }
          }
        }
      };
      requestModel = client.serialize(requestModelMapper, holdings, 'holdings');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(holdings, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['UpsertPortfolioTradesDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link PortfolioPropertiesDto} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getProperties(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let effectiveAt = (options && options.effectiveAt !== undefined) ? options.effectiveAt : undefined;
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (effectiveAt && !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt must be of type date.');
        }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/portfolios/{scope}/{code}/properties';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (effectiveAt !== null && effectiveAt !== undefined) {
    queryParameters.push('effectiveAt=' + encodeURIComponent(client.serializeObject(effectiveAt)));
  }
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['PortfolioPropertiesDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link PortfolioPropertiesDto} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _upsertPortfolioProperties(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let properties = (options && options.properties !== undefined) ? options.properties : undefined;
  let effectiveAt = (options && options.effectiveAt !== undefined) ? options.effectiveAt : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (effectiveAt && !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/portfolios/{scope}/{code}/properties';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (effectiveAt !== null && effectiveAt !== undefined) {
    queryParameters.push('effectiveAt=' + encodeURIComponent(client.serializeObject(effectiveAt)));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (properties !== null && properties !== undefined) {
      let requestModelMapper = {
        required: false,
        serializedName: 'properties',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'CreatePropertyRequestElementType',
              type: {
                name: 'Composite',
                className: 'CreatePropertyRequest'
              }
          }
        }
      };
      requestModel = client.serialize(requestModelMapper, properties, 'properties');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(properties, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['PortfolioPropertiesDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link DeletedEntityResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _deletePortfolioProperty(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let property = (options && options.property !== undefined) ? options.property : undefined;
  let effectiveAt = (options && options.effectiveAt !== undefined) ? options.effectiveAt : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (property !== null && property !== undefined && typeof property.valueOf() !== 'string') {
      throw new Error('property must be of type string.');
    }
    if (effectiveAt && !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/portfolios/{scope}/{code}/properties';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (property !== null && property !== undefined) {
    queryParameters.push('property=' + encodeURIComponent(property));
  }
  if (effectiveAt !== null && effectiveAt !== undefined) {
    queryParameters.push('effectiveAt=' + encodeURIComponent(client.serializeObject(effectiveAt)));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'DELETE';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['DeletedEntityResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link DeletedEntityResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _deletePortfolioProperties(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let effectiveAt = (options && options.effectiveAt !== undefined) ? options.effectiveAt : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (effectiveAt && !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/portfolios/{scope}/{code}/properties/all';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (effectiveAt !== null && effectiveAt !== undefined) {
    queryParameters.push('effectiveAt=' + encodeURIComponent(client.serializeObject(effectiveAt)));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'DELETE';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['DeletedEntityResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Get trades
 *
 * @param {string} scope The scope of the portfolio
 *
 * @param {string} code Code for the portfolio
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {date} [options.fromTradeDate] Include trades with a trade date equal
 * or later than this date
 *
 * @param {date} [options.toTradeDate] Include trades with a trade date equal
 * or before this date
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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link VersionedResourceListTradeDto} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getTrades(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let fromTradeDate = (options && options.fromTradeDate !== undefined) ? options.fromTradeDate : undefined;
  let toTradeDate = (options && options.toTradeDate !== undefined) ? options.toTradeDate : undefined;
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  let securityPropertyKeys = (options && options.securityPropertyKeys !== undefined) ? options.securityPropertyKeys : undefined;
  let filter = (options && options.filter !== undefined) ? options.filter : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (fromTradeDate && !(fromTradeDate instanceof Date ||
        (typeof fromTradeDate.valueOf() === 'string' && !isNaN(Date.parse(fromTradeDate))))) {
          throw new Error('fromTradeDate must be of type date.');
        }
    if (toTradeDate && !(toTradeDate instanceof Date ||
        (typeof toTradeDate.valueOf() === 'string' && !isNaN(Date.parse(toTradeDate))))) {
          throw new Error('toTradeDate must be of type date.');
        }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
    if (Array.isArray(securityPropertyKeys)) {
      for (let i1 = 0; i1 < securityPropertyKeys.length; i1++) {
        if (securityPropertyKeys[i1] !== null && securityPropertyKeys[i1] !== undefined && typeof securityPropertyKeys[i1].valueOf() !== 'string') {
          throw new Error('securityPropertyKeys[i1] must be of type string.');
        }
      }
    }
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/portfolios/{scope}/{code}/trades';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (fromTradeDate !== null && fromTradeDate !== undefined) {
    queryParameters.push('fromTradeDate=' + encodeURIComponent(client.serializeObject(fromTradeDate)));
  }
  if (toTradeDate !== null && toTradeDate !== undefined) {
    queryParameters.push('toTradeDate=' + encodeURIComponent(client.serializeObject(toTradeDate)));
  }
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (securityPropertyKeys !== null && securityPropertyKeys !== undefined) {
    if (securityPropertyKeys.length == 0) {
      queryParameters.push('securityPropertyKeys=' + encodeURIComponent(''));
    } else {
      for (let item of securityPropertyKeys) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('securityPropertyKeys=' + encodeURIComponent('' + item));
      }
    }
  }
  if (filter !== null && filter !== undefined) {
    queryParameters.push('filter=' + encodeURIComponent(filter));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['VersionedResourceListTradeDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link UpsertPortfolioTradesDto} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _upsertTrades(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let trades = (options && options.trades !== undefined) ? options.trades : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/portfolios/{scope}/{code}/trades';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (trades !== null && trades !== undefined) {
      let requestModelMapper = {
        required: false,
        serializedName: 'trades',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'UpsertPortfolioTradeRequestElementType',
              type: {
                name: 'Composite',
                className: 'UpsertPortfolioTradeRequest'
              }
          }
        }
      };
      requestModel = client.serialize(requestModelMapper, trades, 'trades');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(trades, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['UpsertPortfolioTradesDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link DeletedEntityResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _deleteTrades(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let id = (options && options.id !== undefined) ? options.id : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (Array.isArray(id)) {
      for (let i = 0; i < id.length; i++) {
        if (id[i] !== null && id[i] !== undefined && typeof id[i].valueOf() !== 'string') {
          throw new Error('id[i] must be of type string.');
        }
      }
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/portfolios/{scope}/{code}/trades';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (id !== null && id !== undefined) {
    if (id.length == 0) {
      queryParameters.push('id=' + encodeURIComponent(''));
    } else {
      for (let item of id) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('id=' + encodeURIComponent('' + item));
      }
    }
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'DELETE';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['DeletedEntityResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link AddTradePropertyDto} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _addTradeProperty(scope, code, tradeId, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let properties = (options && options.properties !== undefined) ? options.properties : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (tradeId === null || tradeId === undefined || typeof tradeId.valueOf() !== 'string') {
      throw new Error('tradeId cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/portfolios/{scope}/{code}/trades/{tradeId}/properties';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  requestUrl = requestUrl.replace('{tradeId}', encodeURIComponent(tradeId));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (properties !== null && properties !== undefined) {
      let requestModelMapper = {
        required: false,
        serializedName: 'properties',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'CreatePerpetualPropertyRequestElementType',
              type: {
                name: 'Composite',
                className: 'CreatePerpetualPropertyRequest'
              }
          }
        }
      };
      requestModel = client.serialize(requestModelMapper, properties, 'properties');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(properties, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 201) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 201) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['AddTradePropertyDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link DeletedEntityResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _deletePropertyFromTrade(scope, code, tradeId, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let property = (options && options.property !== undefined) ? options.property : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (tradeId === null || tradeId === undefined || typeof tradeId.valueOf() !== 'string') {
      throw new Error('tradeId cannot be null or undefined and it must be of type string.');
    }
    if (property !== null && property !== undefined && typeof property.valueOf() !== 'string') {
      throw new Error('property must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/portfolios/{scope}/{code}/trades/{tradeId}/properties';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  requestUrl = requestUrl.replace('{tradeId}', encodeURIComponent(tradeId));
  let queryParameters = [];
  if (property !== null && property !== undefined) {
    queryParameters.push('property=' + encodeURIComponent(property));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'DELETE';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['DeletedEntityResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link PortfolioDto} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _createDerivedPortfolio(scope, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let portfolio = (options && options.portfolio !== undefined) ? options.portfolio : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/portfolios/{scope}/derived';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (portfolio !== null && portfolio !== undefined) {
      let requestModelMapper = new client.models['CreateDerivedPortfolioRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, portfolio, 'portfolio');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(portfolio, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 201) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 201) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['PortfolioDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListPortfolioSearchResult} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _portfoliosSearch(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let request = (options && options.request !== undefined) ? options.request : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  let filter = (options && options.filter !== undefined) ? options.filter : undefined;
  // Validate
  try {
    if (request !== null && request !== undefined && typeof request !== 'object') {
      throw new Error('request must be of type object.');
    }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/portfolios/search';
  let queryParameters = [];
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (filter !== null && filter !== undefined) {
    queryParameters.push('filter=' + encodeURIComponent(filter));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (request !== null && request !== undefined) {
      let requestModelMapper = {
        required: false,
        serializedName: 'request',
        type: {
          name: 'Object'
        }
      };
      requestModel = client.serialize(requestModelMapper, request, 'request');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(request, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListPortfolioSearchResult']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListPropertyDefinitionDto} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _propertiesSearch(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let request = (options && options.request !== undefined) ? options.request : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  let filter = (options && options.filter !== undefined) ? options.filter : undefined;
  // Validate
  try {
    if (request !== null && request !== undefined && typeof request !== 'object') {
      throw new Error('request must be of type object.');
    }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/properties/search';
  let queryParameters = [];
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (filter !== null && filter !== undefined) {
    queryParameters.push('filter=' + encodeURIComponent(filter));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (request !== null && request !== undefined) {
      let requestModelMapper = {
        required: false,
        serializedName: 'request',
        type: {
          name: 'Object'
        }
      };
      requestModel = client.serialize(requestModelMapper, request, 'request');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(request, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListPropertyDefinitionDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListPropertyDomain} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getPropertyDefinitionDomains(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  // Validate
  try {
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/propertydefinitions';
  let queryParameters = [];
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListPropertyDomain']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link PropertyDefinitionDto} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _createPropertyDefinition(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let definition = (options && options.definition !== undefined) ? options.definition : undefined;

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/propertydefinitions';

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (definition !== null && definition !== undefined) {
      let requestModelMapper = new client.models['CreatePropertyDefinitionRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, definition, 'definition');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(definition, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 201) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 201) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['PropertyDefinitionDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListPropertyDefinitionDto} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getMultiplePropertyDefinitions(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let keys = (options && options.keys !== undefined) ? options.keys : undefined;
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  let filter = (options && options.filter !== undefined) ? options.filter : undefined;
  // Validate
  try {
    if (Array.isArray(keys)) {
      for (let i = 0; i < keys.length; i++) {
        if (keys[i] !== null && keys[i] !== undefined && typeof keys[i].valueOf() !== 'string') {
          throw new Error('keys[i] must be of type string.');
        }
      }
    }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
    if (Array.isArray(sortBy)) {
      for (let i1 = 0; i1 < sortBy.length; i1++) {
        if (sortBy[i1] !== null && sortBy[i1] !== undefined && typeof sortBy[i1].valueOf() !== 'string') {
          throw new Error('sortBy[i1] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/propertydefinitions/_keys';
  let queryParameters = [];
  if (keys !== null && keys !== undefined) {
    if (keys.length == 0) {
      queryParameters.push('keys=' + encodeURIComponent(''));
    } else {
      for (let item of keys) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('keys=' + encodeURIComponent('' + item));
      }
    }
  }
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (filter !== null && filter !== undefined) {
    queryParameters.push('filter=' + encodeURIComponent(filter));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListPropertyDefinitionDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListPropertyKey} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getAllPropertyKeysInDomain(domain, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  let filter = (options && options.filter !== undefined) ? options.filter : undefined;
  // Validate
  try {
    if (domain === null || domain === undefined || typeof domain.valueOf() !== 'string') {
      throw new Error('domain cannot be null or undefined and it must be of type string.');
    }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/propertydefinitions/{domain}';
  requestUrl = requestUrl.replace('{domain}', encodeURIComponent(domain));
  let queryParameters = [];
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (filter !== null && filter !== undefined) {
    queryParameters.push('filter=' + encodeURIComponent(filter));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListPropertyKey']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListScope} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getPropertyDefinitionScopesInDomain(domain, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  let filter = (options && options.filter !== undefined) ? options.filter : undefined;
  // Validate
  try {
    if (domain === null || domain === undefined || typeof domain.valueOf() !== 'string') {
      throw new Error('domain cannot be null or undefined and it must be of type string.');
    }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/propertydefinitions/{domain}/_scopes';
  requestUrl = requestUrl.replace('{domain}', encodeURIComponent(domain));
  let queryParameters = [];
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (filter !== null && filter !== undefined) {
    queryParameters.push('filter=' + encodeURIComponent(filter));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListScope']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListPropertyKey} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getAllPropertyKeysInScope(domain, scope, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  let filter = (options && options.filter !== undefined) ? options.filter : undefined;
  // Validate
  try {
    if (domain === null || domain === undefined || typeof domain.valueOf() !== 'string') {
      throw new Error('domain cannot be null or undefined and it must be of type string.');
    }
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/propertydefinitions/{domain}/{scope}';
  requestUrl = requestUrl.replace('{domain}', encodeURIComponent(domain));
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  let queryParameters = [];
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (filter !== null && filter !== undefined) {
    queryParameters.push('filter=' + encodeURIComponent(filter));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListPropertyKey']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link PropertyDefinitionDto} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getPropertyDefinition(domain, scope, name, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  // Validate
  try {
    if (domain === null || domain === undefined || typeof domain.valueOf() !== 'string') {
      throw new Error('domain cannot be null or undefined and it must be of type string.');
    }
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (name === null || name === undefined || typeof name.valueOf() !== 'string') {
      throw new Error('name cannot be null or undefined and it must be of type string.');
    }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/propertydefinitions/{domain}/{scope}/{name}';
  requestUrl = requestUrl.replace('{domain}', encodeURIComponent(domain));
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{name}', encodeURIComponent(name));
  let queryParameters = [];
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['PropertyDefinitionDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link PropertyDefinitionDto} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _updatePropertyDefinition(domain, scope, name, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let definition = (options && options.definition !== undefined) ? options.definition : undefined;
  // Validate
  try {
    if (domain === null || domain === undefined || typeof domain.valueOf() !== 'string') {
      throw new Error('domain cannot be null or undefined and it must be of type string.');
    }
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (name === null || name === undefined || typeof name.valueOf() !== 'string') {
      throw new Error('name cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/propertydefinitions/{domain}/{scope}/{name}';
  requestUrl = requestUrl.replace('{domain}', encodeURIComponent(domain));
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{name}', encodeURIComponent(name));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'PUT';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (definition !== null && definition !== undefined) {
      let requestModelMapper = new client.models['UpdatePropertyDefinitionRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, definition, 'definition');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(definition, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['PropertyDefinitionDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link DeletedEntityResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _deletePropertyDefinition(domain, scope, name, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (domain === null || domain === undefined || typeof domain.valueOf() !== 'string') {
      throw new Error('domain cannot be null or undefined and it must be of type string.');
    }
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (name === null || name === undefined || typeof name.valueOf() !== 'string') {
      throw new Error('name cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/propertydefinitions/{domain}/{scope}/{name}';
  requestUrl = requestUrl.replace('{domain}', encodeURIComponent(domain));
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{name}', encodeURIComponent(name));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'DELETE';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['DeletedEntityResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {string} options.request.formatType Possible values include: 'Basic',
 * 'Limited', 'Currency'
 *
 * @param {number} options.request.order
 *
 * @param {string} options.request.displayName
 *
 * @param {string} options.request.valueType Possible values include: 'String',
 * 'Int', 'Decimal', 'DateTime', 'Boolean', 'Map', 'PropertyArray',
 * 'Percentage', 'Currency', 'BenchmarkType', 'Code', 'Id', 'Uri',
 * 'ArrayOfIds', 'ArrayOfTxnAliases', 'ArrayofTxnMovements'
 *
 * @param {array} [options.request.acceptableValues]
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link PropertyDataFormatDto} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _createPropertyDataFormat(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let request = (options && options.request !== undefined) ? options.request : undefined;

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/propertyformats';

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (request !== null && request !== undefined) {
      let requestModelMapper = new client.models['CreatePropertyDataFormatRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, request, 'request');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(request, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 201) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 201) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['PropertyDataFormatDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListPropertyDataFormatDto} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _listPropertyDataFormats(scope, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let includeDefault = (options && options.includeDefault !== undefined) ? options.includeDefault : undefined;
  let includeSystem = (options && options.includeSystem !== undefined) ? options.includeSystem : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  let filter = (options && options.filter !== undefined) ? options.filter : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (includeDefault !== null && includeDefault !== undefined && typeof includeDefault !== 'boolean') {
      throw new Error('includeDefault must be of type boolean.');
    }
    if (includeSystem !== null && includeSystem !== undefined && typeof includeSystem !== 'boolean') {
      throw new Error('includeSystem must be of type boolean.');
    }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/propertyformats/{scope}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  let queryParameters = [];
  if (includeDefault !== null && includeDefault !== undefined) {
    queryParameters.push('includeDefault=' + encodeURIComponent(includeDefault.toString()));
  }
  if (includeSystem !== null && includeSystem !== undefined) {
    queryParameters.push('includeSystem=' + encodeURIComponent(includeSystem.toString()));
  }
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (filter !== null && filter !== undefined) {
    queryParameters.push('filter=' + encodeURIComponent(filter));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListPropertyDataFormatDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link PropertyDataFormatDto} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getPropertyDataFormat(scope, name, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (name === null || name === undefined || typeof name.valueOf() !== 'string') {
      throw new Error('name cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/propertyformats/{scope}/{name}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{name}', encodeURIComponent(name));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['PropertyDataFormatDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {string} options.request.formatType Possible values include: 'Basic',
 * 'Limited', 'Currency'
 *
 * @param {number} options.request.order
 *
 * @param {string} options.request.displayName
 *
 * @param {string} options.request.valueType Possible values include: 'String',
 * 'Int', 'Decimal', 'DateTime', 'Boolean', 'Map', 'PropertyArray',
 * 'Percentage', 'Currency', 'BenchmarkType', 'Code', 'Id', 'Uri',
 * 'ArrayOfIds', 'ArrayOfTxnAliases', 'ArrayofTxnMovements'
 *
 * @param {array} [options.request.acceptableValues]
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link PropertyDataFormatDto} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _updatePropertyDataFormat(scope, name, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let request = (options && options.request !== undefined) ? options.request : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (name === null || name === undefined || typeof name.valueOf() !== 'string') {
      throw new Error('name cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/propertyformats/{scope}/{name}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{name}', encodeURIComponent(name));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'PUT';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (request !== null && request !== undefined) {
      let requestModelMapper = new client.models['UpdatePropertyDataFormatRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, request, 'request');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(request, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['PropertyDataFormatDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListReconciliationBreakDto} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _performReconciliation(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let request = (options && options.request !== undefined) ? options.request : undefined;

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/recon';

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (request !== null && request !== undefined) {
      let requestModelMapper = new client.models['ReconciliationRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, request, 'request');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(request, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListReconciliationBreakDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Get all reference portfolios in a scope
 *
 * @param {string} scope
 *
 * @param {date} effectiveAt
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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListPortfolioDto} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _listReferencePortfolios(scope, effectiveAt, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  let filter = (options && options.filter !== undefined) ? options.filter : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if(!effectiveAt || !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt cannot be null or undefined and it must be of type date.');
        }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/reference/{scope}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  let queryParameters = [];
  queryParameters.push('effectiveAt=' + encodeURIComponent(client.serializeObject(effectiveAt)));
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (filter !== null && filter !== undefined) {
    queryParameters.push('filter=' + encodeURIComponent(filter));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListPortfolioDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {array} [options.referencePortfolio.properties] Portfolio properties
 * to add to the portfolio
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link PortfolioDto} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _createReferencePortfolio(scope, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let referencePortfolio = (options && options.referencePortfolio !== undefined) ? options.referencePortfolio : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/reference/{scope}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (referencePortfolio !== null && referencePortfolio !== undefined) {
      let requestModelMapper = new client.models['CreatePortfolioRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, referencePortfolio, 'referencePortfolio');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(referencePortfolio, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 201) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 201) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['PortfolioDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Get a reference portfolio by name (as opposed to id)
 *
 * @param {string} scope
 *
 * @param {string} code
 *
 * @param {date} effectiveAt
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {date} [options.asAt]
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link
 *                      ResourceListReferencePortfolioConstituentDto} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getReferencePortfolio(scope, code, effectiveAt, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if(!effectiveAt || !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt cannot be null or undefined and it must be of type date.');
        }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/reference/{scope}/{code}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  queryParameters.push('effectiveAt=' + encodeURIComponent(client.serializeObject(effectiveAt)));
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListReferencePortfolioConstituentDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link DeletedEntityResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _deleteReferencePortfolio(scope, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let effectiveAt = (options && options.effectiveAt !== undefined) ? options.effectiveAt : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if (effectiveAt && !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/reference/{scope}/{code}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (effectiveAt !== null && effectiveAt !== undefined) {
    queryParameters.push('effectiveAt=' + encodeURIComponent(client.serializeObject(effectiveAt)));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'DELETE';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['DeletedEntityResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link
 *                      ResourceListReferencePortfolioConstituentDto} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getReferencePortfolioConstituents(scope, effectiveAt, code, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let referencePortfolioId = (options && options.referencePortfolioId !== undefined) ? options.referencePortfolioId : undefined;
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (referencePortfolioId !== null && referencePortfolioId !== undefined && typeof referencePortfolioId.valueOf() !== 'string') {
      throw new Error('referencePortfolioId must be of type string.');
    }
    if(!effectiveAt || !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt cannot be null or undefined and it must be of type date.');
        }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/reference/{scope}/{code}/{effectiveAt}/constituents';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{effectiveAt}', encodeURIComponent(client.serializeObject(effectiveAt)));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  let queryParameters = [];
  if (referencePortfolioId !== null && referencePortfolioId !== undefined) {
    queryParameters.push('referencePortfolioId=' + encodeURIComponent(referencePortfolioId));
  }
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListReferencePortfolioConstituentDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link UpsertReferencePortfolioConstituentsDto} for
 *                      more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _upsertReferencePortfolioConstituents(scope, code, effectiveAt, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let constituents = (options && options.constituents !== undefined) ? options.constituents : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
      throw new Error('code cannot be null or undefined and it must be of type string.');
    }
    if(!effectiveAt || !(effectiveAt instanceof Date ||
        (typeof effectiveAt.valueOf() === 'string' && !isNaN(Date.parse(effectiveAt))))) {
          throw new Error('effectiveAt cannot be null or undefined and it must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/reference/{scope}/{code}/{effectiveAt}/constituents';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));
  requestUrl = requestUrl.replace('{effectiveAt}', encodeURIComponent(client.serializeObject(effectiveAt)));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (constituents !== null && constituents !== undefined) {
      let requestModelMapper = {
        required: false,
        serializedName: 'constituents',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'ReferencePortfolioConstituentDtoElementType',
              type: {
                name: 'Composite',
                className: 'ReferencePortfolioConstituentDto'
              }
          }
        }
      };
      requestModel = client.serialize(requestModelMapper, constituents, 'constituents');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(constituents, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 201) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 201) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['UpsertReferencePortfolioConstituentsDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResultsDto} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getResults(scope, key, dateParameter, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (key === null || key === undefined || typeof key.valueOf() !== 'string') {
      throw new Error('key cannot be null or undefined and it must be of type string.');
    }
    if(!dateParameter || !(dateParameter instanceof Date ||
        (typeof dateParameter.valueOf() === 'string' && !isNaN(Date.parse(dateParameter))))) {
          throw new Error('dateParameter cannot be null or undefined and it must be of type date.');
        }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/results/{scope}/{key}/{date}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{key}', encodeURIComponent(key));
  requestUrl = requestUrl.replace('{date}', encodeURIComponent(client.serializeObject(dateParameter)));
  let queryParameters = [];
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResultsDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResultsDto} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _upsertResults(scope, key, dateParameter, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let request = (options && options.request !== undefined) ? options.request : undefined;
  // Validate
  try {
    if (scope === null || scope === undefined || typeof scope.valueOf() !== 'string') {
      throw new Error('scope cannot be null or undefined and it must be of type string.');
    }
    if (key === null || key === undefined || typeof key.valueOf() !== 'string') {
      throw new Error('key cannot be null or undefined and it must be of type string.');
    }
    if(!dateParameter || !(dateParameter instanceof Date ||
        (typeof dateParameter.valueOf() === 'string' && !isNaN(Date.parse(dateParameter))))) {
          throw new Error('dateParameter cannot be null or undefined and it must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/results/{scope}/{key}/{date}';
  requestUrl = requestUrl.replace('{scope}', encodeURIComponent(scope));
  requestUrl = requestUrl.replace('{key}', encodeURIComponent(key));
  requestUrl = requestUrl.replace('{date}', encodeURIComponent(client.serializeObject(dateParameter)));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (request !== null && request !== undefined) {
      let requestModelMapper = new client.models['CreateResultsRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, request, 'request');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(request, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResultsDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Gets the schema for a given entity.
 *
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
 * 'TransactionConfigurationTypeAlias', 'TryUpsertCorporateActions'
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link SchemaDto} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getEntitySchema(entity, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (entity === null || entity === undefined || typeof entity.valueOf() !== 'string') {
      throw new Error('entity cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/schema/entities/{entity}';
  requestUrl = requestUrl.replace('{entity}', encodeURIComponent(entity));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['SchemaDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link PropertySchemaDto} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getPropertySchema(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let propertyKeys = (options && options.propertyKeys !== undefined) ? options.propertyKeys : undefined;
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  // Validate
  try {
    if (Array.isArray(propertyKeys)) {
      for (let i = 0; i < propertyKeys.length; i++) {
        if (propertyKeys[i] !== null && propertyKeys[i] !== undefined && typeof propertyKeys[i].valueOf() !== 'string') {
          throw new Error('propertyKeys[i] must be of type string.');
        }
      }
    }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/schema/properties';
  let queryParameters = [];
  if (propertyKeys !== null && propertyKeys !== undefined) {
    if (propertyKeys.length == 0) {
      queryParameters.push('propertyKeys=' + encodeURIComponent(''));
    } else {
      for (let item of propertyKeys) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('propertyKeys=' + encodeURIComponent('' + item));
      }
    }
  }
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['PropertySchemaDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link ResourceListUiDataType} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getValueTypes(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let sortBy = (options && options.sortBy !== undefined) ? options.sortBy : undefined;
  let start = (options && options.start !== undefined) ? options.start : undefined;
  let limit = (options && options.limit !== undefined) ? options.limit : undefined;
  // Validate
  try {
    if (Array.isArray(sortBy)) {
      for (let i = 0; i < sortBy.length; i++) {
        if (sortBy[i] !== null && sortBy[i] !== undefined && typeof sortBy[i].valueOf() !== 'string') {
          throw new Error('sortBy[i] must be of type string.');
        }
      }
    }
    if (start !== null && start !== undefined && typeof start !== 'number') {
      throw new Error('start must be of type number.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/schema/types';
  let queryParameters = [];
  if (sortBy !== null && sortBy !== undefined) {
    if (sortBy.length == 0) {
      queryParameters.push('sortBy=' + encodeURIComponent(''));
    } else {
      for (let item of sortBy) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('sortBy=' + encodeURIComponent('' + item));
      }
    }
  }
  if (start !== null && start !== undefined) {
    queryParameters.push('start=' + encodeURIComponent(start.toString()));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['ResourceListUiDataType']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link TryAddClientSecuritiesDto} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _batchAddClientSecurities(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let definitions = (options && options.definitions !== undefined) ? options.definitions : undefined;

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/securities';

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (definitions !== null && definitions !== undefined) {
      let requestModelMapper = {
        required: false,
        serializedName: 'definitions',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'CreateClientSecurityRequestElementType',
              type: {
                name: 'Composite',
                className: 'CreateClientSecurityRequest'
              }
          }
        }
      };
      requestModel = client.serialize(requestModelMapper, definitions, 'definitions');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(definitions, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 201) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 201) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['TryAddClientSecuritiesDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link TryDeleteClientSecuritiesDto} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _batchDeleteClientSecurities(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let uids = (options && options.uids !== undefined) ? options.uids : undefined;
  // Validate
  try {
    if (Array.isArray(uids)) {
      for (let i = 0; i < uids.length; i++) {
        if (uids[i] !== null && uids[i] !== undefined && typeof uids[i].valueOf() !== 'string') {
          throw new Error('uids[i] must be of type string.');
        }
      }
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/securities';
  let queryParameters = [];
  if (uids !== null && uids !== undefined) {
    if (uids.length == 0) {
      queryParameters.push('uids=' + encodeURIComponent(''));
    } else {
      for (let item of uids) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('uids=' + encodeURIComponent('' + item));
      }
    }
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'DELETE';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['TryDeleteClientSecuritiesDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link SecurityDto} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getSecurity(uid, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  let propertyKeys = (options && options.propertyKeys !== undefined) ? options.propertyKeys : undefined;
  // Validate
  try {
    if (uid === null || uid === undefined || typeof uid.valueOf() !== 'string') {
      throw new Error('uid cannot be null or undefined and it must be of type string.');
    }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
    if (Array.isArray(propertyKeys)) {
      for (let i = 0; i < propertyKeys.length; i++) {
        if (propertyKeys[i] !== null && propertyKeys[i] !== undefined && typeof propertyKeys[i].valueOf() !== 'string') {
          throw new Error('propertyKeys[i] must be of type string.');
        }
      }
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/securities/{uid}';
  requestUrl = requestUrl.replace('{uid}', encodeURIComponent(uid));
  let queryParameters = [];
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (propertyKeys !== null && propertyKeys !== undefined) {
    if (propertyKeys.length == 0) {
      queryParameters.push('propertyKeys=' + encodeURIComponent(''));
    } else {
      for (let item of propertyKeys) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('propertyKeys=' + encodeURIComponent('' + item));
      }
    }
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['SecurityDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Lookup more than one security by supplying a collection of
 * non-Finbourne codes.  Optionally, decorate each security with specific
 * properties.
 *
 * @param {string} codeType The type of identifier. Possible values include:
 * 'Undefined', 'ReutersAssetId', 'CINS', 'Isin', 'Sedol', 'Cusip',
 * 'ClientInternal', 'Figi', 'Wertpapier'
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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link TryLookupSecuritiesFromCodesDto} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _lookupSecuritiesFromCodes(codeType, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let codes = (options && options.codes !== undefined) ? options.codes : undefined;
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  let propertyKeys = (options && options.propertyKeys !== undefined) ? options.propertyKeys : undefined;
  // Validate
  try {
    if (codeType === null || codeType === undefined || typeof codeType.valueOf() !== 'string') {
      throw new Error('codeType cannot be null or undefined and it must be of type string.');
    }
    if (Array.isArray(codes)) {
      for (let i = 0; i < codes.length; i++) {
        if (codes[i] !== null && codes[i] !== undefined && typeof codes[i].valueOf() !== 'string') {
          throw new Error('codes[i] must be of type string.');
        }
      }
    }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
    if (Array.isArray(propertyKeys)) {
      for (let i1 = 0; i1 < propertyKeys.length; i1++) {
        if (propertyKeys[i1] !== null && propertyKeys[i1] !== undefined && typeof propertyKeys[i1].valueOf() !== 'string') {
          throw new Error('propertyKeys[i1] must be of type string.');
        }
      }
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/securities/lookup/{codeType}';
  requestUrl = requestUrl.replace('{codeType}', encodeURIComponent(codeType));
  let queryParameters = [];
  if (codes !== null && codes !== undefined) {
    if (codes.length == 0) {
      queryParameters.push('codes=' + encodeURIComponent(''));
    } else {
      for (let item of codes) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('codes=' + encodeURIComponent('' + item));
      }
    }
  }
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (propertyKeys !== null && propertyKeys !== undefined) {
    if (propertyKeys.length == 0) {
      queryParameters.push('propertyKeys=' + encodeURIComponent(''));
    } else {
      for (let item of propertyKeys) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('propertyKeys=' + encodeURIComponent('' + item));
      }
    }
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['TryLookupSecuritiesFromCodesDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Lookup a large number of securities by supplying a collection of
 * non-Finbourne codes.  Optionally, decorate each security with specific
 * properties.
 *
 * @param {string} codeType The type of identifier. Possible values include:
 * 'Undefined', 'ReutersAssetId', 'CINS', 'Isin', 'Sedol', 'Cusip',
 * 'ClientInternal', 'Figi', 'Wertpapier'
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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link TryLookupSecuritiesFromCodesDto} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _lookupSecuritiesFromCodesBulk(codeType, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let codes = (options && options.codes !== undefined) ? options.codes : undefined;
  let asAt = (options && options.asAt !== undefined) ? options.asAt : undefined;
  let propertyKeys = (options && options.propertyKeys !== undefined) ? options.propertyKeys : undefined;
  // Validate
  try {
    if (codeType === null || codeType === undefined || typeof codeType.valueOf() !== 'string') {
      throw new Error('codeType cannot be null or undefined and it must be of type string.');
    }
    if (Array.isArray(codes)) {
      for (let i = 0; i < codes.length; i++) {
        if (codes[i] !== null && codes[i] !== undefined && typeof codes[i].valueOf() !== 'string') {
          throw new Error('codes[i] must be of type string.');
        }
      }
    }
    if (asAt && !(asAt instanceof Date ||
        (typeof asAt.valueOf() === 'string' && !isNaN(Date.parse(asAt))))) {
          throw new Error('asAt must be of type date.');
        }
    if (Array.isArray(propertyKeys)) {
      for (let i1 = 0; i1 < propertyKeys.length; i1++) {
        if (propertyKeys[i1] !== null && propertyKeys[i1] !== undefined && typeof propertyKeys[i1].valueOf() !== 'string') {
          throw new Error('propertyKeys[i1] must be of type string.');
        }
      }
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v1/api/securities/lookup/{codeType}';
  requestUrl = requestUrl.replace('{codeType}', encodeURIComponent(codeType));
  let queryParameters = [];
  if (asAt !== null && asAt !== undefined) {
    queryParameters.push('asAt=' + encodeURIComponent(client.serializeObject(asAt)));
  }
  if (propertyKeys !== null && propertyKeys !== undefined) {
    if (propertyKeys.length == 0) {
      queryParameters.push('propertyKeys=' + encodeURIComponent(''));
    } else {
      for (let item of propertyKeys) {
        item = (item === null || item === undefined) ? '' : item;
        queryParameters.push('propertyKeys=' + encodeURIComponent('' + item));
      }
    }
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (codes !== null && codes !== undefined) {
      let requestModelMapper = {
        required: false,
        serializedName: 'codes',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'StringElementType',
              type: {
                name: 'String'
              }
          }
        }
      };
      requestModel = client.serialize(requestModelMapper, codes, 'codes');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(codes, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['TryLookupSecuritiesFromCodesDto']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/** Class representing a LUSIDAPI. */
class LUSIDAPI extends ServiceClient {
  /**
   * Create a LUSIDAPI.
   * @param {credentials} credentials - Subscription credentials which uniquely identify client subscription.
   * @param {string} [baseUri] - The base URI of the service.
   * @param {object} [options] - The parameter options
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   */
  constructor(credentials, baseUri, options) {
    if (credentials === null || credentials === undefined) {
      throw new Error('\'credentials\' cannot be null.');
    }

    if (!options) options = {};

    super(credentials, options);

    this.baseUri = baseUri;
    if (!this.baseUri) {
      this.baseUri = 'http://localhost';
    }
    this.credentials = credentials;

    let packageInfo = this.getPackageJsonInfo(__dirname);
    this.addUserAgentInfo(`${packageInfo.name}/${packageInfo.version}`);
    this.models = models;
    this._clearEntityCaches = _clearEntityCaches;
    this._getAggregationByGroup = _getAggregationByGroup;
    this._getNestedAggregationByGroup = _getNestedAggregationByGroup;
    this._getAggregationByPortfolio = _getAggregationByPortfolio;
    this._getNestedAggregationByPortfolio = _getNestedAggregationByPortfolio;
    this._getAggregationByResultSet = _getAggregationByResultSet;
    this._getNestedAggregationByResultSet = _getNestedAggregationByResultSet;
    this._listAnalyticStores = _listAnalyticStores;
    this._createAnalyticStore = _createAnalyticStore;
    this._getAnalyticStore = _getAnalyticStore;
    this._deleteAnalyticStore = _deleteAnalyticStore;
    this._insertAnalytics = _insertAnalytics;
    this._upsertClassification = _upsertClassification;
    this._addConfigurationTransactionType = _addConfigurationTransactionType;
    this._getConfigurationTransactionTypes = _getConfigurationTransactionTypes;
    this._uploadConfigurationTransactionTypes = _uploadConfigurationTransactionTypes;
    this._listCorporateActions = _listCorporateActions;
    this._batchUpsertCorporateActions = _batchUpsertCorporateActions;
    this._getDownloadUrl = _getDownloadUrl;
    this._getLatestVersion = _getLatestVersion;
    this._listPortfolioGroups = _listPortfolioGroups;
    this._createPortfolioGroup = _createPortfolioGroup;
    this._getPortfolioGroup = _getPortfolioGroup;
    this._deletePortfolioGroup = _deletePortfolioGroup;
    this._getPortfolioGroupCommands = _getPortfolioGroupCommands;
    this._getPortfolioGroupExpansion = _getPortfolioGroupExpansion;
    this._addPortfolioToGroup = _addPortfolioToGroup;
    this._deletePortfolioFromGroup = _deletePortfolioFromGroup;
    this._addSubGroupToGroup = _addSubGroupToGroup;
    this._deleteSubGroupFromGroup = _deleteSubGroupFromGroup;
    this._updatePortfolioGroup = _updatePortfolioGroup;
    this._portfolioGroupsSearch = _portfolioGroupsSearch;
    this._getHealth = _getHealth;
    this._getLoginInfo = _getLoginInfo;
    this._storeWebLogs = _storeWebLogs;
    this._getBuildVersion = _getBuildVersion;
    this._verifyConnectivity = _verifyConnectivity;
    this._getVersion = _getVersion;
    this._getPersonalisations = _getPersonalisations;
    this._upsertPersonalisations = _upsertPersonalisations;
    this._deletePersonalisation = _deletePersonalisation;
    this._listPortfolioScopes = _listPortfolioScopes;
    this._listPortfolios = _listPortfolios;
    this._createPortfolio = _createPortfolio;
    this._getPortfolio = _getPortfolio;
    this._updatePortfolio = _updatePortfolio;
    this._deletePortfolio = _deletePortfolio;
    this._getCommands = _getCommands;
    this._getDetails = _getDetails;
    this._upsertPortfolioDetails = _upsertPortfolioDetails;
    this._deletePortfolioDetails = _deletePortfolioDetails;
    this._getAggregateHoldings = _getAggregateHoldings;
    this._adjustHoldings = _adjustHoldings;
    this._getProperties = _getProperties;
    this._upsertPortfolioProperties = _upsertPortfolioProperties;
    this._deletePortfolioProperty = _deletePortfolioProperty;
    this._deletePortfolioProperties = _deletePortfolioProperties;
    this._getTrades = _getTrades;
    this._upsertTrades = _upsertTrades;
    this._deleteTrades = _deleteTrades;
    this._addTradeProperty = _addTradeProperty;
    this._deletePropertyFromTrade = _deletePropertyFromTrade;
    this._createDerivedPortfolio = _createDerivedPortfolio;
    this._portfoliosSearch = _portfoliosSearch;
    this._propertiesSearch = _propertiesSearch;
    this._getPropertyDefinitionDomains = _getPropertyDefinitionDomains;
    this._createPropertyDefinition = _createPropertyDefinition;
    this._getMultiplePropertyDefinitions = _getMultiplePropertyDefinitions;
    this._getAllPropertyKeysInDomain = _getAllPropertyKeysInDomain;
    this._getPropertyDefinitionScopesInDomain = _getPropertyDefinitionScopesInDomain;
    this._getAllPropertyKeysInScope = _getAllPropertyKeysInScope;
    this._getPropertyDefinition = _getPropertyDefinition;
    this._updatePropertyDefinition = _updatePropertyDefinition;
    this._deletePropertyDefinition = _deletePropertyDefinition;
    this._createPropertyDataFormat = _createPropertyDataFormat;
    this._listPropertyDataFormats = _listPropertyDataFormats;
    this._getPropertyDataFormat = _getPropertyDataFormat;
    this._updatePropertyDataFormat = _updatePropertyDataFormat;
    this._performReconciliation = _performReconciliation;
    this._listReferencePortfolios = _listReferencePortfolios;
    this._createReferencePortfolio = _createReferencePortfolio;
    this._getReferencePortfolio = _getReferencePortfolio;
    this._deleteReferencePortfolio = _deleteReferencePortfolio;
    this._getReferencePortfolioConstituents = _getReferencePortfolioConstituents;
    this._upsertReferencePortfolioConstituents = _upsertReferencePortfolioConstituents;
    this._getResults = _getResults;
    this._upsertResults = _upsertResults;
    this._getEntitySchema = _getEntitySchema;
    this._getPropertySchema = _getPropertySchema;
    this._getValueTypes = _getValueTypes;
    this._batchAddClientSecurities = _batchAddClientSecurities;
    this._batchDeleteClientSecurities = _batchDeleteClientSecurities;
    this._getSecurity = _getSecurity;
    this._lookupSecuritiesFromCodes = _lookupSecuritiesFromCodes;
    this._lookupSecuritiesFromCodesBulk = _lookupSecuritiesFromCodesBulk;
    msRest.addSerializationMixin(this);
  }

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
   * @reject {Error} - The error object.
   */
  clearEntityCachesWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._clearEntityCaches(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Clears the entity caches on the instance that serves this request
   * only.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ClearEntityCachesDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ClearEntityCachesDto} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  clearEntityCaches(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._clearEntityCaches(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._clearEntityCaches(options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  getAggregationByGroupWithHttpOperationResponse(scope, groupCode, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getAggregationByGroup(scope, groupCode, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ListAggregationResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ListAggregationResponse} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getAggregationByGroup(scope, groupCode, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getAggregationByGroup(scope, groupCode, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getAggregationByGroup(scope, groupCode, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  getNestedAggregationByGroupWithHttpOperationResponse(scope, groupCode, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getNestedAggregationByGroup(scope, groupCode, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {NestedAggregationResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link NestedAggregationResponse} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getNestedAggregationByGroup(scope, groupCode, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getNestedAggregationByGroup(scope, groupCode, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getNestedAggregationByGroup(scope, groupCode, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  getAggregationByPortfolioWithHttpOperationResponse(scope, portfolioCode, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getAggregationByPortfolio(scope, portfolioCode, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ListAggregationResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ListAggregationResponse} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getAggregationByPortfolio(scope, portfolioCode, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getAggregationByPortfolio(scope, portfolioCode, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getAggregationByPortfolio(scope, portfolioCode, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  getNestedAggregationByPortfolioWithHttpOperationResponse(scope, portfolioCode, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getNestedAggregationByPortfolio(scope, portfolioCode, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {NestedAggregationResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link NestedAggregationResponse} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getNestedAggregationByPortfolio(scope, portfolioCode, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getNestedAggregationByPortfolio(scope, portfolioCode, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getNestedAggregationByPortfolio(scope, portfolioCode, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  getAggregationByResultSetWithHttpOperationResponse(scope, resultsKey, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getAggregationByResultSet(scope, resultsKey, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ListAggregationResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ListAggregationResponse} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getAggregationByResultSet(scope, resultsKey, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getAggregationByResultSet(scope, resultsKey, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getAggregationByResultSet(scope, resultsKey, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  getNestedAggregationByResultSetWithHttpOperationResponse(scope, resultsKey, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getNestedAggregationByResultSet(scope, resultsKey, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {NestedAggregationResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link NestedAggregationResponse} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getNestedAggregationByResultSet(scope, resultsKey, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getNestedAggregationByResultSet(scope, resultsKey, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getNestedAggregationByResultSet(scope, resultsKey, options, optionalCallback);
    }
  }

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
   * @resolve {HttpOperationResponse<ResourceListAnalyticStoreKeyDto>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  listAnalyticStoresWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._listAnalyticStores(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListAnalyticStoreKeyDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListAnalyticStoreKeyDto} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  listAnalyticStores(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._listAnalyticStores(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._listAnalyticStores(options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  createAnalyticStoreWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._createAnalyticStore(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {AnalyticStoreDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link AnalyticStoreDto} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  createAnalyticStore(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._createAnalyticStore(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._createAnalyticStore(options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  getAnalyticStoreWithHttpOperationResponse(scope, year, month, day, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getAnalyticStore(scope, year, month, day, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {AnalyticStoreDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link AnalyticStoreDto} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getAnalyticStore(scope, year, month, day, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getAnalyticStore(scope, year, month, day, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getAnalyticStore(scope, year, month, day, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  deleteAnalyticStoreWithHttpOperationResponse(scope, year, month, day, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._deleteAnalyticStore(scope, year, month, day, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  deleteAnalyticStore(scope, year, month, day, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._deleteAnalyticStore(scope, year, month, day, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._deleteAnalyticStore(scope, year, month, day, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  insertAnalyticsWithHttpOperationResponse(scope, year, month, day, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._insertAnalytics(scope, year, month, day, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {AnalyticStoreDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link AnalyticStoreDto} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  insertAnalytics(scope, year, month, day, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._insertAnalytics(scope, year, month, day, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._insertAnalytics(scope, year, month, day, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  upsertClassificationWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._upsertClassification(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ClassificationsDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ClassificationsDto} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertClassification(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._upsertClassification(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._upsertClassification(options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  addConfigurationTransactionTypeWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._addConfigurationTransactionType(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {TxnMetaDataDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link TxnMetaDataDto} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  addConfigurationTransactionType(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._addConfigurationTransactionType(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._addConfigurationTransactionType(options, optionalCallback);
    }
  }

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
   * @resolve {HttpOperationResponse<ResourceListTxnMetaDataDto>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getConfigurationTransactionTypesWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getConfigurationTransactionTypes(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Gets the list of persisted transaction types
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListTxnMetaDataDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListTxnMetaDataDto} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getConfigurationTransactionTypes(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getConfigurationTransactionTypes(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getConfigurationTransactionTypes(options, optionalCallback);
    }
  }

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
   * @resolve {HttpOperationResponse<ResourceListTxnMetaDataDto>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  uploadConfigurationTransactionTypesWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._uploadConfigurationTransactionTypes(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListTxnMetaDataDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListTxnMetaDataDto} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  uploadConfigurationTransactionTypes(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._uploadConfigurationTransactionTypes(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._uploadConfigurationTransactionTypes(options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  listCorporateActionsWithHttpOperationResponse(scope, corporateActionSourceCode, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._listCorporateActions(scope, corporateActionSourceCode, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {Array} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {array} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  listCorporateActions(scope, corporateActionSourceCode, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._listCorporateActions(scope, corporateActionSourceCode, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._listCorporateActions(scope, corporateActionSourceCode, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  batchUpsertCorporateActionsWithHttpOperationResponse(scope, corporateActionSourceCode, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._batchUpsertCorporateActions(scope, corporateActionSourceCode, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {TryUpsertCorporateActionsDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link TryUpsertCorporateActionsDto} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  batchUpsertCorporateActions(scope, corporateActionSourceCode, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._batchUpsertCorporateActions(scope, corporateActionSourceCode, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._batchUpsertCorporateActions(scope, corporateActionSourceCode, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  getDownloadUrlWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getDownloadUrl(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.version]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {String} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {string} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getDownloadUrl(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getDownloadUrl(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getDownloadUrl(options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  getLatestVersionWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getLatestVersion(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {String} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {string} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getLatestVersion(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getLatestVersion(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getLatestVersion(options, optionalCallback);
    }
  }

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
   * @resolve {HttpOperationResponse<ResourceListGroupDto>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  listPortfolioGroupsWithHttpOperationResponse(scope, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._listPortfolioGroups(scope, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListGroupDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListGroupDto} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  listPortfolioGroups(scope, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._listPortfolioGroups(scope, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._listPortfolioGroups(scope, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  createPortfolioGroupWithHttpOperationResponse(scope, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._createPortfolioGroup(scope, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {GroupDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link GroupDto} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  createPortfolioGroup(scope, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._createPortfolioGroup(scope, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._createPortfolioGroup(scope, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  getPortfolioGroupWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getPortfolioGroup(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {GroupDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link GroupDto} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getPortfolioGroup(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getPortfolioGroup(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getPortfolioGroup(scope, code, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  deletePortfolioGroupWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._deletePortfolioGroup(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePortfolioGroup(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._deletePortfolioGroup(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._deletePortfolioGroup(scope, code, options, optionalCallback);
    }
  }

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
   * @resolve {HttpOperationResponse<ResourceListProcessedCommandDto>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getPortfolioGroupCommandsWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getPortfolioGroupCommands(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListProcessedCommandDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListProcessedCommandDto} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getPortfolioGroupCommands(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getPortfolioGroupCommands(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getPortfolioGroupCommands(scope, code, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  getPortfolioGroupExpansionWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getPortfolioGroupExpansion(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ExpandedGroupDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ExpandedGroupDto} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getPortfolioGroupExpansion(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getPortfolioGroupExpansion(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getPortfolioGroupExpansion(scope, code, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  addPortfolioToGroupWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._addPortfolioToGroup(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {GroupDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link GroupDto} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  addPortfolioToGroup(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._addPortfolioToGroup(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._addPortfolioToGroup(scope, code, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  deletePortfolioFromGroupWithHttpOperationResponse(scope, code, portfolioScope, portfolioCode, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._deletePortfolioFromGroup(scope, code, portfolioScope, portfolioCode, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {GroupDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link GroupDto} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePortfolioFromGroup(scope, code, portfolioScope, portfolioCode, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._deletePortfolioFromGroup(scope, code, portfolioScope, portfolioCode, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._deletePortfolioFromGroup(scope, code, portfolioScope, portfolioCode, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  addSubGroupToGroupWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._addSubGroupToGroup(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {GroupDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link GroupDto} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  addSubGroupToGroup(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._addSubGroupToGroup(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._addSubGroupToGroup(scope, code, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  deleteSubGroupFromGroupWithHttpOperationResponse(scope, code, subgroupScope, subgroupCode, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._deleteSubGroupFromGroup(scope, code, subgroupScope, subgroupCode, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {GroupDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link GroupDto} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  deleteSubGroupFromGroup(scope, code, subgroupScope, subgroupCode, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._deleteSubGroupFromGroup(scope, code, subgroupScope, subgroupCode, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._deleteSubGroupFromGroup(scope, code, subgroupScope, subgroupCode, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  updatePortfolioGroupWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._updatePortfolioGroup(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {GroupDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link GroupDto} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  updatePortfolioGroup(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._updatePortfolioGroup(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._updatePortfolioGroup(scope, code, options, optionalCallback);
    }
  }

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
   * @resolve {HttpOperationResponse<ResourceListGroupDto>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  portfolioGroupsSearchWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._portfolioGroupsSearch(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListGroupDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListGroupDto} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  portfolioGroupsSearch(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._portfolioGroupsSearch(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._portfolioGroupsSearch(options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  getHealthWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getHealth(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Simple heartbeat method for the api
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {String} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {string} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getHealth(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getHealth(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getHealth(options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  getLoginInfoWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getLoginInfo(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Gets the login information.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {LoginResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link LoginResponse} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getLoginInfo(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getLoginInfo(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getLoginInfo(options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  storeWebLogsWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._storeWebLogs(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {String} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {string} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  storeWebLogs(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._storeWebLogs(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._storeWebLogs(options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  getBuildVersionWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getBuildVersion(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Returns the current assembly version
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {String} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {string} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getBuildVersion(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getBuildVersion(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getBuildVersion(options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  verifyConnectivityWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._verifyConnectivity(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Returns the current assembly version
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {String} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {string} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  verifyConnectivity(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._verifyConnectivity(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._verifyConnectivity(options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  getVersionWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getVersion(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Returns the current assembly version
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {String} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {string} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getVersion(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getVersion(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getVersion(options, optionalCallback);
    }
  }

  /**
   * @summary Get a personalisation, recursing to get any referenced if required.
   *
   * @param {boolean} recursive Whether to recurse into dereference recursive
   * settings
   *
   * @param {boolean} wildcards Whether to apply wildcards to the provided
   * pattern and pull back any matching
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.pattern] The search pattern or specific key
   *
   * @param {string} [options.scope] The scope level to request for. Possible
   * values include: 'User', 'Group', 'Default', 'All'
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
   * @resolve {HttpOperationResponse<ResourceListPersonalisationDto>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getPersonalisationsWithHttpOperationResponse(recursive, wildcards, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getPersonalisations(recursive, wildcards, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Get a personalisation, recursing to get any referenced if required.
   *
   * @param {boolean} recursive Whether to recurse into dereference recursive
   * settings
   *
   * @param {boolean} wildcards Whether to apply wildcards to the provided
   * pattern and pull back any matching
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.pattern] The search pattern or specific key
   *
   * @param {string} [options.scope] The scope level to request for. Possible
   * values include: 'User', 'Group', 'Default', 'All'
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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListPersonalisationDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListPersonalisationDto} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getPersonalisations(recursive, wildcards, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getPersonalisations(recursive, wildcards, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getPersonalisations(recursive, wildcards, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  upsertPersonalisationsWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._upsertPersonalisations(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {UpsertPersonalisationsResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link UpsertPersonalisationsResponse} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertPersonalisations(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._upsertPersonalisations(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._upsertPersonalisations(options, optionalCallback);
    }
  }

  /**
   * @summary Delete a personalisation at a specific scope (or use scope ALL to
   * purge the setting entirely)
   *
   * @param {string} scope The scope to delete at (use ALL to purge the setting
   * entirely). Possible values include: 'User', 'Group', 'Default', 'All'
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.key] The key of the setting to be deleted
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
   * @reject {Error} - The error object.
   */
  deletePersonalisationWithHttpOperationResponse(scope, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._deletePersonalisation(scope, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Delete a personalisation at a specific scope (or use scope ALL to
   * purge the setting entirely)
   *
   * @param {string} scope The scope to delete at (use ALL to purge the setting
   * entirely). Possible values include: 'User', 'Group', 'Default', 'All'
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.key] The key of the setting to be deleted
   *
   * @param {string} [options.group] If deleting a setting at group level,
   * specify the group here
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePersonalisation(scope, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._deletePersonalisation(scope, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._deletePersonalisation(scope, options, optionalCallback);
    }
  }

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
   * @resolve {HttpOperationResponse<ResourceListScope>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  listPortfolioScopesWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._listPortfolioScopes(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListScope} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListScope} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  listPortfolioScopes(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._listPortfolioScopes(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._listPortfolioScopes(options, optionalCallback);
    }
  }

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
   * @resolve {HttpOperationResponse<ResourceListPortfolioDto>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  listPortfoliosWithHttpOperationResponse(scope, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._listPortfolios(scope, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListPortfolioDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListPortfolioDto} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  listPortfolios(scope, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._listPortfolios(scope, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._listPortfolios(scope, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  createPortfolioWithHttpOperationResponse(scope, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._createPortfolio(scope, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {array} [options.createRequest.properties] Portfolio properties to
   * add to the portfolio
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {PortfolioDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioDto} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  createPortfolio(scope, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._createPortfolio(scope, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._createPortfolio(scope, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  getPortfolioWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getPortfolio(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {PortfolioDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioDto} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getPortfolio(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getPortfolio(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getPortfolio(scope, code, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  updatePortfolioWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._updatePortfolio(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {PortfolioDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioDto} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  updatePortfolio(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._updatePortfolio(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._updatePortfolio(scope, code, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  deletePortfolioWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._deletePortfolio(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePortfolio(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._deletePortfolio(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._deletePortfolio(scope, code, options, optionalCallback);
    }
  }

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
   * @resolve {HttpOperationResponse<ResourceListProcessedCommandDto>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getCommandsWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getCommands(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListProcessedCommandDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListProcessedCommandDto} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getCommands(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getCommands(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getCommands(scope, code, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  getDetailsWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getDetails(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {PortfolioDetailsDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioDetailsDto} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getDetails(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getDetails(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getDetails(scope, code, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  upsertPortfolioDetailsWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._upsertPortfolioDetails(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {PortfolioDetailsDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioDetailsDto} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertPortfolioDetails(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._upsertPortfolioDetails(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._upsertPortfolioDetails(scope, code, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  deletePortfolioDetailsWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._deletePortfolioDetails(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePortfolioDetails(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._deletePortfolioDetails(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._deletePortfolioDetails(scope, code, options, optionalCallback);
    }
  }

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
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<VersionedResourceListHoldingDto>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getAggregateHoldingsWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getAggregateHoldings(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {VersionedResourceListHoldingDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link VersionedResourceListHoldingDto} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getAggregateHoldings(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getAggregateHoldings(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getAggregateHoldings(scope, code, options, optionalCallback);
    }
  }

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
   * @param {array} [options.holdings]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<UpsertPortfolioTradesDto>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  adjustHoldingsWithHttpOperationResponse(scope, code, effectiveAt, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._adjustHoldings(scope, code, effectiveAt, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {array} [options.holdings]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {UpsertPortfolioTradesDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link UpsertPortfolioTradesDto} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  adjustHoldings(scope, code, effectiveAt, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._adjustHoldings(scope, code, effectiveAt, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._adjustHoldings(scope, code, effectiveAt, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  getPropertiesWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getProperties(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {PortfolioPropertiesDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioPropertiesDto} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getProperties(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getProperties(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getProperties(scope, code, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  upsertPortfolioPropertiesWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._upsertPortfolioProperties(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {PortfolioPropertiesDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioPropertiesDto} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertPortfolioProperties(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._upsertPortfolioProperties(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._upsertPortfolioProperties(scope, code, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  deletePortfolioPropertyWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._deletePortfolioProperty(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePortfolioProperty(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._deletePortfolioProperty(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._deletePortfolioProperty(scope, code, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  deletePortfolioPropertiesWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._deletePortfolioProperties(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePortfolioProperties(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._deletePortfolioProperties(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._deletePortfolioProperties(scope, code, options, optionalCallback);
    }
  }

  /**
   * @summary Get trades
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.fromTradeDate] Include trades with a trade date equal
   * or later than this date
   *
   * @param {date} [options.toTradeDate] Include trades with a trade date equal
   * or before this date
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
   * @resolve {HttpOperationResponse<VersionedResourceListTradeDto>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getTradesWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getTrades(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Get trades
   *
   * @param {string} scope The scope of the portfolio
   *
   * @param {string} code Code for the portfolio
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.fromTradeDate] Include trades with a trade date equal
   * or later than this date
   *
   * @param {date} [options.toTradeDate] Include trades with a trade date equal
   * or before this date
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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {VersionedResourceListTradeDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link VersionedResourceListTradeDto} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getTrades(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getTrades(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getTrades(scope, code, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  upsertTradesWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._upsertTrades(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {UpsertPortfolioTradesDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link UpsertPortfolioTradesDto} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertTrades(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._upsertTrades(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._upsertTrades(scope, code, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  deleteTradesWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._deleteTrades(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  deleteTrades(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._deleteTrades(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._deleteTrades(scope, code, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  addTradePropertyWithHttpOperationResponse(scope, code, tradeId, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._addTradeProperty(scope, code, tradeId, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {AddTradePropertyDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link AddTradePropertyDto} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  addTradeProperty(scope, code, tradeId, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._addTradeProperty(scope, code, tradeId, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._addTradeProperty(scope, code, tradeId, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  deletePropertyFromTradeWithHttpOperationResponse(scope, code, tradeId, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._deletePropertyFromTrade(scope, code, tradeId, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePropertyFromTrade(scope, code, tradeId, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._deletePropertyFromTrade(scope, code, tradeId, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._deletePropertyFromTrade(scope, code, tradeId, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  createDerivedPortfolioWithHttpOperationResponse(scope, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._createDerivedPortfolio(scope, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {PortfolioDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioDto} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  createDerivedPortfolio(scope, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._createDerivedPortfolio(scope, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._createDerivedPortfolio(scope, options, optionalCallback);
    }
  }

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
   * @resolve {HttpOperationResponse<ResourceListPortfolioSearchResult>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  portfoliosSearchWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._portfoliosSearch(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListPortfolioSearchResult} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListPortfolioSearchResult} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  portfoliosSearch(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._portfoliosSearch(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._portfoliosSearch(options, optionalCallback);
    }
  }

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
   * @resolve {HttpOperationResponse<ResourceListPropertyDefinitionDto>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  propertiesSearchWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._propertiesSearch(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListPropertyDefinitionDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListPropertyDefinitionDto} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  propertiesSearch(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._propertiesSearch(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._propertiesSearch(options, optionalCallback);
    }
  }

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
   * @resolve {HttpOperationResponse<ResourceListPropertyDomain>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getPropertyDefinitionDomainsWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getPropertyDefinitionDomains(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListPropertyDomain} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListPropertyDomain} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getPropertyDefinitionDomains(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getPropertyDefinitionDomains(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getPropertyDefinitionDomains(options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  createPropertyDefinitionWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._createPropertyDefinition(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {PropertyDefinitionDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PropertyDefinitionDto} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  createPropertyDefinition(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._createPropertyDefinition(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._createPropertyDefinition(options, optionalCallback);
    }
  }

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
   * @resolve {HttpOperationResponse<ResourceListPropertyDefinitionDto>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getMultiplePropertyDefinitionsWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getMultiplePropertyDefinitions(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListPropertyDefinitionDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListPropertyDefinitionDto} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getMultiplePropertyDefinitions(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getMultiplePropertyDefinitions(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getMultiplePropertyDefinitions(options, optionalCallback);
    }
  }

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
   * @resolve {HttpOperationResponse<ResourceListPropertyKey>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getAllPropertyKeysInDomainWithHttpOperationResponse(domain, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getAllPropertyKeysInDomain(domain, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListPropertyKey} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListPropertyKey} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getAllPropertyKeysInDomain(domain, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getAllPropertyKeysInDomain(domain, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getAllPropertyKeysInDomain(domain, options, optionalCallback);
    }
  }

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
   * @resolve {HttpOperationResponse<ResourceListScope>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getPropertyDefinitionScopesInDomainWithHttpOperationResponse(domain, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getPropertyDefinitionScopesInDomain(domain, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListScope} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListScope} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getPropertyDefinitionScopesInDomain(domain, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getPropertyDefinitionScopesInDomain(domain, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getPropertyDefinitionScopesInDomain(domain, options, optionalCallback);
    }
  }

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
   * @resolve {HttpOperationResponse<ResourceListPropertyKey>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getAllPropertyKeysInScopeWithHttpOperationResponse(domain, scope, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getAllPropertyKeysInScope(domain, scope, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListPropertyKey} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListPropertyKey} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getAllPropertyKeysInScope(domain, scope, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getAllPropertyKeysInScope(domain, scope, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getAllPropertyKeysInScope(domain, scope, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  getPropertyDefinitionWithHttpOperationResponse(domain, scope, name, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getPropertyDefinition(domain, scope, name, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {PropertyDefinitionDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PropertyDefinitionDto} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getPropertyDefinition(domain, scope, name, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getPropertyDefinition(domain, scope, name, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getPropertyDefinition(domain, scope, name, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  updatePropertyDefinitionWithHttpOperationResponse(domain, scope, name, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._updatePropertyDefinition(domain, scope, name, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {PropertyDefinitionDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PropertyDefinitionDto} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  updatePropertyDefinition(domain, scope, name, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._updatePropertyDefinition(domain, scope, name, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._updatePropertyDefinition(domain, scope, name, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  deletePropertyDefinitionWithHttpOperationResponse(domain, scope, name, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._deletePropertyDefinition(domain, scope, name, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  deletePropertyDefinition(domain, scope, name, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._deletePropertyDefinition(domain, scope, name, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._deletePropertyDefinition(domain, scope, name, options, optionalCallback);
    }
  }

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
   * @param {string} options.request.formatType Possible values include: 'Basic',
   * 'Limited', 'Currency'
   *
   * @param {number} options.request.order
   *
   * @param {string} options.request.displayName
   *
   * @param {string} options.request.valueType Possible values include: 'String',
   * 'Int', 'Decimal', 'DateTime', 'Boolean', 'Map', 'PropertyArray',
   * 'Percentage', 'Currency', 'BenchmarkType', 'Code', 'Id', 'Uri',
   * 'ArrayOfIds', 'ArrayOfTxnAliases', 'ArrayofTxnMovements'
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
   * @reject {Error} - The error object.
   */
  createPropertyDataFormatWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._createPropertyDataFormat(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {string} options.request.formatType Possible values include: 'Basic',
   * 'Limited', 'Currency'
   *
   * @param {number} options.request.order
   *
   * @param {string} options.request.displayName
   *
   * @param {string} options.request.valueType Possible values include: 'String',
   * 'Int', 'Decimal', 'DateTime', 'Boolean', 'Map', 'PropertyArray',
   * 'Percentage', 'Currency', 'BenchmarkType', 'Code', 'Id', 'Uri',
   * 'ArrayOfIds', 'ArrayOfTxnAliases', 'ArrayofTxnMovements'
   *
   * @param {array} [options.request.acceptableValues]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {PropertyDataFormatDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PropertyDataFormatDto} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  createPropertyDataFormat(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._createPropertyDataFormat(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._createPropertyDataFormat(options, optionalCallback);
    }
  }

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
   * @resolve {HttpOperationResponse<ResourceListPropertyDataFormatDto>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  listPropertyDataFormatsWithHttpOperationResponse(scope, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._listPropertyDataFormats(scope, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListPropertyDataFormatDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListPropertyDataFormatDto} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  listPropertyDataFormats(scope, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._listPropertyDataFormats(scope, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._listPropertyDataFormats(scope, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  getPropertyDataFormatWithHttpOperationResponse(scope, name, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getPropertyDataFormat(scope, name, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {PropertyDataFormatDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PropertyDataFormatDto} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getPropertyDataFormat(scope, name, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getPropertyDataFormat(scope, name, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getPropertyDataFormat(scope, name, options, optionalCallback);
    }
  }

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
   * @param {string} options.request.formatType Possible values include: 'Basic',
   * 'Limited', 'Currency'
   *
   * @param {number} options.request.order
   *
   * @param {string} options.request.displayName
   *
   * @param {string} options.request.valueType Possible values include: 'String',
   * 'Int', 'Decimal', 'DateTime', 'Boolean', 'Map', 'PropertyArray',
   * 'Percentage', 'Currency', 'BenchmarkType', 'Code', 'Id', 'Uri',
   * 'ArrayOfIds', 'ArrayOfTxnAliases', 'ArrayofTxnMovements'
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
   * @reject {Error} - The error object.
   */
  updatePropertyDataFormatWithHttpOperationResponse(scope, name, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._updatePropertyDataFormat(scope, name, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {string} options.request.formatType Possible values include: 'Basic',
   * 'Limited', 'Currency'
   *
   * @param {number} options.request.order
   *
   * @param {string} options.request.displayName
   *
   * @param {string} options.request.valueType Possible values include: 'String',
   * 'Int', 'Decimal', 'DateTime', 'Boolean', 'Map', 'PropertyArray',
   * 'Percentage', 'Currency', 'BenchmarkType', 'Code', 'Id', 'Uri',
   * 'ArrayOfIds', 'ArrayOfTxnAliases', 'ArrayofTxnMovements'
   *
   * @param {array} [options.request.acceptableValues]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {PropertyDataFormatDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PropertyDataFormatDto} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  updatePropertyDataFormat(scope, name, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._updatePropertyDataFormat(scope, name, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._updatePropertyDataFormat(scope, name, options, optionalCallback);
    }
  }

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
   * @resolve {HttpOperationResponse<ResourceListReconciliationBreakDto>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  performReconciliationWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._performReconciliation(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListReconciliationBreakDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListReconciliationBreakDto} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  performReconciliation(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._performReconciliation(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._performReconciliation(options, optionalCallback);
    }
  }

  /**
   * @summary Get all reference portfolios in a scope
   *
   * @param {string} scope
   *
   * @param {date} effectiveAt
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
   * @resolve {HttpOperationResponse<ResourceListPortfolioDto>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  listReferencePortfoliosWithHttpOperationResponse(scope, effectiveAt, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._listReferencePortfolios(scope, effectiveAt, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Get all reference portfolios in a scope
   *
   * @param {string} scope
   *
   * @param {date} effectiveAt
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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListPortfolioDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListPortfolioDto} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  listReferencePortfolios(scope, effectiveAt, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._listReferencePortfolios(scope, effectiveAt, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._listReferencePortfolios(scope, effectiveAt, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  createReferencePortfolioWithHttpOperationResponse(scope, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._createReferencePortfolio(scope, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {array} [options.referencePortfolio.properties] Portfolio properties
   * to add to the portfolio
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {PortfolioDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PortfolioDto} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  createReferencePortfolio(scope, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._createReferencePortfolio(scope, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._createReferencePortfolio(scope, options, optionalCallback);
    }
  }

  /**
   * @summary Get a reference portfolio by name (as opposed to id)
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {date} effectiveAt
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
   * @resolve {HttpOperationResponse<ResourceListReferencePortfolioConstituentDto>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getReferencePortfolioWithHttpOperationResponse(scope, code, effectiveAt, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getReferencePortfolio(scope, code, effectiveAt, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Get a reference portfolio by name (as opposed to id)
   *
   * @param {string} scope
   *
   * @param {string} code
   *
   * @param {date} effectiveAt
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {date} [options.asAt]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListReferencePortfolioConstituentDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link
   *                      ResourceListReferencePortfolioConstituentDto} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getReferencePortfolio(scope, code, effectiveAt, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getReferencePortfolio(scope, code, effectiveAt, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getReferencePortfolio(scope, code, effectiveAt, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  deleteReferencePortfolioWithHttpOperationResponse(scope, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._deleteReferencePortfolio(scope, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {DeletedEntityResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link DeletedEntityResponse} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  deleteReferencePortfolio(scope, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._deleteReferencePortfolio(scope, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._deleteReferencePortfolio(scope, code, options, optionalCallback);
    }
  }

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
   * @resolve {HttpOperationResponse<ResourceListReferencePortfolioConstituentDto>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getReferencePortfolioConstituentsWithHttpOperationResponse(scope, effectiveAt, code, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getReferencePortfolioConstituents(scope, effectiveAt, code, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListReferencePortfolioConstituentDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link
   *                      ResourceListReferencePortfolioConstituentDto} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getReferencePortfolioConstituents(scope, effectiveAt, code, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getReferencePortfolioConstituents(scope, effectiveAt, code, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getReferencePortfolioConstituents(scope, effectiveAt, code, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  upsertReferencePortfolioConstituentsWithHttpOperationResponse(scope, code, effectiveAt, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._upsertReferencePortfolioConstituents(scope, code, effectiveAt, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {UpsertReferencePortfolioConstituentsDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link UpsertReferencePortfolioConstituentsDto} for
   *                      more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertReferencePortfolioConstituents(scope, code, effectiveAt, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._upsertReferencePortfolioConstituents(scope, code, effectiveAt, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._upsertReferencePortfolioConstituents(scope, code, effectiveAt, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  getResultsWithHttpOperationResponse(scope, key, dateParameter, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getResults(scope, key, dateParameter, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResultsDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResultsDto} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getResults(scope, key, dateParameter, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getResults(scope, key, dateParameter, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getResults(scope, key, dateParameter, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  upsertResultsWithHttpOperationResponse(scope, key, dateParameter, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._upsertResults(scope, key, dateParameter, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResultsDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResultsDto} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertResults(scope, key, dateParameter, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._upsertResults(scope, key, dateParameter, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._upsertResults(scope, key, dateParameter, options, optionalCallback);
    }
  }

  /**
   * @summary Gets the schema for a given entity.
   *
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
   * 'TransactionConfigurationTypeAlias', 'TryUpsertCorporateActions'
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
   * @reject {Error} - The error object.
   */
  getEntitySchemaWithHttpOperationResponse(entity, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getEntitySchema(entity, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Gets the schema for a given entity.
   *
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
   * 'TransactionConfigurationTypeAlias', 'TryUpsertCorporateActions'
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {SchemaDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link SchemaDto} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getEntitySchema(entity, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getEntitySchema(entity, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getEntitySchema(entity, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  getPropertySchemaWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getPropertySchema(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {PropertySchemaDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link PropertySchemaDto} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getPropertySchema(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getPropertySchema(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getPropertySchema(options, optionalCallback);
    }
  }

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
   * @resolve {HttpOperationResponse<ResourceListUiDataType>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getValueTypesWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getValueTypes(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {ResourceListUiDataType} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ResourceListUiDataType} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getValueTypes(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getValueTypes(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getValueTypes(options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  batchAddClientSecuritiesWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._batchAddClientSecurities(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {TryAddClientSecuritiesDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link TryAddClientSecuritiesDto} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  batchAddClientSecurities(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._batchAddClientSecurities(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._batchAddClientSecurities(options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  batchDeleteClientSecuritiesWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._batchDeleteClientSecurities(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {TryDeleteClientSecuritiesDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link TryDeleteClientSecuritiesDto} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  batchDeleteClientSecurities(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._batchDeleteClientSecurities(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._batchDeleteClientSecurities(options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  getSecurityWithHttpOperationResponse(uid, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getSecurity(uid, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {SecurityDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link SecurityDto} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getSecurity(uid, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getSecurity(uid, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getSecurity(uid, options, optionalCallback);
    }
  }

  /**
   * @summary Lookup more than one security by supplying a collection of
   * non-Finbourne codes.  Optionally, decorate each security with specific
   * properties.
   *
   * @param {string} codeType The type of identifier. Possible values include:
   * 'Undefined', 'ReutersAssetId', 'CINS', 'Isin', 'Sedol', 'Cusip',
   * 'ClientInternal', 'Figi', 'Wertpapier'
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
   * @reject {Error} - The error object.
   */
  lookupSecuritiesFromCodesWithHttpOperationResponse(codeType, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._lookupSecuritiesFromCodes(codeType, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Lookup more than one security by supplying a collection of
   * non-Finbourne codes.  Optionally, decorate each security with specific
   * properties.
   *
   * @param {string} codeType The type of identifier. Possible values include:
   * 'Undefined', 'ReutersAssetId', 'CINS', 'Isin', 'Sedol', 'Cusip',
   * 'ClientInternal', 'Figi', 'Wertpapier'
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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {TryLookupSecuritiesFromCodesDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link TryLookupSecuritiesFromCodesDto} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  lookupSecuritiesFromCodes(codeType, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._lookupSecuritiesFromCodes(codeType, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._lookupSecuritiesFromCodes(codeType, options, optionalCallback);
    }
  }

  /**
   * @summary Lookup a large number of securities by supplying a collection of
   * non-Finbourne codes.  Optionally, decorate each security with specific
   * properties.
   *
   * @param {string} codeType The type of identifier. Possible values include:
   * 'Undefined', 'ReutersAssetId', 'CINS', 'Isin', 'Sedol', 'Cusip',
   * 'ClientInternal', 'Figi', 'Wertpapier'
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
   * @reject {Error} - The error object.
   */
  lookupSecuritiesFromCodesBulkWithHttpOperationResponse(codeType, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._lookupSecuritiesFromCodesBulk(codeType, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Lookup a large number of securities by supplying a collection of
   * non-Finbourne codes.  Optionally, decorate each security with specific
   * properties.
   *
   * @param {string} codeType The type of identifier. Possible values include:
   * 'Undefined', 'ReutersAssetId', 'CINS', 'Isin', 'Sedol', 'Cusip',
   * 'ClientInternal', 'Figi', 'Wertpapier'
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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {TryLookupSecuritiesFromCodesDto} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link TryLookupSecuritiesFromCodesDto} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  lookupSecuritiesFromCodesBulk(codeType, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._lookupSecuritiesFromCodesBulk(codeType, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._lookupSecuritiesFromCodesBulk(codeType, options, optionalCallback);
    }
  }

}

module.exports = LUSIDAPI;
module.exports['default'] = LUSIDAPI;
module.exports.LUSIDAPI = LUSIDAPI;
module.exports.LUSIDAPIModels = models;
