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
 * Class representing a CorporateActionTransitionComponentRequest.
 */
class CorporateActionTransitionComponentRequest {
  /**
   * Create a CorporateActionTransitionComponentRequest.
   * @property {object} instrumentIdentifiers unique instrument identifiers.
   * @property {number} unitsFactor
   * @property {number} costFactor
   */
  constructor() {
  }

  /**
   * Defines the metadata of CorporateActionTransitionComponentRequest
   *
   * @returns {object} metadata of CorporateActionTransitionComponentRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CorporateActionTransitionComponentRequest',
      type: {
        name: 'Composite',
        className: 'CorporateActionTransitionComponentRequest',
        modelProperties: {
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
          unitsFactor: {
            required: true,
            serializedName: 'unitsFactor',
            type: {
              name: 'Number'
            }
          },
          costFactor: {
            required: true,
            serializedName: 'costFactor',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = CorporateActionTransitionComponentRequest;
