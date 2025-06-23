import { HomePageMethods } from "../Methods/homePageMethods";

export class HomePageSelectors {
  static userIcon = () => cy.get('[class*="__user"]');
  static favoritesIcon = () => cy.get('[class*="__favourite"]');
  static basketIcon = () => cy.get('[class*="__shopping"]');
  static phoneIcon = () =>
    cy.get('[class*="__header_tools"] [class*="__dropdown_title"]').eq(0);
  static languageIcon = () =>
    cy.get('[class*="__header_tools"] [class*="__language_switcher"]');
  static languageArm = () => cy.get('[class*="header"] a[href^="/hy"]');
  static languageRus = () => cy.get('[class*="header"] a[href^="/ru"]');
  static languageEng = () => cy.get('[class*="header"] a[href^="/en"]');
  static burgerButton = () => cy.get('[class*="__burger"]');
  static burgerButtonSidebar = () => cy.get('[class*="__category_menu_wrapper"] [class*="__category_menu"]')
  
  static womenButton = () => cy.get('[class*="__humans"] li').eq(0);
  static menButton = () => cy.get('[class*="__humans"] li').eq(1);
  static kidsButton = () => cy.get('[class*="__humans"] li').eq(2);
  static searchField = () => cy.get('[class*="__search_input"]');
  static searchButton = () =>
    cy.get('[class*="__search_input"] [class="cursor-pointer"]');
  static encantoImg = () => cy.get('[class*="__header"] img[alt="Encanto"]');
  static preferredCategoriesSection = () =>
    cy.get('[class*="__preferred_categories"]');
  static categoriesSectionCategory = () =>
    cy.get('[class*="__categories"] [class*="__category_title"]');
  static discountedAssortmentSection = () =>
    cy.get('[class*="_container"] [class*="__discounted_assortment"]').eq(0);
  static discountedAssortmentContent = () =>
    cy.get('[class*="__assortment_content"]');
  static discountedSeeMoreButton = () =>
    cy.get('[class*="__assortment_content"] button[type="button"]');
  static updatedAssortmentSection = () => cy.get('[class*="__updated_range"]');
  static sortingDropdownButton = () =>
    cy.get('[class*="__updated_range"] [class*="__sorting_dropdown"]');
  static sortingDropdownMenu = () =>
    cy.get('[class*="__dropdown dropdown"] [class*="__menu"]');
  static sortingMenuFirstItem = () =>
    cy.get('[class*="__menu"] [class*="__item"]').eq(0);
  static sortingMenuSecondItem = () =>
    cy.get('[class*="__menu"] [class*="__item"]').eq(1);
  static sortingMenuThirdItem = () =>
    cy.get('[class*="__menu"] [class*="__item"]').eq(2);
  static filteringButton = () =>
    cy.get('[class*="__updated_range"] [class*="__filter_button"]');
  static filteringModal = () => 
    cy.get('[class*="product_filter_menu"] [class*="product_filter_menu"]')
  static filterModalHeaderText = () =>
     cy.get('[class*="product_filter_menu"] [class*="title"]').eq(0)
  static filterModalCloseButton = () => 
    cy.get('[class*="product_filter_menu"] [class*="__close"]')
  static filterModalPriceTitle = () => 
    cy.get('[class*="product_filter_prices"] [class*="__title"]')
  static filterModalStartPrice = () => 
    cy.get('input[placeholder="0 Դրամ"]').eq(0)
  static filterModalEndPrice = () => 
    cy.get('input[placeholder="0 Դրամ"]').eq(1)
  static filterModalShowByTitle = () => 
    cy.get('[class*="__product_filter_order"] [class*="__title"]')
  static filterModalFromLowToUpPrice = () => 
    cy.get('[class*="__forms"] [class*="__order"]').eq(0)
  static filterModalFromUpToLowPrice = () => 
    cy.get('[class*="__forms"] [class*="__order"]').eq(1)
  static filterModalColorTitle = () => 
    cy.get('[class*="__product_filter_color"] [class*="__title"]')
  static filterModalColors = (index: number) => 
    cy.get('[class*="__colors"] [class*="__color"]').eq(index)
  static filterModalSizeTitle = () => 
    cy.get('[class*="__product_filter_size"] [class*="__title"]')
  static filterModalSizes = (index: number) => 
    cy.get('[class*="__sizes"] [class*="__size"]').eq(index)
  static filterModalShowByBrandTitle = () => 
    cy.get('[class*="__product_filter_brand"] [class*="__title"]')
  static filterModalShowByBrandBrands = (index: number) => 
    cy.get('[class*="__brands"] [class*="__brand"]').eq(index)
  static filterModalChooseByCategoryTitle = () => 
    cy.get('[class*="__category_wrapper"] [class*="__title"]').eq(0)
  static filterModalWomenCategoryTitle = () => 
    cy.get('[class*="__product_filter_category"] [class*="__title"]').eq(0)

  static filterModalWomenCategories = (index: number) => 
  HomePageMethods.filterModalCategoriesByTitle('Կին', index);

  static filterModalMenCategoryTitle = () => 
    cy.get('[class*="__product_filter_category"] [class*="__title"]').eq(1)

  static filterModalMenCategories = (index: number) => 
  HomePageMethods.filterModalCategoriesByTitle('Տղամարդ', index);

  static filterModalKidsCategoryTitle = () => 
    cy.get('[class*="__product_filter_category"] [class*="__title"]').eq(2)

  static filterModalKidsCategories = (index: number) => 
  HomePageMethods.filterModalCategoriesByTitle('Երեխա', index);

  static filterModalDiscountedAssortmentButton = () => 
    cy.get('[class*="__categories"] [class*="__discounted_assortment"]')
  
  static filterModalSubmitButton = () => 
    cy.get('[class*="__show"] [class*="__show_btn"]')
}
