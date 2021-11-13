# Workout-Tracker </br>
  
## Description 

This is a web app that allows users to track their workout progress by recording their daily workouts. Users are able to add workouts based on type-- either cardio or resistance based workouts. They are able to record distance traveled and duration if cardio. If the user has a resistance based work out they are able to include, weights, reps, sets, duration and a name value for the workout. 

This project uses a MongoDB and node.js to track workouts. 


## Table of Contents
- [Features](#features)
- [Link to Deployed App](#link-to-deployed-app)
- [Technologies](#technologies)
- [User Story](#user-story)
- [Installation](#installation)
- [Usage](#usage)
- [ScreenShot](#screenshot)
- [License](#license)
- [Questions](#questions)

## Features 
This app allows users to view their workout stats in graphical form. They are able to see stats over a rolling 7 days. 

## Link to Deployed App
The app is deployed on [Heroku](https://dry-plains-37630.herokuapp.com/).

## Technologies
- Node.js Express.js was used to create a RESTful API.
- MongoDB was used to create the database.
- Mongoose to manage the schema and model the data.
- Morgan middeleware package was used to log the server requests.

## User Story

* As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

## Installation
Run `npm i` to install dependencies.
To run locally, run `npm start` and open a web browser to localhost:3001.

## Usage
Add a new workout by clicking "New Workout" button, input the data then hit "Add Exercise" if you want to continue adding new exercises continue to add the data, otherwise, hit the "Complete" button to return to the homepage. 

From the homepage, you can also hit the "Continue Workout" button to add workouts to the days stats. But you can also go to your dashboard to view your stats of workout duration or pound lifted in graphical form.
## Screenshot

<br><br>
<img width="500" alt="homepage" src="https://user-images.githubusercontent.com/84414488/137536425-5f37ce39-2a1e-4d6c-837f-321e2cc59771.png">
<img width="500" alt="workout input form" src="https://user-images.githubusercontent.com/84414488/137536482-fcd65faa-a223-485b-b2ad-14670a6117fc.png">
<img width="500" alt="graphical data as workout stats over 7 days" src="https://user-images.githubusercontent.com/84414488/137536515-08627918-4002-4338-83e0-67d16bdb5576.png">


## License 
  This project is covered by the license of: [MIT](https://opensource.org/licenses/MIT)

## Questions
  If you have any questions or would like to discuss this application further, please reach out to me via email at [here](mailto:j.iqal35@gmail.com) or visit my github profile at [janetiqal](http://www.github.com/janetiqal).

### Created by Janet Iqal
