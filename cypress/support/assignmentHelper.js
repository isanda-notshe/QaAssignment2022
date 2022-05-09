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