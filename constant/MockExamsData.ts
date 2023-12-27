import { QuestionType } from "@/types/types";

export const mockExamData: QuestionType[] = [
  {
    id: 2,
    question_type: "desc",
    question:
      "Explain the concept of props in React and how they are used in components?",
  },
  {
    id: 1,
    question_type: "mcq",
    question: "What is JSX in the context of React?",
    choice_1: "JavaScript XML",
    choice_2: "Java Syntax Extension",
    choice_3: "JSON XML",
    choice_4: "JavaScript Syntax Extension",
  },

  {
    id: 3,
    question_type: "mcq",
    question: "What does TypeScript bring to React development?",
    choice_1: "Dynamic Typing",
    choice_2: "Static Typing",
    choice_3: "No Typing",
    choice_4: "TypeScript has no relation to React",
  },
  {
    id: 4,
    question_type: "desc",
    question:
      "Describe the role of interfaces in TypeScript when working with React components?",
  },
  {
    id: 5,
    question_type: "mcq",
    question: "What is the purpose of the 'useState' hook in React?",
    choice_1: "To fetch data from a server",
    choice_2: "To manage state in functional components",
    choice_3: "To create a new component",
    choice_4: "To handle routing in a React application",
  },
  {
    id: 6,
    question_type: "desc",
    question:
      "Discuss the advantages of using TypeScript in a large-scale React project?",
  },
  {
    id: 7,
    question_type: "mcq",
    question:
      "Which of the following is a correct way to define a prop type in TypeScript for a React component?",
    choice_1: "static propTypes = {...}",
    choice_2: "PropTypes = {...}",
    choice_3: "interface Props = {...}",
    choice_4: "type Props = {...}",
  },
  {
    id: 8,
    question_type: "desc",
    question:
      "Explain the purpose of the 'key' attribute when rendering a list of components in React?",
  },
  {
    id: 9,
    question_type: "mcq",
    question: "What is the role of the 'useEffect' hook in React?",
    choice_1: "To perform data fetching",
    choice_2: "To handle side effects in functional components",
    choice_3: "To define a custom hook",
    choice_4: "To create a new component",
  },
  {
    id: 10,
    question_type: "desc",
    question:
      "Describe the process of handling forms in React using TypeScript?",
  },
];
