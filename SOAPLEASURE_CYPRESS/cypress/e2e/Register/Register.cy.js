/// <reference types="cypress" />

describe('Register', () => {
    it('Register dengan data lengkap & valid', () => {
        cy.visit('/');
        cy.get('.d-inline-flex > [href="/account/register"] > u').click();
        cy.slowType('#firstName', 'test');
        cy.slowType('#lastName', 'automation');
        cy.slowType('#email', 'testautomation123@gmail.com');
        cy.slowType('#phone', '08123456789');
        cy.slowType('#password', 'testautomation');
        cy.slowType('#confirmPassword', 'testautomation');
        cy.get('.button').click();
        cy.wait(3000);
        cy.get('.alert').should('be.visible');
        cy.get('.alert').should('contain', 'Thank you for registering, We have sent a confirmation link to testautomation123@gmail.com');
        
    });

    it('Register dengan password huruf & angka', () => {
        cy.visit('/');
        cy.get('.d-inline-flex > [href="/account/register"] > u').click();
        cy.slowType('#firstName', 'test');
        cy.slowType('#lastName', 'automation');
        cy.slowType('#email', 'test1@gmail.com');
        cy.slowType('#phone', '08123456789');
        cy.slowType('#password', 'abc12345');
        cy.slowType('#confirmPassword', 'abc12345');
        cy.get('.button').click();
        cy.wait(3000);
        cy.get('.alert').should('be.visible');
        cy.get('.alert').should('contain', 'Thank you for registering, We have sent a confirmation link to test1@gmail.com');
        
    });
    
    it('Register dengan konfirmasi password cocok', () => {
        cy.visit('/');
        cy.get('.d-inline-flex > [href="/account/register"] > u').click();
        cy.slowType('#firstName', 'test');
        cy.slowType('#lastName', 'automation');
        cy.slowType('#email', 'test2@gmail.com');
        cy.slowType('#phone', '08123456789');
        cy.slowType('#password', 'abc12345');
        cy.slowType('#confirmPassword', 'abc12345');
        cy.get('.button').click();
        cy.wait(3000);
        cy.get('.alert').should('be.visible');
        cy.get('.alert').should('contain', 'Thank you for registering, We have sent a confirmation link to test2@gmail.com');
        
    })

    it('Register dengan email kosong', () => {
        cy.visit('/');
        cy.get('.d-inline-flex > [href="/account/register"] > u').click();
        cy.slowType('#firstName', 'test');
        cy.slowType('#lastName', 'automation');
        cy.slowType('#phone', '08123456789');
        cy.slowType('#password', 'abc12345');
        cy.slowType('#confirmPassword', 'abc12345');
        cy.get('.button').click();
        cy.wait(3000);
        cy.get(':nth-child(2) > .invalid-feedback').should('be.visible').and('contain', 'Email address is a required field');
    })

    it('Register dengan password kurang dari 8 karakter', () => {
        cy.visit('/');
        cy.get('.d-inline-flex > [href="/account/register"] > u').click();
        cy.slowType('#firstName', 'test');
        cy.slowType('#lastName', 'automation');
        cy.slowType('#email', 'test3@gmail.com');
        cy.slowType('#phone', '08123456789');
        cy.slowType('#password', 'abc12');
        cy.slowType('#confirmPassword', 'abc12');
        cy.get('.button').click();
        cy.wait(3000);
        cy.get(':nth-child(4) > :nth-child(1) > .form-group > .invalid-feedback').should('be.visible').and('contain', 'Password must be at least 8 characters'); 
    })

    it('Register dengan konfirmasi password kosong', () => {
        cy.visit('/');
        cy.get('.d-inline-flex > [href="/account/register"] > u').click();
        cy.slowType('#firstName', 'test');
        cy.slowType('#lastName', 'automation');
        cy.slowType('#email', 'test3@gmail.com');
        cy.slowType('#phone', '08123456789');
        cy.slowType('#password', 'abc12345');
        cy.get('.button').click();
        cy.get(':nth-child(4) > :nth-child(2) > .form-group > .invalid-feedback').should('be.visible').and('contain', 'Confirm password must match with password');
    });
    
    it('Register dengan format email salah', () => {
        cy.visit('/');
        cy.get('.d-inline-flex > [href="/account/register"] > u').click();
        cy.slowType('#firstName', 'test');
        cy.slowType('#lastName', 'automation');
        cy.slowType('#email', 'test5mail.com');
        cy.slowType('#phone', '08123456789');
        cy.slowType('#password', 'abc12345');
        cy.slowType('#confirmPassword', 'abc12345');
        cy.get('.button').click();
        // native browser validation message atau HTML5 form validation message.
        cy.get('#email').then(($input) => {
            expect($input[0].validationMessage).to.contain("Please include an '@' in the email address. 'test5mail.com' is missing an '@'.");
          });
          

    });
});
