Feature: Login Manager Password
@Manager_ID1
    Scenario:Manager_ID1
    Given url git
    Then Login butonuna bas
    Then datalari kullanarak sayfaya gir
    |username|password|
    |Manager|Manager1!|
    And login butonuna tikla
    And sayfaya girildigini onayla
@Manager_ID2 @smoke
    Scenario:Manager_ID2
    Given url git
    Then Login butonuna bas
    Then datalari kullanarak sayfaya gir
    |username|password|
    |manager|Manager1!|
    And login butonuna tikla
    And sayfaya girildigini onayla

