

const username = Cypress.env('username');
const email = Cypress.env('email');
const password = Cypress.env('password');
const product1 = 'Green Side Placket Detail T-Shirt'
const product2 = 'Fancy Green Top'

describe('testAssignment2022', function(){

it('signUp', ()=>{
cy.signUpLogInClick();
cy.newUserSignUp(username, email);
cy.enterAccountInformationSignUp('Mrs',password, '2', '12', '2018');
cy.enterAddressInformationSingUp(username, 'Notshe', 'Ardoq', 'Rodeo drive 666', 'United States', 'California', 'Los Angeles', '90210', '6210')
cy.verifySuccessfulAccountCreation();
cy.clickContinueAfterAccountCreation();
});

it('loginInvalid', ()=>{
    cy.logoutAccount();
    cy.signUpLogInClick();
    cy.login('invalidEmail@gmail.com', 'invalidPassowrd');
    cy.verifyInvalidCredentialsMessage();
});

it('endToEndPurchase', ()=>{
    cy.signUpLogInClick();
    cy.login(email, password);
    //Add green side t shirt
    cy.navigateToProductPage();
    cy.searchForProduct(product1);
    cy.verifyPrice('Rs. 1000')
    cy.viewProductClick();
    cy.addToBaskedClick();
    cy.continueShoppingClick();
    //Add fancy green top
    cy.navigateToProductPage();
    cy.searchForProduct(product2);
    cy.viewProductClick();
    cy.addToBaskedClick();
    cy.viewCartClickModal();
    //Verify cart items
    cy.verifyCartItems(product1);
    cy.verifyCartItems(product2);
    //Checkout
    cy.proceedToCheckoutClick();
    cy.placeOrder();
    //Banking details
    cy.fillOutBankingDetails(username, '6210', '123', '12', '2077');
    cy.payAndConfirmOrderClick();
});

})