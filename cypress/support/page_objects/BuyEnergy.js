class BuyEnergy{

userEnterRequiredUnits(units){
    cy.get('#energyType_AmountPurchased').clear().type(units);
}

userClickBuy(){
    cy.get('body > div:nth-child(2) > div:nth-child(6) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(7) > input:nth-child(1)').click();
}

validateSaleConfirmation(saleConfirmation){
    cy.get('.body-content').contains(saleConfirmation)

}
}

export default BuyEnergy;