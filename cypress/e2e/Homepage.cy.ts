describe('First test', () => {
    it('Should visit homepage', () => {
        cy.visit('/')
        it('Should open and check burger button', () => {
        cy.get('.index-module-scss-module__fXNova__burger > svg > path').click()
    })
    })
})