import connectMongoDB from "@/libs/mongodb";
import { User } from "@/models/course";
import { NextResponse } from "next/server";

export async function PUT(request: any, { params }: any) {
    const { id } = params;
    const { newGrade: grade } = await request.json();
    await connectMongoDB();
    await User.findByIdAndUpdate(id, { grade });
    return NextResponse.json({ message: `Grade updated to ${grade}`, status: 200 })
}

export async function GET(request: any, { params }: any) {
    const { id } = params;
    await connectMongoDB();
    const user = await User.findOne({ _id: id });
    return NextResponse.json({ user, status: 200 })
}