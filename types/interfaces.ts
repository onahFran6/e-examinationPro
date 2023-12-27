export interface Question {
  id: number;
  question_type: "mcq" | "desc"; // Assuming only two types are allowed
  question: string;
  choice_1?: string;
  choice_2?: string;
  choice_3?: string;
  choice_4?: string;
}

export interface QuestionRendererProps {
  question_type: "mcq" | "desc";
}

export interface TimerProps {
  timeRemaining: number;
  isAuthenticated: boolean;
}

export interface ExamState {
  currentQuestionIndex: number;
  answers: Record<number, string>;
  timer: number;
  examQuestions: Question[];
  isFinishExam: boolean;
}

export interface UserState {
  isAuthenticated: boolean;
  email: string | null;
  error: string | null;
}
