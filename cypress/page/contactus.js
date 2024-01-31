class contactus {
  elements = {
    contactName: () => cy.get('[data-qa="name"]'),
    contactEmail: () => cy.get('[data-qa="email"]'),
    contactsubject: () => cy.get('[data-qa="subject"]'),
    contactMessage: () => cy.get('[data-qa="message"]'),
    btnSubmit: () => cy.get('[data-qa="submit-button"]'),
  };

  contactNameType(user) {
    this.elements.contactName().type(user);
  }

  contactEmailType(email) {
    this.elements.contactEmail().type(email);
  }
  contactsubjectType(sub) {
    this.elements.contactsubject().type(sub);
  }

  contactMessageType(mess) {
    this.elements.contactMessage().type(mess);
  }
  btnSubmitClick() {
    this.elements.btnSubmit().click();
  }
}

module.exports = new contactus();
