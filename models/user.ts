import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: String,
    grade: Number
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
