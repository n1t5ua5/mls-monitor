<!--
    Austin's MLS-Monitor Journal
-->


<!-- 1/29/24
Back at it again today working on that same 500 response error, except now I have it narrowed down to a TypeError which is indicated in my deployed fastapi logs. In my deployed projects logs in the terminal it states: TypeError: argument 'salt': 'str' object cannot be converted to 'PyBytes'. If Im understanding this correctly, it means that that a particular string object was unable to be converted into an integer.
-->


<!-- 1/29/24
Took another swing at fixing this 500 response I keep getting when logging in on the deployed version since I met with my friend & he helped redirect me in the right direction in regards to reading the logs more carefully. I've tried messing around with the authenticator.py file because essentially what seems to be happening is that one of the dependecies was updated unbeknowst to my team & I.
-->


<!-- 1/17/24
Been awhile since I checked up on this neat little app of ours. On the browser, I noticed there was 1 issue persisting in the console, "A form field element should have an id or name attribute. A form field element has neither an id nor a name attribute. This might prevent the browser from correctly autofilling the form.
To fix this issue, add a unique id or name attribute to a form field. This is not strictly needed, but still recommended even if you have an autocomplete attribute on the same element."

The console pointed towards an input element on line 40 of the Home.jsx file which made fixing the error relatively straightforward. I added an id="teamSearch" & the error ceased from persisting. I then scanned the rest of the app & now I'm seeing something similar about the form on the Login page, "A form field has an id or name attribute that the browser's autofill recognizes. However, it doesn't have an autocomplete attribute assigned. This might prevent the browser from correctly autofilling the form. To fix this issue, provide an autocomplete attribute."

Id is a property I'm used to using but autoComplete is a little more raw albeit I've used it before inside of forms. After doing some research online & looking over my code, I input a value of password, but then I got another error about this being a non-standard practice so I had to search some more & eventually found out that if I set the value to current-password, it should work. I tried it out & now the errors are all gone so I'm going to add, commit & push to make sure these are reflected in the live version too.
-->


<!-- 11/19/23
I added some final touches to our application on the TeamDetail.css & Home.css files, like adding in some margin above the "Details" links. Same goes for the favorite button, I added in some margin-top & aligned the contents to center. I also edited the readme.md file & this journal one last time to make sure all of the directions for using the application were clear & concise for future users.
-->


<!-- 11/15/23
I finished editing all the files I needed to edit, complete with instructions & a video walkthrough at https://youtube.com/@mls-monitor with the title of "MLS Monitor Walkthrough". I also went back & configured the login page to stay underneath the nav bar instead of stretching out to the right like it previously did on the mobile version. The application is working great now! Although there are always more things that could be changed, I'm happy with how this turned out & can definitely call this a job well done. I reached out to some peers as well to show them everything our team made & welcome their feedback for any updates that we or anyone could make.
-->


<!-- 11/14/23
TEAMMATE SETUP: Make sure you are logged into Gitlab, you've deleted old containers & images inside Docker & you've updated vscode + any extensions in vscode. After you've done those things, navigate to the correct directory inside your terminal & follow these steps.

PULL & MERGE

- code . / git checkout my-branch / git checkout main / git pull / git checkout my-branch / git merge main

- *resolve any merge conflicts*

ADD, COMMIT & PUSH

- git checkout my-branch / git add . / git commit -m "sample-text" / git push origin my-branch

- git checkout main / git pull / git checkout my-branch / git merge main / git checkout main / git pull / git merge my-branch / git push / git checkout my-branch

FINISH SETUP: Test all the pipelines & use SwaggerAPI to ensure everything works properly.

- navigate to the correct directory on your computer's terminal & input "docker-compose up --build"
- while you wait, confirm all pipelines have passed inside https://gitlab.com/hack-reactor-hacks-18/mls-monitor/-/pipelines
- once the development server starts, navigate to the these urls in your browser: https://localhost:3000, https://localhost:8000/docs,
  https://hack-reactor-hacks-18.gitlab.io/mls-monitor/ & https://may-18-ct-fastapi.mod3projects.com/docs

