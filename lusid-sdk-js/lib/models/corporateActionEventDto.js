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
 * A corporate action
 *
 */
class CorporateActionEventDto {
  /**
   * Create a CorporateActionEventDto.
   * @member {object} sourceId
   * @member {string} [sourceId.scope]
   * @member {string} [sourceId.code]
   * @member {string} corporateActionId
   * @member {date} [announcementDate]
   * @member {date} [exDate]
   * @member {date} [recordDate]
   * @member {array} [transitions]
   */
  constructor() {
  }

  /**
   * Defines the metadata of CorporateActionEventDto
   *
   * @returns {object} metadata of CorporateActionEventDto
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CorporateActionEventDto',
      type: {
        name: 'Composite',
        className: 'CorporateActionEventDto',
        modelProperties: {
          sourceId: {
            required: true,
            serializedName: 'sourceId',
            type: {
              name: 'Composite',
              className: 'ResourceId'
            }
          },
          corporateActionId: {
            required: true,
            serializedName: 'corporateActionId',
            type: {
              name: 'String'
            }
          },
          announcementDate: {
            required: false,
            serializedName: 'announcementDate',
            type: {
              name: 'DateTime'
            }
          },
          exDate: {
            required: false,
            serializedName: 'exDate',
            type: {
              name: 'DateTime'
            }
          },
          recordDate: {
            required: false,
            serializedName: 'recordDate',
            type: {
              name: 'DateTime'
            }
          },
          transitions: {
            required: false,
            serializedName: 'transitions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CorporateActionTransitionDtoElementType',
                  type: {
                    name: 'Composite',
                    className: 'CorporateActionTransitionDto'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = CorporateActionEventDto;