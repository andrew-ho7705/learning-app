import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    grade: {
        type: Number,
        required: true
    }
});

const courseSchema = new Schema({
    course: {
        type: String,
        required: true
    }
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);
