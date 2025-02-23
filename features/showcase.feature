Feature: Showcase usage scenarios

  @ready
  Scenario Outline: User selects
    Given the user is logged in
    When the user picks product "<product>" from the available products
    Then the product should be added to the cart

    Examples:
      | product             |
      | Sauce Labs Backpack |
