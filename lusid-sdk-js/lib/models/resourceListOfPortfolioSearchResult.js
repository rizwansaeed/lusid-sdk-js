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

/**
 * Class representing a ResourceListOfPortfolioSearchResult.
 */
class ResourceListOfPortfolioSearchResult {
  /**
   * Create a ResourceListOfPortfolioSearchResult.
   * @property {array} [values]
   * @property {string} [href] The Uri that returns the same result as the
   * original request,
   * but may include resolved as at time(s).
   * @property {number} [count] The total number of records returned in the
   * set.
   * Note: If count is set by the func 'AddDynamicCounter', Count will be zero
   * until the values
   * are evaluated. This is due to lazy evaluation.
   * @property {array} [links]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ResourceListOfPortfolioSearchResult
   *
   * @returns {object} metadata of ResourceListOfPortfolioSearchResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ResourceListOfPortfolioSearchResult',
      type: {
        name: 'Composite',
        className: 'ResourceListOfPortfolioSearchResult',
        modelProperties: {
          values: {
            required: false,
            serializedName: 'values',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PortfolioSearchResultElementType',
                  type: {
                    name: 'Composite',
                    className: 'PortfolioSearchResult'
                  }
              }
            }
          },
          href: {
            required: false,
            serializedName: 'href',
            type: {
              name: 'String'
            }
          },
          count: {
            required: false,
            serializedName: 'count',
            type: {
              name: 'Number'
            }
          },
          links: {
            required: false,
            serializedName: 'links',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'LinkElementType',
                  type: {
                    name: 'Composite',
                    className: 'Link'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ResourceListOfPortfolioSearchResult;
