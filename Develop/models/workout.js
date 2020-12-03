const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercise: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter type of exercise"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter exercise name"
            },
            duration: {
                type: Number,
                required: "Total workout time"
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
