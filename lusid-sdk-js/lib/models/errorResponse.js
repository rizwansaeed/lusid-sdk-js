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
 * Class representing a ErrorResponse.
 */
class ErrorResponse {
  /**
   * Create a ErrorResponse.
   * @property {number} [status]
   * @property {string} [code] Possible values include: 'Unknown',
   * 'VersionNotFound', 'InstrumentNotFound', 'PropertyNotFound',
   * 'PortfolioRecursionDepth', 'GroupNotFound', 'PortfolioNotFound',
   * 'PropertySchemaNotFound', 'PortfolioAncestryNotFound',
   * 'PortfolioWithIdAlreadyExists', 'OrphanedPortfolio', 'MissingBaseClaims',
   * 'PropertyNotDefined', 'CannotDeleteSystemProperty',
   * 'CannotModifyImmutablePropertyField', 'PropertyAlreadyExists',
   * 'InvalidPropertyLifeTime', 'CannotModifyDefaultDataType',
   * 'GroupAlreadyExists', 'NoSuchDataType', 'ValidationError',
   * 'LoopDetectedInGroupHierarchy', 'SubGroupAlreadyExists',
   * 'PriceSourceNotFound', 'AnalyticStoreNotFound',
   * 'AnalyticStoreAlreadyExists', 'ClientInstrumentAlreadyExists',
   * 'DuplicateInParameterSet', 'ResultsNotFound', 'OrderFieldNotInResultSet',
   * 'OperationFailed', 'ElasticSearchError', 'InvalidParameterValue',
   * 'CommandProcessingFailure', 'EntityStateConstructionFailure',
   * 'EntityTimelineDoesNotExist', 'EventPublishFailure',
   * 'InvalidRequestFailure', 'EventPublishUnknown', 'EventQueryFailure',
   * 'BlobDidNotExistFailure', 'SubSystemRequestFailure',
   * 'SubSystemConfigurationFailure', 'FailedToDelete',
   * 'UpsertClientInstrumentFailure', 'IllegalAsAtInterval',
   * 'IllegalBitemporalQuery', 'InvalidAlternateId',
   * 'CannotAddSourcePortfolioPropertyExplicitly',
   * 'EntityAlreadyExistsInGroup', 'EntityWithIdAlreadyExists',
   * 'PortfolioDetailsDoNotExist', 'PortfolioWithNameAlreadyExists',
   * 'InvalidTransactions', 'ReferencePortfolioNotFound', 'DuplicateIdFailure',
   * 'CommandRetrievalFailure', 'DataFilterApplicationFailure', 'SearchFailed',
   * 'MovementsEngineConfigurationKeyFailure', 'FxRateSourceNotFound',
   * 'AccrualSourceNotFound', 'EntitlementsFailure', 'InvalidIdentityToken',
   * 'InvalidRequestHeaders', 'PriceNotFound', 'InvalidSubHoldingKeysProvided',
   * 'DuplicateSubHoldingKeysProvided', 'CutDefinitionNotFound',
   * 'CutDefinitionInvalid', 'ServerConfigurationError',
   * 'InvalidUnitForDataType', 'InvalidTypeForDataType',
   * 'InvalidValueForDataType', 'UnitNotDefinedForDataType',
   * 'UnitsNotSupportedOnDataType', 'CannotSpecifyUnitsOnDataType',
   * 'UnitSchemaInconsistentWithDataType', 'UnitDefinitionNotSpecified',
   * 'DuplicateUnitDefinitionsSpecified', 'InvalidUnitsDefinition',
   * 'InvalidInstrumentIdentifierUnit', 'HoldingsAdjustmentDoesNotExist',
   * 'CouldNotBuildExcelUrl', 'CouldNotGetExcelVersion',
   * 'InstrumentByCodeNotFound', 'EntitySchemaDoesNotExist',
   * 'FeatureNotSupportedOnPortfolioType', 'QuoteNotFoundFailure',
   * 'ReferencePortfolioRequestNotSupported',
   * 'TransactionPortfolioRequestNotSupported', 'InvalidInstrumentDefinition',
   * 'InstrumentUpsertFailure', 'TransactionTypeNotFound',
   * 'TransactionTypeDuplication', 'InvalidPropertyValueAssignment',
   * 'PortfolioDoesNotExistAtGivenDate', 'QueryParserFailure',
   * 'DuplicateConstituentFailure', 'UnresolvedInstrumentConstituentFailure',
   * 'UnresolvedInstrumentInTransitionFailure', 'MissingRecipeFailure',
   * 'DependenciesFailure', 'PortfolioPreprocessFailure',
   * 'ValuationEngineFailure', 'TaskFactoryFailure', 'TaskEvaluationFailure',
   * 'InstrumentFailure', 'CashFlowsFailure', 'ResultRetrievalFailure',
   * 'ResultProcessingFailure', 'VendorResultProcessingFailure',
   * 'CannotSupplyTimesWithPortfoliosQuery', 'AttemptToUpsertDuplicateQuotes'
   * @property {string} [message]
   * @property {string} [detailedMessage]
   * @property {array} [items]
   * @property {string} [moreInfo]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ErrorResponse
   *
   * @returns {object} metadata of ErrorResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ErrorResponse',
      type: {
        name: 'Composite',
        className: 'ErrorResponse',
        modelProperties: {
          status: {
            required: false,
            serializedName: 'status',
            type: {
              name: 'Number'
            }
          },
          code: {
            required: false,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          },
          detailedMessage: {
            required: false,
            serializedName: 'detailedMessage',
            type: {
              name: 'String'
            }
          },
          items: {
            required: false,
            serializedName: 'items',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ErrorDetailBaseElementType',
                  type: {
                    name: 'Composite',
                    className: 'ErrorDetailBase'
                  }
              }
            }
          },
          moreInfo: {
            required: false,
            serializedName: 'moreInfo',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ErrorResponse;
