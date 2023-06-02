const expect = require('chai').expect;
const mainMenu = require('../resources/pages/main-page/selector');
const sideMenu = require('../resources/pages/side-menu/selector.js');
const login = require('../resources/pages/login/selector.js');
const loginAssert = require('../resources/pages/login/assert.js');
const keyboard = require('../resources/shared/keyboard.js');
const variable = require('../resources/shared/variable.js');

describe('TS-005 | Negative Case', function() {
	it('TC-001 | Failed Login - Invalid Credential', async function() {
		await mainMenu.sideMenu.waitForExist({ timeout: 30000 });
		await mainMenu.sideMenu.touchAction('tap');

		await sideMenu.login.waitForExist({ timeout: 30000 });
		await sideMenu.login.touchAction('tap');

		await login.usernameInputField.waitForExist({ timeout: 30000 });
		await login.usernameInputField.clearValue();
		await login.usernameInputField.touchAction('tap');
		await keyboard.returnKey.waitForExist({ timeout: 30000 });
		let checkUsername;
		do {
			await login.usernameInputField.addValue(variable.data.invalidUsername);
			checkUsername = await login.usernameInputField.getText();
		} while (checkUsername != variable.data.invalidUsername);
		await keyboard.returnKey.touchAction('tap');

		await login.passwordInputField.waitForExist({ timeout: 30000 });
		await login.passwordInputField.clearValue();
		await login.passwordInputField.touchAction('tap');
		await keyboard.returnKey.waitForExist({ timeout: 30000 });
		await login.passwordInputField.addValue(variable.data.invalidPassword);
		await keyboard.returnKey.touchAction('tap');

		await login.loginButton.waitForExist({ timeout: 30000 });
		await login.loginButton.touchAction('tap');

		await login.errorMessageField.waitForExist({ timeout: 30000 });
		const errorText = await login.errorMessageField.getText();
		expect(errorText).equal(loginAssert.attribute.invalidUserMessage);
	});

	it('TC-002 | Failed Login - Locked User', async function() {
		await mainMenu.sideMenu.waitForExist({ timeout: 30000 });
		await mainMenu.sideMenu.touchAction('tap');

		await sideMenu.login.waitForExist({ timeout: 30000 });
		await sideMenu.login.touchAction('tap');

		await login.usernameInputField.waitForExist({ timeout: 30000 });
		await login.usernameInputField.clearValue();
		await login.usernameInputField.touchAction('tap');
		await keyboard.returnKey.waitForExist({ timeout: 30000 });
		let checkUsername;
		do {
			await login.usernameInputField.addValue(variable.data.blockedUsername);
			checkUsername = await login.usernameInputField.getText();
		} while (checkUsername != variable.data.blockedUsername);
		await keyboard.returnKey.touchAction('tap');

		await login.passwordInputField.waitForExist({ timeout: 30000 });
		await login.passwordInputField.clearValue();
		await login.passwordInputField.touchAction('tap');
		await keyboard.returnKey.waitForExist({ timeout: 30000 });
		await login.passwordInputField.addValue(variable.data.password);
		await keyboard.returnKey.touchAction('tap');

		await login.loginButton.waitForExist({ timeout: 30000 });
		await login.loginButton.touchAction('tap');

		await login.errorMessageField.waitForExist({ timeout: 30000 });
		const errorText = await login.errorMessageField.getText();
		expect(errorText).equal(loginAssert.attribute.lockedUserMessage);
	});
});