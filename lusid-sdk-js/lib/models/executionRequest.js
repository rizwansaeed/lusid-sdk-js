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
 * Class representing a ExecutionRequest.
 */
class ExecutionRequest {
  /**
   * Create a ExecutionRequest.
   * @property {string} executionId FIX Field 17.  Unique execution identifier.
   * @property {string} side FIX Field 54.
   * @property {object} instrumentIdentifiers Unique instrument identifiers.
   * @property {date} transactionTime FIX field 60.  Time the transaction
   * represented by this ExecutionReport occurred.
   * @property {number} lastShares FIX field 32.
   * @property {number} lastPx FIX field 31.
   * @property {string} currency FIX field 15.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ExecutionRequest
   *
   * @returns {object} metadata of ExecutionRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ExecutionRequest',
      type: {
        name: 'Composite',
        className: 'ExecutionRequest',
        modelProperties: {
          executionId: {
            required: true,
            serializedName: 'executionId',
            type: {
              name: 'String'
            }
          },
          side: {
            required: true,
            serializedName: 'side',
            type: {
              name: 'String'
            }
          },
          instrumentIdentifiers: {
            required: true,
            serializedName: 'instrumentIdentifiers',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          transactionTime: {
            required: true,
            serializedName: 'transactionTime',
            type: {
              name: 'DateTime'
            }
          },
          lastShares: {
            required: true,
            serializedName: 'lastShares',
            type: {
              name: 'Number'
            }
          },
          lastPx: {
            required: true,
            serializedName: 'lastPx',
            type: {
              name: 'Number'
            }
          },
          currency: {
            required: true,
            serializedName: 'currency',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ExecutionRequest;
