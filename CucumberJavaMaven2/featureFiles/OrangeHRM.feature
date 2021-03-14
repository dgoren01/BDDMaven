Feature: OrangeHRM Login Feature
Scenario Outline: Login Scenario
	Given user is on orangeHRM home page
	When Appliction page title is OrangeHRM
	Then user enters "<Username>" and "<Password>"
	And user clicks on login button
	When user navigate to user profile page
	Then close the browser
	
	Examples:
	| Username | Password |
	| Admin | admin123 |
	| addmin | admin123 |
	| Admin | Password |
	| 123 | admin123 |
	
	