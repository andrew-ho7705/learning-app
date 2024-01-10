"use client";

import { useEffect, useState } from "react";

export type CourseParams = {
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
    const [selected, setSelected] = useState<number | string | null>(null);
    const [score, setScore] = useState<number>(0);

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

    const { quizNum } = params;

    const handleCheckAnswer = () => {
        if (
            !currentCourse[0].quizzes[quizNum].questions[questionNum].answered
        ) {
            if (
                currentCourse[0].quizzes[quizNum].questions[questionNum]
                    .answer === selected
            ) {
                setScore(score + 1);
                alert("Correct!");
                currentCourse[0].quizzes[quizNum].questions[
                    questionNum
                ].answered = true;
            } else {
                setSelected(null);
                alert("Try Again!");
            }
        }
    };

    const currentCourse = courses.filter(
        (course: any) => course.course === params.courseName
    );

    return (
        <div key={currentCourse._id} className="pl-5 mt-10">
            <span>Quiz #{+quizNum + 1}</span>
            <span className="absolute right-10">Score {score}/5</span>
            {currentCourse.map((course: any) => {
                const { quizzes } = course;
                const currentQuestion = quizzes[quizNum].questions[questionNum];
                return (
                    <div key={quizzes._id}>
                        <div key={quizzes[quizNum]._id}>
                            Question #{currentQuestion.questionNum}
                            <div key={quizzes[quizNum].questions._id}>
                                {currentQuestion.questionText}
                            </div>
                            <div key={quizzes[quizNum]._id} className="flex-1">
                                {currentQuestion.answers.map(
                                    (option: number | string, idx: number) => (
                                        <button
                                            key={idx}
                                            className={`border w-32 h-16 m-8 rounded-2xl ${
                                                selected === option
                                                    ? "border-red-500"
                                                    : "border-black"
                                            }`}
                                            onClick={() => setSelected(option)}
                                        >
                                            {option}
                                        </button>
                                    )
                                )}
                            </div>
                        </div>
                        <button
                            onClick={selected ? handleCheckAnswer : undefined}
                            className={
                                currentCourse[0].quizzes[quizNum].questions[
                                    questionNum
                                ].answered || !selected
                                    ? `text-black/25 cursor-default`
                                    : "text-current"
                            }
                        >
                            Check Answer
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default QuizPage;
