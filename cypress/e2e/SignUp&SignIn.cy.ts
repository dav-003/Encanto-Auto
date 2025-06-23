import { SignInSignUpSelectors } from "../pageObjects/Selectors/signInSignUpSelectors";
import { SignInSignUpMethods } from "../pageObjects/Methods/signInSignUpMethods";

describe("Sign up", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  const uniqueEmail = `user_${Date.now()}@mail.ru`;
  const uniquePassword = "12345qwerty";
  const registratedEmail = "19790616@mail.ru";
  const invalidEmail = "test@exam!ple.com";
  const longEmail = "a".repeat(101) + "@example.com";

  context("Sign up Positive", () => {
    it("Should open and validate SignUp modal", () => {
      SignInSignUpMethods.OpenSignUpModal();
    });
    it("Should check eye button work", () => {
      SignInSignUpMethods.OpenSignUpModal();
      SignInSignUpSelectors.passwordInput().should(
        "have.attr",
        "type",
        "password",
      );
      SignInSignUpSelectors.passwordEyeButton().click();
      SignInSignUpSelectors.passwordInput().should("have.attr", "type", "text");
      SignInSignUpSelectors.confirmPasswordInput().should(
        "have.attr",
        "type",
        "password",
      );
      SignInSignUpSelectors.confirmPasswordEyeButton().click();
      SignInSignUpSelectors.confirmPasswordInput().should(
        "have.attr",
        "type",
        "text",
      );
    });
    it("Should create user", () => {
      SignInSignUpMethods.OpenSignUpModal();
      SignInSignUpSelectors.emailInput().type(uniqueEmail);
      SignInSignUpSelectors.passwordInput().type(uniquePassword);
      SignInSignUpSelectors.confirmPasswordInput().type(uniquePassword);
      SignInSignUpSelectors.submitButton().should("be.disabled");
      SignInSignUpSelectors.policyCheckbox().check();
      SignInSignUpSelectors.submitButton().should("be.enabled").click();
      cy.url().should("include", SignInSignUpSelectors.profilePageEndpoint());
    });
  });
  context("Sign up Negatives", () => {
    it("Should show errors when fields contain only spaces", () => {
      SignInSignUpMethods.OpenSignUpModal();
      SignInSignUpSelectors.emailInput().type("         ");
      SignInSignUpSelectors.passwordInput().type("        ");
      SignInSignUpSelectors.confirmPasswordInput().type("         ");
      SignInSignUpSelectors.policyCheckbox().check();
      SignInSignUpSelectors.submitButton().click();
      SignInSignUpSelectors.errorEmptyField().should("have.length", 2);
    });
    it("Should validate invalid email, short password and mismatch", () => {
      SignInSignUpMethods.OpenSignUpModal();
      SignInSignUpSelectors.emailInput().type("a@.a");
      SignInSignUpSelectors.passwordInput().type("1234567");
      SignInSignUpSelectors.confirmPasswordInput().type("123");
      SignInSignUpSelectors.policyCheckbox().check();
      SignInSignUpSelectors.submitButton().click();
      SignInSignUpSelectors.errorWrongFormat().should("be.visible");
      SignInSignUpSelectors.errorMinLength().should("be.visible");
      SignInSignUpSelectors.errorMismatch().should("be.visible");
    });
    it("Should show empty field errors when all fields are cleared", () => {
      SignInSignUpMethods.OpenSignUpModal();
      SignInSignUpSelectors.policyCheckbox().check();
      SignInSignUpSelectors.submitButton().click();
      SignInSignUpSelectors.errorEmptyField().should("have.length", 2);
    });
    it("Should show error for already registered email", () => {
      SignInSignUpMethods.OpenSignUpModal();
      SignInSignUpSelectors.emailInput().type(registratedEmail);
      SignInSignUpSelectors.passwordInput().type(uniquePassword);
      SignInSignUpSelectors.confirmPasswordInput().type(uniquePassword);
      SignInSignUpSelectors.policyCheckbox().check();
      SignInSignUpSelectors.submitButton().click();
      SignInSignUpSelectors.alertEmailExists()
        .should("be.visible")
        .and("have.text", "Էլ.փոստ գոյություն ունի");
    });
    it("Should check register without checkbox", () => {
      SignInSignUpMethods.OpenSignUpModal();
      SignInSignUpSelectors.emailInput().type(registratedEmail);
      SignInSignUpSelectors.passwordInput().type(uniquePassword);
      SignInSignUpSelectors.confirmPasswordInput().type(uniquePassword);
      SignInSignUpSelectors.submitButton().should("be.disabled");
    });
    it("Should check mismatch passwords", () => {
      SignInSignUpMethods.OpenSignUpModal();
      SignInSignUpSelectors.emailInput().type(registratedEmail);
      SignInSignUpSelectors.passwordInput().type(uniquePassword);
      SignInSignUpSelectors.confirmPasswordInput().type("123");
      SignInSignUpSelectors.policyCheckbox().check();
      SignInSignUpSelectors.submitButton().click();
      SignInSignUpSelectors.errorMismatch().should("be.visible");
    });
    it("Should check special symbols in email field", () => {
      SignInSignUpMethods.OpenSignUpModal();
      SignInSignUpSelectors.emailInput().type(invalidEmail);
      SignInSignUpSelectors.passwordInput().type(uniquePassword);
      SignInSignUpSelectors.confirmPasswordInput().type("123");
      SignInSignUpSelectors.policyCheckbox().check();
      SignInSignUpSelectors.submitButton().click();
      SignInSignUpSelectors.errorWrongFormat().should("be.visible");
    });
    it("Should check too long email", () => {
      SignInSignUpMethods.OpenSignUpModal();
      SignInSignUpSelectors.emailInput().type(longEmail);
      SignInSignUpSelectors.passwordInput().type(uniquePassword);
      SignInSignUpSelectors.confirmPasswordInput().type("123");
      SignInSignUpSelectors.policyCheckbox().check();
      SignInSignUpSelectors.submitButton().click();
      SignInSignUpSelectors.errorWrongFormat().should("be.visible");
    });
    it('Should check filled email and password without confirm password', () => {
      SignInSignUpMethods.OpenSignUpModal();
      SignInSignUpMethods.FillSignUpForm({email: uniqueEmail, password: uniquePassword})
      SignInSignUpSelectors.policyCheckbox().check();
      SignInSignUpSelectors.submitButton().click()
      SignInSignUpSelectors.errorMismatch().should('be.visible')
    })
    it('Should check empty email and filled passwords', () => {
      SignInSignUpMethods.OpenSignUpModal()
      SignInSignUpMethods.FillSignUpForm({password: uniquePassword, confirmPassword: uniquePassword})
      SignInSignUpSelectors.policyCheckbox().check()
      SignInSignUpSelectors.submitButton().click()
      SignInSignUpSelectors.errorEmptyField().should('be.visible')
    })
    it('Should check filled email and confirm password', () => {
      SignInSignUpMethods.OpenSignUpModal()
      SignInSignUpMethods.FillSignUpForm({email: uniqueEmail, confirmPassword: uniquePassword})
      SignInSignUpSelectors.policyCheckbox().check()
      SignInSignUpSelectors.submitButton().click()
      SignInSignUpSelectors.errorEmptyField().should('be.visible')
      SignInSignUpSelectors.errorMismatch().should('be.visible')
    })
  });
});
describe("Sign In", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  const registratedEmail = "dav.hovhannisyan52@gmail.com";
  const registratedPassword = "12345678?";
  const wrongEmail = " dav . hovhannisyan 52 @ gmail . com ";
  const wrongPassword = " 1 2 3 4 5 6 7 8 ? ";
  const unregistratedEmail = "abgdez@abgd.ru"
  const unregistratedPassword = "098098098"

  context("Sign in Positive", () => {
    it("Should open sign in modal and validate", () => {
      SignInSignUpMethods.OpenSignInModal();
    });
    it("Should open and close modal", () => {
      SignInSignUpMethods.OpenSignInModal();
      SignInSignUpSelectors.closeAuthModal().click();
      SignInSignUpSelectors.authModal().should("not.exist");
    });
    it("Should sign in successfully", () => {
      SignInSignUpMethods.OpenSignInModal();
      SignInSignUpSelectors.emailInput().type(registratedEmail);
      SignInSignUpSelectors.passwordInput().type(registratedPassword);
      SignInSignUpSelectors.submitButton().click();
      cy.url().should("include", SignInSignUpSelectors.profilePageEndpoint());
    });
  });
  context("Sign in Negative", () => {
    it("Should check log in with spaces", () => {
      SignInSignUpMethods.OpenSignInModal();
      SignInSignUpSelectors.emailInput().type("    ");
      SignInSignUpSelectors.passwordInput().type("    ");
      SignInSignUpSelectors.submitButton().click();
      SignInSignUpSelectors.errorEmptyField().should("have.length", 2);
    });
    it("Should check log in with empty fields", () => {
      SignInSignUpMethods.OpenSignInModal();
      SignInSignUpSelectors.submitButton().click();
      SignInSignUpSelectors.errorEmptyField().should("have.length", 2);
    });
    it("Should check empty mail but filled password", () => {
      SignInSignUpMethods.OpenSignInModal();
      SignInSignUpSelectors.passwordInput().type(registratedPassword);
      SignInSignUpSelectors.submitButton().click();
      SignInSignUpSelectors.errorEmptyField().should("have.length", 1);
    });
    it("Should check filled email but empty password", () => {
      SignInSignUpMethods.OpenSignInModal();
      SignInSignUpSelectors.emailInput().type(registratedEmail);
      SignInSignUpSelectors.submitButton().click();
      SignInSignUpSelectors.errorEmptyField().should("have.length", 1);
    });
    it("Should check correct credentials with spaces", () => {
      SignInSignUpMethods.OpenSignInModal();
      SignInSignUpSelectors.emailInput().type(wrongEmail);
      SignInSignUpSelectors.passwordInput().type(wrongPassword);
      SignInSignUpSelectors.submitButton().click();
      SignInSignUpSelectors.errorWrongFormat().should("have.length", 1);
    })
    it("Should check sign in with unregistrated data", () => {
      SignInSignUpMethods.OpenSignInModal();
      cy.intercept({method: "POST", url: "/signin"}).as('InvalidSignIn')
      SignInSignUpSelectors.emailInput().type(unregistratedEmail);
      SignInSignUpSelectors.passwordInput().type(unregistratedPassword);
      SignInSignUpSelectors.submitButton().click();
      SignInSignUpSelectors.alertWrongEmailOrPassword().should('exist')
      cy.wait('@InvalidSignIn').then(xhr => {
        expect(xhr.response?.statusCode).to.eq(422)
        expect(xhr.response?.statusMessage).to.eq('Unprocessable Entity')
        expect(xhr.request.body).deep.equal({email: unregistratedEmail, password: unregistratedPassword})
      })
    });
  });
});
