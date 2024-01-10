"use client";

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
            {courses.map((course: any) =>
                course.quizzes.map((quiz: any) => (
                    <Link href={`http://localhost:3000/courses/math/${quiz.quizNum - 1}`} key={quiz._id}> Quiz {quiz.quizNum}</Link>
                ))
            )}
        </>
    );
};

export default CourseQuizzes;
