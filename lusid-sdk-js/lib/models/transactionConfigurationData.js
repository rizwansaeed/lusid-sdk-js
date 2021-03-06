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
 * Class representing a TransactionConfigurationData.
 */
class TransactionConfigurationData {
  /**
   * Create a TransactionConfigurationData.
   * @property {array} aliases List of transaction codes that map to this
   * specific transaction model
   * @property {array} movements Movement data for the transaction code
   * @property {array} [properties]
   */
  constructor() {
  }

  /**
   * Defines the metadata of TransactionConfigurationData
   *
   * @returns {object} metadata of TransactionConfigurationData
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TransactionConfigurationData',
      type: {
        name: 'Composite',
        className: 'TransactionConfigurationData',
        modelProperties: {
          aliases: {
            required: true,
            serializedName: 'aliases',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TransactionConfigurationTypeAliasElementType',
                  type: {
                    name: 'Composite',
                    className: 'TransactionConfigurationTypeAlias'
                  }
              }
            }
          },
          movements: {
            required: true,
            serializedName: 'movements',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TransactionConfigurationMovementDataElementType',
                  type: {
                    name: 'Composite',
                    className: 'TransactionConfigurationMovementData'
                  }
              }
            }
          },
          properties: {
            required: false,
            serializedName: 'properties',
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
          }
        }
      }
    };
  }
}

module.exports = TransactionConfigurationData;
