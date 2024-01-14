import mongoose, { mongo } from "mongoose";

export const connectMongoDB = async () => {
    try {
        const uri = process.env.MONGODB_URI;
        if (!uri) throw new Error("MONGODB_URI is not defined in environment variables");
        await mongoose.connect(uri);
    } catch (error) {
        console.log(error);
    }
};

export default connectMongoDB;
