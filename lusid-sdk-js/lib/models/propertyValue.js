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
 * Class representing a PropertyValue.
 */
class PropertyValue {
  /**
   * Create a PropertyValue.
   * @property {string} [labelValue]
   * @property {object} [metricValue]
   * @property {number} [metricValue.value]
   * @property {string} [metricValue.unit]
   * @property {date} [effectiveFrom] Date for which the property is effective
   * from
   */
  constructor() {
  }

  /**
   * Defines the metadata of PropertyValue
   *
   * @returns {object} metadata of PropertyValue
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PropertyValue',
      type: {
        name: 'Composite',
        className: 'PropertyValue',
        modelProperties: {
          labelValue: {
            required: false,
            serializedName: 'labelValue',
            type: {
              name: 'String'
            }
          },
          metricValue: {
            required: false,
            serializedName: 'metricValue',
            type: {
              name: 'Composite',
              className: 'MetricValue'
            }
          },
          effectiveFrom: {
            required: false,
            serializedName: 'effectiveFrom',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = PropertyValue;
