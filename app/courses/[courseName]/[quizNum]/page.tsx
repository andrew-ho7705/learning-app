"use client";

import { useState } from "react";
import QuizPage from "./QuizPage";
import { CourseParams } from "./QuizPage";
import Link from "next/link";

export const Quiz = ({ params }: { params: CourseParams }) => {
    const [questionNum, setQuestionNum] = useState(0);

    const nextQuestion = () => setQuestionNum(questionNum + 1);
    const prevQuestion = () => setQuestionNum(questionNum - 1);

    return (
        <>
            <QuizPage params={params} questionNum={questionNum} />
            <Link href={`http://localhost:3000/courses/${params.courseName}`} className="absolute left-10 top-5">
                Back
            </Link>
            <div className="absolute right-10 bottom-10">
                <button onClick={questionNum < 4 ? nextQuestion : undefined} className={questionNum < 4 ? "text-current" : "text-black/25 cursor-default"}>
                    Next Question
                </button>
                <br />
                <button onClick={questionNum > 0 ? prevQuestion : undefined} className={questionNum > 0 ? "text-current" : "text-black/25 cursor-default"}>
                    Previous Question
                </button>
            </div>
        </>
    );
};

export default Quiz;
