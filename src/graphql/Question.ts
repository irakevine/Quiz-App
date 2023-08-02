import { objectType } from "nexus";

export const Link = objectType({
    name: "Question", 
    definition(t) {  
        t.nonNull.int("id");
        t.nonNull.string("content"); 
        
    },
});