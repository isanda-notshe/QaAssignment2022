describe('Automation Exercise API Tests', () => {
const uuid = () => Cypress._.random(0, 1000);
const id = uuid();
    it('Create User', () => {
        cy.request({
              method: 'POST',
              url: '/api/createAccount',
              form: true,
              body: {
            name: "Son Goku",
            email: "son.goku"+id+"@saiyan.com",
            password:"gohanisbetterthantrunks",
            title: "Mr",
            birth_date:"18",
            birth_month:"05",
            birth_year:"1990",
            firstname:"Son",
            lastname:"Goku",
            company:"Saiyan",
            address1:"King kai st",
            address2:"King Kai town",
            country:"Canada",
            zipcode:"114511",
            state:"Kai",
            city:"Kai city",
            mobile_number:"99009900"},
        }).then(response => {
            expect(response.body).to.have.contain('User created!')
        });
    })

    it('Edit User by changing the name', () => {
            cy.request({
                  method: 'PUT',
                  url: '/api/updateAccount',
                  form: true,
                  body: {
                name: "Son Goku Edited",
                email: "son.goku"+id+"@saiyan.com",
                password:"gohanisbetterthantrunks",
                title: "Mr",
                birth_date:"18",
                birth_month:"05",
                birth_year:"1990",
                firstname:"Son",
                lastname:"Goku",
                company:"Saiyan",
                address1:"King kai st",
                address2:"King Kai town",
                country:"Canada",
                zipcode:"114511",
                state:"Kai",
                city:"Kai city",
                mobile_number:"99009900"},
            }).then(response => {
                expect(response.body).to.have.contain('User updated!')
            });
            })

  it('Delete the user', () => {
                    cy.request({
                          method: 'DELETE',
                          url: '/api/deleteAccount',
                          form: true,
                          body: {
                                 email: "son.goku"+id+"@saiyan.com",
                                 password:"gohanisbettertrunks"
                                 }
        }).then(response => {
                          expect(response.body).to.have.contain('Account deleted!')
                })
                })
                })