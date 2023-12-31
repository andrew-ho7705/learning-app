import connectMongoDB from "@/libs/mongodb"
import { User } from "@/models/course";
import { NextResponse } from "next/server";

export async function POST(request: any) {
    const { name, grade } = await request.json();
    await connectMongoDB();
    await User.create({ name, grade });
    return NextResponse.json({ message: "User Added", status: 201 })
}