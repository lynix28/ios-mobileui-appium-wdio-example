const allureReporter = require('@wdio/allure-reporter').default;
const mainMenu = require('../resources/pages/main-page/selector.js');

describe('TS-001 | Smoke Test', function() {
	it('TC-001 | Opening application', async function() {
		allureReporter.addTag('Smoke Test');
		allureReporter.addSeverity('critical');
		await mainMenu.appLogo.waitForExist({ timeout: 30000 });
	});
});