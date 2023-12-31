import connectMongoDB from "@/libs/mongodb";
import { Course } from "@/models/course";
import { NextResponse } from "next/server";

export async function PUT(request: any, { params }: any) {
    const { id } = params;
    const { newCourse: course } = await request.json();
    await connectMongoDB();
    await Course.findByIdAndUpdate(id, { course });
    return NextResponse.json({ message: `Course updated to ${course}`, status: 200 })
}

export async function GET(request: any, { params }: any) {
    const { id } = params;
    await connectMongoDB();
    const user = await Course.findOne({ _id: id });
    return NextResponse.json({ user, status: 200 })
}