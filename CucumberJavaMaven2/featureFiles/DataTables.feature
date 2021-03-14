Feature: OrangeHRM Login Feature with data tables
Scenario: Login Scenario
	Given user is on orangeHRM home page
	When Appliction page title is OrangeHRM
	Then user enters Username and Password
	| Username | Password |
	| Admin | admin123 |
	And user clicks on login button
	When user navigate to user profile page
	Then click on PIM and click on add Employee
	Then Provide FirstName LastName and EmpID
	| FirstName | LastName | EmpID |
	| Dwezzpx | gs | 11321 |
	| Dpzozx | gs | 11313 |
	| Dpizzmx | gs | 11314 |
	
	Then close the browser
	

	