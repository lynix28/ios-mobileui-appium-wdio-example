const expect = require('chai').expect;
const mainMenu = require('../resources/pages/main-page/selector');
const sideMenu = require('../resources/pages/side-menu/selector.js');
const login = require('../resources/pages/login/selector.js');
const loginAssert = require('../resources/pages/login/assert.js');
const keyboard = require('../resources/shared/keyboard.js');

describe('TS-005 | Negative Case', function() {
	it('TC-001 | Failed Login - Invalid Credential', async function() {
		await mainMenu.sideMenu.waitForExist({ timeout: 30000 });
		await mainMenu.sideMenu.touchAction('tap');

		await sideMenu.login.waitForExist({ timeout: 30000 });
		await sideMenu.login.touchAction('tap');

		await login.usernameInputField.waitForExist({ timeout: 30000 });
		await login.usernameInputField.clearValue();
		await login.usernameInputField.touchAction('tap');
		await keyboard.keys.waitForExist({ timeout: 30000 });
		await keyboard.a.touchAction('tap');
		await keyboard.b.touchAction('tap');
		await keyboard.c.touchAction('tap');
		await keyboard.returnKey.touchAction('tap');

		await login.passwordInputField.waitForExist({ timeout: 30000 });
		await login.passwordInputField.clearValue();
		await login.passwordInputField.touchAction('tap');
		await keyboard.keys.waitForExist({ timeout: 30000 });
		await keyboard.a.touchAction('tap');
		await keyboard.b.touchAction('tap');
		await keyboard.c.touchAction('tap');
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
		await keyboard.a.touchAction('tap');
		await keyboard.l.touchAction('tap');
		await keyboard.i.touchAction('tap');
		await keyboard.c.touchAction('tap');
		await keyboard.e.touchAction('tap');
		await keyboard.more.touchAction('tap');
		await keyboard.at.touchAction('tap');
		await keyboard.more.touchAction('tap');
		await keyboard.e.touchAction('tap');
		await keyboard.x.touchAction('tap');
		await keyboard.a.touchAction('tap');
		await keyboard.m.touchAction('tap');
		await keyboard.p.touchAction('tap');
		await keyboard.l.touchAction('tap');
		await keyboard.e.touchAction('tap');
		await keyboard.more.touchAction('tap');
		await keyboard.dot.touchAction('tap');
		await keyboard.more.touchAction('tap');
		await keyboard.c.touchAction('tap');
		await keyboard.o.touchAction('tap');
		await keyboard.m.touchAction('tap');
		await keyboard.returnKey.touchAction('tap');

		await login.passwordInputField.waitForExist({ timeout: 30000 });
		await login.passwordInputField.clearValue();
		await login.passwordInputField.touchAction('tap');
		await keyboard.returnKey.waitForExist({ timeout: 30000 });
		await keyboard.more.touchAction('tap');
		await keyboard.one.touchAction('tap');
		await keyboard.zero.touchAction('tap');
		await keyboard.two.touchAction('tap');
		await keyboard.zero.touchAction('tap');
		await keyboard.three.touchAction('tap');
		await keyboard.zero.touchAction('tap');
		await keyboard.four.touchAction('tap');
		await keyboard.zero.touchAction('tap');
		await keyboard.returnKey.touchAction('tap');

		await login.loginButton.waitForExist({ timeout: 30000 });
		await login.loginButton.touchAction('tap');

		await login.errorMessageField.waitForExist({ timeout: 30000 });
		const errorText = await login.errorMessageField.getText();
		expect(errorText).equal(loginAssert.attribute.lockedUserMessage);
	});
});