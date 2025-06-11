import { SignIn, SignUp, HomePage } from "./SignInSignUpSelectors";

export class SignUpPositives {
    getUserIcon() {
        return cy.get(HomePage.userIcon);
    }
    getSignUpButton() {
        return cy.get(SignIn.signUp)
    }
    getEmailField() {
        return cy.get(SignUp.emailInput)
    }
    getPasswordField() {
        return cy.get(SignUp.passwordInput)
    }
    getConfirmPasswordField() {
        return cy.get(SignUp.confirmPasswordInput)
    }
    getPrivacyCheckbox() {
        return cy.get(SignUp.policyCheckbox)
    }
    getPrivacyRow(){
        return cy.get(SignUp.privicyPolicyRow)
    }
    getSubmitButton() {
        return cy.get(SignUp.submitButton)
    }
    getSignUpTitle() {
        return cy.get(SignUp.signUpTitle)
    }
    getSignUpDescription() {
        return cy.get(SignUp.signUpDescription)
    }
    getPasswordEyeButton() {
        return cy.get(SignUp.showPassword)
    }
    getConfirmPasswordEyeButton() {
        return cy.get(SignUp.showConfirmPassword)
    }
    getSignInButton() {
        return cy.get(SignUp.signInButton)
    }
    AllModalValidate() {
        this.getUserIcon().click()
        this.getSignUpButton().click()
        this.getSignUpTitle().should('have.text', 'Գրանցվել')
        this.getSignUpDescription().should('have.text', 'Գրեք Ձեր էլ. հասցեն և գաղտնաբառը գրանցվելու համար')
        this.getEmailField().should('have.attr', 'placeholder', 'Էլ. հասցե')
        this.getPasswordField().should('have.attr', 'placeholder', 'Գաղտնաբառ')
        this.getConfirmPasswordField().should('have.attr', 'placeholder', 'Կրկնել գաղտնաբառը')
        this.getPasswordEyeButton().should('exist')
        this.getConfirmPasswordEyeButton().should('exist')
        this.getPrivacyCheckbox().should('not.be.checked')
        this.getPrivacyRow().should('exist')
        this.getSubmitButton().should('be.disabled')
        this.getSignInButton().should('exist')
    }
    CreateUser(email: string, password: string) {
        this.getUserIcon().click();
        this.getSignUpButton().click()
        this.getEmailField().type(email)
        this.getPasswordField().type(password)
        this.getConfirmPasswordField().type(password)
        this.getSubmitButton().should('be.disabled')
        this.getPrivacyCheckbox().check()
        this.getSubmitButton().should('not.be.disabled').click()
        cy.url().should('include', '/profile')
    }
    CheckPasswordEyeButton() {
        this.getUserIcon().click()
        this.getSignUpButton().click()
        this.getPasswordField().should('have.attr', 'type', 'password')
        this.getPasswordEyeButton().click()
        this.getPasswordField().should('have.attr', 'type', 'text')
        this.getConfirmPasswordField().should('have.attr', 'type', 'password')
        this.getConfirmPasswordEyeButton().click()
        this.getConfirmPasswordField().should('have.attr', 'type', 'text')
    }
}

export class SignUpNegatives {
    getUserIcon() {
        return cy.get(HomePage.userIcon)
    }
    getSignUpButton() {
        return cy.get(SignIn.signUp)
    }
    getEmailField() {
        return cy.get(SignUp.emailInput)
    }
    getPasswordField() {
        return cy.get(SignUp.passwordInput)
    }
    getConfirmPasswordField() {
        return cy.get(SignUp.confirmPasswordInput)
    }
    getPrivacyCheckbox() {
        return cy.get(SignUp.policyCheckbox)
    }
    getSubmitButton() {
        return cy.get(SignUp.submitButton)
    }
    checkEmptyFieldsWithSpaces() {
        this.getUserIcon().click()
        this.getSignUpButton().click()
        this.getEmailField().type('         ')
        this.getPasswordField().type('         ')
        this.getConfirmPasswordField().type('         ')
        this.getPrivacyCheckbox().check()
        this.getSubmitButton().click()
        cy.get('span:contains("Դատարկ դաշտ")').should('have.length', 2)
    }
    checkInvalidEmailAndShortPassword() {
        this.getUserIcon().click()
        this.getSignUpButton().click()
        this.getEmailField().clear().type('a@.a');
        this.getPasswordField().clear().type('1234567');
        this.getConfirmPasswordField().clear().type('123');
        this.getPrivacyCheckbox().check()
        this.getSubmitButton().click();
        cy.get('span').contains('Սխալ ֆորմատ').should('be.visible');
        cy.get('span').contains('Նվազագույն արժեքը 8').should('be.visible');
        cy.get('span').contains('Դաշտերը չեն համընկնում').should('be.visible');
    }
    checkCompletelyEmptyFields() {
        this.getUserIcon().click()
        this.getSignUpButton().click()
        this.getEmailField().clear()
        this.getPasswordField().clear()
        this.getConfirmPasswordField().clear()
        this.getPrivacyCheckbox().check()
        this.getSubmitButton().click()
        cy.get('span:contains("Դատարկ դաշտ")').should('have.length', 2)
    }
    checkDuplicateEmail(email: string) {
        this.getUserIcon().click()
        this.getSignUpButton().click()
        this.getEmailField().type(email)
        this.getPasswordField().type('12345678')
        this.getConfirmPasswordField().type('12345678')
        this.getPrivacyCheckbox().check()
        this.getSubmitButton().click()
        cy.get('#\\31')
            .should('be.visible')
            .and('have.text', 'Էլ.փոստ գոյություն ունի')
    }
    checkWithoutPolicyCheckbox(email: string, password: string) {
        this.getUserIcon().click()
        this.getSignUpButton().click()
        this.getEmailField().type(email)
        this.getPasswordField().type(password)
        this.getConfirmPasswordField().type(password)
        this.getSubmitButton().should('be.disabled')
    }
    checkMismatchedPasswords(email: string, pass1: string, pass2: string) {
        this.getUserIcon().click()
        this.getSignUpButton().click()
        this.getEmailField().type(email)
        this.getPasswordField().type(pass1)
        this.getConfirmPasswordField().type(pass2)
        this.getPrivacyCheckbox().check()
        this.getSubmitButton().click()
        cy.get('span:contains("Դաշտերը չեն համընկնում")').should('exist')
    }
    checkInvalidEmailCharacters() {
        const invalidEmail = 'test@exam!ple.com';
        
        this.getUserIcon().click()
        this.getSignUpButton().click()
        this.getEmailField().type(invalidEmail)
        this.getPasswordField().type('12345678')
        this.getConfirmPasswordField().type('12345678')
        this.getPrivacyCheckbox().check()
        this.getSubmitButton().click()
        cy.get('span:contains("Սխալ ֆորմատ")').should('exist')
    }
    checkTooLongEmail() {
        const longEmail = 'a'.repeat(245) + '@example.com';

        this.getUserIcon().click()
        this.getSignUpButton().click()
        this.getEmailField().type(longEmail)
        this.getPasswordField().type('1234')
        this.getConfirmPasswordField().type('1234')
        this.getPrivacyCheckbox().check()
        this.getSubmitButton().click()
        cy.get('span:contains("Սխալ ֆորմատ")').should('exist')
    }
}

export const signUpPositive = new SignUpPositives()
export const signUpNegative = new SignUpNegatives()