import { SignInSignUpSelectors } from "../Selectors/signInSignUpSelectors";
import { HomePageSelectors } from "../Selectors/homePageSelectors";
import { SignUpData } from "../Models/signInSignUpModels";

export class SignInSignUpMethods {
  static OpenSignUpModal = () => {
    HomePageSelectors.userIcon().click();
    SignInSignUpSelectors.signUpButton().click();
    SignInSignUpSelectors.signUpTitle().should("have.text", "Գրանցվել");
    SignInSignUpSelectors.signUpDescription().should(
      "have.text",
      "Գրեք Ձեր էլ. հասցեն և գաղտնաբառը գրանցվելու համար",
    );
    SignInSignUpSelectors.emailInput().should(
      "have.attr",
      "placeholder",
      "Էլ. հասցե",
    );
    SignInSignUpSelectors.passwordInput().should(
      "have.attr",
      "placeholder",
      "Գաղտնաբառ",
    );
    SignInSignUpSelectors.confirmPasswordInput().should(
      "have.attr",
      "placeholder",
      "Կրկնել գաղտնաբառը",
    );
    SignInSignUpSelectors.passwordEyeButton().should("exist");
    SignInSignUpSelectors.confirmPasswordEyeButton().should("exist");
    SignInSignUpSelectors.policyCheckbox().should("not.be.checked");
    SignInSignUpSelectors.privicyPolicyRow().should("exist");
    SignInSignUpSelectors.submitButton().should("be.disabled");
    SignInSignUpSelectors.signInButton().should("exist");
  };
  static OpenSignInModal = () => {
    HomePageSelectors.userIcon().click();
    SignInSignUpSelectors.signInTitle().should("have.text", "Մուտք գործել");
    SignInSignUpSelectors.signInDescription().should(
      "have.text",
      "Գրեք Ձեր էլ. հասցեն և գաղտնաբառը մուտք գործելու համար",
    );
    SignInSignUpSelectors.emailInput().should(
      "have.attr",
      "placeholder",
      "Էլ. հասցե",
    );
    SignInSignUpSelectors.passwordInput().should(
      "have.attr",
      "placeholder",
      "Գաղտնաբառ",
    );
    SignInSignUpSelectors.passwordEyeButton().should("exist");
    SignInSignUpSelectors.forgotPassword().should("exist");
    SignInSignUpSelectors.submitButton().should("exist");
    SignInSignUpSelectors.signUpButton().should("exist");
  };
  static FillSignUpForm = (data : SignUpData) => {
    if(data.email) {
      SignInSignUpSelectors.emailInput().type(data.email)
    }
    if(data.password) {
      SignInSignUpSelectors.passwordInput().type(data.password)
    }
    if(data.confirmPassword) {
      SignInSignUpSelectors.confirmPasswordInput().type(data.confirmPassword)
    }
  }
}

