import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';
import Header from '../components/UI/Header';

function WrongNavigationPage() {
  return (
    <>
      <Header isWrongWay />
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
          <h1 className="uppercase text-5xl max-md:text-4xl font-bold">
            Lost your way?
          </h1>
          <h2 className="text-2xl max-md:text-xl w-5/6">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </h2>
          <Link
            to="../"
            className="text-black px-5 py-3 rounded-sm bg-white w-max font-bold active:outline-none max-md:text-sm"
          >
            Netflix Home
          </Link>
        </div>
      </motion.main>
    </>
  );
}

export default WrongNavigationPage;
