Feature: Google coklu arama
Scenario Outline: Google coklu arama
Given Google sitesine gider
Then arama motoruna girilen "<keyler>" yazar
And arama da "<keyler>" in arandigini assert eder

Examples:
|keyler| 
|java|
|phyton|
|c++|