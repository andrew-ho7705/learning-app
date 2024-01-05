import Link from "next/link";

const CourseCard = ({ courseName }: { courseName: string}) => {
    return (
        <div className="border flex h-32 w-32 items-center justify-center text-2xl rounded-2xl">
            <Link href={`/courses/${courseName.toLowerCase()}`}>{courseName.charAt(0).toUpperCase() + courseName.slice(1)}</Link>
        </div>
    )
}

export default CourseCard;