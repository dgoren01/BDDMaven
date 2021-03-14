package stepDefinitions;

import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Hooks {
	WebDriver driver;
	String actualtitle = "OrangeHRM";
	
	@Before
	public void openbrowser() throws Exception
	{
		System.setProperty("webdriver.chrome.driver", "E:\\new drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://opensource-demo.orangehrmlive.com/");
		Thread.sleep(3000);
	}
	@After
	public void closebroser() throws Exception
	{
		driver.close();
	}
	
	@Given("^user is on orangeHRM home page$")
	public void user_is_on_orangeHRM_home_page() throws Throwable {
		System.out.println("User is on home page" +driver.getTitle());
	}

	@When("^Appliction page title is OrangeHRM$")
	public void appliction_page_title_is_OrangeHRM() throws Throwable {
		String pagetitle = driver.getTitle();

		System.out.println(pagetitle);
		if (pagetitle.equals(actualtitle)) {
			System.out.println("Passed");
		}
	}

	@Then("^user enters Username and Password$")
	public void user_enters_Username_and_Password(DataTable credentials) {
		driver.manage().window().maximize();
		// List<List<String>> data = credentials.raw();
		// Map<String,String>cred:credentials.asMaps(String.class, String.class);

		for (Map<String, String> cred : credentials.asMaps(String.class, String.class)) {

			driver.findElement(By.id("txtUsername")).sendKeys(cred.get("Username"));
			driver.findElement(By.id("txtPassword")).sendKeys(cred.get("Password"));

		}
		driver.findElement(By.id("btnLogin")).click();

	}
	@Given("^orangeHRM home page$")
	public void orangeHRM_home_page() throws Throwable {
		System.out.println("User is on home page" +driver.getTitle());
	}

	@When("^title is OrangeHRM$")
	public void title_is_OrangeHRM() throws Throwable {
		String pagetitle = driver.getTitle();

		System.out.println(pagetitle);
		if (pagetitle.equals(actualtitle)) {
			System.out.println("Passed");
		}
	}

	@Then("^enters Username and Password$")
	public void enters_Username_and_Password(DataTable credentials) throws InterruptedException {
		driver.manage().window().maximize();
		// List<List<String>> data = credentials.raw();
		// Map<String,String>cred:credentials.asMaps(String.class, String.class);

		for (Map<String, String> cred : credentials.asMaps(String.class, String.class)) {

			driver.findElement(By.id("txtUsername")).sendKeys(cred.get("Username"));
			driver.findElement(By.id("txtPassword")).sendKeys(cred.get("Password"));

		}
		driver.findElement(By.id("btnLogin")).click();
		Thread.sleep(1000);
		boolean a=driver.findElement(By.xpath("//span[text()='Invalid credentials']")).isDisplayed();
		System.out.println(a);
		Assert.assertFalse(a);
	}
	
	}

