import mongoose, { mongo } from "mongoose";

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to db");
    } catch (error) {
        console.log(error);
    }
};

export default connectMongoDB;
