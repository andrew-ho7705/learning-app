"use client";

import QuizCard from "@/components/QuizCard";
import Link from "next/link";
import { useEffect, useState } from "react";

const CourseQuizzes = ({ params }: { params: { courseName: string } }) => {
    const [courses, setCourses] = useState<any>([]);

    useEffect(() => {
        const fetchCourses = async () => {
            const res = await fetch("http://localhost:3000/api/courses", {
                cache: "no-store",
            });
            const coursesData = await res.json();
            setCourses(coursesData.courses);
        };

        fetchCourses();
    }, []);

    return (
        <>

            <div className="flex space-x-5 py-5">
                {courses.map((course: any) =>
                    course.quizzes.map((quiz: any) => (
                        <QuizCard key={quiz._id} quizNum={quiz.quizNum} />
                    ))
                )}
            </div>
            <Link href="http://localhost:3000/courses" className="absolute left-10 bottom-10">
                Back To Courses
            </Link>
        </>
    );
};

export default CourseQuizzes;
