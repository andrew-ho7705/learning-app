import mongoose, { Schema } from "mongoose";

const questionSchema = new Schema({
    questionNum: Number,
    questionText: String,
    answers: [Number],
    answer: Number
});

const quizSchema = new Schema({
    quizNum: Number,
    questions: [questionSchema]
})

const courseSchema = new Schema({
    course: String,
    quizzes: [quizSchema]
});

export const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);
