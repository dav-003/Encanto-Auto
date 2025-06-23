export class HomePageMethods {
    
    static filterModalCategoriesByTitle = (title: string, index: number) => {
        return cy.get('[class*="__product_filter_category"]')
            .filter(`:has(> [class*="__title"]:contains("${title}"))`)
            .find('> [class*="__product_filter_category"]')
            .eq(index);
    }
}
