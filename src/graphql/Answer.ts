import { objectType } from "nexus";

export const Answer = objectType({
    name: "Answer", 
    definition(t) { 
        t.nonNull.int("id");  
        t.nonNull.string("isCorrect");
        t.nonNull.string("content"); 
    },
});