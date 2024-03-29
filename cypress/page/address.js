class address {
  elements = {
    addName: () => cy.get('[data-qa="first_name"]'),
    addLast: () => cy.get('[data-qa="last_name"]'),
    addAddress: () => cy.get('[data-qa="address"]'),
    addCountry: () => cy.get('[data-qa="country"]'),
    addState: () => cy.get('[data-qa="state"]'),
    addCity: () => cy.get('[data-qa="city"]'),
    addZip: () => cy.get('[data-qa="zipcode"]'),
    addMobile: () => cy.get('[data-qa="mobile_number"]'),
    btnCreateAccount: () => cy.get('[data-qa="create-account"]'),
  };

  addNameType(name) {
    this.elements.addName().type(name);
  }

  addLastType(last) {
    this.elements.addLast().type(last);
  }

  addAddressType(add) {
    this.elements.addAddress().type(add);
  }

  addCountryType(country) {
    this.elements.addCountry().type(country);
  }
  addStateType(state) {
    this.elements.addState().type(state);
  }

  addCityType(city) {
    this.elements.addCity().type(city);
  }
  addZipType(zip) {
    this.elements.addZip().type(zip);
  }

  addMobileType(mobile) {
    this.elements.addMobile().type(mobile);
  }

  btnCreateAccountClick() {
    this.elements.btnCreateAccount().click();
  }
}

module.exports = new address();
