import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();
export interface FetchFrequentlyQuestionsResponse {
  id: number;
  question: string;
  preAnswer: string | null;
  answer: string;
}

export const fetchFrequentlyQuestions = async ({
  signal,
}: {
  signal: AbortSignal;
}): Promise<FetchFrequentlyQuestionsResponse[]> => {
  const response = await fetch('http://localhost:3000/questions', {
    method: 'GET',
    signal,
  });
  if (!response.ok) {
    throw Error('Fetching questions failed');
  }
  return await response.json();
};
