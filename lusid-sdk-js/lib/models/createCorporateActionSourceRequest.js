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
 * Class representing a CreateCorporateActionSourceRequest.
 */
class CreateCorporateActionSourceRequest {
  /**
   * Create a CreateCorporateActionSourceRequest.
   * @property {string} [scope] Scope of Corporate Action Source
   * @property {string} [code] Code of Corporate Action Source
   */
  constructor() {
  }

  /**
   * Defines the metadata of CreateCorporateActionSourceRequest
   *
   * @returns {object} metadata of CreateCorporateActionSourceRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CreateCorporateActionSourceRequest',
      type: {
        name: 'Composite',
        className: 'CreateCorporateActionSourceRequest',
        modelProperties: {
          scope: {
            required: false,
            readOnly: true,
            serializedName: 'scope',
            type: {
              name: 'String'
            }
          },
          code: {
            required: false,
            readOnly: true,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CreateCorporateActionSourceRequest;