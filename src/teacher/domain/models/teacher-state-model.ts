export const teacherStates = {
  start: "start",
  takeInput: "takeInput",
  generateLessonPlan: "generateLessonPlan",
  introduceExercise: "introduceExercise",
  challengeStudent: "challengeStudent",
  evaluateStudent: "evaluateStudent",
  congratulate: "congratulate",
  help: "help",
  correct: "correct",
  model: "model",
  askForQuestions: "askForQuestions",
  answerQuestions: "answerQuestions",
  summarise: "summarise",
  generateExercises: "generateExercises",
};


export type TeacherStateModel = keyof typeof teacherStates;
