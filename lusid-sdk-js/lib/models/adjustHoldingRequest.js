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
 * This request specifies target holdings. i.e. holding data that the
 * system should match. When processed by the movement
 * engine, it will create 'true-up' adjustments on the fly.
 *
 */
class AdjustHoldingRequest {
  /**
   * Create a AdjustHoldingRequest.
   * @property {object} instrumentIdentifiers Unique instrument identifiers.
   * @property {object} [subHoldingKeys] Key fields to uniquely index the sub
   * holdings of a instrument
   * @property {object} [properties] Arbitrary properties to store with the
   * holding
   * @property {array} taxLots 1 or more quantity amounts
   */
  constructor() {
  }

  /**
   * Defines the metadata of AdjustHoldingRequest
   *
   * @returns {object} metadata of AdjustHoldingRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AdjustHoldingRequest',
      type: {
        name: 'Composite',
        className: 'AdjustHoldingRequest',
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
          subHoldingKeys: {
            required: false,
            serializedName: 'subHoldingKeys',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'PerpetualPropertyValueElementType',
                  type: {
                    name: 'Composite',
                    className: 'PerpetualPropertyValue'
                  }
              }
            }
          },
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'PerpetualPropertyValueElementType',
                  type: {
                    name: 'Composite',
                    className: 'PerpetualPropertyValue'
                  }
              }
            }
          },
          taxLots: {
            required: true,
            serializedName: 'taxLots',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TargetTaxLotRequestElementType',
                  type: {
                    name: 'Composite',
                    className: 'TargetTaxLotRequest'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = AdjustHoldingRequest;
