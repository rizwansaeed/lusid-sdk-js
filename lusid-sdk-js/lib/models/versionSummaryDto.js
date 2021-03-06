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
 * Class representing a VersionSummaryDto.
 */
class VersionSummaryDto {
  /**
   * Create a VersionSummaryDto.
   * @property {string} [apiVersion]
   * @property {string} [buildVersion]
   * @property {string} [excelVersion]
   * @property {array} [links]
   */
  constructor() {
  }

  /**
   * Defines the metadata of VersionSummaryDto
   *
   * @returns {object} metadata of VersionSummaryDto
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VersionSummaryDto',
      type: {
        name: 'Composite',
        className: 'VersionSummaryDto',
        modelProperties: {
          apiVersion: {
            required: false,
            readOnly: true,
            serializedName: 'apiVersion',
            type: {
              name: 'String'
            }
          },
          buildVersion: {
            required: false,
            readOnly: true,
            serializedName: 'buildVersion',
            type: {
              name: 'String'
            }
          },
          excelVersion: {
            required: false,
            readOnly: true,
            serializedName: 'excelVersion',
            type: {
              name: 'String'
            }
          },
          links: {
            required: false,
            serializedName: 'links',
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

module.exports = VersionSummaryDto;
