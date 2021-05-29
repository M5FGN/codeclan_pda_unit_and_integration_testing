describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number1').click();
    cy.get('.display').should('contain', '1')
  })
  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
  it('should have working number buttons', () => {
    cy.get('#number3').click();
    cy.get('.display').should('contain', '3')
  })
  it('should have working number buttons', () => {
    cy.get('#number4').click();
    cy.get('.display').should('contain', '4')
  })
  it('should have working number buttons', () => {
    cy.get('#number5').click();
    cy.get('.display').should('contain', '5')
  })
  it('should have working number buttons', () => {
    cy.get('#number6').click();
    cy.get('.display').should('contain', '6')
  })
  it('should have working number buttons', () => {
    cy.get('#number7').click();
    cy.get('.display').should('contain', '7')
  })
  it('should have working number buttons', () => {
    cy.get('#number8').click();
    cy.get('.display').should('contain', '8')
  })
  it('should have working number buttons', () => {
    cy.get('#number9').click();
    cy.get('.display').should('contain', '9')
  })
  it('should have working number buttons', () => {
    cy.get('#number0').click();
    cy.get('.display').should('contain', '0')
  })

  it('should divide numbers', () => {
    cy.get('#number8').click();
    cy.get('#operator_divide').click();
    cy.get('#number4').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '2')
  })

  it('should multiply numbers', () => {
    cy.get('#number2').click();
    cy.get('#operator_multiply').click();
    cy.get('#number4').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '8')
  })

  it('should subtract numbers', () => {
    cy.get('#number9').click();
    cy.get('#operator_subtract').click();
    cy.get('#number4').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '5')
  })

  it('should add numbers', () => {
    cy.get('#number6').click();
    cy.get('#operator_add').click();
    cy.get('#number8').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '14')
  })


  it('should return positive', () => {
    cy.get('#number7').click();
    cy.get('#operator_add').click();
    cy.get('#number8').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '15')
  })

  it('should return negative', () => {
    cy.get('#number8').click();
    cy.get('#operator_subtract').click();
    cy.get('#number9').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-1')
  })

  it('should return decimal', () => {
    cy.get('#number6').click();
    cy.get('#operator_divide').click();
    cy.get('#number4').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '1.5')
  })

  it('should return large number', () => {
    cy.get('#number6').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator_multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '600000000')
  })

  it('should return error if divide by zero', () => {
    cy.get('#number6').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'Error')
  })

  
  it('should return zero when clear is pressed', () => {
    cy.get('#number8').click();
    cy.get('#number8').click();
    cy.get('#clear').click();
    cy.get('.display').should('contain', '0')
  })

})