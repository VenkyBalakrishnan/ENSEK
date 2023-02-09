/// <reference types="cypress" />

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

import Homepage from "../page_objects/HomePage";
import RegisterPage from "../page_objects/RegisterPage";
import BuyEnergy from "../page_objects/BuyEnergy";

const hp = new Homepage();
const rp = new RegisterPage();
const buyEnergy = new BuyEnergy();


Given('user on ENSEK Homepage', () => {
   hp.navigateToHomePage();
})

When('user click on register', () => {
   hp.navigateToRegister();
})

When('enter email {}', (email) => {
   rp.enterEmail(email);
})

When('enter password {}', (password) => {
   rp.enterPassword(password);
})

When('enter confirm password {}', (confirmPassword) => {
   rp.enterConfirmPassword(confirmPassword);
})

When('user click register', () => {
   rp.clickRegister();

})

Then('user registration is successful with {}', (confirmationMessage) => {
   rp.validateConfirmationMessage(confirmationMessage);

})

When('user click on buy energy', () => {
hp.navigateToBuyEnergy();

})

When('user enter required units of Gas {}',(units)=>{
   buyEnergy.userEnterRequiredUnits(units);

})

When('click buy',()=>{
   buyEnergy.userClickBuy();
})

Then('user should be success message {}',(saleConfirmation)=>{
   buyEnergy.validateSaleConfirmation(saleConfirmation);

})