import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://nodejs.org/en',
    specPattern: 'cypress/e2e/**/*.cy.{ts,js}',
    supportFile: 'cypress/support/index.ts',
    setupNodeEvents(on, config) {
      return config
    }
  },
  video: true,
  screenshotOnRunFailure: true,
  chromeWebSecurity: false,
  retries: {
    runMode: 1,
    openMode: 0
  }
})
