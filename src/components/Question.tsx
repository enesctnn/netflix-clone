import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FetchFrequentlyQuestionsResponse } from '../util/http';

const Question: React.FC<{
  item: FetchFrequentlyQuestionsResponse;
  isExpanded: boolean;
  onExpand: () => void;
}> = (props) => {
  const { item } = props;
  return (
    <motion.li key={item.id} exit={{ y: -30, opacity: 0 }}>
      <article className="flex flex-col gap-[1px] text-2xl font-bold">
        <header
          className="flex items-center justify-between  bg-gray-400/30 px-8 py-5 hover:bg-gray-400/40 duration-300 cursor-pointer select-none"
          onClick={props.onExpand}
        >
          <h2 className="text-xl">{item.question}</h2>
          <motion.button
            animate={{
              rotate: props.isExpanded ? 45 : 0,
            }}
            className="text-4xl font-light"
          >
            +
          </motion.button>
        </header>
        <AnimatePresence>
          {props.isExpanded && (
            <motion.section
              key="description"
              initial={{ height: 0 }}
              animate={{ height: 'max-content' }}
              exit={{ height: 0 }}
              className="bg-gray-400/30 px-8 py-5  flex flex-col gap-5 overflow-hidden"
            >
              {item.preAnswer !== '' && <p>{item.preAnswer}</p>}
              <p>{item.answer}</p>
            </motion.section>
          )}
        </AnimatePresence>
      </article>
    </motion.li>
  );
};

export default Question;
