

const username = Cypress.env('username');
const email = Cypress.env('email');
const password = Cypress.env('password');

describe('testAssignment2022', function(){

it('signUp', ()=>{
cy.signUpLogInClick();
cy.newUserSignUp(username, email);
cy.enterAccountInformationSignUp('Mrs',password, '2', '12', '2018');
cy.enterAddressInformationSingUp(username, 'Notshe', 'Ardoq', 'Rodeo drive 666', 'United States', 'California', 'Los Angeles', '90210', '6210')
cy.verifySuccessfulAccountCreation();
cy.clickContinueAfterAccountCreation();
// cy.deleteAccountApi('Mimi@gmail.com','bluewaterbay6210')
});

it('loginInvalid', ()=>{
    cy.logoutAccount();
    cy.signUpLogInClick();
});

it('endToEndPurchase', ()=>{

});

})