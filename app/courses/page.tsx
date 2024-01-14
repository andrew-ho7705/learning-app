import CourseCard from "@/components/CourseCard";
import Link from "next/link";
import { Course } from "../types";

export const Courses = async () => {
    const getCourseNames = async () => {
        try {
            const res = await fetch("http://localhost:3000/api/courses", {
                cache: "no-store",
            });

            if (!res.ok) throw new Error("Failed to fetch classes");

            return res.json();
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    const { courses } = await getCourseNames();

    return (
        <>
            <div className="space-x-5 m-5">Courses Page</div>
            <div className="flex">
                {courses.map((course: Course) => (
                    <CourseCard key={course["._id"]} courseName={course.course} />
                ))}
            </div>
            <Link
                href="http://localhost:3000"
                className="absolute left-10 bottom-10"
            >
                Back To Home
            </Link>
        </>
    );
};

export default Courses;
