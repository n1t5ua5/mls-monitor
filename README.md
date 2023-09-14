##### OUR READ.ME JOURNAL


        THE MLS MONITOR

        created by....

        Deontay Bell
        Ethan Wilson
        Mariam Sheikh
        & Austin Sekel

        featuring....

        data models
        GHI magic
        integrations
        API design
        & much more


API: We subscribed to the "Major League Soccer Standings" api from RapidAPI.

PURPOSE: Easy to ready rankings & stats for every team in Major League Soccer.

INTENDED MARKET: Soccer / Football fans in the U.S., Canada & Mexico. With the arrival of Leo Messi in Miami & the upcoming World Cup in '26 that's hosted by the previously mentioned trio; fans new & old need a way to follow the teams they love. If you Google search "Who is 1st in the MLS right now", our site will guide the way + show team stats & more. ( Est. Traffic: +1M per day )

FUNCTIONALITY: visitors may create an account to like any of the teams they support most.

- If someone online types in www.MLSmonitor.live, they will be directed to the "Home-Page" of our site
- Visitors will notice a NavBar towards the top that contains four options: "Home", "Create Account" & "Login"
- To gain access the visitor must click on "Create Account" to fill out a form in order to become a user
- The form asks for an e-mail address, name, password & gives them the option to choose any MLS logo for their account
- After it's been submitted, the account is created & the new user will be immediately redirected to the "Home"
- Then, they will be able to like the teams they love best on the "Team Detail" page & remove them if necessary
- Once logged in, the user will notice the NavBar now consists of "Home", "Create Account" & "Logout"
- In order to logout, the user must click on the "Logout" tab & then they will be redirected to the home page
- Once logged out, the favorite option will dissapear completely unless you choose to log back in
- To login, click on the login tab located in the NavBar & footer which leads you to a form asking for your e-mail address & password

INITIALIZATION: to use this application on your local machine, please follow the steps below.

Clone the repository down to your local machine
CD into the new project directory
Run docker volume create mls-monitor
Run docker compose build
Run docker compose up
Run docker exec -it mls-monitor-inventory-api-1 bash
Run python manage.py loaddata products.json
Exit the container's CLI & enjoy the MLS Monitor

STRETCH GOALS: Adding an 'About' page to showcase our individual portfolio's & our team's repository on Gitlab would be an good addition to this neat little application of ours. I think getting a better API that's paid for would be worth it too given the potential traffic it could receive.

GITLAB REPOSITORY: https://gitlab.com/hack-reactor-hacks-18/mls-monitor
