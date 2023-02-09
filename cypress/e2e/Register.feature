Feature: New user registration

    Scenario Outline: Validate user can register account successful

        Given user on ENSEK Homepage
        When user click on register
        And enter email <email>
        And enter password <password>
        And enter confirm password <confirmPassword>
        And user click register
        Then user registration is successful with <confirmationMessage>

        Examples:
            | email          | password   | confirmPassword | confirmationMessage                                            |
            | test@gmail.com | Password1! | Password1!      | registration successful                                        |
            | testtesttest   | Password1! | Password1!      | The Email field is not a valid e-mail address                  |
            | test@gmail.com | Password1  | Password1       | Passwords must have at least one non letter or digit character |
            | test@gmail.com | Password1! | Password1!23    | The password and confirmation password do not match            |
            | test@gmail.com | Password1  | Password1!      | The password and confirmation password do not match            |
