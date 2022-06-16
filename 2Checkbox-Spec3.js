///<reference types = 'Cypress'/>

describe('checkbox and drop down',function(){

  it ('Testing vegatable cart',function(){
   
    //Check boxes
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#checkBoxOption1').check().should('be.checked')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value','option1')

    cy.get('input[type="checkbox"]').check(['option1','option2']).should('be.checked')
    cy.get('input[type="checkbox"]').uncheck(['option1','option2']).should('not.be.checked')


    //Static Dropdown
    
    cy.get('#dropdown-class-example').select('option1').should('have.value','option1')

   //Dynamic dropdowns
   cy.get('#autocomplete').type('Ind')


   cy.get('.ui-menu-item div').each(($e1,index,$list) =>{
    //if($es.text().includes('India'))
    if($e1.text()==='India')
   {
    cy.wrap($e1).click()
    cy.log($e1.text())
    cy.get('#autocomplete').should('have.value','India')
   }
   })

    
  })
})
