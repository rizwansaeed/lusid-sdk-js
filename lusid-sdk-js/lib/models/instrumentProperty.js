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
 * Class representing a InstrumentProperty.
 */
class InstrumentProperty {
  /**
   * Create a InstrumentProperty.
   * @property {string} [key] The property key of the property, e.g,
   * 'Instrument/default/Isin'
   * @property {object} [value] The value of the property, which must not be
   * empty or null. e.g, 'US0378331005'
   * @property {string} [value.labelValue]
   * @property {object} [value.metricValue]
   * @property {number} [value.metricValue.value]
   * @property {string} [value.metricValue.unit]
   * @property {date} [value.effectiveFrom] Date for which the property is
   * effective from
   */
  constructor() {
  }

  /**
   * Defines the metadata of InstrumentProperty
   *
   * @returns {object} metadata of InstrumentProperty
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'InstrumentProperty',
      type: {
        name: 'Composite',
        className: 'InstrumentProperty',
        modelProperties: {
          key: {
            required: false,
            serializedName: 'key',
            type: {
              name: 'String'
            }
          },
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Composite',
              className: 'PropertyValue'
            }
          }
        }
      }
    };
  }
}

module.exports = InstrumentProperty;
