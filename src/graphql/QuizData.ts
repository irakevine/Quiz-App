import {  objectType } from "nexus";
;  

export const QuizData = objectType({
    name: "QuizData", 
    definition(t): any{ 
        t.nonNull.int("id");  
        t.nonNull.string("question");
        t.list.nonNull.string("incorrectAnswers"); 
        t.nonNull.string("correctAnswer"); 

    },
});


