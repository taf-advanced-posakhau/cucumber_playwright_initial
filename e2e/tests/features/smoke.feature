Feature: Playwright smoke test

        Scenario: Playwright smoke test
        
            Given user navigates to homepage
              And pause 2 seconds
              And user clicks -Login- link on the upper bar
              And pause 2 seconds
              And user sets value "ortoni" into username field
              And pause 2 seconds
              And user sets value "Pass1234" into password field
              And pause 2 seconds
              And user clicks -Login- button
              And pause 10 seconds
             
        