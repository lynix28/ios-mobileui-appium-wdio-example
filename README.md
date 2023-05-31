# iOS MobileUI Automation Test Project Example with Appium & WebdriverIO
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/lynix28/ios-mobileui-appium-wdio-example/tree/master.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/lynix28/ios-mobileui-appium-wdio-example/tree/master)
[![SauceLabs](https://img.shields.io/badge/integrated%20to-SauceLabs-red)](https://app.saucelabs.com/u/oauth-lynixizunia-7ba4e)

<h3><ins>Requirements</h3>
  
- NodeJS
- Appium Server
- Appium Inspector (to find selector)
- XCode (for iOS Simulator)
- Demo App (for testing sample) by Sauce Labs

<h3><ins>Node Modules</h3>
  
- WebdriverIO
- Mocha (for Test Framework)
- Allure (for Test Reporting)
- Chai (for Assessment)
- Sauce Labs (for Test on Cloud)
- Dotenv

<h3><ins>Setup with `package.json`</h3>
  
- `npm install`

<h3><ins>Setup manually</h3>
  
- `npm init -y`
- `npm install @wdio/cli`
- `./node_modules/.bin/wdio config` -> for quick setup or continue to install the following module below.
- `npm install @wdio/local-runner`
- `npm install @wdio/appium-service`
- `npm install @wdio/sauce-service`
- `npm install @wdio/mocha-framework`
- `npm install @wdio/allure-reporter`
- `npm install dotenv`
- `npm install chai`

<h3><ins>Setup WDA to Simulator | webdriveragent</h3>

- `npm install --save-dev appium@next`
- `./node_modules/.bin/appium driver install xcuitest` -> install Appium driver for iOS testing
- Run Appium Server
- Run Appium Inspector and try to connect to the Simulator (It will take quite long)
- If success accessing the Simulator by Appium Inspector, then the WDA is completely installed

<h3><ins>To compile the test result</h3>
  
- `npm install --save-dev allure-commandline`
- `./node_modules/.bin/allure generate [allure_output_dir] && ./node_modules/.bin/allure open` (edit the 'allure_output_dir' with your directory)

or follow this instruction to make it automatically -> https://webdriver.io/docs/allure-reporter#autogenerate-report

<h3><ins>To run the test</h3>
  
| Command | Description |
| --- | --- |
| `npm run test` | Run all tests |
| `npm run test -- --suite SuiteName` | Run a specific Test Suite Bundle (need to define it inside 'wdio.conf.js') |
| `npm run test -- --spec ./path/to/file/FileName` | Run a specific Test Case / Suite (need to define it inside 'wdio.conf.js') |

<h3><ins>Common issue that probably occured after the setup</h3>

If u get this error
`Error: "ts-node/esm/transpile-only 'resolve'" did not call the next hook in its chain and did not explicitly signal a short circuit. If this is intentional, include 'shortCircuit: true' in the hook's return.`

try to fix it with
`npm install --save-dev ts-node`

<h3><ins>To check the report</h3>
  
- `npm run report`

<h3><ins>How the report look like?</h3>

<ins>Allure Report
![image](https://github.com/lynix28/ios-mobileui-appium-wdio-example/assets/102797648/e56c37f0-e265-490b-b062-a54334501278)

<ins>SauceLabs Build & Test Status
![image](https://github.com/lynix28/ios-mobileui-appium-wdio-example/assets/102797648/cc8cf331-91cd-4d44-89f8-80204cfb3675)
