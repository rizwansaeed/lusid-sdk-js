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
 * Class representing a AggregateSpec.
 */
class AggregateSpec {
  /**
   * Create a AggregateSpec.
   * @property {string} [key]
   * @property {string} [op] Possible values include: 'Sum', 'Proportion',
   * 'Average', 'Count', 'Min', 'Max', 'Value'
   */
  constructor() {
  }

  /**
   * Defines the metadata of AggregateSpec
   *
   * @returns {object} metadata of AggregateSpec
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AggregateSpec',
      type: {
        name: 'Composite',
        className: 'AggregateSpec',
        modelProperties: {
          key: {
            required: false,
            serializedName: 'key',
            type: {
              name: 'String'
            }
          },
          op: {
            required: false,
            serializedName: 'op',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AggregateSpec;
