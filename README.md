##### OUR READ.ME JOURNAL


        THE MLS MONITOR

        created by...

        Deontay B.
        Ethan W.
        Mariam S.
        & Austin S.

        featuring...

        data models
        GHI magic
        integrations
        API design
        & much more


API: We subscribed to the "Major League Soccer Standings" api from RapidAPI.

PURPOSE: Display easy to ready rankings & stats for every team in Major League Soccer.

INTENDED MARKET: Soccer / Football fans in the U.S., Canada & Mexico. With the arrival of Leo Messi in Miami & the upcoming World Cup in '26 that's hosted by the previously mentioned trio; fans new & old need a better way to follow the teams they love ( Est. Max Traffic: +1M per day ).

FUNCTIONALITY: visitors may create an account to favorite any of the teams they support most.

- If someone online types in https://hack-reactor-hacks-18.gitlab.io/mls-monitor/, they will be directed to the "Home-Page" of our site
- Visitors will notice a NavBar towards the top that contains four options: "Home", "Create Account" & "Login"
- To gain access the visitor must click on "Create Account" to fill out a form in order to become a user
- The form asks for an e-mail address, name & password. The user must then click submit in order to register
- After it's been submitted, the account is created & the new user will be immediately redirected to the "Home" page
- Then, they will be able to favorite the teams they love best on the "Team Detail" page & remove them if necessary
- Once logged in, the user will notice the NavBar now consists of "Home", "Create Account" & "Logout"
- In order to logout, the user must click on the "Logout" tab & then they will be redirected to the home page
- Once logged out, the favorite option will disappear completely unless you choose to log back in
- To login, click on the login tab located in the NavBar & footer which leads you to a form asking for your e-mail address & password

INITIALIZATION: to use this application on your local machine, please follow the steps below.

- Clone the repository down to your local machine
- CD into the new project directory
- Run docker volume create mls-monitor
- Run docker compose build
- Run docker compose up
- Run docker exec -it mls-monitor-inventory-api-1 bash
- Run python manage.py loaddata products.json
- Exit the container's CLI & enjoy the MLS Monitor

STRETCH GOALS: Adding an 'About' page to showcase our individual portfolio's & our team's repository on Gitlab would be a good addition to this neat little application of ours. I think getting a better API that's paid for would be worth it too given the potential traffic it could receive.

GITLAB REPOSITORY: https://gitlab.com/hack-reactor-hacks-18/mls-monitor
