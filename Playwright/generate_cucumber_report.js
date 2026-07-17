var reporter = require('cucumber-html-reporter');

		var options = {
			//Available Themes 'bootstrap', 'hierarchy', 'foundation', 'simple'
			theme: 'bootstrap',
			jsonFile: 'cucumber_reports/cucumber-report.json',
			output: 'cucumber_reports/cucumber_report.html',
			reportSuiteAsScenarios: true,
			scenarioTimestamp: true,
			launchReport: true,
			metadata: {
				"App Version": "1.0.1",
				"Test Environment": "STAGING",
				"Browser": "Chromium v101",
				"Platform": "Windows 11",
				"Parallel": "Scenarios",
				"Executed": "Remote"
			},
			failedSummaryReport: true,
		};

		reporter.generate(options);