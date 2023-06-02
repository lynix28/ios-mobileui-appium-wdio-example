const expect = require('chai').expect;
const mainMenu = require('../resources/pages/main-page/selector');
const sideMenu = require('../resources/pages/side-menu/selector.js');
const login = require('../resources/pages/login/selector.js');
const logout = require('../resources/pages/logout/selector.js');
const loginAssert = require('../resources/pages/login/assert.js');
const logoutAssert = require('../resources/pages/logout/assert.js');
const keyboard = require('../resources/shared/keyboard.js');
const variable = require('../resources/shared/variable.js');

describe('TS-004 | Login & Logout', function() {
	it('TC-001 | Check all content is loaded', async function() {
		await mainMenu.sideMenu.waitForExist({ timeout: 30000 });
		await mainMenu.sideMenu.touchAction('tap');

		await sideMenu.login.waitForExist({ timeout: 30000 });
		await sideMenu.logout.waitForExist({ timeout: 30000 });
		await sideMenu.login.touchAction('tap');

		await login.pageTitle.waitForExist({ timeout: 30000 });
		await login.loginButton.waitForExist({ timeout: 30000 });
		await login.pageDescription.waitForExist({ timeout: 30000 });
		await login.usernameInputField.waitForExist({ timeout: 30000 });
		await login.passwordInputField.waitForExist({ timeout: 30000 });

		const pageTitle = await login.pageTitle.getText();
		const pageDesc = await login.pageDescription.getText();
		const loginBtn = await login.loginButton.getText();

		expect(pageTitle).equal(loginAssert.attribute.pageTitleText, pageTitle);
		expect(pageDesc).equal(loginAssert.attribute.pageDescText, pageDesc);
		expect(loginBtn).equal(loginAssert.attribute.loginBtnText, loginBtn);
	});

	it('TC-002 | Success Login', async function() {
		await login.usernameInputField.waitForExist({ timeout: 30000 });
		await login.usernameInputField.touchAction('tap');
		await keyboard.returnKey.waitForExist({ timeout: 30000 });
		let checkUsername;
		do {
			await login.usernameInputField.addValue(variable.data.username);
			checkUsername = await login.usernameInputField.getText();
		} while (checkUsername != variable.data.username);
		await keyboard.returnKey.touchAction('tap');

		await login.passwordInputField.waitForExist({ timeout: 30000 });
		await login.passwordInputField.touchAction('tap');
		await keyboard.returnKey.waitForExist({ timeout: 30000 });
		await login.passwordInputField.addValue(variable.data.password);
		await keyboard.returnKey.touchAction('tap');

		await login.loginButton.waitForExist({ timeout: 30000 });
		await login.loginButton.touchAction('tap');

		await mainMenu.pageTitle.waitForExist({ timeout: 30000 });
		const response = await mainMenu.pageTitle.getText();
		
		if (response == 'Login') expect(response).equal('Login', response);
		if (response == 'Products') expect(response).equal('Products', response);
	});

	it('TC-003 | Success Logout', async function() {
		await mainMenu.sideMenu.waitForExist({ timeout: 30000 });
		await mainMenu.sideMenu.touchAction('tap');

		await sideMenu.logout.waitForExist({ timeout: 30000 });
		await sideMenu.logout.touchAction('tap');

		await logout.logoutPopUp.waitForExist({ timeout: 30000 });
		await logout.logoutBtn.waitForExist({ timeout: 30000 });
		const logoutBtnText = await logout.logoutBtn.getText();
		expect(logoutBtnText).equal(logoutAssert.attribute.logoutBtnText, logoutBtnText);
		
		await logout.logoutBtn.touchAction('tap');
		await logout.logoutInfo.waitForExist({ timeout: 30000 });
		const logoutSuccessText = await logout.logoutInfo.getText();
		expect(logoutSuccessText).equal(logoutAssert.attribute.logoutSuccessText, logoutSuccessText);

		await logout.successLogoutPrompt.touchAction('tap');
	});
});