const path = '../tests/';

const testSuite = {
	smokeTest: path + 'TS-001-Open-App.js',
	sanityTest: [
		path + 'TS-002-MainMenu.js',
		path + 'TS-003-SideMenu.js',
		path + 'TS-004-Webview.js',
		path + 'TS-005-LoginLogout.js'
	],
	negativeTest: path + 'TS-006-NegativeCase.js'
};

module.exports = { testSuite };