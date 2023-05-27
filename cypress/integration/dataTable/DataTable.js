import { Given,And,Then,When } from "cypress-cucumber-preprocessor/steps";

Given('url git',()=>{
    cy.visit('https://www.hotelmycamp.com/')
})
Then('Login butonuna bas',()=>{
    cy.get('#navLogon > .nav-link').click()
})
Then('datalari kullanarak sayfaya gir',(dataTable)=>{
    cy.get('#UserName').type(dataTable.rawTable[1][0])
    cy.get('#Password').type(dataTable.rawTable[1][1])
})
And('login butonuna tikla',()=>{
    cy.get('#btnSubmit').click()
})
And('sayfaya girildigini onayla',()=>{
    cy.get('.username').should('contain.text','manager')
    
})