Cypress.Commands.add('signUpLogInClick', ()=>{
    cy.get('[href="/login"]').click()
});

Cypress.Commands.add('newUserSignUp', (name, emailAddress)=>{
    cy.get('[data-qa="signup-name"]').type(name);
    cy.get('[data-qa="signup-email"]').type(emailAddress);
    cy.get('[data-qa="signup-button"]').click();
});

Cypress.Commands.add('enterAccountInformationSignUp', (gender, password, day, month, year)=>{
    //Choose title
    if(gender == 'Mr'){
    cy.get('[id="id_gender1"]').click();
    }else if (gender == 'Mrs'){
    cy.get('[id="id_gender2"]').click();
    }
    //Enter password
    cy.get('[data-qa="password"]').type(password);
    //enter birth year 
    cy.get('[id="days"]').select(day);
    cy.get('[id="months"]').select(month);
    cy.get('[id="years"]').select(year);
 });

Cypress.Commands.add('enterAddressInformationSingUp', (firstName, lastName, companyName, address,country,state,city,zipCode,mobileNumber)=>{
    //Enter details
    cy.get('[id="first_name"]').type(firstName);
    cy.get('[id="last_name"]').type(lastName);
    cy.get('[id="company"]').type(companyName);
    cy.get('[data-qa="address"]').type(address);
    cy.get('[id="country"]').select(country);
    cy.get('[data-qa="state"]').type(state);
    cy.get('[data-qa="city"]').type(city);
    cy.get('[data-qa="zipcode"]').type(zipCode);
    cy.get('[data-qa="mobile_number"]').type(mobileNumber);
    //Submit
    cy.get('[data-qa="create-account"]').click();
});

Cypress.Commands.add('verifySuccessfulAccountCreation', ()=>{
    cy.get('[data-qa="account-created"]').contains('Account Created!').should('be.visible');
});

Cypress.Commands.add('clickContinueAfterAccountCreation',()=>{
    cy.get('[data-qa="continue-button"]').click();
})

Cypress.Commands.add('deleteAccountApi', (email, password)=> {
    cy.request({
        method: 'DELETE',
        url: 'https://automationexercise.com/api/deleteAccount', 
        form: true, 
        body: {
          email: email,
          password: password,
        },
      })
});

Cypress.Commands.add('logoutAccount', ()=>{
    cy.get('[href="/logout"]').click();
});

Cypress.Commands.add('login', (email,password)=>{
    cy.get('[data-qa="login-email"]').clear().type(email);
    cy.get('[type="password"]').clear().type(password);
    cy.get('[data-qa="login-button"]').click();
});

Cypress.Commands.add('verifyInvalidCredentialsMessage', ()=>{
    cy.contains('Your email or password is incorrect!').should('be.visible');
});

Cypress.Commands.add('navigateToProductPage', ()=>{
    cy.get('[href="/products"]').click()
});

Cypress.Commands.add('searchForProduct', productName =>{
    cy.get('[id="search_product"]').type(productName);
    cy.get('[id="submit_search"]').click();
});

Cypress.Commands.add('verifyPrice', price => {
    cy.contains(price).should('be.visible');
});

Cypress.Commands.add('viewProductClick', ()=>{
    //cy.get('[href="/product_details/29"]').click();
    cy.contains('View Product').click();
});

Cypress.Commands.add('addToBaskedClick', ()=>{
    cy.get('[class="btn btn-default cart"]').click()
});

Cypress.Commands.add('continueShoppingClick', ()=>{
    cy.get('[class="btn btn-success close-modal btn-block"]').click();
});

Cypress.Commands.add('viewCartClickModal', ()=>{
    cy.get('[href="/view_cart"]:contains("View Cart")').click();
});

Cypress.Commands.add('verifyCartItems', productName =>{
    cy.get('#cart_info').contains(productName).should('be.visible');
});

Cypress.Commands.add('proceedToCheckoutClick', ()=>{
    cy.get('[class="btn btn-default check_out"]').click();
});

Cypress.Commands.add('placeOrder', ()=>{
    cy.get('[class="btn btn-default check_out"]').click();
});

Cypress.Commands.add('fillOutBankingDetails', (nameOnBankCard, cardNumber, cvc, month, year)=>{
    cy.get('[data-qa="name-on-card"]').type(nameOnBankCard);
    cy.get('[data-qa="card-number"]').type(cardNumber);
    cy.get('[data-qa="cvc"]').type(cvc);
    cy.get('[data-qa="expiry-month"]').type(month);
    cy.get('[data-qa="expiry-year"]').type(year)
});

Cypress.Commands.add('payAndConfirmOrderClick', ()=>{
    cy.get('[id="submit"]').click();
});

Cypress.Commands.add('verifyOrderHasBeenPlaced', ()=>{
    cy.get('[data-qa="order-placed"]').contains('Order Placed!').should('be.visible');
    cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');
});