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
 * Class representing a UpdateInstrumentIdentifierRequest.
 */
class UpdateInstrumentIdentifierRequest {
  /**
   * Create a UpdateInstrumentIdentifierRequest.
   * @property {string} [type] The type of the identifier to upsert. This must
   * be one of the code types marked as
   * allowable for instrument identifiers.
   * @property {string} [value] The value of the identifier. If set to `null`,
   * this will remove the identifier completely.
   * Note that, if an instrument only has one identifier, it is an error to
   * remove this.
   * @property {date} [effectiveAt] The date at which the identifier
   * modification is to be effective from. If unset, will
   * default to `now`.
   */
  constructor() {
  }

  /**
   * Defines the metadata of UpdateInstrumentIdentifierRequest
   *
   * @returns {object} metadata of UpdateInstrumentIdentifierRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UpdateInstrumentIdentifierRequest',
      type: {
        name: 'Composite',
        className: 'UpdateInstrumentIdentifierRequest',
        modelProperties: {
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'String'
            }
          },
          effectiveAt: {
            required: false,
            serializedName: 'effectiveAt',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = UpdateInstrumentIdentifierRequest;
