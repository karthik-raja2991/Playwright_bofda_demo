#--------------------------------------------------------------------------------------------
		# This is the first feature file

		Feature: Blaze Demo Features

			Background: Setup
				Given User has navigated to "https://blazedemo.com"

			@sanity
			Scenario: Test Case - 1
				When User Searches for "Boston" to "London"
				Then Result page should show 5 flights

			@ddt
			Scenario Outline: Test Case - 2
				When User Searches for "<fromCity>" to "<toCity>"
				Then Result page should show 5 flights
				Examples:
					| fromCity    | toCity   |
					| Boston      | Rome     |
					| Portland    | London   |
					| Mexico City | New York |

			@smoke
			Scenario: Test Case - 3
				When User Searches the flight
					| fromCity | toCity |
					| Boston   | Rome   |
				Then Result page should show 5 flights
		#--------------------------------------------------------------------------------------------