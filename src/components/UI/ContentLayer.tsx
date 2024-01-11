import { FunctionComponent } from 'react';
import ScrollModal from './ScrollModal';

const ContentLayer: FunctionComponent<{
  header: string;
  label: string;
  img: string;
  videoSrc?: string;
  className?: string;
}> = (props) => {
  return (
    <ScrollModal header={props.header} label={props.label}>
      <div className="relative flex justify-center">
        <img
          src={props.img}
          alt="tv unit for play video inside"
          className={props.className}
        />
        <video
          className="absolute top-24 left-30 -z-10 "
          autoPlay
          playsInline
          muted
          loop
        >
          <source src={props.videoSrc} />
        </video>
      </div>
    </ScrollModal>
  );
};

export default ContentLayer;
