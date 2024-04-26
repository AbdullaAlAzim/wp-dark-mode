/// <reference types = "cypress" />
describe('Dark mode plugin test', () => {
  it('Wp dark mode', () => {
      cy.viewport(1920, 1080);
    // Visit the login page
    cy.visit('https://pool.russellazim.com/wp-login.php?loggedout=true&wp_lang=en_US', {
      failOnStatusCode: false, timeout: 20000 // Prevent Cypress from failing the test if the page request fails
    });

    // Handle potential errors when locating and interacting with username and password fields
    cy.get('#user_login', { timeout: 20000 }) // Increase timeout for waiting up to 10 seconds
      .should('exist')
      .type('pool');

    cy.get('#user_pass', { timeout: 20000 }) // Increase timeout for waiting up to 10 seconds
      .should('exist')
      .type('pool');

    cy.get('#wp-submit', { timeout: 20000 }) // Increase timeout for waiting up to 10 seconds
      .should('exist')
      .click();
  

    // After clicking login button, verify successful login
    cy.url().should('eq', 'https://pool.russellazim.com/wp-admin/');
    cy.get('#toplevel_page_wp-dark-mode > .wp-has-submenu > .wp-menu-name').click();
    cy.viewport(1920, 1080);
    cy.get('.inactive').click();
    cy.get('._track').click();
    cy.get(':nth-child(2) > .wp-dark-mode-admin-sidebar-nav-container > .justify-between').click();
    cy.get('[href="#/switch"]').click();
    cy.get('.rounded.gap-6 > .rounded > .flex-wrap > :nth-child(2)').click().should('exist');
    cy.get('.gap-6 > :nth-child(1) > .bg-gray-50 > :nth-child(2)').click().should('exist');
    cy.get(':nth-child(2) > .bg-gray-50 > .bg-gray-100').click().should('exist');
    cy.get(':nth-child(3) > .wp-dark-mode-admin-sidebar-nav-container > .justify-between > .flex > .text-base').click();
    cy.contains('a', 'Accessibility').click();
    cy.url().should('include', '/accessibility');
    cy.contains('Keyboard Shortcut').click();
  
 






   
      
   
      
        
    

      

     
  
      
   




// cy.visit('https://pool.russellazim.com/wp-admin/admin.php?page=wp-dark-mode#/accessibility');
// cy.get('.font-semibold:nth-child(2)').click();
// cy.get('.router-link-active').click();
// cy.get('.rounded:nth-child(1) > .flex > .w-auto .w-5').click();
// cy.get('.rounded:nth-child(1) > .flex:nth-child(1) > .text-base > div').click();
// cy.get('.rounded:nth-child(1) > .flex:nth-child(1) > .text-base > div').click();


   
  
    


    
  });


});


