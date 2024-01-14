import mongoose, { Schema } from "mongoose";

const questionSchema = new Schema({
    questionNum: Number,
    questionText: String,
    answers: [Schema.Types.Mixed],
    answer: Schema.Types.Mixed
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
