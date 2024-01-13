import { motion } from 'framer-motion';

import { Link, useRouteError } from 'react-router-dom';
import Header from '../components/UI/Header';

function ErrorPage() {
  const error = useRouteError() as Error;
  return (
    <>
      <Header isWelcome={false} />
      <motion.main
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
        }}
        transition={{ type: 'spring', duration: 1 }}
        className="text-white flex justify-center mt-24 bg-[url('/bg-lost-in-space.png')] bg-cover bg-top bg-no-repeat w-screen h-screen "
      >
        <div className="w-max rounded-md flex flex-col gap-10 text-center items-center mt-52 ">
          <h1 className="uppercase text-5xl font-bold">An Error Occured!</h1>
          <h2 className="text-2xl ">
            {error.message || 'Something went wrong'}
          </h2>
          <Link
            to="../"
            className="text-black px-5 py-3 rounded-sm bg-white w-max font-bold text-lg active:outline-none"
          >
            Netflix Home
          </Link>
        </div>
      </motion.main>
    </>
  );
}

export default ErrorPage;
