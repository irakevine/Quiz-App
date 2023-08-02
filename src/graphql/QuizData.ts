import {  extendType, list, nonNull,objectType, stringArg } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen";  

export const QuizData = objectType({
    name: "QuizData", 
    definition(t): any{ 
        t.nonNull.int("id");  
        t.nonNull.string("question");
        t.list.nonNull.string("incorrectAnswers"); 
        t.nonNull.string("correctAnswer"); 

    },
});
let  quizdatas: NexusGenObjects["QuizData"][]= [   // 1
    {
        id: 1,
        question: "What does CSS stand for?",
        incorrectAnswers:[
        "Computer Style Sheets",
        "Creative Style Sheets",
        "Colorful Style Sheets" ],
        correctAnswer:"Cascading Style Sheets"
    },
    {
        id: 2,
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        incorrectAnswers:[
        "In the <body> section",
        "At the end of the document",
        "You can't refer to an external style sheet" ],
        correctAnswer:"In the <head> section",
    }
];

export const QuizDataQuery = extendType({  // 2
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("feed", {   // 3
            type: "QuizData",
            resolve(parent, args, context, info) {    // 4
                return quizdatas;
            },
        });
    },
});
export const QuizDataMutation = extendType({  // 1
    type: "Mutation",    
    definition(t) {
        t.nonNull.field("post", {  // 2
            type: "QuizData",  
            args: {   // 3
                question: nonNull(stringArg()),
                incorrectAnswers:nonNull(stringArg()),
                correctAnswer:nonNull(stringArg())
            },
            
            resolve(parent, args, context) {    
                const {question, incorrectAnswers, correctAnswer} = args;  // 4
                const incorrectAnswersArray = incorrectAnswers.split(',');
                let idCount = quizdatas.length + 1;  // 5
                const quizdata = {
                    id: idCount,
                    question: question,
                    incorrectAnswers: incorrectAnswersArray,
                    correctAnswer: correctAnswer

                };
                quizdatas.push(quizdata);
                return quizdata;
            },
        });
    },
});
