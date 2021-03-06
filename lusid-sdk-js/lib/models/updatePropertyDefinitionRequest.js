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
 * Class representing a UpdatePropertyDefinitionRequest.
 */
class UpdatePropertyDefinitionRequest {
  /**
   * Create a UpdatePropertyDefinitionRequest.
   * @property {boolean} [valueRequired]
   * @property {string} [displayName]
   * @property {object} [dataTypeId]
   * @property {string} [dataTypeId.scope]
   * @property {string} [dataTypeId.code]
   * @property {string} [lifeTime] Possible values include: 'Perpetual',
   * 'TimeVariant'
   * @property {string} [type] Possible values include: 'Label', 'Metric',
   * 'Information'
   */
  constructor() {
  }

  /**
   * Defines the metadata of UpdatePropertyDefinitionRequest
   *
   * @returns {object} metadata of UpdatePropertyDefinitionRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UpdatePropertyDefinitionRequest',
      type: {
        name: 'Composite',
        className: 'UpdatePropertyDefinitionRequest',
        modelProperties: {
          valueRequired: {
            required: false,
            serializedName: 'valueRequired',
            type: {
              name: 'Boolean'
            }
          },
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          dataTypeId: {
            required: false,
            serializedName: 'dataTypeId',
            type: {
              name: 'Composite',
              className: 'ResourceId'
            }
          },
          lifeTime: {
            required: false,
            serializedName: 'lifeTime',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = UpdatePropertyDefinitionRequest;
