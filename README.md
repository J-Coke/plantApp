# Rooting For You
Rooting For You is a React Native mobile application we developed for our final project at Northcoders. A presentaion of the app can be viewed here: https://www.youtube.com/watch?v=ArS2hWDRg6M
## About

The idea came from a research study that shows that a wide variety of healthy fibres was key to maintaining a good microbiome, which plays a fundamental role in our health and wellbeing. The study shows that eating at least 30 different plant fibres a week is one of the best ways to improve your microbiome health. 
Please click [here](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5954204/) for more information on the study.

So we wanted to create an app that would allow users to easily track the variety of plants they were eating during a week. However, we didn't want to create another calorie counting app that encouraged restriction. We wanted to promote healthier eating in a fun and engaging way, that rewards users for their progress. 

Rooting For You allows users to search for and select a plant they have eaten that week, keeps track of all the plants they've had that week and awards badges when they hit certain milestones.

On the home screen, there is a handy counter where a user can see how many plants they've had that week and how many more to go. The user can also see their current streak (the number of weeks in a row they have had their 30 plants) and their highest streak. The user can also add a new plant to their week by clicking in the search bar.

On the week screen, users can see all the plants they've had so far that week, and users can see a list of suggestions that will help them to achieve their 30 for the week.

On the badges screen, users can see all the badges they've achieved so far. The badges not yet unlocked appear greyed out, but the user can easily see what milestones they have yet to achieve.

This is the repo for the frontend application. 

The repo for the backend application can be found here:
https://github.com/J-Coke/plantApp_backend

The backend is hosted via Heroku and can be found here:
 https://plant-app-b-end.herokuapp.com/api


## Setup
The minimum version of node is 17.2.0 
### To clone this application, please:

- Fork and clone this repo onto your local machine: https://github.com/J-Coke/plantApp
- Navigate into the directory, run the file through node.js and install the project dependencies
  ```sh
  npm install
  ```

You can run the application through the web, or you can download the Expo app to run it on your Android or iPhone. 
- To run on the web: run the `web` script to load the application in your web browser:

  ```sh
    npm run web
  ```
- To run on your phone: run the  `web` and scan the QR code from the Expo app. For more information on the Expo app, please click [here](https://expo.dev/) 
   ```sh
    npm run start
  ```


