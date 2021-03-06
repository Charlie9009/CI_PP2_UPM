# US Presidents

<img src="docs/mockups/mockups_uspresident.JPG">

<hr>

## Welcome to my site [US President Memory](https://charlie9009.github.io/CI_PP2_UPM/index.html)!

<br>

<!-- markdown-toc start - Don't edit this section. Run M-x markdown-toc-
refresh-toc -->

# Table of Content

1. [Project goals](#project-goals)

2. [User experience](#user-experience)

    1. [Target audience](#target-audience)

    2. [User stories](#user-stories)

    3. [Design](#design)

    4. [Wireframes](#wireframes)

3. [Features](#features)

4. [Technologies used](#technologies-used)

    1. [Languages](#languages)

    2. [Libraries and programs](#libraries-and-programs)

5. [Testing](#testing)

    1. [HTML](#html)

    2. [CSS](#css)

    3. [JavaScript](#javascript)

    4. [Accessibility](#accessibility)

    5. [Performance](#Performance)

    6. [Browser Compatibility](#browser-compatibility)

    7. [Further testing](#further-testing)

    8. [Testing user stories](#testing-user-stories)

6. [API](#api)

7. [Bugs](#bugs)

8. [Deployment](#deployment)

9. [Credit](#credit)

    1. [Media credit](#media-credit)

    2. [Acknowledgement](#acknowledgement)

## Project goals

* The goal of this project is to challenge my own knowledge and to learn new things to make a fun and challenging game for users.

## User experience

### Target audience

The site is targeted towards everyone who wants to challenge themselves.

### User stories

1. As a user I want an easy website where I can find the game fast.

2. As a user I want to be able to see which page I am on.

3. As a user I want to be able to play on desktop, tablet and mobile devices.

4. As a user I want to challenge my brain.

5. As a user I want to see how much time has passed in real-time while playing.

6. As a user I want to be able to see the amount of moves I have made.

7. As a user I want to see a pop up modal with time expired and moves made when completing the game.

8. As a user I want to be able to drop my info for updates.

9. As a user I want to see other user who have played the game.

10. As a user I want to know the site owners process making the site.

11. As a user I want to see the latest updates from the White House.

12. As a user I want a reset button if I want to reset the game.

13. As a user I want a validation if my form was sent or if there was an error.

#### Site owner goals

14. I want the site to be visually appeasing.

15. I want the user to be able to challenge themselves.

16. I want the user to have fun.

17. I want the user to get feedback on which page they are on.

18. I want the user to get feedback and confirmation if they fill out a form right or wrong.

19. I want the site to be responsive.

20. I want the user to come to a 404 page if they type the web address wrong.

21. I want the user to get feedback on how much time has passed in the game and how many moves have been made.

22. I want the user to get feedback when they beat the game.

### Design

* Because my site was going to focus on a game with American presidents I wanted to have a design with an American touch to it.
Therefore I chose the US flag for my background as well as the background for my game cards. So the US flag was the base of my design choices in this project.

#### Colors

* Most of the colors I went with were first based on the American flag. So there were are a lot of red and white throughout the site. Very late in the process I did not like how the red colors were screaming on the page, so with the help of the website [colormind](http://colormind.io/bootstrap/) I added some more soothing colors.

* I gave the restart button a black background to make it stick out a bit more so it would be easier to spot.

* Because my form was more of a darker brown I wanted the form validation modal to stick out a bit more, hence why I chose a more red brown color.

#### Fonts

* I used Google Fonts and I went with the font Bona Nova because I like how it runs and looks throughout the site. For the backup I picked Sans-serif.

### Wireframes

* Below you can see the images of the wireframes.

<details><summary>The Index/Game page.</summary>
<img src="docs/wireframes/index_desktop.JPG">
<img src="docs/wireframes/index_tablet.JPG">
<img src="docs/wireframes/index_mobile.JPG">
</details>

<details><summary>The Congratulations modal.</summary>
<img src="docs/wireframes/modal_desktop.JPG">
</details>

<details><summary>The Users page.</summary>
<img src="docs/wireframes/users_desktop.JPG">
<img src="docs/wireframes/users_tablet.JPG">
<img src="docs/wireframes/users_mobile.JPG">
</details>

<details><summary>The Contact page.</summary>
<img src="docs/wireframes/contact_desktop.JPG">
<img src="docs/wireframes/contact_tablet.JPG">
<img src="docs/wireframes/contact_mobile.JPG">
</details>

## Features

* **The navigation bar and footer**

* The navigation bar and the footer are present on all pages and are responsive. The navigation bar shows links to Game, Users and
Contact. There is a feature of a border bottom to show up underneath the respective link of the page the user is on.
This will help the user identify witch page they are on.

* The footer contains a link to the site owners github page if the user wants to know more about the project. It also contains a link to the White House homepage if the user wants to read about the latest news regarding the White House.
<br>
<img src="docs/features/feature_nav.JPG">
<br>
<img src="docs/features/feature_footer.JPG">

### User stories covered by this feature:

* 1. As a user I want an easy website where I can find the game fast.
* 2. As a user I want to be able to see which page I am on.
* 10. As a user I want to know the site owners process making the site.
* 11. As a user I want to see the latest updates from the White House.
* 17. I want the user to get feedback on which page they are on.
<hr>

* **Info area**

* Here is the h1 header to tell the user they are on the ???US president memory??? page.

* There is also a timer feature for the game as well as a move counter.
<br>
<img src="docs/features/feature_info.JPG">

### User stories covered by feature:

* 5. As a user I want to see how much time has passed in real-time while playing.
* 6. As a user I want to be able to see the amount of moves I have made.
* 12. As a user I want a reset button if I want to reset the game.
* 21. I want the user to get feedback on how much time has passed in the game and how many moves have been made.
<hr>

* **Game area**

* The game area features the memory game. The game contains 20 cards with 10 presidents. The game???s goal is to pair together 2 cards with the same image (president), the game is over when all the cards have been paired together.
<br>
<img src="docs/features/feature_game.JPG">

### User stories covered by feature:

* 1. As a user I want an easy website where I can find the game fast.
* 3. As a user I want to be able to play on desktop, tablet and mobile devices.
* 4. As a user I want to challenge my brain.
<hr>

* **Congratulations Modal**

* When a user completes the game a modal shows up to congratulate the user the game is over along with the final time and how many moves were made as well as a reset button if the user wants to play again.
<br>
<img src="docs/features/feature_modal.JPG">

### User stories covered by feature:

* 5. As a user I want to see how much time has passed in real-time while playing.
* 6. As a user I want to be able to see the amount of moves I have made.
* 7. As a user I want to see a pop up modal with time expired and moves made when completing the game.
* 12. As a user I want a reset button if I want to reset the game.
* 21. I want the user to get feedback on how much time has passed in the game and how many moves have been made.
* 22. I want the user to get feedback when they beat the game.
<hr>

* **User page**

* On the user page a fetch function was used to get data to post some users on the page.
<br>
<img src="docs/features/feature_users.JPG">

### User stories covered by feature:

* 9. As a user I want to see other user who have played the game.
<hr>

* **Contact page**

* On the Contact page there is a form where a user can fill out their name and email if they would like to get updates. EmailJS has been used to send this data to the site owners email.
<br>
<img src="docs/features/feature_form.JPG">

### User stories covered by feature:

* 8. As a user I want to be able to drop my info for updates.
<hr>

* **Form Validation**

* In the form there is a form validator to make sure the name or email fields are not empty. There is also a validator to ensure the user the form has been sent successfully.
<br>
<img src="docs/features/feature_form_validation_name.JPG">
<img src="docs/features/feature_form_validation_email.JPG">
<img src="docs/features/feature_form_validation_sent.JPG">

### User stories covered by feature:

* 13. As a user I want a validation if my form was sent or if there was an error.
* 18. I want the user to get feedback and confirmation if they fill out a form wrong or right.
<hr>

* **Site Responsive**

* The site has been tested to be responsive.
<br>
<img src="docs/features/user_story_3_19.png">

### User stories covered by feature:

* 19. I want the site to be responsive.
<hr>

* **404 Page**

* The site has been given a 404 page where the user is taken if a page cant be loaded.
<br>
<img src="docs/features/feature_404.JPG">

### User stories covered by feature:

* 20. I want the user to come to a 404 page if they type the web address wrong.

<hr>

### Features left to implement

* In the future I would like to add difficulty options to the game.

## Technologies used

### Languages

* HTML

* CSS

* JAVASCRIPT

## Libraries and programs

* EmailJS was used so the filled out forms are sent to the site owner.

* Virtual Studio Code was used to write the code.

* The Git Bash terminal within VS Code was used to commit and push to Github.

* Github is used to store the code.

* Balsamiq was used to create the project wireframes.

* WC3 Validator, Jigsaw W3 Validator, JShint, Wave Validator, Lighthouse and ami.responsivedesign were all used to test the website.

* ami.responsivedesign was used to make the mockups.

## Testing

### Validator testing

#### HTML

<details><summary>No errors were found on index.html when passing through WC3 Validator.</summary>
<img src="docs/validation/html_index_validator.JPG">
</details>

<details><summary>No errors were found on users.html when passing through WC3 Validator.</summary>
<img src="docs/validation/html_users_validator.JPG">
</details>

<details><summary>No errors were found on contact.html when passing through WC3 Validator.</summary>
<img src="docs/validation/html_contact_validator.JPG">
</details>
<hr>

#### CSS

<details><summary>No errors were found on the CSS file when passing through Jigsaw W3 Validator.</summary>
<img src="docs/validation/css_validator.JPG">
</details>
<hr>

#### JavaScript

<details><summary>No errors were found on game.js when passing through jshint.</summary>
<img src="docs/validation/javascript_game_validation.JPG">
</details>

<details><summary>No errors were found on users.js when passing through jshint.</summary>
<img src="docs/validation/javascript_users_validation.JPG">
</details>

<details><summary>No errors were found on form.js when passing through jshint.</summary>
<img src="docs/validation/javascript_form_validation.JPG">
</details>
<hr>

#### Accessibility

<details><summary>No errors were found on the index.html when passing through Wave Web Accessibility Validator.</summary>
<img src="docs/validation/wave_index_validator.JPG">
</details>

<details><summary>No errors were found on the users.html when passing through Wave Web Accessibility Validator.</summary>
<img src="docs/validation/wave_users_validator.JPG">
</details>

<details><summary>No errors were found on the contact.html when passing through Wave Web Accessibility Validator.</summary>
<img src="docs/validation/wave_contact_validator.JPG">
</details>
<hr>

#### Performance

* Lighthouse was used to test the performance and the speed of the site. <br>

<details><summary>index.html</summary>
<img src="docs/validation/lighthouse_index_validator.JPG">
</details>

<details><summary>users.html</summary>
<img src="docs/validation/lighthouse_users_validator.JPG">
</details>

<details><summary>contact.html</summary>
<img src="docs/validation/lighthouse_contact_validator.JPG">
</details>
<hr>

## Browser Compatibility

* Chrome: The website is combatible and behaves as expected.

* Firefox: The website is combatible and behaves as expected.

* Edge: The website is combatible and behaves as expected.

* Internet Explorer: The game and the fetch api does not work in Internet Explorer. The site is not compatible.

## Further testing

* I have tested the website thru phones like One Plus 8T, Iphone X and a friends Samsung.

* The site has been tested on numerous of computers and laptops.

* Friends and family has been asked to review the site.

## Testing user stories

1. As a user I want an easy website where I can find the game fast.

|                   Feature                       |        Action        |                 Expected result                          |   Actual result     |
|            :----------:                         |    :------------:    |               :-----------------:                        | :---------------:   |
|    The game is on the Home page.                |        None          |      I will find the game when I land on the Home page.  | Works as expected.  |
|   There is a Game link in the navigation bar.   |   Click Game link.   |   I will find the game when I click on the game link.      |  Works as expected. |
<details><summary>Screenshot</summary>
<img src="docs/features/user_story_1_4.png">
</details>
<hr>

2. As a user I want to be able to see which page I am on.

|                   Feature                       |        Action        |                 Expected result                          |   Actual result     |
|            :----------:                         |    :------------:    |               :-----------------:                        | :---------------:   |
|In the navigation bar a border bottom will show up under the link of the page the user is on.|   None  |  I will see a border under the link of the page I am on.  | Works as expected.  |
<details><summary>Screenshot</summary>
<img src="docs/features/user_story_2_17.png">
</details>
<hr>

3. As a user I want to be able to play on desktop, tablet and mobile devices.

|                   Feature                       |        Action        |                 Expected result                          |   Actual result     |
|            :----------:                         |    :------------:    |               :-----------------:                        | :---------------:   |
|   Every page has been designed to be responsive.   |        None          |     When on smaller screens the site will work.  | Works as expected.  |
<details><summary>Screenshot</summary>
<img src="docs/features/user_story_3_19.png">
</details>
<hr>

4. As a user I want to challenge my brain.

|                   Feature                       |        Action        |                 Expected result                          |   Actual result     |
|            :----------:                         |    :------------:    |               :-----------------:                        | :---------------:   |
|  The memory game.       | To play the game the user needs to find pairs of presidents and sometimes remember where they saw which president.  |  I will use my memory to find all the presidents. | Works as expected.  |
<details><summary>Screenshot</summary>
<img src="docs/features/user_story_1_4.png">
</details>
<hr>

5. As a user I want to see how much time has passed in real-time while playing.

|                   Feature                       |        Action        |                 Expected result                          |   Actual result     |
|            :----------:                         |    :------------:    |               :-----------------:                        | :---------------:   |
|   The timer is above the game area.            |  Click the cards.       |    When I have clicked two cards the timer will start. | Works as expected.  |
<details><summary>Screenshot</summary>
<img src="docs/features/user_story_5_6_12_21.png">
</details>
<hr>

6. As a user I want to be able to see the amount of moves I have made.

|                   Feature                       |        Action        |                 Expected result                          |   Actual result     |
|            :----------:                         |    :------------:    |               :-----------------:                        | :---------------:   |
|   The moves are above the game area             |  Click the cards.    |    When I have clicked two cards the moves will add one. | Works as expected.  |
<details><summary>Screenshot</summary>
<img src="docs/features/user_story_5_6_12_21.png">
</details>
<hr>

7. As a user I want to see a pop up modal with time expired and moves made when completing the game.

|                   Feature                       |        Action        |                 Expected result                          |   Actual result     |
|            :----------:                         |    :------------:    |               :-----------------:                        | :---------------:   |
|  A modal with final time, moves made and a close button.    |  Find all pairs.    |  When I finish the game the modal will show up. | Works as expected.  |
<details><summary>Screenshot</summary>
<img src="docs/features/user_story_7_22.png">
</details>
<hr>

8. As a user I want to be able to drop my info for updates.

|                   Feature                       |        Action        |                 Expected result                          |   Actual result     |
|            :----------:                         |    :------------:    |               :-----------------:                        | :---------------:   |
|  A form to drop info to get updates.  | Fill out the form and click submit.   | When I click submit there will be an alert telling the form was submitted. | Works as expected.  |
<details><summary>Screenshot</summary>
<img src="docs/features/user_story_8_13_18.png">
</details>
<hr>

9. As a user I want to see other users who have played the game.

|                   Feature                       |        Action        |                 Expected result                          |   Actual result     |
|            :----------:                         |    :------------:    |               :-----------------:                        | :---------------:   |
|  A page where users can see others who have played the game.   |  Click Users in the navigation bar.   |  When I click Users I will be directed to the users page. | Works as expected.  |
<details><summary>Screenshot</summary>
<img src="docs/features/user_story_9.png">
</details>
<hr>

10. As a user I want to know the site owners process making the site.

|                   Feature                       |        Action        |                 Expected result                          |   Actual result     |
|            :----------:                         |    :------------:    |               :-----------------:                        | :---------------:   |
|  Footer information.  |  Scroll down to the footer.   |  When I scroll down I will find the footer with a link to the site owners github. | Works as expected.  |
<details><summary>Screenshot</summary>
<img src="docs/features/user_story_10_11.png">
</details>
<hr>

11. As a user I want to see the latest updates from the White House.

|                   Feature                       |        Action        |                 Expected result                          |   Actual result     |
|            :----------:                         |    :------------:    |               :-----------------:                        | :---------------:   |
|  Footer information.  | Scroll down to the footer.  | When I scroll down I will find the footer with a link to the White House. | Works as expected.  |
<details><summary>Screenshot</summary>
<img src="docs/features/user_story_10_11.png">
</details>
<hr>

12. As a user I want a reset button if I want to reset the game.

|                   Feature                       |        Action        |                 Expected result                          |   Actual result     |
|            :----------:                         |    :------------:    |               :-----------------:                        | :---------------:   |
|  A button to reset the game.                |       Click the button.    |  When I click the button the game will reset.      | Works as expected.  |
<details><summary>Screenshot</summary>
<img src="docs/features/user_story_5_6_12_21.png">
</details>
<hr>

13. As a user I want a validation if my form was sent or if there was an error.

|                   Feature                       |        Action        |                 Expected result                          |   Actual result     |
|            :----------:                         |    :------------:    |               :-----------------:                        | :---------------:   |
|   A form validation             |       Fill out the form    |  When one or both of the text areas is empty there will be an alert, if it is filled out correctly there will be an alert.      | Works as expected.  |
<details><summary>Screenshot</summary>
<img src="docs/features/user_story_8_13_18.png">
</details>
<hr>

17. I want the user to get feedback on which page they are on.

|                   Feature                       |        Action        |                 Expected result                          |   Actual result     |
|            :----------:                         |    :------------:    |               :-----------------:                        | :---------------:   |
|In the navigation bar a border bottom will show up under the link of the page the user is on.|   None  |  I will see a border under the link of the page I am on.  | Works as expected.  |
<details><summary>Screenshot</summary>
<img src="docs/features/user_story_2_17.png">
</details>
<hr>

18. I want the user to get feedback and confirmation if they fill out a form right or wrong.

|                   Feature                       |        Action        |                 Expected result                          |   Actual result     |
|            :----------:                         |    :------------:    |               :-----------------:                        | :---------------:   |
|   A form validation             |       Fill out the form    |  When one or both of the text areas is empty there will be an alert, if it is filled out correctly there will be an alert.      | Works as expected.  |
<details><summary>Screenshot</summary>
<img src="docs/features/user_story_8_13_18.png">
</details>
<hr>

19. I want the site to be responsive.

|                   Feature                       |        Action        |                 Expected result                          |   Actual result     |
|            :----------:                         |    :------------:    |               :-----------------:                        | :---------------:   |
|   Every page has been designed to be responsive.   |        None          |     When on smaller screens the site will work.  | Works as expected.  |
<details><summary>Screenshot</summary>
<img src="docs/features/user_story_3_19.png">
</details>
<hr>

20. I want the user to come to a 404 page if they type the web address wrong.

|                   Feature                       |        Action        |                 Expected result                          |   Actual result     |
|            :----------:                         |    :------------:    |               :-----------------:                        | :---------------:   |
|   A 404 page if a page cannot be found          |  Cannot find page    | When a user types the wrong address or cannot find a page they will be rerouted to a 404 page  | Works as expected.  |
<details><summary>Screenshot</summary>
<img src="docs/features/user_story_20.png">
</details>
<hr>

21. I want the user to get feedback on how much time has passed in the game and how many moves have been made.

|                   Feature                       |        Action        |                 Expected result                          |   Actual result     |
|            :----------:                         |    :------------:    |               :-----------------:                        | :---------------:   |
|   The timer is above the game area.            |  Click the cards.       |    When I have clicked two cards the timer will start. | Works as expected.  |
|   The moves are above the game area             |  Click the cards.    |    When I have clicked two cards the moves will add one. | Works as expected.  |
<details><summary>Screenshot</summary>
<img src="docs/features/user_story_5_6_12_21.png">
</details>
<hr>

22. I want the user to get feedback when they beat the game.

|                   Feature                       |        Action        |                 Expected result                          |   Actual result     |
|            :----------:                         |    :------------:    |               :-----------------:                        | :---------------:   |
|  A modal with final time, moves made and a close button.    |  Find all pairs.    |  When I finish the game the modal will show up. | Works as expected.  |
<details><summary>Screenshot</summary>
<img src="docs/features/user_story_7_22.png">
</details>
<hr>

## API

* EmailJS
    * Create an account on EmailJS
    * Add a new email service, I chose *Personal email services* and chose a name and a service ID.
    * Create an email template with the wanted variables. In my case a username and an email.
    * Add a link in the head of the html and add Javascript in the form.js.

* Regres
    * Go to Regres home page.
    * Scroll down and find GET LIST USERS.
    * Use the fetch function along with template literals to map out the users.

## Bugs

* **Bug:** Footer links did not open in a new tab.
    * **Fix:** I added a target_blank to fix it.

* **Bug:** The footer cut some of the content.
    * **Fix:** I gave the footer a position of absolute, the body and html a position of relative.

* **Bug:** I had white space under my footer.
    * **Fix:** I tried styling with overflow hidden but my desired result came after I inspected my page and removed some margins.

* **Bug:** When I pushed my site live my css and my images did not load.
    * **Fix:** I fixed the filepaths which resolved the issue.

* **Bug:** I had an issue getting the timer to stop in the game. 
    * **Fix:** I had to make the game understand *when* the game was over by adding an array to put all the matched cards in and tell it how many cards need to be there and then fire a modal with the clearInterval.

* **Bug:** The form validation only showed name modal.
    * **Fix:** I gave all the modals a unique id in contact.html and form.js.

* **Bug:** The game would keep flipping the cards when the user would press them. 
    * **Fix:** js was added to lock the board when two cards were flipped.

* **Bug:** I could not get the 404 page to work. 
    * **Fix:** When I launched the site to go live this resolved itself.

* **Bug:** I could not get the username and email from what had been filled out in the form to send with emailjs.
    * **Fix:** Code was added in form.js to target form.name.value and respectively for email.

### Known bugs

* When form is filled out correctly it does not send the form on the first click, the form sends on the second click.

* In the game, if i click on card 1 and then card 2 and they are wrong they flip back, now if click on card 1 again it will not flip again. If I on the other hand click on any other card on the grid they will flip. It is just the first card choice and if the cards dont match.

* In the form pop up modals there is a similiar bug as in when the form sends, when the close button is clicked the first time is does not respond but the second time it does.

* In the middle stage i had code for the restart game button that worked, but in the congratulations modal it did not. I separated the buttons and had one restart the game with location.reload and the other just to close the modal so the user also could see all the presidents turned on the cards.

* In Internet Explorer the game does not react to click on the cards and the fetch api does not appear.

* I tested the site on a friends Iphone X and the game does not show the back side of the cards when they are clicked. What happens is that the image of the American flag rotates so that it appears mirrored. This means the user is not able to see the presidents but just the flags. I have not found a solution for this bug but I will keep looking for a solution for this problem.

## Deployment

* *The site was deployed to github pages.*
1. Log in to Github.
2. In your repository find the settings button and click it.
3. Scroll down to GitHub Pages, beneath it says "Pages settings now has its own dedicated tab! Check it out here!" Click on "Check it out here".
4. Find source.
5. From the drop-down menu select master from branch, click save, let it automatically update.
6. You can now find a live version of the published site under Github pages https://charlie9009.github.io/CI_PP2_UPM/index.html.

### Forking a repository

1. Log in to Github.
2. Find the repository.
3. In the top right corner click the fork button.
4. Now you will have a copy of the repository in your account.

### Cloning a repository
1. Log in to Github.
2. Find the repository.
3. Above the file window locate the green code button and click it.
4. To clone the repository using https copy the link.
5. Open Git bash.
6. Change the current directory to where you want the repository cloned.
7. In your terminal type now type ???Git clone??? followed by the repository you copied.
8. Press Enter.
9. Done.

## Credit

* To help me create the Memory game I watched, examined and followed the following tutorials using their tips while also changing the code to fit my needs.

    * https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript
    * https://www.youtube.com/watch?v=ZniVgo8U7ek&t=973s
    * https://www.youtube.com/watch?v=tjyDOHzKN0w&t=382s

* To create the form validation I used [W3 Schools](https://www.w3schools.com/js/js_validation.asp), as a reference and created my own validation.

* To create the modal for the validation I also used [W3 Schools](https://www.w3schools.com/howto/howto_css_modals.asp), as a reference and then used the Javascript I had learned to get the modal, add a loop, add and remove classes. 

* The credit for the functionality for sending the form directly to the site owners email goes to [EmailJS](https://www.emailjs.com/).

* The credit for the content that is fetched in the users page goes to [Regres](https://reqres.in/).

* For fetching the API I watched alot of videos and searched alot on google to learn it. In the end I watched and used a bit of code from this tutorial https://www.youtube.com/watch?v=FN_ffvw_ksE&t=1483s.

* Favicon was used from [Favicon](https://favicon.io/).

* The smiles in the form modal was used from [Font Awesome](https://fontawesome.com/).

## Media Credit

### Images were googled and added to the project.

## Acknowledgement

* My Mentor Mo has been invaluable, he pushed me to challenge myself and he was able to provide consistent and helpful feedback throughout my project.

* A friend of mine in the business Will, has been able to provide me with help and tips.