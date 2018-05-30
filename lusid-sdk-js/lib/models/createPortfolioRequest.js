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

'use strict';

const models = require('./index');

/**
 * Class representing a CreatePortfolioRequest.
 */
class CreatePortfolioRequest {
  /**
   * Create a CreatePortfolioRequest.
   * @member {string} name
   * @member {string} code
   * @member {date} [created]
   * @member {string} baseCurrency
   * @member {object} [corporateActionSourceId]
   * @member {string} [corporateActionSourceId.scope]
   * @member {string} [corporateActionSourceId.code]
   * @member {string} [accountingMethod] Possible values include: 'Default',
   * 'AverageCost', 'FirstInFirstOut', 'LastInFirstOut', 'HighestCostFirst',
   * 'LowestCostFirst'
   */
  constructor() {
  }

  /**
   * Defines the metadata of CreatePortfolioRequest
   *
   * @returns {object} metadata of CreatePortfolioRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CreatePortfolioRequest',
      type: {
        name: 'Composite',
        className: 'CreatePortfolioRequest',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          code: {
            required: true,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          created: {
            required: false,
            serializedName: 'created',
            type: {
              name: 'DateTime'
            }
          },
          baseCurrency: {
            required: true,
            serializedName: 'baseCurrency',
            type: {
              name: 'String'
            }
          },
          corporateActionSourceId: {
            required: false,
            serializedName: 'corporateActionSourceId',
            type: {
              name: 'Composite',
              className: 'ResourceId'
            }
          },
          accountingMethod: {
            required: false,
            serializedName: 'accountingMethod',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CreatePortfolioRequest;