- go to mod3projects.com/docs & click on the green Login button. then click the Try it Out button in the upper right corner
- for example, type in all lowercases for both the username & password "string" & click the execute button below
- it will produce a 200 response beneath if sucessful. now go to the localhost:8000/docs url which also uses SwaggerAPI & do the same
- now you can use either version: https://localhost:3000 or https://hack-reactor-hacks-18.gitlab.io/mls-monitor/

USING THE APP: Random tips to ensure it's working properly.

- make sure you use the enter button on your keyboard instead of clicking on the submit button with your mouse when inside of the Create Account & Login forms
- if redirected to Gitlab instead of https://hack-reactor-hacks-18.gitlab.io/mls-monitor/ when trying to login, simply type that url back into the browser & you will
  be directed to the correct version of the homepage. this is a bug that should be fixed in the future.
- if anything still isn't working, please refer to the MLS Monitor video walkthrough found at https://youtube.com/@mls-monitor.
-->


<!-- 11/10/23
I fixed the login page so it was aligned with the nav above it because it became off-centered. Now I'm making the walkthrough video demo of the site & editing it so everything will be clear. Above are additonal directions for setting up the entire project that I've been editing along with the readme file one last time.
-->


<!-- 11/9/23
I got so caught up with finishing this that I forgot the crucial role using SwaggerAPI played in logging in & out. Now that everything is working I am going to tackle getting the unit testing to work completely. I tested each one individually & towards the end the 3rd one failed it's test so I assesed the error inside Gitlab & it said that there was a KeyError: ERROR tests/test_favorites_queries.py - KeyError: 'SIGNING_KEY' ERROR tests/test_soccer_queries.py - KeyError: 'SIGNING_KEY'.

I paused & re-analyzed all the code I was working with on the .yml file which started on line 18. Upon further assessment I realized that the SIGNING_KEY was still uncommented in the file. I uncommented it then typed git add . in my terminal, git commit -m "fourth unit test" & then git push origin austin - followed by the same for the main branch & now everything works.
-->


<!-- 10/20/23
I met up with one of teammates to diagnose the problem further & some progress was made but the main issue is still persisting. Most of the changes made were in the TeamDetail.jsx file, but I made some minor edits in the Login.jsx, Home.jsx & TeamList.jsx too.
-->


<!-- 10/18/23
I sent out messages to a few folks asking for their advice in solving this problem. Then I started examining the TypeError in TeamCard.jsx again to gain a better of understanding of what is happening & researched some more possible solutions but I think I need to step away from the computer for a little bit to try & think about this critically in my head.
-->


<!-- 10/17/23
The login issue persists & I am unsure if I am moving in the right direction or not because I did not write this portion of code & my teammates are on vacation. I read online that if I changed my REACT_APP_BASE_URL environment variable from /mls-monitor/ to /mls-monitor that this could potentially resolve the issue I'm experiencing where once the submit button is clicked inside of the Login.jsx file, you are directed to https://hack-reactor-hacks-18.gitlab.io (which is a 404 error from Gitlab) instead of back to the original https://hack-reactor-hacks-18.gitlab.io/mls-monitor/. But if you paste the original URL back into the browser after you clicked submit, it will actually bring you to the proper page; it's weird.

Upon pushing/pulling/rebuilding & clicking submit on the login button after updating the previously mentioned environment variable in vscode & Gitlab, I was directed to an unexpected application error. When I looked at the error in the console, this is what I found,


react-dom.production.min.js:189 TypeError: Cannot read properties of undefined (reading '0')
    at _i (TeamCard.jsx:18:16)
    at Ei (react-dom.production.min.js:167:137)
    at xl (react-dom.production.min.js:290:337)
    at bc (react-dom.production.min.js:280:389)
    at yc (react-dom.production.min.js:280:320)
    at mc (react-dom.production.min.js:280:180)
    at oc (react-dom.production.min.js:271:88)
    at ac (react-dom.production.min.js:268:429)
    at k (scheduler.production.min.js:13:203)
    at MessagePort.R (scheduler.production.min.js:14:128)
