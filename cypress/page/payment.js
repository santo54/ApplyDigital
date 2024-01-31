class payments {
  elements = {
    cardName: () => cy.get('[data-qa="name-on-card"]'),
    cardNumber: () => cy.get('[data-qa="card-number"]'),
    cardCVC: () => cy.get('[data-qa="cvc"]'),
    cardMonth: () => cy.get('[data-qa="expiry-month"]'),
    cardYear: () => cy.get('[data-qa="expiry-year"]'),
    btnCard: () => cy.get('[data-qa="pay-button"]'),
  };

  cardNameType(name) {
    this.elements.cardName().type(name);
  }

  cardNumberType(number) {
    this.elements.cardNumber().type(number);
  }
  cardCVCType(cvc) {
    this.elements.cardCVC().type(cvc);
  }

  cardMonthType(month) {
    this.elements.cardMonth().type(month);
  }
  cardYearType(year) {
    this.elements.cardYear().type(year);
  }
  btnCardClick() {
    this.elements.btnCard().click();
  }
}

module.exports = new payments();

/*
 elements = {
   cardName: () => cy.get('[data-qa="name-on-card"]'),
   cardNumber: () => cy.get('[data-qa="card-number"]'),
   cardCVC: () => cy.get('[data-qa="cvc"]'),
   cardMonth: () => cy.get('[data-qa="expiry-month"]'),
   cardYear: () => cy.get('[data-qa="expiry-year"]'),
   btnCard: () => cy.get('[data-qa="pay-button"]'),
    };
*/
