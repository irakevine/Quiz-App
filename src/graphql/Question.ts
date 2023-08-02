import { objectType } from "nexus";

export const Question = objectType({
    name: "Question", 
    definition(t) {  
        t.nonNull.int("id");
        t.nonNull.string("content"); 
        
    },
});