const testSuite = {
	smokeTest: [ // example to run it as a Test Suite
		[
			'./tests/TS-001-OpenApp.js',
		]
	],
	sanityTest: [
		[
			'./tests/TS-002-MainPage.js',
			'./tests/TS-003-SideMenu.js',
			'./tests/TS-004-LoginLogout.js'
		]
	],
	negativeTest: [
		[
			'./tests/TS-005-NegativeCase.js'
		]
	]
};

module.exports = { testSuite };