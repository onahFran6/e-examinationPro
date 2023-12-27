"use client";
import { RootState } from "@/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MCQExamPage from "./McqExamComponent";
import DescriptiveExamPage from "./DscpExamComponent";
import { useRouter } from "next/navigation";

const QuestionRenderer: React.FC = () => {
  const dispatch = useDispatch();
  const examState = useSelector((state: RootState) => state.exams);
  const { isAuthenticated } = useSelector((state: RootState) => state.user);
  const { currentQuestionIndex, timer, examQuestions, isFinishExam } =
    examState;
  const currentQuestion = examQuestions[currentQuestionIndex];

  const router = useRouter();

  switch (currentQuestion?.question_type) {
    case "mcq":
      return <MCQExamPage />;
    case "desc":
      return <DescriptiveExamPage />;
    default:
      return null;
  }
};

export default QuestionRenderer;

// import React from "react";
// import MCQExamPage from "./McqExamComponent";
// import DescriptiveExamPage from "./DscpExamComponent";
// import { QuestionRendererProps } from "@/types/interfaces";

// const QuestionRenderer: React.FC<QuestionRendererProps> = ({
//   question_type,
// }) => {
//   switch (question_type) {
//     case "mcq":
//       return <MCQExamPage />;
//     case "desc":
//       return <DescriptiveExamPage />;
//     default:
//       return null;
//   }
// };

// export default QuestionRenderer;
