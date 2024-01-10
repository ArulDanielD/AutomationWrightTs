import { PlaywrightTestConfig} from '@playwright/test';


const config: PlaywrightTestConfig = {
  testMatch: ["pomtest/LoginRegistration.test.ts"],
  use: {
    baseURL:"https://ecommerce-playground.lambdatest.io/index.php?",
    headless: false,
    screenshot: "on",
    video:"on"
    // we have list of suggestion based on script we see our record |
  },
  retries:0,  // based on failure it will be searched how many times we have passed on retries
  reporter : [["dot"],["json",{
    outputFile: "jsonReports/jsonReport.json"

  }],["html",{
    open: "never"
  }]]
};

export default config;
 