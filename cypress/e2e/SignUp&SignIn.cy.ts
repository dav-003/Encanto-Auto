import { signUpPositive } from "../pageObjects/SignInSignUpPage";
import { signUpNegative } from "../pageObjects/SignInSignUpPage";

describe('Sign up & Sign in', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    context('Sign up Positive', () => {
        it('Should validate SignUp modal', () => {
            signUpPositive.AllModalValidate()
        })
        it('Should check eye button work', () => {
            signUpPositive.CheckPasswordEyeButton()
        })
        it('Should create user', () => {
            signUpPositive.CreateUser('123@abgd.com','12345678')
        })
    })
    context.only('Sign up Negatives', () => {
        it('Should show errors when fields contain only spaces', () => {
            signUpNegative.checkEmptyFieldsWithSpaces()
        })
        it('Should validate invalid email, short password and mismatch', () => {
            signUpNegative.checkInvalidEmailAndShortPassword()
        })
        it('Should show empty field errors when all fields are cleared', () => {
            signUpNegative.checkCompletelyEmptyFields()
        })
        it('Should show error for already registered email', () => {
            signUpNegative.checkDuplicateEmail('qwe123@a.a')
        })
        it('Should check register without checkbox', () => {
            signUpNegative.checkWithoutPolicyCheckbox('abgd@mail.ru', '777')
        })
        it('Should check mismatch passwords', () => {
            signUpNegative.checkMismatchedPasswords('abgd@mail.ru', '12345', '789')
        })
        it('Should check special symbols in email field', () => {
            signUpNegative.checkInvalidEmailCharacters()
        })
        it('Should check too long email', () => {
            signUpNegative.checkTooLongEmail()
        })
    })
})
// describe('Sign up And Sign in', () => {
//     beforeEach(() => {
//         cy.visit('/')
//     })
//     context('Sign up Sign in modal', () => {
//         it('Should open modal and go to sign up', () => {
//             cy.get('div.index-module-scss-module__7ov_ta__user').click()
//             cy.get('div.index-module-scss-module__iSzDEq__modal.modal').should('be.visible')
//             cy.get('button[type="button"]').contains('Ստեղծել հաշիվ').should('be.visible').click()
//             cy.get('.index-module-scss-module__J3yFvG__title').contains('Գրանցվել')
//             cy.get('input[name="email"]').should('be.visible')
//             cy.get('input[name="password"]').should('be.visible')
//             cy.get('input[name="confirmPassword"]').should('be.visible')
//             cy.get('div.index-module-scss-module__J3yFvG__privacy_policy')
//             .find('#policy')
//             cy.get('div.index-module-scss-module__J3yFvG__privacy_policy')
//             .find('a')
//             .should('have.attr', 'href')
//             cy.get('button[type="submit"]').should('be.disabled')
//             cy.get('button[type="button"]').contains('Մուտք գործել').click()
//             cy.get('div').contains('Մուտք գործել').should('be.visible')
//             cy.get('div.index-module-scss-module__iSzDEq__close').click()
//             cy.get('div.index-module-scss-module__iSzDEq__modal.modal').should('not.exist')
//         })
//     })
//     context('Sign up positives', () => {
//         const uniqueEmail = `user_${Date.now()}@mail.ru`

//         it('Should check positive cases for registration', () => {
//             cy.get('div.index-module-scss-module__7ov_ta__user').click()
//             cy.get('button[type="button"]').contains('Ստեղծել հաշիվ').click()
//             cy.get('div').contains('Գրանցվել').should('be.visible')
//             cy.get('#policy').check()
//             cy.get('button[type="submit"]').should('be.enabled')
//             cy.get('#policy').uncheck()
//             cy.get('input[name="email"]').type('123')
//             cy.get('#policy').check()
//             cy.get('button[type="submit"]').click()
//             cy.get('span:contains("Սխալ ֆորմատ")').should('be.visible')
//             cy.get('input[name="email"]').type('@gmail.com')
//             cy.get('button[type="submit"]').click()
//             cy.get('span:contains("Սխալ ֆորմատ")').should('not.exist')
//             cy.get('input[name="email"]').clear()
//             cy.get('button[type="submit"]').click()
//             cy.get('span:contains("Դատարկ դաշտ")').should('have.length', 2)
//             cy.get('input[name="password"]').type('12345')
//             cy.get('span:contains("Նվազագույն արժեքը 8")').should('be.visible')
//             cy.get('input[type="password"][name="password"]').should('exist')
//             cy.get('[class*="show_password_block"]').eq(0).click()
//             cy.get('input[type="text"][name="password"]').should('exist')
//             cy.get('input[name="password"]').type('678')
//             cy.get('button[type="submit"]').click()
//             cy.get('span:contains("Նվազագույն արժեքը 8")').should('not.exist')
//             cy.get('span:contains("Դաշտերը չեն համընկնում")').should('be.visible')
//             cy.get('input[name="confirmPassword"]').type('12345678')
//             cy.get('button[type="submit"]').click()
//             cy.get('span:contains("Դաշտերը չեն համընկնում")').should('not.exist')
//             cy.get('input[type="password"][name="confirmPassword"]').should('exist')
//             cy.get('[class*="show_password_block"]').eq(1).click()
//             cy.get('[class*="show_password_block"]').eq(0).click()
//             cy.get('input[type="text"][name="confirmPassword"]').should('exist')
//             cy.get('input[name="email"]').type(uniqueEmail)
//             cy.get('span:contains("Սխալ ֆորմատ")').should('not.exist')
//             cy.get('button[type="submit"]').click()
//             cy.url().should('contain', '/profile')
//         })
//     })
//     context('Sign up negatives', () => {
//         it('Should check negative cases for registrating', () => {
//             cy.get('div.index-module-scss-module__7ov_ta__user').click()
//             cy.get('button[type="button"]').contains('Ստեղծել հաշիվ').click()
//             cy.get('button[type="submit"]').should('be.disabled')
//             cy.get('input[name="email"]').type('         ')
//             cy.get('input[name="password"]').type('         ')
//             cy.get('input[name="confirmPassword"]').type('         ')
//             cy.get('#policy').check()
//             cy.get('button[type="submit"]').click()
//             cy.get('span:contains("Դատարկ դաշտ")').should('have.length', 2)
//             cy.get('input[name="email"]').clear().type('a@.a')
//             cy.get('input[name="password"]').clear().type('1234567')
//             cy.get('input[name="confirmPassword"]').clear().type('123')
//             cy.get('span:contains("Սխալ ֆորմատ")').should('be.visible')
//             cy.get('span:contains("Նվազագույն արժեքը 8")').should('be.visible')
//             cy.get('span:contains("Դաշտերը չեն համընկնում")').should('be.visible')
//             cy.get('input[name="email"]').clear()
//             cy.get('input[name="password"]').clear()
//             cy.get('input[name="confirmPassword"]').clear()
//             cy.get('button[type="submit"]').click()
//             cy.get('span:contains("Դատարկ դաշտ")').should('have.length', 2)
//             cy.get('input[name="email"]').type('qwe123@a.a')
//             cy.get('input[name="password"]').type('12345678')
//             cy.get('input[name="confirmPassword"]').type('12345678')
//             cy.get('button[type="submit"]').click()
//             cy.get('#\\31').should('be.visible').and('have.text', 'Էլ.փոստ գոյություն ունի')
//         })
//     })
// })