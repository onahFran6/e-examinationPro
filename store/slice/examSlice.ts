import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mockExamData } from "../../constant/MockExamsData";
import { ExamState } from "@/types/interfaces";

const initialState: ExamState = {
  currentQuestionIndex: 0,
  answers: {},
  timer: 60 * 30,
  examQuestions: mockExamData,
  isFinishExam: false, // Limit to 10 questions
};

const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    submitAnswer: (
      state,
      action: PayloadAction<{ questionId: number; answer: string }>
    ) => {
      const { questionId, answer } = action.payload;
      state.answers[questionId] = answer;
    },

    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex !== null) {
        state.currentQuestionIndex += 1;
      }
    },
    startExam: (state) => {
      state.currentQuestionIndex = 0;
      state.answers = {};
    },
    finishExam: (state) => {
      state.currentQuestionIndex = 11;
      state.isFinishExam = true;
    },
    decrementTimer: (state) => {
      state.timer -= 1; // Decrement timer by 1 second
    },
  },
});

export const {
  submitAnswer,
  startExam,
  goToNextQuestion,
  finishExam,
  decrementTimer,
} = examSlice.actions;
export default examSlice.reducer;
