const router = require("express").Router();

const Workout = require('../models/workout.js')

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

router.post("/api/workouts/", ({ body }, res) => {
    Workout.create(body)
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
})

router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
        { _id: req.params.id },
        { $push: {exercises: req.body} },
        {new: true}
    ).then(workout => {
        res.json(workout);
    })
        .catch(err => {
            res.status(400).json(err);
        })
});


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