du @ react-dom.production.min.js:189

React Router caught the following error during render TypeError: Cannot read properties of undefined (reading '0')
hooks.tsx:608
    at _i (TeamCard.jsx:18:16)
    at Ei (react-dom.production.min.js:167:137)
    at xl (react-dom.production.min.js:290:337)
    at bc (react-dom.production.min.js:280:389)
    at yc (react-dom.production.min.js:280:320)
    at mc (react-dom.production.min.js:280:180)
    at oc (react-dom.production.min.js:271:88)
    at ac (react-dom.production.min.js:268:429)
    at k (scheduler.production.min.js:13:203)
    at MessagePort.R (scheduler.production.min.js:14:128) Object


So I looked inside my TeamCard.jsx file to see what was going on & what I viewed on line 18 is what I pasted below this.

    {name[0].toUpperCase() + name.slice(1)}

According to the error, it looks like the team names are not being displayed properly & are instead being set as equal to undefined. I then looked inside my TeamDetail.jsx file because that's where 'name' is being defined. I searched in Google & read that I might want to add the TeamCard component to the TeamDetail page in a more explicit way so I imported it at the top of the file & then added this inside my return statement.


    <div className="col-12">
        <TeamCard
            name={team.team.name}
            logo={team.team.logo}
            ranking={team.team.ranking}
            stats={team.team.stats}
        />
    </div>


But instead the undefined error remains & now I am beginning to question if this is actually going to fix the login information or not because I don't believe the TeamCard should be used this way at all. If I erased that change though, is the second error I incurred because the list of teams aren't loading properly? If so, why was it working this entire time previously? Or am even asking the right question? I haven't encountered this before until trying to debug the loggin routing issue this time around but regardless I pasted the latest error below that I found in the console for reference.


react-dom.production.min.js:189 TypeError: Cannot read properties of undefined (reading '0')
    at _i (TeamCard.jsx:18:16)
    at Ei (react-dom.production.min.js:167:137)
    at xl (react-dom.production.min.js:290:337)
    at bc (react-dom.production.min.js:280:389)
    at yc (react-dom.production.min.js:280:320)
    at mc (react-dom.production.min.js:280:180)
    at oc (react-dom.production.min.js:271:88)
    at ac (react-dom.production.min.js:268:429)
    at k (scheduler.production.min.js:13:203)
    at MessagePort.R (scheduler.production.min.js:14:128)
du	@	react-dom.production.min.js:189

React Router caught the following error during render TypeError: Cannot read properties of undefined (reading '0')
hooks.tsx:608
    at _i (TeamCard.jsx:18:16)
    at Ei (react-dom.production.min.js:167:137)
    at xl (react-dom.production.min.js:290:337)
    at bc (react-dom.production.min.js:280:389)
    at yc (react-dom.production.min.js:280:320)
    at mc (react-dom.production.min.js:280:180)
    at oc (react-dom.production.min.js:271:88)
    at ac (react-dom.production.min.js:268:429)
    at k (scheduler.production.min.js:13:203)
    at MessagePort.R (scheduler.production.min.js:14:128)
Object
componentStack
:
"\n    at _i (https://hack-reactor-hacks-18.gitlab.io/mls-monitor/static/js/main.0ef19785.js:2:299627)\n    at div\n    at Mi (https://hack-reactor-hacks-18.gitlab.io/mls-monitor/
-->


