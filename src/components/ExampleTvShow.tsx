import mobilePic from '../assets/mobile-0819.jpg';
import boxPic from '../assets/boxshot.png';

import ScrollModal from './UI/ScrollModal';

import Animation from './UI/Animation';
import { useEffect, useState } from 'react';

function ExampleTvShow() {
  const [animationKey, setAnimationKey] = useState<number>(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimationKey(Math.random());
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <ScrollModal
      header="Download your shows to watch offline"
      label="Save your favorites easily and always have something to watch."
    >
      <div className="relative">
        <img
          src={mobilePic}
          alt="Stranger things show inside phone splash art"
        />
        <div className="absolute left-32 border-solid border-2 px-3 py-2 border-gray-500 rounded-lg flex flex-row h-20 gap-4 bottom-10 bg-black">
          <img src={boxPic} alt="box stranger thing photo" />
          <section className="w-60">
            <h2>Stranger Things</h2>
            <p className="text-blue-600">Downloading...</p>
          </section>
          <Animation key={animationKey} />
        </div>
      </div>
    </ScrollModal>
  );
}

export default ExampleTvShow;
