import mongoose, { Schema } from "mongoose";

const quizSchema = new Schema({
    quizNum: Number,
    questionText: String,
    answer: Number
});

const courseSchema = new Schema({
    course: String,
    quizzes: [{
        quiz: quizSchema,
    }]
});

export const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);
