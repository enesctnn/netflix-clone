import { IoLanguage } from 'react-icons/io5';
import ScrollModal from './UI/ScrollModal';

function Footer() {
  return (
    <ScrollModal className="">
      <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-11 md:grid-rows-6 text-gray-400/40">
        <div className="underline cursor-pointer">Questions? Contact us</div>
        <div className="underline cursor-pointer">FAQ</div>
        <div className="underline cursor-pointer">Account</div>
        <div className="underline cursor-pointer">Incestor Relations</div>
        <div className="underline cursor-pointer">Reedem Gift Cards</div>
        <div className="underline cursor-pointer">Terms of Use</div>
        <div className="underline cursor-pointer">Cookie Preferences</div>
        <div className="underline cursor-pointer">Contact Us</div>
        <div className="underline cursor-pointer">Legal Notices</div>
        <div className="underline cursor-pointer"></div>
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
        <div className="underline cursor-pointer">Help Center</div>
        <div className="underline cursor-pointer">Media Center</div>
        <div className="underline cursor-pointer">Jobs</div>
        <div className="underline cursor-pointer">Ways to Watch</div>
        <div className="underline cursor-pointer">Privacy</div>
        <div className="underline cursor-pointer">Corporate Information</div>
        <div className="underline cursor-pointer">Speed Test</div>
        <div className="underline cursor-pointer">Only on Netflix</div>
      </div>
    </ScrollModal>
  );
}

export default Footer;
