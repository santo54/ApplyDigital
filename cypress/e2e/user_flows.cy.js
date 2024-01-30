function generateUniqueEmail() {
  const fixedPart = "test";
  const timestamp = new Date().getTime();
  const dynamicPart = `_${timestamp}@example.com`;

  return fixedPart + dynamicPart;
}

const uniqueEmail = generateUniqueEmail();

describe("User flows", () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com/");
  });

  it("Enter the website and scroll down about halfway down the page.", () => {
    cy.window().then((win) => {
      win.scrollTo(0, win.innerHeight / 2);
    });
    cy.get(":nth-child(10) .product-image-wrapper .choose .nav li a").click();
    cy.get("#quantity").clear().type("30");
    cy.get(":nth-child(5) > .btn").click();
    cy.get("u").click();
    cy.get(".col-sm-6 > .btn").click();
    cy.get(".modal-body > :nth-child(2) > a > u").click();
    cy.get('[data-qa="signup-name"]').type("Santiago");
    cy.get('[data-qa="signup-email"]').type(uniqueEmail);
    cy.get('[data-qa="signup-button"]').click();
    cy.get("#id_gender1").click();
    cy.get('[data-qa="password"]').type("123456");
    cy.get('[data-qa="days"]').select("9");
    cy.get('[data-qa="months"]').select("10");
    cy.get('[data-qa="years"]').select("1990");
    cy.get('[data-qa="first_name"]').type("Santiago");
    cy.get('[data-qa="last_name"]').type("A");
    cy.get('[data-qa="address"]').type("La calle 1234");
    cy.get('[data-qa="country"]').select("Canada");
    cy.get('[data-qa="state"]').type("Cordoba");
    cy.get('[data-qa="city"]').type("Cordoba");
    cy.get('[data-qa="zipcode"]').type("5000");
    cy.get('[data-qa="mobile_number"]').type("1234567890");
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="continue-button"]').click();
    cy.get(".shop-menu > .nav > :nth-child(3) > a").click();
    cy.get(".col-sm-6 > .btn").click();
    cy.get(":nth-child(7) > .btn").click();
    cy.get('[data-qa="name-on-card"]').type("Santiago A");
    cy.get('[data-qa="card-number"]').type("5555 5555 5555 5555");
    cy.get('[data-qa="cvc"]').type("123");
    cy.get('[data-qa="expiry-month"]').type("02");
    cy.get('[data-qa="expiry-year"]').type("2026");
    cy.get('[data-qa="pay-button"]').click();
    cy.get('[data-qa="continue-button"]').click();
    cy.get(".shop-menu > .nav > :nth-child(4) > a").click();
    cy.get('[data-qa="login-email"]').type(uniqueEmail);
    cy.get('[data-qa="login-password"]').type("123456");
    cy.get('[data-qa="login-button"]').click();
    cy.get(":nth-child(9) > a").click();
    cy.get('[data-qa="name"]').type("Santiago A");
    cy.get('[data-qa="email"]').type(uniqueEmail);
    cy.get('[data-qa="subject"]').type("Test");
    cy.get('[data-qa="message"]').type("Test Test");
    cy.get('[data-qa="submit-button"]').click();
    cy.on("window:confirm", (str) => {
      expect(str).to.equal("Press OK to proceed!");
    });
    cy.get(".nav > :nth-child(4) > a").click();
  });
});
