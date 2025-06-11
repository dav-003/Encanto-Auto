export const HomePage = {
    // Icons
    userIcon: '[class*="__user"]', 
}

export const SignIn = {
    // Modal
    authModal: '[class*="__modal"].modal',
    closeAuthModal: '[class*="__close_wrapper"] [class*="__close"]',

    // Buttons
    eyeButton: '[class*="show_password"]',
    forgotPassword: '[class*="forgot_password"]',
    submit: 'button[type="submit"]',
    signUp: '[class*="create_account"]',

    // Inputs
    emailInput: 'input[name="email"]',
    passwordInput: 'input[name="password"]',

    // Titles
    signInTitle: '[class*="sign_in"] [class*="__title"]',
    signInTitleText: 'Մուտք գործել',
    signInDescription: '[class*="description"]',
    signInDescriptionText: 'Գրեք Ձեր էլ. հասցեն և գաղտնաբառը մուտք գործելու համար',

    // Errors
    errorWrongFormat: 'span:contains("Սխալ ֆորմատ")',
    errorEmptyField: 'span:contains("Դատարկ դաշտ")',
    errorMinLength: 'span:contains("Նվազագույն արժեքը 8")',
    alertWrongEmailOrPassword: '#\\33',

    // Redirects
    profilePageEndpoint: '/profile'
};

export const SignUp = {
    // Titles
    signUpTitle: '[class*="sign_up"] [class*="__title"]',
    signUpTitleText: 'Գրանցվել',
    signUpDescription: '[class*="description"]',
    signUpDescriptionText: 'Գրեք Ձեր էլ. հասցեն և գաղտնաբառը գրանցվելու համար',

    // Inputs
    emailInput: 'input[name="email"]',
    passwordInput: 'input[name="password"]',
    confirmPasswordInput: 'input[name="confirmPassword"]',

    // Buttons
    signInButton: 'button[class*="__to_sign"]',
    submitButton: 'button[type="submit"]',

    // Privicy Policy
    privicyPolicyRow: '[class*="__privacy_policy"]',
    policyCheckbox: '#policy',

    // Eye buttons
    showPassword: 'input[name="password"] + [class*="show_password_block"]',
    showConfirmPassword: 'input[name="confirmPassword"] + [class*="show_password_block"]',

    // Errors
    errorWrongFormat: 'span:contains("Սխալ ֆորմատ")',
    errorEmptyField: 'span:contains("Դատարկ դաշտ")',
    errorMinLength: 'span:contains("Նվազագույն արժեքը 8")',
    errorMismatch: 'span:contains("Դաշտերը չեն համընկնում")',
    alertEmailExists: '#\\31'
}