$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featureFiles/Hooks.feature");
formatter.feature({
  "line": 1,
  "name": "OrangeHRM Login Feature with data tables",
  "description": "",
  "id": "orangehrm-login-feature-with-data-tables",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10611891000,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Login with valid credentials",
  "description": "",
  "id": "orangehrm-login-feature-with-data-tables;login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on orangeHRM home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Appliction page title is OrangeHRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters Username and Password",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 7
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Hooks.user_is_on_orangeHRM_home_page()"
});
formatter.result({
  "duration": 247460899,
  "status": "passed"
});
formatter.match({
  "location": "Hooks.appliction_page_title_is_OrangeHRM()"
});
formatter.result({
  "duration": 7239500,
  "status": "passed"
});
formatter.match({
  "location": "Hooks.user_enters_Username_and_Password(DataTable)"
});
formatter.result({
  "duration": 5884978301,
  "status": "passed"
});
formatter.after({
  "duration": 121463200,
  "status": "passed"
});
formatter.before({
  "duration": 10674844401,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Login with Invalid credentials",
  "description": "",
  "id": "orangehrm-login-feature-with-data-tables;login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "orangeHRM home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "title is OrangeHRM",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "enters Username and Password",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 14
    },
    {
      "cells": [
        "Admin",
        "admin23"
      ],
      "line": 15
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Hooks.orangeHRM_home_page()"
});
formatter.result({
  "duration": 16062300,
  "status": "passed"
});
formatter.match({
  "location": "Hooks.title_is_OrangeHRM()"
});
formatter.result({
  "duration": 9957999,
  "status": "passed"
});
formatter.match({
  "location": "Hooks.enters_Username_and_Password(DataTable)"
});
formatter.result({
  "duration": 2783917300,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertFalse(Assert.java:39)\r\n\tat junit.framework.Assert.assertFalse(Assert.java:47)\r\n\tat stepDefinitions.Hooks.enters_Username_and_Password(Hooks.java:97)\r\n\tat ✽.Then enters Username and Password(featureFiles/Hooks.feature:13)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 130908800,
  "status": "passed"
});
});