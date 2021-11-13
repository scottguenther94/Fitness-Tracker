const router = require("express").Router();
//require the model
const Workout = require('../models/workout.js')

//api/workouts
//needs the sum of duration as a new field and using field path to access duration field in exercise document
router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" }
            }
        }
    ])
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
})

//user creating a new workout
router.post("/api/workouts/", ({ body }, res) => {
    Workout.create(body)
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
})
//continue workout
    //works in insomnia
router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
        { _id: req.params.id },
        //set replaced the workout, push added it
        { $push: {exercises: req.body} },
        {new: true}
    ).then(workout => {
        res.json(workout);
    })
        .catch(err => {
            res.status(400).json(err);
        })
});

//api/workouts/range
    //gives me the workouts in the last 7 days by sorting days in inverse order
//works in insomnia
router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" }
            }
        }
    ]).sort({ day: -1 }).limit(7)
        .then(workout => {
            res.json(workout.reverse());
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;