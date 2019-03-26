# LusidSdk.InstrumentDefinition

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Required. The name of the instrument | 
**identifiers** | **{String: String}** | Required. A set of identifiers that uniquely identify this instrument (e.g FIGI, RIC) | 
**properties** | [**[InstrumentProperty]**](InstrumentProperty.md) | Optional. A collection of properties to upsert on the instrument. | [optional] 
**lookThroughPortfolioId** | [**ResourceId**](ResourceId.md) | Optional. The identifier of the portfolio that represents this instrument | [optional] 
**definition** | [**InstrumentEconomicDefinition**](InstrumentEconomicDefinition.md) | Expanded instrument definition - in the case of OTC instruments  this contains the definition of the non-exchange traded instrument.  The format for this can be client-defined, but in order to transparently use  vendor libraries it must conform to a format that LUSID understands. | [optional] 


