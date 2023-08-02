// 1
import { PrismaClient } from "@prisma/client";

// 2
const prisma = new PrismaClient();

// 3
async function main() {
    const newQuizData = await prisma.quizData.create({
        data: {
          question: 'How do you insert a comment in a CSS file?',
          incorrectAnswers: "this is a comment, This is a comment,his is a comment",
          correctAnswer:"/* this is a comment */"
        },
      })

    const allquizdatas = await prisma.quizData.findMany();
    console.log(allquizdatas);
}

// 4
main()
    .catch((e) => {
        throw e;
    })
    // 5
    .finally(async () => {
        await prisma.$disconnect();
    });