type Question = {
    "questionNum": number;
    "questionText": string;
    "answers": number[] | string[];
    "answer": number | string;
    "._id": string;
};

export type Quiz = {
    "quizNum": number;
    "questions": Question[];
    "._id": string;
};

export type Course = {
    "course": string;
    "quizzes": Quiz[];
    "._id": string;
};
