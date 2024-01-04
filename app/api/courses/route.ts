import connectMongoDB from "@/libs/mongodb"
import { Course } from "@/models/course";
import { NextResponse } from "next/server";

export async function POST(request: any) {
    const { course, quizzes } = await request.json();
    await connectMongoDB();
    await Course.create({ course, quizzes });
    return NextResponse.json({ message: "Course Added", status: 201 })
}

export async function GET() {
    await connectMongoDB();
    const courses = await Course.find();
    return NextResponse.json({ courses });
}

export async function DELETE(request: any) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Course.findByIdAndDelete(id);
    return NextResponse.json({ message: `Course with id: ${id} deleted`, status: 200 });
}