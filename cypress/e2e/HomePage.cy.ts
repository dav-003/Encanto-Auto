import { HomePageSelectors } from "../pageObjects/Selectors/homePageSelectors";
import { HomePageMethods } from "../pageObjects/Methods/homePageMethods";

describe('Home page', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    context('Home page positives', () => {
        it('Should open & validate burger button', () => {
            HomePageSelectors.burgerButton().click()
            HomePageSelectors.burgerButtonSidebar().should('be.visible')
        })
    })
})