import { Given,And,Then,When } from "cypress-cucumber-preprocessor/steps";

Given('Google sitesine gider',()=>{
    cy.visit('https://www.amazon.com/')
})
Then('arama motoruna girilen {string} yazar',(keyler)=>{

    cy.get('#twotabsearchtextbox').type(keyler)

    cy.get('#nav-search-submit-button').click()
    
})

Then('arama da {string} in arandigini assert eder',(keyler)=>{

    cy.get('.a-color-state').should('contain.text',keyler)
    
})
