Feature: Check signup functionality

  Scenario: Create multiple cards
    Given I am in board detail
    When I create cards with names
    Then 4 cards are visible