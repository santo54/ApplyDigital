class productDetails {
  elements = {
    quantityBox: () => cy.get("#quantity"),
    btnAddCard: () => cy.get(":nth-child(5) > .btn"),
    btnWinAdded: () => cy.get("u"),
  };

  btnAddCardClick() {
    this.elements.btnAddCard().click();
  }
  btnWinAddedClick() {
    this.elements.btnWinAdded().click();
  }
}

module.exports = new productDetails();
