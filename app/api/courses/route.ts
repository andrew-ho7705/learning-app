import connectMongoDB from "@/libs/mongodb"
import { Course } from "@/models/course";
import { NextResponse } from "next/server";

export async function POST(request: any) {
    const { course } = await request.json();
    await connectMongoDB();
    await Course.create({ course });
    return NextResponse.json({ message: "Course Added", status: 201 })
}