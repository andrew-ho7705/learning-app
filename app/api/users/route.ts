import connectMongoDB from "@/libs/mongodb"
import { User } from "@/models/course";
import { NextResponse } from "next/server";

export async function POST(request: any) {
    const { name, grade } = await request.json();
    await connectMongoDB();
    await User.create({ name, grade });
    return NextResponse.json({ message: "User Added", status: 201 })
}

export async function GET() {
    await connectMongoDB();
    const users = await User.find();
    return NextResponse.json({ users });
}

export async function DELETE(request: any) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await User.findByIdAndDelete(id);
    return NextResponse.json({ message: `User with id: ${id} deleted`, status: 200 });
}