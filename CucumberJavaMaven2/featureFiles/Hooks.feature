Feature: OrangeHRM Login Feature with data tables

Scenario: Login with valid credentials
	Given user is on orangeHRM home page
	When Appliction page title is OrangeHRM
	Then user enters Username and Password
	| Username | Password |
	| Admin | admin123 |
	
Scenario: Login with Invalid credentials
	Given orangeHRM home page
	When title is OrangeHRM
	Then  enters Username and Password
	| Username | Password |
	| Admin | admin23 |
	
	
 
	
	