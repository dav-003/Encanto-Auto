export class SignInSignUpSelectors {
  // Modal
  static authModal = () => cy.get('[class*="__modal"].modal');
  static closeAuthModal = () =>
    cy.get('[class*="__close_wrapper"] [class*="__close"]');

  // Buttons
  static passwordEyeButton = () =>
    cy.get('input[name="password"] + [class*="show_password_block"]');
  static confirmPasswordEyeButton = () =>
    cy.get('input[name="confirmPassword"] + [class*="show_password_block"]');
  static forgotPassword = () => cy.get('[class*="forgot_password"]');
  static submitButton = () => cy.get('button[type="submit"]');
  static signUpButton = () => cy.get('[class*="create_account"]');
  static signInButton = () => cy.get('button[class*="__to_sign"]');

  // Inputs
  static emailInput = () => cy.get('input[name="email"]');
  static passwordInput = () => cy.get('input[name="password"]');
  static confirmPasswordInput = () => cy.get('input[name="confirmPassword"]');

  // Titles
  static signInTitle = () => cy.get('[class*="sign_in"] [class*="__title"]');
  static signInDescription = () => cy.get('[class*="description"]');
  static signUpTitle = () => cy.get('[class*="sign_up"] [class*="__title"]');
  static signUpDescription = () => cy.get('[class*="description"]');

  // Errors
  static errorWrongFormat = () => cy.get('span:contains("Սխալ ֆորմատ")');
  static errorEmptyField = () => cy.get('span:contains("Դատարկ դաշտ")');
  static errorMinLength = () => cy.get('span:contains("Նվազագույն արժեքը 8")');
  static errorMismatch = () =>
    cy.get('span:contains("Դաշտերը չեն համընկնում")');
  static alertEmailExists = () => cy.get("#\\31");
  static alertWrongEmailOrPassword = () => cy.get("#\\31");

  // Privicy Policy
  static privicyPolicyRow = () => cy.get('[class*="__privacy_policy"]');
  static policyCheckbox = () => cy.get("#policy");

  // Redirects
  static profilePageEndpoint = () => "/profile";
}
