"use client";

import { Course, Quiz } from "@/app/types";
import { filteredCourse, formatName } from "@/app/utils/utils";
import QuizCard from "@/components/QuizCard";
import Link from "next/link";
import { useEffect, useState } from "react";

const CourseQuizzes = ({ params } : { params: { courseName: string }}) => {
    const [courses, setCourses] = useState<Course[]>([]);

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

    const currentCourse = filteredCourse(courses, params);

    return (
        <>
            <div className="flex flex-col py-5 mx-5">
                <div>Available {currentCourse.map((course: Course) => formatName(course.course))} Quizzes</div>
                <div className="flex mt-5 space-x-5">
                {currentCourse.map((course: Course) =>
                    course.quizzes.map((quiz: Quiz) => (
                        <QuizCard key={quiz["._id"]} courseName={params.courseName} quizNum={quiz.quizNum} />
                    ))
                )}
                </div>
            </div>
            <Link
                href="http://localhost:3000/courses"
                className="absolute left-10 bottom-10"
            >
                Back To Courses
            </Link>
        </>
    );
};

export default CourseQuizzes;
