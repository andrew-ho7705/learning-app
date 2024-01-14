export const formatName = (name: string) => name[0].toUpperCase() + name.slice(1);

export const filteredCourse = (course: any, params: any) => course.filter((course: any) => course.course === params.courseName); 