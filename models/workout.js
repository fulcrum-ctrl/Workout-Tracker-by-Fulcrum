const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workOutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date(),
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Workout Type: ",
        },
        name: {
          type: String,
          trim: true,
          required: "Workout Name: ",
        },
        duration: {
          type: Number,
          required: "Duration (minutes): ",
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
          trim: true,
          required: 'Input Distance: '
        },
      },
    ],
  },
  {
    toJSON: {
      
      virtuals: true,
    },
  }
);

workOutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workOutSchema);
module.exports = Workout;
