class Homepage{

    navigateToHomePage(){
        cy.visit('/')
    }

    navigateToRegister(){
        cy.get('#registerLink').click();
    }

    navigateToBuyEnergy(){
        cy.contains('Buy energy').click();
        cy.url().should('eq','https://ensekautomationcandidatetest.azurewebsites.net/Energy/Buy')
    }

}

export default Homepage;