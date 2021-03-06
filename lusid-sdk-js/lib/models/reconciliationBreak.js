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
 * A reconciliation break
 *
 */
class ReconciliationBreak {
  /**
   * Create a ReconciliationBreak.
   * @property {string} instrumentUid Unique instrument identifier
   * @property {array} subHoldingKeys Any other properties that comprise the
   * Sub-Holding Key
   * @property {number} leftUnits Units from the left hand side
   * @property {number} rightUnits Units from the right hand side
   * @property {number} differenceUnits Difference in units
   * @property {object} leftCost Cost from the left hand side
   * @property {number} [leftCost.amount]
   * @property {string} [leftCost.currency]
   * @property {object} rightCost Cost from the right hand side
   * @property {number} [rightCost.amount]
   * @property {string} [rightCost.currency]
   * @property {object} differenceCost Difference in cost
   * @property {number} [differenceCost.amount]
   * @property {string} [differenceCost.currency]
   * @property {array} instrumentProperties Additional features relating to the
   * security
   */
  constructor() {
  }

  /**
   * Defines the metadata of ReconciliationBreak
   *
   * @returns {object} metadata of ReconciliationBreak
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ReconciliationBreak',
      type: {
        name: 'Composite',
        className: 'ReconciliationBreak',
        modelProperties: {
          instrumentUid: {
            required: true,
            serializedName: 'instrumentUid',
            type: {
              name: 'String'
            }
          },
          subHoldingKeys: {
            required: true,
            serializedName: 'subHoldingKeys',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PerpetualPropertyElementType',
                  type: {
                    name: 'Composite',
                    className: 'PerpetualProperty'
                  }
              }
            }
          },
          leftUnits: {
            required: true,
            serializedName: 'leftUnits',
            type: {
              name: 'Number'
            }
          },
          rightUnits: {
            required: true,
            serializedName: 'rightUnits',
            type: {
              name: 'Number'
            }
          },
          differenceUnits: {
            required: true,
            serializedName: 'differenceUnits',
            type: {
              name: 'Number'
            }
          },
          leftCost: {
            required: true,
            serializedName: 'leftCost',
            type: {
              name: 'Composite',
              className: 'CurrencyAndAmount'
            }
          },
          rightCost: {
            required: true,
            serializedName: 'rightCost',
            type: {
              name: 'Composite',
              className: 'CurrencyAndAmount'
            }
          },
          differenceCost: {
            required: true,
            serializedName: 'differenceCost',
            type: {
              name: 'Composite',
              className: 'CurrencyAndAmount'
            }
          },
          instrumentProperties: {
            required: true,
            serializedName: 'instrumentProperties',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PropertyElementType',
                  type: {
                    name: 'Composite',
                    className: 'Property'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ReconciliationBreak;
