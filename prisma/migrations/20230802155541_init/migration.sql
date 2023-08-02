-- CreateTable
CREATE TABLE "QuizData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "question" TEXT NOT NULL,
    "incorrectAnswers" TEXT NOT NULL,
    "correctAnswer" TEXT NOT NULL
);
