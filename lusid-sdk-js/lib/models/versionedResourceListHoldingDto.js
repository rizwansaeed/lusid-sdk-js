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

const models = require('./index');

/**
 * Class representing a VersionedResourceListHoldingDto.
 */
class VersionedResourceListHoldingDto {
  /**
   * Create a VersionedResourceListHoldingDto.
   * @member {object} [version]
   * @member {date} [version.effectiveFrom]
   * @member {date} [version.asAtDate]
   * @member {string} [version.updatedBy]
   * @member {string} [version.href]
   * @member {array} [values]
   * @member {string} [href] The Uri that returns the same result as the
   * original request,
   * but may include resolved as at time(s).
   * @member {number} [count] The total number of records returned in the set
   * @member {array} [_links]
   */
  constructor() {
  }

  /**
   * Defines the metadata of VersionedResourceListHoldingDto
   *
   * @returns {object} metadata of VersionedResourceListHoldingDto
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VersionedResourceList_HoldingDto_',
      type: {
        name: 'Composite',
        className: 'VersionedResourceListHoldingDto',
        modelProperties: {
          version: {
            required: false,
            serializedName: 'version',
            type: {
              name: 'Composite',
              className: 'VersionDto'
            }
          },
          values: {
            required: false,
            serializedName: 'values',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'HoldingDtoElementType',
                  type: {
                    name: 'Composite',
                    className: 'HoldingDto'
                  }
              }
            }
          },
          href: {
            required: false,
            serializedName: 'href',
            type: {
              name: 'String'
            }
          },
          count: {
            required: false,
            serializedName: 'count',
            type: {
              name: 'Number'
            }
          },
          _links: {
            required: false,
            serializedName: '_links',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'LinkElementType',
                  type: {
                    name: 'Composite',
                    className: 'Link'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = VersionedResourceListHoldingDto;
