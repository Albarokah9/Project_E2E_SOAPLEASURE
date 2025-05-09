/// <reference types="cypress" />

describe('Login', () => {
  it('Login', () => {
    cy.visit('/');
    cy.get('a[href="/account/login"]').click();
    cy.get('#input-email').type('projecttestcasesoapleasure@gmail.com');
    cy.get('#input-password').type('projecttestcase');
    cy.get('.btn').click();
    cy.wait(3000);
    cy.get('.dropdown').should('be.visible');
  });

  it('Login dengan menekan tombol Enter', () => {
    cy.visit('/');
    cy.get('a[href="/account/login"]').click();
    cy.get('#input-email').type('projecttestcasesoapleasure@gmail.com');
    cy.get('#input-password').type('projecttestcase{enter}');
    cy.wait(3000);
    cy.get('.dropdown').should('be.visible');
  });

  it('Login dengan email valid tapi password salah', () => {
    cy.visit('/');
    cy.get('a[href="/account/login"]').click();
    cy.get('#input-email').type('projecttestcasesoapleasure@gmail.com');
    cy.get('#input-password').type('passwordsalah');
    cy.get('.btn').click(); 
    cy.wait(3000);
    cy.get('.alert').should('be.visible');
    cy.get('.alert').should('contain', 'Invalid email address or password');
  });

  it('Login dengan email salah tapi password valid', () => {
    cy.visit('/');
    cy.get('a[href="/account/login"]').click();
    cy.get('#input-email').type('projecttestcasesoapleasure222@gmail.com');
    cy.get('#input-password').type('projecttestcase');
    cy.get('.btn').click(); 
    cy.wait(3000);
    cy.get('.alert').should('be.visible');
    cy.get('.alert').should('contain', 'Invalid email address or password');
  });

  it('Login dengan email dan password yang salah', () => {
    cy.visit('/');
    cy.get('a[href="/account/login"]').click();
    cy.get('#input-email').type('projecttestcasesoapleasure222@gmail.com');
    cy.get('#input-password').type('projecttestcase222');
    cy.get('.btn').click(); 
    cy.wait(3000);
    cy.get('.alert').should('be.visible');
    cy.get('.alert').should('contain', 'Invalid email address or password');
  });

  it('Login dengan format email yang tidak valid', () => {
    cy.visit('/');
    cy.get('a[href="/account/login"]').click();
    cy.get('#input-email').type('username@domain.com');
    cy.get('#input-password').type('projecttestcase');
    cy.get('.btn').click(); 
    cy.wait(3000);
    cy.get('.alert').should('be.visible');
    cy.get('.alert').should('contain', 'Invalid email address or password');
  });

  it('Login dengan kolom email kosong', () => {
    cy.visit('/');
    cy.get('a[href="/account/login"]').click();
    cy.get('#input-password').type('projecttestcase');
    cy.get('.btn').click(); 
    cy.wait(3000);
    cy.get('.invalid-feedback').should('be.visible');
    cy.get('.invalid-feedback').should('contain', 'Email address is required');
  });

  it('Login dengan kolom password kosong', () => {
    cy.visit('/');
    cy.get('a[href="/account/login"]').click();
    cy.get('#input-email').type('projecttestcasesoapleasure@gmail.com');
    cy.get('.btn').click(); 
    cy.wait(3000);
    cy.get('.invalid-feedback').should('be.visible');
    cy.get('.invalid-feedback').should('contain', 'Please enter your password');
  });

  it('Login tanpa mengisi kedua kolom', () => {
    cy.visit('/');
    cy.get('a[href="/account/login"]').click();
    cy.get('.btn').click();
    cy.wait(3000); 
    cy.get('.invalid-feedback').should('be.visible');
    cy.get('.invalid-feedback').should('contain', 'Email address is required');
    cy.get('.invalid-feedback').should('be.visible');
    cy.get('.invalid-feedback').should('contain', 'Please enter your password');
  });

  it('Login menggunakan akun yang belum terverifikasi', () => {
    cy.visit('/');
    cy.get('a[href="/account/login"]').click();
    cy.get('#input-email').type('test@gmail.com');
    cy.get('#input-password').type('Cobatest');
    cy.get('.btn').click();
    // Ketika mendaftar akun baru menggunakan email maka akan mendapatkan pesan berupa "Thank you for registering, We have sent a confirmation link to test@gmail.com, please check your inbox / spam folder"
    // Pengguna tetap berhasil login ke dashboard/homepage
    // Sistem mengizinkan pengguna untuk login ke dashboard/homepage tanpa harus melakukan verifikasi email
  });
});
