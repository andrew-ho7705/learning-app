"use client"

import { useState } from "react";
import QuizPage from "./QuizPage";

type QuizParams = {
    quizNum: number;
    courseName: string;
};

export const Quiz = ({ params }: { params: QuizParams }) => {
    const [questionNum, setQuestionNum] = useState(0);

    const nextQuestion = () => setQuestionNum(questionNum + 1);
    const prevQuestion = () => setQuestionNum(questionNum - 1);

    return (
        <>
            <QuizPage params={params} questionNum={questionNum}/>
            
            {questionNum < 4 &&  <button onClick={nextQuestion}>Next Question</button>}
            <br />
            {questionNum > 0 && <button onClick={prevQuestion}>Previous Question</button>}
        </>
    );
};

export default Quiz;