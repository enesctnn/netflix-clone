import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { useEffect, useRef, useState } from 'react';
import downloading from '../../assets/downloading.json';
import installing from '../../assets/installing.json';
import phone from '../../assets/phone.json';

const Animation = () => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [animationData, setAnimationData] = useState<unknown>(downloading);
  useEffect(() => {
    const installId = setTimeout(() => {
      setAnimationData(installing);
    }, 1000);
    const phoneId = setTimeout(() => {
      setAnimationData(phone);
    }, 3000);
    return () => {
      clearTimeout(installId);
      clearTimeout(phoneId);
    };
  }, []);

  return (
    <Lottie
      onComplete={() => {
        lottieRef.current?.stop();
      }}
      lottieRef={lottieRef}
      animationData={animationData}
      className="h-14 w-10"
    />
  );
};

export default Animation;
