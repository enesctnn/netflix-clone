import { useQuery } from '@tanstack/react-query';
import { fetchFrequentlyQuestions } from '../util/http';
import { useState } from 'react';
import Question from './Question';

function Questions() {
  const [expanded, setExpanded] = useState<null | number>(null);

  const { data, isPending } = useQuery({
    queryKey: ['questions'],
    queryFn: ({ signal }) => fetchFrequentlyQuestions({ signal }),
  });

  function expandQuestions(id: number) {
    setExpanded((prevId) => {
      if (prevId === id) {
        return null;
      }
      return id;
    });
  }

  return (
    <>
      {data && (
        <ul className="w-full px-10 flex flex-col gap-2">
          {data.map((item) => (
            <Question
              key={item.id}
              item={item}
              isExpanded={expanded === item.id}
              onExpand={expandQuestions.bind(null, item.id)}
            />
          ))}
        </ul>
      )}
      {isPending && <p className="text-blue-600 text-xl">Loading...</p>}
    </>
  );
}

export default Questions;
