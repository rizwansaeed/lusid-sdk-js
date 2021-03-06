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
 * Class representing a InstrumentAnalytic.
 */
class InstrumentAnalytic {
  /**
   * Create a InstrumentAnalytic.
   * @property {string} instrumentUid Unique instrument identifier
   * @property {number} [value] Value of the analytic, eg price
   * @property {string} [denomination] Underlying unit of the analytic, eg
   * currency, EPS etc.
   */
  constructor() {
  }

  /**
   * Defines the metadata of InstrumentAnalytic
   *
   * @returns {object} metadata of InstrumentAnalytic
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'InstrumentAnalytic',
      type: {
        name: 'Composite',
        className: 'InstrumentAnalytic',
        modelProperties: {
          instrumentUid: {
            required: true,
            serializedName: 'instrumentUid',
            type: {
              name: 'String'
            }
          },
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Number'
            }
          },
          denomination: {
            required: false,
            serializedName: 'denomination',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = InstrumentAnalytic;
