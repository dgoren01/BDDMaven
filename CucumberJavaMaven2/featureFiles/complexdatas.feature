Feature: OrangeHRM Login Feature
Scenario Outline: Login Scenario
	Given user is on orangeHRM home page
	When Appliction page title is OrangeHRM
	Then user enters "<Username>" and "<Password>"
	And user clicks on login button
	When user navigate to user profile page
	Then click on PIM and click on add Employee
	Then Provide "<FirstName>" "<LastName>" and ""<EmpID>"
	Then Click on save button
	Then close the browser
	
	Examples:
	| Username | Password | FirstName | LastName | <EmpID> |
	| Admin | admin123 | Deepu | gs | 100 |
	| Admin | admin123 | Dee | gs | 101 |
	| Admin | admin123 | Deep | gs | 102 |
	| Admin | admin123 | Dpk | gs | 103 |
	
	