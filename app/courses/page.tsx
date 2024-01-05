import CourseCard from "@/components/CourseCard";

export const Courses = async () => {
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

    return (
        <>
            <div className="text-3xl">Courses Page</div>
            {courses.map((course: any) => (
                <CourseCard key={course._id} courseName={course.course} />
            ))}
        </>
    );
};

export default Courses;
