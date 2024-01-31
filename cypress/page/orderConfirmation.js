class orderConfirmation {
  elements = {
    orderPlaced: () => cy.get('[data-qa="order-placed"]'),
    btnContinue: () => cy.get('[data-qa="continue-button"]'),
  };

  btnContinueClick() {
    this.elements.btnContinue().click();
  }
}

module.exports = new orderConfirmation();
