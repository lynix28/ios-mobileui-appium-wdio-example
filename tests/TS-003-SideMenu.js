const expect = require('chai').expect;
const mainMenu = require('../resources/pages/main-page/selector');
const sideMenu = require('../resources/pages/side-menu/selector.js');
const assert = require('../resources/pages/side-menu/assert.js');

describe('TS-003 | Side Menu', function() {
	it('TC-001 | Check all content is loaded', async function() {
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

	it('TC-002 | Access "About Page"', async function() {
		await sideMenu.about.waitForExist({ timeout: 30000 });
		await sideMenu.about.touchAction('tap');
	});
});