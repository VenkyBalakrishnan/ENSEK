Feature: Buy Energy - Gas

    Scenario Outline: Validate user can buy energy - Gas

        Given user on ENSEK Homepage
        When user click on buy energy
        And user enter required units of Gas <units>
        And click buy
        Then user should be success message <sale confirmation>

        Examples:
            | units  | sale confirmation                        |
            | 100    | Sale Confirmed!                          |
            | fsdhfh | Input string was not in a correct format |

