# LusidSdk.AggregationRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recipeId** | [**ResourceId**](ResourceId.md) | The configuration recipe, consisting of recipe scope and recipe name, to use in performing the aggregation. | [optional] 
**inlineRecipe** | [**ConfigurationRecipe**](ConfigurationRecipe.md) | Target Method for providing a non-named recipe.  If given, this replaces the &#39;RecipeId&#39; used with the bespoke recipe. This is intended to allow use of non-named  recipes to iterate quickly for design purposes. Ultimately it is recommended that production recipes would be stored  in Lusid.    USE OF ANY (INLINE) RECIPE IS AT PRESENT LIABLE TO CHANGE. | [optional] 
**asAt** | **Date** | The asAt date to use | [optional] 
**effectiveAt** | **Date** | The market data time, i.e. the time to run the aggregation request effective of. | 
**metrics** | [**[AggregateSpec]**](AggregateSpec.md) | The set of specifications for items to calculate or retrieve during the aggregation and present in the results.  This is logically equivalent to the set of operations in a Sql select statement  select [operation1(field1), operation2(field2), ... ] from results | 
**groupBy** | **[String]** | The set of items by which to perform grouping. This primarily matters when one or more of the metric operators is a mapping  that reduces set size, e.g. sum or proportion. The group-by statement determines the set of keys by which to break the results out. | [optional] 
**filters** | [**[PropertyFilter]**](PropertyFilter.md) | A set of filters to use to reduce the data found in a request. Equivalent to the &#39;where ...&#39; part of a Sql select statement.  For example, filter a set of values within a given range or matching a particular value. | [optional] 
**limit** | **Number** | limit the results to a particular number of values. | [optional] 
**sort** | **String** | Sort the results or not. | [optional] 


