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
 * Class representing a ResultDataSchema.
 */
class ResultDataSchema {
  /**
   * Create a ResultDataSchema.
   * @property {object} [nodeValueSchema]
   * @property {object} [propertySchema]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ResultDataSchema
   *
   * @returns {object} metadata of ResultDataSchema
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ResultDataSchema',
      type: {
        name: 'Composite',
        className: 'ResultDataSchema',
        modelProperties: {
          nodeValueSchema: {
            required: false,
            serializedName: 'nodeValueSchema',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'FieldSchemaElementType',
                  type: {
                    name: 'Composite',
                    className: 'FieldSchema'
                  }
              }
            }
          },
          propertySchema: {
            required: false,
            serializedName: 'propertySchema',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'FieldSchemaElementType',
                  type: {
                    name: 'Composite',
                    className: 'FieldSchema'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ResultDataSchema;
