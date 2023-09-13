# ScoreBored

Sometimes the grind is tough, and doing repetitive tasks over and over can be boring - even if they’re supposed to be for your own benefit. Scorebored combats the feeling of boredom by creating an interactive “scoreboard” to track your progress over time.
Made a goal of going to the gym 4 times a week? Put that into Scorebored, and see how often you achieve your goal!
Practicing a skill (like music) 2 hours a day? Scorebored handles that as well.
Are you a computer science student struggling to find a job in the 2023 economy and have a goal to submit 1,000 applications by the end of the year?
‌Scorebored can tell you if you’re on track!

## MVP
- Allow users two categories of tasks to track.
    - QUANTITY: assign X completions by a certain time (the 1,000 applications by the end of the year idea). The user will input how much is done per day, and Scorebored will display a line chart showing if the user is on track, how much needs to be done per day, and their projected finish day at current pace.
    - CHECKLIST: Whether or not something is done every time period (example: going 4 times a week to the gym.) Each week, the user can input if they were successful or not, and Scorebored will show success rate, as well as possible success rates by the time things are done.
        - For example, if the user has completed their task 60% of the time by September, they might be able to get up to 80% by December. This gives motivation for the user to push their number up to that goal.
    - For each category, display a chart as well as relevant numbers.
    - Color-coding to demonstrate whether goals are being met or not.
    - Multiple scoreboards per user.

## Stretch Goals
- Nested scoreboards
- Automatically-recurring scoreboards.
    - To demonstrate both cases above; a recurring Quantity-type scoreboard can be set up to occur every week, with a goal of 4 visits in 7 days.
- The Checklist-type scoreboard contains the Quantity-type scoreboard for each week. If the goal is met for a Quantity-type scoreboard, the week’s task on the Checklist is completed.
- Ability to share scoreboard creations and templates.
- Notifications for updating things.
- A Todoist/Notion-style project layout to keep track of larger project scoreboards.

## Tech Stack

**Frontend** 
- [Figma](https://www.figma.com/)
- [Svelte](https://svelte.dev/)
- [Tailwind](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Chart.js](https://www.npmjs.com/package/svelte-chartjs)

**Backend** 
- [Firebase](https://firebase.google.com/)
- [SvelteKit](https://kit.svelte.dev/)

**Languages:**
- HTML
- CSS
- TypeScript



## Timeline
| Week | Build Night                                                                                                                                                                                                                                     | Meeting                                                                                                                                                                                         | HW                                                                                                                                                                                                        |
|------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1    | Set up required technology. Decide on meeting time for the upcoming weeks. Decide features that will go with the app.                                                                                                                           | Go over Git and GitHub with the Odin Project.                                                                                                                                                   | Complete Odin Project until HTML. Begin wireframing app design on Figma with inspiration from Dribbble.                                                                                                   |
| 2    | Continue designing app. Talk about the FKIT stack, how Svelte works, and why we are using it over React/Flutter.                                                                                                                                | **Frontend**: Refine designs while referencing Dribbble and Can't Unsee. **Backend**: Begin following the Fireship tutorial on how to set up FKIT and connect to a database.                    | **Frontend**: Continue with the Odin Project, finishing HTML and CSS. **Backend**: Start learning from the official Svelte tutorial.                                                                      |
| 3    | **Frontend:** Finish wireframes and begin adding design elements. **Backend:** Set up user authentication with Firebase following the Fireship tutorial.                                                                                        | **Frontend**: Start learning Svelte, and how Tailwind and DaisyUI can be used in the Svelte app. **Backend**: Design a database that will store relevant information in the backend.            | **Frontend**: Continue learning Tailwind and DaisyUI, and think about how to use them in the app. **Backend**: Create database in Firebase that will be integrated with the app.                          |
| 4    | **Frontend**: Create prototype of website with Svelte. Begin researching ways to make charts in Svelte. **Backend**: Continue working on the database.                                                                                          | **Frontend**: Refine the prototype and gradually flesh it out. Try to simplify your process by using Tailwind and DaisyUI. **Backend**: Finish constructing database and thoroughly testing it. | **Frontend**: Continue fleshing out website. **Backend**: Look for potential deployment options, and whether client-side or server-side rendering is better for the app. (It will likely be client-side.) |
| 5    | **Frontend**: Finish prototype of website and create Quantity and Checklist-type tables. **Backend**: Finish database construction and begin integrating with the front-end.                                                                    | Integrate database with frontend.                                                                                                                                                               | Continue integration.                                                                                                                                                                                     |
| 6    | **Frontend**: Finish the UI for the two types of tasks. **Backend**: Work on being able to nest scoreboards together.                                                                                                                           | Work out problems related to nesting scoreboards with each other.                                                                                                                               | Continue integration. By the end of this week, all non-nesting functionality should be done.                                                                                                              |
| 7    | **Frontend**: Start creating a Project UI, so people can see all of their Scoreboreds and group them up into projects. **Backend**: Work on nesting scoreboard bugs (make sure they can't recurse) and work on a potential demo of the website. | Talk about future steps as well as the presentation that will be coming up soon.                                                                                                                | Continue working on nesting, as well as tweaking colors, themes, and user functionality. Try to optimize stuff so it runs faster.                                                                         |
| 8    | Begin working on presentation slides.                                                                                                                                                                                                           |                                                                                                                                                                                                 | Start preparing the live demo by deploying the app with Firebase. Create a presentation script and begin refining and memorizing it.                                                                      |
| 9    |                                                                                                                                                                                                                                                 |                                                                                                                                                                                                 |                                                                                                                                                                                                           |
| 10   |                                                                                                                                                                                                                                                 | We will have several meetings to practice the presentation. We will focus on memorization, timing, body language, and voice.                                                                    | Continue practicing the presentation and making sure the demo works.                                                                                                                                      |
| 11   | Refine presentation slides and script. Run through demo to make sure there are no bugs. Be sure to test off of UTD Wi-Fi.                                                                                                                       |                                                                                                                                                                                                 |                                                                                                                                                                                                           |
| 12   | Presentation Night !!!                                                                                                                                                                                                                          |                                                                                                                                                                                                 |                                                                                                                                                                                                           |                                                                                                                                                           |


## Resources

 - [The Odin Project](https://www.theodinproject.com/)
 - [Figma](https://www.figma.com/)
 - [Svelte Tutorial](https://learn.svelte.dev/tutorial/welcome-to-svelte)
 - [Svelte Docs](https://svelte.dev/docs/introduction)
 - [Tailwind Guide](https://tailwindcss.com/docs/installation)
 - [DaisyUI Docs](https://daisyui.com/docs/)
 - [Fireship FKIT Guide](https://fireship.io/courses/sveltekit/)

 ## The Team
 - Giang Pham
 - Mansi Cherukupally
 - Minseok Kim
 - Aashay Vishwakarma
 - Akshay Kundam
 - Project Manager: Naveen Mukkatt
