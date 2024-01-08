import { motion } from 'framer-motion';

import { Link, useRouteError } from 'react-router-dom';
import Button from '../components/UI/Button';

function ErrorPage() {
  const error = useRouteError() as Error;
  return (
    <motion.main className="text-white flex justify-center ">
      <div className="w-max bg-red-900 p-7 rounded-sm">
        <h1 className="uppercase text-4xl font-bold">An Error Occured!</h1>
        <h2 className="text-2xl ">{error.message || 'Something went wrong'}</h2>
        <Link to="../">
          <Button>Previous Page</Button>
        </Link>
      </div>
    </motion.main>
  );
}

export default ErrorPage;
