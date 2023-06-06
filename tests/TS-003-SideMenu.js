const allureReporter = require('@wdio/allure-reporter').default;
const expect = require('chai').expect;
const mainMenu = require('../resources/pages/main-page/selector');
const sideMenu = require('../resources/pages/side-menu/selector.js');
const assert = require('../resources/pages/side-menu/assert.js');

describe('TS-003 | Side Menu', function() {
	it('TC-001 | Check all content is loaded', async function() {
		allureReporter.addTag('Sanity Test');
		allureReporter.addSeverity('normal');

		await mainMenu.sideMenu.waitForExist({ timeout: 30000 });
		await mainMenu.sideMenu.touchAction('tap');

		await sideMenu.webview.waitForExist({ timeout: 30000 });
		await sideMenu.about.waitForExist({ timeout: 30000 });
		await sideMenu.login.waitForExist({ timeout: 30000 });
		await sideMenu.logout.waitForExist({ timeout: 30000 });

		const webviewText = await sideMenu.webview.getText();
		const aboutText = await sideMenu.about.getText();
		const loginText = await sideMenu.login.getText();
		const logoutText = await sideMenu.logout.getText();

		expect(webviewText).equal(assert.attribute.webviewText, webviewText);
		expect(aboutText).equal(assert.attribute.aboutText, aboutText);
		expect(loginText).equal(assert.attribute.loginText, loginText);
		expect(logoutText).equal(assert.attribute.logoutText, logoutText);
	});

	it('TC-002 | The page is scrollable', async function() {
		allureReporter.addTag('Sanity Test');
		allureReporter.addSeverity('normal');

		// eslint-disable-next-line no-undef
		await driver.touchAction([
			{action: 'press', x: 170, y: 412},
			{action: 'wait', ms: 500},
			{action: 'moveTo', x: 175, y: 189},
			'release'
		]);
		// eslint-disable-next-line no-undef
		await driver.touchAction([
			{action: 'press', x: 210, y: 134},
			{action: 'wait', ms: 500},
			{action: 'moveTo', x: 201, y: 385},
			'release'
		]);
	});

	it('TC-003 | Access "About Page"', async function() {
		allureReporter.addTag('Sanity Test');
		allureReporter.addSeverity('normal');

		await sideMenu.about.waitForExist({ timeout: 30000 });
		await sideMenu.about.touchAction('tap');
	});
});