<!-- 10/9/23
I messed around with the dark mode button for quite some time & to be honest it's just not worth it at this stage to configure. It would be a cool addition, but it'll have to be scrapped. I got it to work & effect just the footer. Then I got it to stop effecting the footer, but I can't seem to trigger the event for the whole project. Moving forward, the best solution to this is starting with the button, not ending with one. It's possible I'll go back one last time after these other two steps are done, but I don't think it's likely. So now all I want to do is reconfigure the page logic regarding the LoginForm function & then revisit why the unit tests stopped working towards the end & then I'm officially done.
-->


<!-- 10/6/23
Began with figuring out why the API has pulled both from the last MLS season & the current one for unknown reasons so I did some investigating today to figure out why it was stuck in 2022 again. On the API creators RapidAPI account page someone asked them a similar question to me & their answer as a few months ago was to pass in a season parameter so I did a million things to re-implement the API this way but realized that in the long run; the API will probably regenerate itself at the end of the current season which is less than a month away. So I reverted all of my changes back to how they were & now I'll wait to see what happens by the New Year at the latest instead of changing it because if it does like it should, I'll never have to update it again which is better then making it so only one particular season shows. Next I am trying to configure the logic for the login page & I'm driving myself crazy with it.
-->


<!-- 10/5/23
Today I altered the CSS to center all of the team's info beneath their respective logo with proper spacing. To finish off today I took awhile but finally figured out how to implemented a Dark / Light Mode button in the footer, but right now it's only working inside of the footer-container itself so tomorrow I'll finish that & get it working for the entirety of the application.
-->


<!-- 10/4/23
I started making the application mobile friendly. It took a long time today but the site is ready according to Chrome Developer Tools. Next I'll add the dark mode button, make the team stats line up in the center & figure out why the API keeps going back & forth with which data we get. To reiterate, it originally fetched data from the previous MLS season, then suddenly it fetched this years data & now it's back to the old again - I'll figure it out. & lastly I'll worry about the page navigation logic & .yml file unit testing issues.
-->


<!-- 10/3/23
A peer of mine & I met with our former instructor to ask for his advice on getting the fastapi deployed properly. I think it's almost there... eureka!!! https://hack-reactor-hacks-18.gitlab.io/mls-monitor/. I'm hoping to be completely done with this project before the week is over so it's full speed ahead from here. I'm also making a quick change before I go to lunch that will alter this whole file. As of 1pm ET on 10/3/23, the last update to this journal was written on line 127 of this file, but I'm reversing the order so that new updates will be made on the top of the page instead of the bottom. A half a dozen hurdles remain: implementing a dark mode button, make the application mobile friendly, fix some of the logic in regards to page navigation, center the team list stats on the homepage underneath their respective logo, get the API to return this years MLS rankings again like it did before & make a final adjustment to my .yml file so the unit tests will work properly.
-->


<!-- 10/2/23
Worked on the CSS changes that I wanted to make for awhile hoy whereas the homepage is now a little more organized, same goes for the rest of the pages. They all align with the Nav better than before, but I'm still not finished here. I want to refocus on deployment & then I'll make the last updates.
-->


<!-- 9/27/23 - 9/29/23
Started the day off trying to resolve these same old 404 & 502 errors that I keep incurring in the browser. I went back & forth with my friend for another two days via Slack too & though I've made progress & incurred a new error (503) we're still not up & running. It's discouraging in a way, but I'm learning to love challenging myself & being resilient. I've got some research to do on networking errors this weekend + I will finally begin to finsih making all of these CSS changes that must take place given that the site is 99% functional otherwise at this point.
-->


<!-- 9/26/23
Got the database to deploy in the afternoon & then I had to backtrack to deploy the api again, I missed a few steps previously on accident but I finally, finally got it all deployed. However I'm still getting a 404 error in the browser... think I know what the issue is though. Once this thing is actually live I'm going to refocus on css for the next day or so to add some final touches.
-->


<!-- 9/25/23
Meeting up with some of the Hack Reactor alumni this afternoon to get this thing completely deployed. Worked with Bryan a little & then with Deontay a little after that. Then I worked on my own for a few hours, SwaggerAPI stopped worked but I got it up & running again. Ran into issues with SSL protocol but I think I reoslved most of them + I had some issues with RapidAPI too but I fixed it by around 9pm.
-->


