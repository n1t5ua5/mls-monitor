the MLS MONITOR

created by...

Deontay B.
Ethan W.
Mariam S.
& Austin S.

featuring...

data models
GHI magic
unit testing
API design
& much more


API: We subscribed to the "Major League Soccer Standings" API from RapidAPI.

PURPOSE: An easy to use, open-source application that displays the rankings & stats for every team in Major League Soccer.

INTENDED MARKET: Soccer / Football / Fútbol fans in the United States, Canada & Mexico. With the arrival of Leo Messi in Miami & the upcoming World Cup in '26 that's hosted by the previously mentioned trio; fans new & old need a new way to follow the teams they love.

STRETCH GOALS: Adding an 'About' page to showcase each individual teammates portfolio including our team's repository on Gitlab would be a good addition to this neat little application of ours. Configuring it so you can click on the Submit button inside of the Create Account & Login page instead of having to type enter on your keyboard every time would be a plus too.

GITLAB REPOSITORY: https://gitlab.com/hack-reactor-hacks-18/mls-monitor

VIDEO DEMO: https://www.youtube.com/@mls-monitor


INITIALIZATION: To use this application on your local machine, please follow the steps below.

- Clone the repository down to your local machine
- CD into the new project directory
- Run docker volume create mls-monitor
- Run docker compose build
- Run docker compose up
- Run docker exec -it mls-monitor-inventory-api-1 bash
- Run python manage.py loaddata products.json
- Exit the container's CLI & the MLS Monitor is yours
- View journals folder for additional instructions on adding / committing etc.
- You must request access to the values inside our .env file (i.e. API_KEY) or create your own .env file
- In any event, please add an .md file in the journals folder using your first name as the title & document any changes

CONFIGURATION: Use SwaggerAPI to ensure everything works properly.

- type these urls in the browser: https://hack-reactor-hacks-18.gitlab.io/mls-monitor/ & https://may-18-ct-fastapi.mod3projects.com/docs
- go to mod3projects.com/docs first & click on the green Login button. then click the Try it Out button in the upper right corner
- for example, type "string" for both username & password & then click the execute button below. it will produce a 200 response if sucessful
- now go back to https://hack-reactor-hacks-18.gitlab.io/mls-monitor/ in your browser, you will be directed to the "Home" page
- next, do the same for the https://localhost:3000/ & https://localhost:8000/docs for your local machine

NAVIGATION: Create an account, logging in + random tips.

- visitors will notice a navigation bar towards the top of the hompage that contains three options: "Home", "Create Account" & "Login"
- to become a user, the visitor must click on the "Create Account" tab to fill out a form
- please fill out the form that asks for an e-mail address, name & password. then hit enter on your keyboard to register
- after it's been submitted, the account is created & the new user will be immediately redirected to the original "Home" page

- now, you must click the "Login" tab in the nav bar & input an e-mail address & password. then hit enter on your keyboard to login
- if redirected to Gitlab instead of https://hack-reactor-hacks-18.gitlab.io/mls-monitor/, simply type that url back into the browser & you will be directed the correct, logged in version of the homepage
- once logged in, the user will notice the nav bar now consists of "Home", "Favorites" & "Team Detail" + a "Logout" button

FUNCTIONALITY: Once logged in you may now favorite any team you support or remove them from your custom list.

- now you can add any favorite team to your own new list in the "Favorites" page by clicking on any teams "Details" link on the homepage which then brings you to each teams corresponding "Team Detail" page
- finally click the "Add to Favorites" button where they're added to the "Favorites" page. once successfull added, the "Add to Favorites" button reverts to a "Remove from Favorites" button so you can also remove them from your list if necessary
- in order to logout, you must click on the "Logout" tab in the nav & then you will be redirected back to the original homepage
