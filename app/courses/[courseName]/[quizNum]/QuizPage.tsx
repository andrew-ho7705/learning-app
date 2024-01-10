"use client";

import { useEffect, useState } from "react";

type CourseParams = {
    quizNum: number;
    courseName: string;
};

const QuizPage = ({
    params,
    questionNum,
}: {
    params: CourseParams;
    questionNum: number;
}) => {
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


    const currentCourse = courses.filter(
        (course: any) => course.course === params.courseName
    );

    return (
        <>
            {currentCourse.map((course: any) => {
                const { quizzes } = course;
                return (
                    <div key={quizzes._id}>
                        Quiz #{String(+params.quizNum + 1)}
                        <div key={quizzes[params.quizNum]._id}>
                            Question #
                            {
                                quizzes[params.quizNum].questions[questionNum]
                                    .questionNum
                            }
                            <div>
                                {
                                    quizzes[params.quizNum].questions[questionNum]
                                        .questionText
                                }
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default QuizPage;
