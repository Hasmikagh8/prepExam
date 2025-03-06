Feature: Check signup functionality

  Scenario: Signup with valid data
    Given I am on the main page
    When When I go to Login page
    Then I should go to Login page
    When I fill in valid Name and Email fields of Submit form
    And Click on Signup
    Then We should be moved to signup page