<!-- 9/12/23 - 9/21/23
After we submitted the project for grading, I started working on a number of updates to make our application more functional. I messed around with the css a little to make the nav align with the content displayed below it, the api is also now pulling updated information for this years MLS season as opposed to last years like it was before. Next I went around to the .yml, .yaml & .env files to get the application ready to be deployed via GitLab. I've added variables inside of GitLab too to get everything connected & as of yesterday all of the pipelines were passing again after recieving many failures but I still have some work to do. I'd say that as of now, I'm about 90 percent of the way there.
-->


<!-- 9/11/23
Group 18 started the morning by looking over Ethan's new code, then I merged to confirm everything was working on my end too. Deontay started working on the Team Detail page again & confirmed it worked on his end so now most of the functionality is done with. Were working on the favorites functionality together & were just about finished before our last break at 4:45 CT. Now we're going to do our merge request & ensure everyone is up to date with all of the proper code. I'm really proud of how our project has turned out so far, we really are a good team.
-->


<!-- 9/10/23
Last day of the weekend to work on this ol' project of ours. Got together in the evening & started to work on the home detail page. Ethan created an Issue in Gitlab & I went to resolve it later that night but we still had some work to do. Mariam made the login & create account forms look really nice with CSS. In the meantime, I scanned our files for unnecessary comments, console logs & print statements. There weren't many left, but that's another small thing taken care of too. Ethan worked until really late at night & got most of the frontend working.
-->


<!-- 9/9/23
We met up in the afternoon on Saturday & got everyone's projects up to date by pushing & pulling etc. We did a run through of the site together & can happily announce that the Home Page is up, the Create Account page is working & most importantly so far, you can login & logout successfully. Deontay is working on the Search bar, Mariam is working on the CSS & Ethan & I are working on the Home Page to get all the teams with their rankings showing. Tomorrow we'll meet again in the afternoon & work on the frontend some more while on Monday we'll do some house cleaning with the site, take a tour of the site again & finish polishing the front.
-->


<!-- 9/8/23
This morning I was able to finish making the unit tests which I was really proud of. I wasn't mocking the fake data correctly as I initially thought it could be less precise. Now we're trying to get the Team Detail page to work to ensure all of our frontend pages are running properly at the base level. As of today, Create Account, Login & Home are good, but Team Detail is the last major hurdle. Once it's good, we'll begin making the Home page more detailed along with the others. We incurred some git issues towards the end of the day, but thankfully we were able to resolve them thanks to some guidance from the SEIRs too.
-->


<!-- 9/7/23
I started off by adding in an error page, Deontay got the login function to start working. & now we are going back & looking through the entire project to tidy it up & make sure we are following the project rubric requirements completely. Then we will venture back to the frontend again & start making the other pages look good, followed by adding in the CSS on the final day, Monday. The unit tests took a lot longer to configure then expected. We have two that are still working, but since we reverted back to using favorites over comments, we had to change ours. We'll finish the unit tests up tomorrow in the morning.
-->


<!-- 9/6/23
We're making a lot of progress on gettting redux setup but its proving to be tougher than expected. At this point, we think most of our errors are coming down to naming convention issues, but its possible we're wrong too. Met with the SEIR's who helped point us in the right direction, we're fixing the rest now. The team pulled through today Mariam, Deontay, Ethan & we finally got redux up & running. Now it's time to make everything pretty.
-->


<!-- 9/5/23
After our practice test today we regrouped & started watching Riley's video on React Redux again to get a better understanding of how all this frontend stuff works. We're mostly finished at this point, but we still have maybe a day's worth of work at most to start moving forward & making each page more intricate & finally styling it all. We are diverging from our original path slighty too whereas originally commenting was one of the main features of an account. Now it will be for favorites becuase in the future we don't want to have to monitor user behavior.
-->


