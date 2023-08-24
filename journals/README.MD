#####  OUR READ.ME JOURNAL  #####



        THE MLS MONITOR

         created by...


Deontay Bell    -    Data model
Ethan Wilson    -    GHI wiz
Mariam Sheikh   -    Integrations
Austin Sekel    -    API design


Easy to read stats for every team in Major League Soccer.



INTENDED MARKET: Soccer fans in the U.S., Canada & Mexico. With the arrival of Leo Messi in Miami & the upcoming World Cup in '26 that's hosted by the previously mentioned trio; fans new & old need a way to follow the teams they love at the fastest rate possible. If you Google search "Who is 1st in the MLS right now", our site will guide the way. ( Est. Traffic: +1M per day )



FUNCTIONALITY: visitors may create an account to comment on affairs & favorite posts from others

- If someone online types in www.MLSmonitor.live, they will be directed to the "Home-Page" of our site
- Visitors will notice a NavBar towards the top that contains four options: "Home", "Create Account", "Login" & "About"
- To gain access the visitor must click on "Create Account" to fill out a form in order to become a user
- The form asks for an e-mail address, name, password & gives them the option to choose any MLS logo for their account
- After it's been submitted, the account is created & the new user will be immediately redirected to the "Home"
- Then, they will be able to leave short comments of 60 characters or less on the comments section of the "Home" page
- They will also be able to favorite posts from others & have the ability to delete their own comments
- Once logged in, the user will notice the NavBar now consists of "Home", "Create Account", "Logout" & "About"
- In order to logout, the user must click on the "Logout" page & click on the big, red, round button in the middle to leave
- Once logged out, the comment box shows a logo on the left with a username underneath it & another users comment on the right
- But if you are back inside your account, a small clicklable green checkmark icon floats to the right of everyone's comment
- In addition to that, a small clickable red, round button floats to the right of the comments so users can delete their content
- To login, click on the login tab located in the NavBar & footer which leads you to a form asking for your username & password
- When logged out, you see a clickable icon beneath all the comments section that says "Click to Create Account"
- That link leads to the previously mentioned page & once logged back in, the previously mentioned comment box is at the bottom
- Our about page shows the 4 of us w unique profile pictures, a short bio & a link to our own portfolios + a link to our gitlab



INITIALIZATION: to use this application on your local machine, please follow the steps below

1. Clone the repository down to your local machine
2. CD into the new project directory
3. Run docker volume create mls-monitor
4. Run docker compose build
5. Run docker compose up
6. Run docker exec -it mls-monitor-inventory-api-1 bash
7. Run python manage.py loaddata products.json
8. Exit the container's CLI & enjoy the MLS Monitor!



STRETCH GOALS: Showing how many people have liked every comment to users logged in & visitors that are not logged in or don't have an account. Also, once a user is logged in, the "Create Account" page should transform into a "Teams" page. Once hovering over it, two boxes would appear entitled "Eastern" & "Western" for the respective conferences in the MLS. Once hovering over either, 15 teamnames would appear & the you would be able to click on any teams name which would lead to their detail page. As of now, the only way to access specific info from each team, is to click on their highlighted name on the leaderboard table which is located on the "Home" page. We are open to suggestions & still thinking for other goals to accomplish too.
