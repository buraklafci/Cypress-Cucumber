import { Given,And,Then,When } from "cypress-cucumber-preprocessor/steps";

Given('HotelMyCamp sayfasina git',()=>{
    cy.visit('https://www.hotelmycamp.com/')
})
Given('Login butonuna bas',()=>{
    cy.get('#navLogon > .nav-link').click()
})
Given('Username ve Password gir',()=>{
    cy.get('#UserName').type('manager')
    cy.get('#Password').type('Manager1!')
})
Given('Login ol',()=>{
    cy.get('#btnSubmit').click()
})
Given('Giris yapildigini onayla',()=>{
    cy.get('.username').should('contain.text','manager')
    
})