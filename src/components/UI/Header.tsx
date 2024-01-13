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

  const bgOpacity = useTransform(scrollY, [0, 300], [0, 1]);

  if (props.isHome) {
    content = (
      <div className="h-full flex flex-row justify-between w-screen px-5 relative z-50">
        <motion.div
          style={{ opacity: bgOpacity }}
          className="absolute h-full bg-black w-full -z-10"
        />
        <img src={nflogo} alt="netflix logo" />
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
    );
  }

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`w-screen h-20 pr-10 -mb-24 z-50 ${
        props.isHome ? 'fixed top-0' : ''
      }`}
    >
      {content}
    </motion.header>
  );
};

export default Header;
