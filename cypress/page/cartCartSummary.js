class cartCartSummary {
  elements = {
    btnProceedCheckout: () => cy.get(".col-sm-6 > .btn"),
    btnWinRegisterLog: () => cy.get(".modal-body > :nth-child(2) > a > u"),
    btnPlaceOrder: () => cy.get(":nth-child(7) > .btn"),
  };

  btnProceedCheckoutClick() {
    this.elements.btnProceedCheckout().click();
  }
  btnWinRegisterLogClick() {
    this.elements.btnWinRegisterLog().click();
  }
  btnPlaceOrderClick() {
    this.elements.btnPlaceOrder().click();
  }
}

module.exports = new cartCartSummary();
