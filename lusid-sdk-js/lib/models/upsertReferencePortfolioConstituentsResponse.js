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
 * Class representing a UpsertReferencePortfolioConstituentsResponse.
 */
class UpsertReferencePortfolioConstituentsResponse {
  /**
   * Create a UpsertReferencePortfolioConstituentsResponse.
   * @property {string} [href]
   * @property {object} [version]
   * @property {date} [version.effectiveFrom]
   * @property {date} [version.asAtDate]
   * @property {array} [links]
   */
  constructor() {
  }

  /**
   * Defines the metadata of UpsertReferencePortfolioConstituentsResponse
   *
   * @returns {object} metadata of UpsertReferencePortfolioConstituentsResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UpsertReferencePortfolioConstituentsResponse',
      type: {
        name: 'Composite',
        className: 'UpsertReferencePortfolioConstituentsResponse',
        modelProperties: {
          href: {
            required: false,
            serializedName: 'href',
            type: {
              name: 'String'
            }
          },
          version: {
            required: false,
            serializedName: 'version',
            type: {
              name: 'Composite',
              className: 'Version'
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

module.exports = UpsertReferencePortfolioConstituentsResponse;
