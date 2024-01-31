import homePage from "../page/homePage";
import accountCreationSingIn from "../page/accountCreationSingIn";
import address from "../page/address";
import payment from "../page/payment";
import contactus from "../page/contactus";
import cartCartSummary from "../page/cartCartSummary";
import orderConfirmation from "../page/orderConfirmation";
import productDetails from "../page/productDetails";

const tests = require("../page/data.json");

function generateUniqueEmail() {
  const fixedPart = "test";
  const timestamp = new Date().getTime();
  const dynamicPart = `_${timestamp}@email.com`;

  return fixedPart + dynamicPart;
}

const uniqueEmail = generateUniqueEmail();

describe("User flows", () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com/");
  });

  it("tc001", () => {
    // Home screen ->  Enter the website /  Choose a product and click on “View product”
    cy.window().then((win) => {
      win.scrollTo(0, win.innerHeight / 2);
    });
    homePage.productClick();
    // Product details - Quantity 30 / add cart
    productDetails.elements.quantityBox().clear().type("30");
    productDetails.btnAddCardClick();
    productDetails.btnWinAddedClick();
    //  Cart & cart summary - Proceed to Checkout
    cartCartSummary.btnProceedCheckoutClick();
    cartCartSummary.btnWinRegisterLogClick();
    // Account creation & sign in
    accountCreationSingIn.signupNameType(tests.name);
    accountCreationSingIn.elements.signupEmail().type(uniqueEmail);
    accountCreationSingIn.btnSignupClick();
    accountCreationSingIn.btnIdGenderSelect();
    accountCreationSingIn.signuPasswordType(tests.password);
    accountCreationSingIn.signupDaysType(tests.days);
    accountCreationSingIn.signupMonthsType(tests.months);
    accountCreationSingIn.signupYearsType(tests.year);
    // Address
    address.addNameType(tests.name);
    address.addLastType(tests.lastname);
    address.addAddressType("La calle 123");
    address.addCountryType("Canada");
    address.addStateType("Cba");
    address.addCityType("Cordoba");
    address.addZipType("5000");
    address.addMobileType("123456789");
    address.btnCreateAccountClick();

    // Account creation
    accountCreationSingIn.btnContinueClick();

    // Home screen - Cart in the header
    homePage.btnCartHeaderClick();

    //  Cart & cart summary
    cartCartSummary.btnProceedCheckoutClick();
    cartCartSummary.btnPlaceOrderClick();
    // Payment
    payment.cardNameType(tests.fullname);
    payment.cardNumberType(tests.creditcarnumber);
    payment.cardCVCType("123");
    payment.cardMonthType("02");
    payment.cardYearType("2026");
    payment.btnCardClick();
    // Order confirmation
    orderConfirmation.elements
      .orderPlaced()
      .should("contain", tests.correctOrder);
    orderConfirmation.btnContinueClick();

    // Home screen -  “Logout” on top header
    homePage.btnLogoutHeaderClick();
    // Account creation - sign in
    accountCreationSingIn.loginEmailType(uniqueEmail);
    accountCreationSingIn.loginPasswordType("123456");
    accountCreationSingIn.btnLoginClick();
    // Home screen - Contact Us
    homePage.btnContactusHeaderClick();
    // Contact form
    contactus.contactNameType("Santiago A");
    contactus.contactEmailType(uniqueEmail);
    contactus.contactsubjectType("Test");
    contactus.contactMessageType("Test Test");
    contactus.btnSubmitClick();
    cy.on("window:confirm", (str) => {
      expect(str).to.equal("Press OK to proceed!");
    });
    // Home screen -  “Logout” on top header
    homePage.btnLogoutHeaderClick();
  });
});
