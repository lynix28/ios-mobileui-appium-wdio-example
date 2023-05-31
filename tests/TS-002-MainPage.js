/* eslint-disable no-undef */
const expect = require('chai').expect; 
const mainMenu = require('../resources/pages/main-page/selector.js');
const assert = require('../resources/pages/main-page/assert.js');

describe('TS-002 | Main Menu', function() {
	it('TC-001 | Check all content is loaded', async function() {
		let displayed = 0;

		if (await mainMenu.appLogo.waitForExist({ timeout: 30000 }) == true) displayed = displayed + 1;
		if (await mainMenu.sideMenu.waitForExist({ timeout: 30000 }) == true) displayed = displayed + 1;
		if (await mainMenu.pageTitle.waitForExist({ timeout: 30000 }) == true) displayed = displayed + 1;

		expect(displayed).equal(3);

		const title = await mainMenu.pageTitle.getText();
		expect(title).equal(assert.attribute.pageTitleText, title);
	});

	it('TC-002 | The page is scrollable', async function() {
		await driver.touchAction([
			{action: 'press', x: 172, y: 548},
			{action: 'wait', ms: 500},
			{action: 'moveTo', x: 190, y: 83},
			'release'
		]);
		await driver.touchAction([
			{action: 'press', x: 186, y: 83},
			{action: 'wait', ms: 500},
			{action: 'moveTo', x: 172, y: 548},
			'release'
		]);
	});

	it('TC-003 | Check sort function is work', async function() {
		await mainMenu.sortButton.touchAction('tap');
		await mainMenu.sortDescBtn.waitForExist({ timeout: 30000 });
		
		const text = await mainMenu.sortDescBtnTxt.getText();
		expect(text).equal(assert.attribute.sortDescText, text);

		await mainMenu.sortDescBtn.touchAction('tap');
	});
});