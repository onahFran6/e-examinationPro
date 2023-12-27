export type LookingForDataType = {
  head: string;
  body: string;
};

export type QuestionType = {
  id: number;
  question_type: "mcq" | "desc";
  question: string;
  choice_1?: string;
  choice_2?: string;
  choice_3?: string;
  choice_4?: string;
};

export type SocialMediaDataType = {
  socialMediaLink: string;
  socialMediaImage: string;
};

export type TopSpecializationDataType = {
  name: string;
  image: string;
};
