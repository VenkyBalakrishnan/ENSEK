

class RegisterPage {


    enterEmail(email) {
        cy.get('#Email').type(email)
    }

    enterPassword(password) {
        cy.get('#Password').type(password)
    }

    enterConfirmPassword(confirmPassword) {
        cy.get('#ConfirmPassword').type(confirmPassword)
    }


    clickRegister() {
        cy.get('.btn').click();
    }

    validateConfirmationMessage(confirmationMessage){
        cy.get('.body-content').should('include.text', confirmationMessage)
    }

}

export default RegisterPage;