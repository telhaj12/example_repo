// <reference types="cypress"/>
describe('Project01 - Validate Form Elements', () => {
  beforeEach(() => {
      cy.visit('https://techglobal-training.com/frontend/project-1');
    });
    it('Test Case 01 - Validate the Contact Us Information', () => {
      cy.get('.is-size-3').should('have.text', 'Contact Us');
      cy.get('#address').should('have.text', '2800 S River Rd Suite 310, Des Plaines, IL 60018');
      cy.get('#email').should('have.text', 'info@techglobalschool.com');
      cy.get('#phone-number').should('have.text', '(224) 580-2150');
    })
    it('Test Case 02 - Validate the Full Name Input Box', () => {
      cy.get('.input').first().should('be.visible')
      cy.get('.input').first().should('have.attr', 'required')
      cy.get('.label').first().should('have.text','Full name *')
      cy.get('.input').first().should('have.attr', 'placeholder', 'Enter your full name')
  });
    it('Test Case 03 - Validate the Gender Radio Button', () => {
      cy.get('.control > .label').should('have.text', 'Gender *')
      cy.get('.mr-1').should('have.attr', 'required')
      const gender = ["Male", "Female", "Prefer not to disclose"];
      cy.get('.radio').each(($el, index) => {
      cy.wrap($el).should('have.text', gender[index]).find('.mr-1').should('be.enabled').and('be.empty');
    });
      cy.get('.mr-1').first().click().should('be.checked')
      cy.get('.ml-0 .mr-1').each(($el) => {
      cy.wrap($el).should('be.empty')
      cy.get('.ml-0 .mr-1').first().click().should('be.checked')
      cy.get('.mr-1').first().should('be.empty')
      cy.get('.ml-0 .mr-1').last().should('be.empty')
    });
  })
    it('Test Case 04 - Validate the Address Input Box', () => {
      cy.get('.input[type="text"]').last().should('be.visible')
      .and('not.have.attr', 'required')
      cy.get('.label').eq(2).should('have.text', 'Address')
      cy.get('.input[type="text"]').last().should('have.attr', 'placeholder', 'Enter your address')
    });
    it('Test Case 05 - Validate the Email Input Box', () => {
      cy.get('.input[type="email"]').should('be.visible')
      .and('have.attr', 'required')
      cy.get('.label').eq(3).should('have.text', 'Email *')
      cy.get('.input[type="email"]').should('have.attr', 'placeholder', 'Enter your email')
    })
    it('Test Case 06 - Validate the Phone Input Box', () => {
      cy.get('.input[type="phone"]').should('be.visible')
      .and('not.have.attr', 'required')
      cy.get('.label').eq(4).should('have.text', 'Phone')
      cy.get('.input[type="phone"]').should('have.attr', 'placeholder', 'Enter your phone number')
    })
    it('Test Case 07 - Validate the Message Text Area', () => {
      cy.get('.textarea').should('be.visible')
      .and('not.have.attr', 'required')
      cy.get('.label').eq(5).should('have.text', 'Message')
      cy.get('.textarea').should('have.attr', 'placeholder', 'Type your message here...')
    })
    it('Test Case 08 - Validate the Consent Checkbox', () => {
      cy.get('.checkbox').should('have.text', ' I give my consent to be contacted.')
      cy.get('input[type="checkbox"]').should('have.attr', 'required')
      cy.get('input[type="checkbox"]').should('be.enabled')
      cy.get('.checkbox').click().should('not.be.empty').click().should('not.be.selected')
})
    it('Test Case 09 - Validate the Submit Button', () => {
      cy.get('button[type="submit"]').should('be.visible')
      .and('be.enabled')
      .and('have.text', 'SUBMIT')
    })
    it('Test Case 10 - Validate the Form Submission', () => {
      const fname = "Tareq";
      const address = "19w234 Ginger Brook Dr Oak Brook Illinois";
      const email = "tareq.elhaj2@gmail.com";
      const phone = "773 936 7984";
      const message = "I would like to learn javascript and cypress."
      cy.get('.input').first().type(`${fname}{enter}`)
      
      cy.get('.mr-1').eq(0).click()
      
      cy.get('.input[type="text"]').last().type(`${address}{enter}`)
      
      cy.get('.input[type="email"]').type(`${email}`)
      
      cy.get('.input[type="phone"]').type(`${phone}`)
      
      cy.get('.textarea').type(`${message}`)
      
      cy.get('.checkbox').click()
      
      cy.get('button[type="submit"]').click()
      
      cy.get('.mt-5').should('have.text', "Thanks for submitting!")
      Cypress.on("uncaught:exception", () => {
        return false;
    })
})
})