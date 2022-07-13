# Step 1
1. link to higscores should be in html
2. timer should be in html

3. grab start button element on page using javascript (from within html)
4. when I click on button, (event listener w/ type of click) run code to start quiz
5. set max time on the timer
6. in the html there should be a container that I append questions and answers to when  the button is clicked... should prob hide all starter text
7. dynamically render the question to the screen
8. dynamically render the answers to the screen. should be buttons. do you want the page refreshing on click? no(event.preventDefault())
9. start the timer
10. where do we put our event listener when we click on an answer? event delegation. add event listener to parent! parent = what youre appending q and a's to. 
11. if correct then clear container and show/render next q
12. if incorrect then decrease time. if time hits zero clear container. when no questions also clear the container. 
13. show score submission text. could be in html and hidden in css to appear on game end
14. after submission show start button and start screen so can play again

