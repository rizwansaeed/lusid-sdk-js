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
 * A 'transition' within a corporate action, representing a set of output
 * movements paired to a single input position
 *
 */
class CorporateActionTransitionRequest {
  /**
   * Create a CorporateActionTransitionRequest.
   * @property {object} [inputTransition]
   * @property {object} [inputTransition.instrumentIdentifiers] unique
   * instrument identifiers.
   * @property {number} [inputTransition.unitsFactor]
   * @property {number} [inputTransition.costFactor]
   * @property {array} [outputTransitions]
   */
  constructor() {
  }

  /**
   * Defines the metadata of CorporateActionTransitionRequest
   *
   * @returns {object} metadata of CorporateActionTransitionRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CorporateActionTransitionRequest',
      type: {
        name: 'Composite',
        className: 'CorporateActionTransitionRequest',
        modelProperties: {
          inputTransition: {
            required: false,
            serializedName: 'inputTransition',
            type: {
              name: 'Composite',
              className: 'CorporateActionTransitionComponentRequest'
            }
          },
          outputTransitions: {
            required: false,
            serializedName: 'outputTransitions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CorporateActionTransitionComponentRequestElementType',
                  type: {
                    name: 'Composite',
                    className: 'CorporateActionTransitionComponentRequest'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = CorporateActionTransitionRequest;
