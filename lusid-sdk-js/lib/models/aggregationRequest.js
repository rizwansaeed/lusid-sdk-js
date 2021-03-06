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
 * Specification object for the parameters of an aggregation
 *
 */
class AggregationRequest {
  /**
   * Create a AggregationRequest.
   * @property {object} [recipeId] The configuration recipe, consisting of
   * recipe scope and recipe name, to use in performing the aggregation.
   * @property {string} [recipeId.scope]
   * @property {string} [recipeId.code]
   * @property {object} [inlineRecipe] Target Method for providing a non-named
   * recipe.
   * If given, this replaces the 'RecipeId' used with the bespoke recipe. This
   * is intended to allow use of non-named
   * recipes to iterate quickly for design purposes. Ultimately it is
   * recommended that production recipes would be stored
   * in Lusid.
   *
   * USE OF ANY (INLINE) RECIPE IS AT PRESENT LIABLE TO CHANGE.
   * @property {string} [inlineRecipe.code] User given string name (code) to
   * identify the recipe.
   * @property {object} [inlineRecipe.market] The market configuration node
   * that defines where market data used in processing a request is loaded from
   * and how it is resolved.
   * @property {array} [inlineRecipe.market.marketRules] The set of rules that
   * define how to resolve particular use cases. These can be relatively
   * general or specific in nature.
   * Nominally any number are possible and will be processed in order where
   * applicable. However, there is evidently a potential
   * for increased computational cost where many rules must be applied to
   * resolve data. Ensuring that portfolios are structured in
   * such a way as to reduce the number of rules required is therefore
   * sensible.
   * @property {object} [inlineRecipe.market.suppliers] It is possible to
   * control which supplier is used for a given asset class.
   * @property {string} [inlineRecipe.market.suppliers.commodity] Possible
   * values include: 'DataScope', 'Lusid'
   * @property {string} [inlineRecipe.market.suppliers.credit] Possible values
   * include: 'DataScope', 'Lusid'
   * @property {string} [inlineRecipe.market.suppliers.equity] Possible values
   * include: 'DataScope', 'Lusid'
   * @property {string} [inlineRecipe.market.suppliers.fx] Possible values
   * include: 'DataScope', 'Lusid'
   * @property {string} [inlineRecipe.market.suppliers.rates] Possible values
   * include: 'DataScope', 'Lusid'
   * @property {object} [inlineRecipe.market.options] Miscellaneous options
   * around market loading. In the simplest usage case, this is just a default
   * supplier and instrument resolution code.
   * @property {string} [inlineRecipe.market.options.defaultSupplier] The
   * default supplier of data. This controls which 'dialect' is used to find
   * particular market data. e.g. one supplier might address data by RIC,
   * another by PermId. Possible values include: 'DataScope', 'Lusid'
   * @property {string} [inlineRecipe.market.options.defaultInstrumentCodeType]
   * when instrument quotes are searched for, what identifier should be used by
   * default. Possible values include: 'LusidInstrumentId', 'Figi', 'RIC',
   * 'QuotePermId', 'Isin', 'CurrencyPair'
   * @property {string} [inlineRecipe.market.options.defaultScope] for default
   * rules, which scope should data be searched for in
   * @property {date} [asAt] The asAt date to use
   * @property {date} effectiveAt The market data time, i.e. the time to run
   * the aggregation request effective of.
   * @property {array} metrics The set of specifications for items to calculate
   * or retrieve during the aggregation and present in the results.
   * This is logically equivalent to the set of operations in a Sql select
   * statement
   * select [operation1(field1), operation2(field2), ... ] from results
   * @property {array} [groupBy] The set of items by which to perform grouping.
   * This primarily matters when one or more of the metric operators is a
   * mapping
   * that reduces set size, e.g. sum or proportion. The group-by statement
   * determines the set of keys by which to break the results out.
   * @property {array} [filters] A set of filters to use to reduce the data
   * found in a request. Equivalent to the 'where ...' part of a Sql select
   * statement.
   * For example, filter a set of values within a given range or matching a
   * particular value.
   * @property {number} [limit] limit the results to a particular number of
   * values.
   * @property {string} [sort] Sort the results or not.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AggregationRequest
   *
   * @returns {object} metadata of AggregationRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AggregationRequest',
      type: {
        name: 'Composite',
        className: 'AggregationRequest',
        modelProperties: {
          recipeId: {
            required: false,
            serializedName: 'recipeId',
            type: {
              name: 'Composite',
              className: 'ResourceId'
            }
          },
          inlineRecipe: {
            required: false,
            serializedName: 'inlineRecipe',
            type: {
              name: 'Composite',
              className: 'ConfigurationRecipe'
            }
          },
          asAt: {
            required: false,
            serializedName: 'asAt',
            type: {
              name: 'DateTime'
            }
          },
          effectiveAt: {
            required: true,
            serializedName: 'effectiveAt',
            type: {
              name: 'DateTime'
            }
          },
          metrics: {
            required: true,
            serializedName: 'metrics',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AggregateSpecElementType',
                  type: {
                    name: 'Composite',
                    className: 'AggregateSpec'
                  }
              }
            }
          },
          groupBy: {
            required: false,
            serializedName: 'groupBy',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          filters: {
            required: false,
            serializedName: 'filters',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PropertyFilterElementType',
                  type: {
                    name: 'Composite',
                    className: 'PropertyFilter'
                  }
              }
            }
          },
          limit: {
            required: false,
            serializedName: 'limit',
            type: {
              name: 'Number'
            }
          },
          sort: {
            required: false,
            serializedName: 'sort',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AggregationRequest;