<!-- 8/31/23
Today I got deep into configuring our nav.js file. After watching a lot more from Riley's video on Redux, I assembled an apiSplice.js file, store.js & searchSlice.js file. Then I realized I needed to do some tinkering with the index.js file too. After getting most of that done, we grouped back together to do the ol' push / pull routine & get everyone caught up. I need to keep watching that redux video though because not only do I need to learn a little more but our frontend pages still aren't connected to nav.js either.
-->


<!-- 8/30/23
We split up & started working on the most important pages of the frontend: Nav.js, Login.js, Logout.js & CreateAccount.js. I started making what could be a functioning nav.js file, but I need to also work inside app.js & create a useToken.js page. We got the login page to work which is an amazing step forward. Now we need to build of it to get the nav inside of it running, a table to hold the login form & footer, same goes for the rest of the main javascript pages we're currenly working with.
-->


<!-- 8/29/23
Our group huddle / standup started early around 11:30am & we brainstormed on how to finish up the unit tests, but we still couldn't crack the code so we went to visit the instructors to get their advice. After awhile we re-evaluated what we had, simplified it & then got it to work. Now on to the front end of everything. We got our nav.js file started along with making some other important javascript files.
-->


<!-- 8/28/23
We picked up where we left off with the final unit tests but by the end of the day we actually still couldn't figure out what the deal was.
-->


<!-- 8/25/23
We started working on creating all of our unit tests & we've got most of them completed by the end of the day today, but the one's pertaining to comments are giving us the most trouble but we're determined to figure this out & get our project to be ready for testing.
-->

<!-- 8/24/23
Today I worked on making a READ.ME file for the group. I looked at some other projects & after awhile assembled something I felt was appropriate. My teammates looked it over & we made some edits to it to make sure it's concise. We checked up on the back end to make sure that we're all set to move forward on the frontend & immediately started creating an HTML skeleton for everything to fit inside of. + we started a MLS.css file to likewise start styling our project.
-->


<!-- 8/23/23
Today we focused most of our energy on getting our comments function to work. After we wrote some code in comments.py in our queries folder & comments.py in our routers folder, we ran into some trouble on Docker when we tried launching it but the mongo containers weren't having it. Deontay figured out a way to get it all working though, I need to ask him to explain it to me again.
-->


<!-- 8/22/23
I had a doctor's appointment & unofrtunately had to miss a decent chunk of the day. My teammeates worked diligently to get our backend to successfully pull data from our Major League Soccer Standings API that we found on RapidAPI. Started working on the comments function up until closing time.
-->


<!-- 8/21/23
Team got around to creating all of our models & placed them inside of our models.py file. We encountered a bug in of our other files though & had to work with the SEIR's for a bit but eventually figured it out. We agreed to call it a night when they bell rang at 9pm EST.
-->


<!-- 8/17/23
Authorization is up & running now thanks to the resilience of my partner Deontay & the videos from our instructor Riley. We're working on tidying up the backend up now & discussing what we should be doing for next week. We're off to a good start & I'm happy with all the progress we've made so far.
-->


<!-- 8/16/23
We got the authorization almost set up & running with MongoDB. I need to keep watching the videos with Curtis as the main character & also check out the pokemon project from Riley for references on everything that we covered in class. I had to check out around 8pm est & call it a day.
-->


<!-- 8/15/23
Working on getting Docker up & running. Trying to get the .yml file organized but it's proving to be more difficult than expected. Looked over lessons from Riley for some inspiration & eventually we got everything figured it out.
-->


<!-- 8/14/23
Got everything setup. Skeleton is configured in vscode, everyone has cloned the repo & we added in Riley, Michael & Josh as members in Gitlab too. Everyone has created their journals & we are ready to go. This project will monitor the standings of all 30 teams in the MLS (Major League Soccer), the biggest soccer league in the U.S.A & Canada.
-->
