import { motion } from 'framer-motion';
import nflogo from '../assets/nf.png';
import Button from './UI/Button';

import { IoLanguage } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Header: React.FC<{ isWelcome?: boolean }> = (props) => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-screen h-24 pr-10 -mb-24 z-50"
    >
      {!props.isWelcome && (
        <Link to="/" className="ml-5 h-full flex w-max">
          <img src={nflogo} alt="netflix logo" />
        </Link>
      )}
      {props.isWelcome && (
        <div className="h-full flex flex-row justify-between px-5">
          <img src={nflogo} alt="netflix logo" /> 
          <div className="flex flex-row items-center gap-5">
            <div className="relative">
              <select
                className="bg-opacity-40 bg-stone-900 rounded-[4px] border-stone-400 border-[1px] pl-7 pr-2 py-1 text-white font-medium"
                name="language"
                id="language"
                defaultValue="en"
              >
                <option value="tr">Türkçe</option>
                <option value="en">English</option>
              </select>
              <IoLanguage className="absolute top-2 left-2 text-white text-lg" />
            </div>
            <Button className="font-medium">Sign In</Button>
          </div>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
