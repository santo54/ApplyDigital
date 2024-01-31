class home {
  elements = {
    choseProduct: () =>
      cy.get(":nth-child(10) .product-image-wrapper .choose .nav li a"),
    btnCartHeader: () => cy.get(".shop-menu > .nav > :nth-child(3) > a"),
    btnLogoutHeader: () => cy.get(".shop-menu > .nav > :nth-child(4) > a"),
    btnContactusHeader: () => cy.get(".shop-menu > .nav > :nth-child(9) > a"),
  };

  productClick() {
    this.elements.choseProduct().click();
  }
  btnCartHeaderClick() {
    this.elements.btnCartHeader().click();
  }
  btnLogoutHeaderClick() {
    this.elements.btnLogoutHeader().click();
  }
  btnContactusHeaderClick() {
    this.elements.btnContactusHeader().click();
  }
}

module.exports = new home();
