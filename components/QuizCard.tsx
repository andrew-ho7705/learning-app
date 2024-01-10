import Link from "next/link";

const QuizCard = ({ quizNum }: { quizNum: number}) => {
    return (
        <div className="border border-black flex h-32 w-32 items-center justify-center rounded-2xl">
            <Link href={`http://localhost:3000/courses/math/${quizNum - 1}`}>Quiz {quizNum}</Link>
        </div>
    )
}

export default QuizCard;