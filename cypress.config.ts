import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://192.168.3.225:3000/',
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
  },
    viewportWidth: 1920,
    viewportHeight: 1080
})
