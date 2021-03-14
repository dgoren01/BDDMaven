package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="featureFiles/Hooks.feature", glue="stepDefinitions",
format= {"pretty","html:test-output"},
dryRun=false,
monochrome = true
)

public class OrangeRunner {

}
