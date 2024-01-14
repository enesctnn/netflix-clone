import { motion, useScroll, useTransform } from 'framer-motion';
import nflogo from '../../assets/nf.png';
import Button from './Button';

import { IoLanguage } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Header: React.FC<{
  isHome?: boolean;
  isWrongWay?: boolean;
  isWelcome?: boolean;
}> = (props) => {
  let content;
  const { scrollY } = useScroll();

  const bgOpacity = useTransform(scrollY, [150, 400], [0, 1]);

  if (props.isHome) {
    content = (
      <div className="h-full flex flex-row justify-between px-5 relative">
        <img src={nflogo} alt="netflix logo" className="z-10" />
        <motion.div
          style={{ opacity: bgOpacity }}
          className="absolute left-0 right-0 h-full bg-gradient-to-t from-[#111] to-black"
        />
      </div>
    );
  }
  if (props.isWrongWay) {
    content = (
      <Link to="/" className="ml-5 h-full flex w-max">
        <img src={nflogo} alt="netflix logo" />
      </Link>
    );
  }
  if (props.isWelcome) {
    content = (
      <div className="h-full flex flex-row justify-between px-5 z-50">
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
          <Button className="font-medium" isRed>
            Sign In
          </Button>
        </div>
      </div>
    );
  }

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={` h-20 z-50 ${
        props.isHome ? 'fixed top-0 left-0 right-0' : '-mb-24 pr-10 relative'
      }`}
    >
      {content}
    </motion.header>
  );
};

export default Header;
