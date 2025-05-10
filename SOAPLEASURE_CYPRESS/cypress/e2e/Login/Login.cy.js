/// <reference types="cypress" />

describe('Login Functionality', () => {
  it('Login berhasil dengan email & password valid', () => {
    cy.visit('/');
    cy.get('a[href="/account/login"]').click();
    cy.slowType('#input-email', 'projecttestcasesoapleasure@gmail.com');
    cy.slowType('#input-password', 'projecttestcase');
    cy.get('.btn').click();
    cy.wait(3000);
    cy.get('.dropdown').should('be.visible');
  });

  it('Login dengan menekan tombol Enter', () => {
    cy.visit('/');
    cy.get('a[href="/account/login"]').click();
    cy.slowType('#input-email', 'projecttestcasesoapleasure@gmail.com');
    cy.get('#input-password').should('be.visible').type('projecttestcase{enter}', { delay: 100 });
    cy.wait(3000);
    cy.get('.dropdown').should('be.visible');
  });

  it('Login dengan email valid tapi password salah', () => {
    cy.visit('/');
    cy.get('a[href="/account/login"]').click();
    cy.slowType('#input-email', 'projecttestcasesoapleasure@gmail.com');
    cy.slowType('#input-password', 'passwordsalah');
    cy.get('.btn').click();
    cy.wait(3000);
    cy.get('.alert').should('be.visible').and('contain', 'Invalid email address or password');
  });

  it('Login dengan email salah tapi password valid', () => {
    cy.visit('/');
    cy.get('a[href="/account/login"]').click();
    cy.slowType('#input-email', 'projecttestcasesoapleasure222@gmail.com');
    cy.slowType('#input-password', 'projecttestcase');
    cy.get('.btn').click();
    cy.wait(3000);
    cy.get('.alert').should('be.visible').and('contain', 'Invalid email address or password');
  });

  it('Login dengan email dan password yang salah', () => {
    cy.visit('/');
    cy.get('a[href="/account/login"]').click();
    cy.slowType('#input-email', 'projecttestcasesoapleasure222@gmail.com');
    cy.slowType('#input-password', 'projecttestcase222');
    cy.get('.btn').click();
    cy.wait(3000);
    cy.get('.alert').should('be.visible').and('contain', 'Invalid email address or password');
  });

  it('Login dengan format email yang tidak valid', () => {
    cy.visit('/');
    cy.get('a[href="/account/login"]').click();
    cy.slowType('#input-email', 'username@domain.com');
    cy.slowType('#input-password', 'projecttestcase');
    cy.get('.btn').click();
    cy.wait(3000);
    cy.get('.alert').should('be.visible').and('contain', 'Invalid email address or password');
  });

  it('Login dengan kolom email kosong', () => {
    cy.visit('/');
    cy.get('a[href="/account/login"]').click();
    cy.slowType('#input-password', 'projecttestcase');
    cy.get('.btn').click();
    cy.wait(3000);
    cy.get('.invalid-feedback').should('be.visible').and('contain', 'Email address is required');
  });

  it('Login dengan kolom password kosong', () => {
    cy.visit('/');
    cy.get('a[href="/account/login"]').click();
    cy.slowType('#input-email', 'projecttestcasesoapleasure@gmail.com');
    cy.get('.btn').click();
    cy.wait(3000);
    cy.get('.invalid-feedback').should('be.visible').and('contain', 'Please enter your password');
  });

  it('Login tanpa mengisi kedua kolom', () => {
    cy.visit('/');
    cy.get('a[href="/account/login"]').click();
    cy.get('.btn').click();
    cy.wait(3000);
    cy.get('.invalid-feedback').should('contain', 'Email address is required');
    cy.get('.invalid-feedback').should('contain', 'Please enter your password');
  });

  it('Login menggunakan akun yang belum terverifikasi', () => {
    cy.visit('/');
    cy.get('a[href="/account/login"]').click();
    cy.slowType('#input-email', 'test@gmail.com');
    cy.slowType('#input-password', 'Cobatest');
    cy.get('.btn').click();
    // Asumsikan tetap bisa login
    cy.get('.dropdown').should('be.visible');
  });

  it('Pastikan password tidak terlihat (masking karakter saat diketik)', () => {
    cy.visit('/');
    cy.get('a[href="/account/login"]').click();
    cy.get('#input-password').should('have.attr', 'type', 'password');
    cy.slowType('#input-password', 'projecttestcase');
  });

  it('Logout', () => {
    cy.visit('/');
    cy.get('a[href="/account/login"]').click();
    cy.slowType('#input-email', 'projecttestcasesoapleasure@gmail.com');
    cy.slowType('#input-password', 'projecttestcase');
    cy.get('.btn').click();
    cy.wait(3000);
    cy.get('.dropdown').should('be.visible');
    cy.get('.dropdown').click();
    cy.get(':nth-child(5) > a > span').click();
    cy.get('a[href="/account/login"]').should('be.visible').and('contain', 'Login');
  });
});
