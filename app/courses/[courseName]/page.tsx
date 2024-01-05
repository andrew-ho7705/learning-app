

type CourseParams = {
    courseName: string;
};

export const CoursePage = async ({ params }: { params: CourseParams }) => {
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

    const filteredCourse = courses.filter(
        (course: any) => course.course === params.courseName
    );

    return (
        <>
            {filteredCourse.map((course: any) => {
                const { quizzes } = course;
                return quizzes.map((quiz: any) =>
                    quiz.questions.map((question: any) => (
                        <div key={question._id}>
                            <div>
                                {question.questionNum}. {question.questionText}
                            </div>
                        </div>
                    ))
                );
            })}
        </>
    );
};

export default CoursePage;
