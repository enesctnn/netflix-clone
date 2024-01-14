import { FunctionComponent } from 'react';
import ScrollModal from './ScrollModal';

const ContentLayer: FunctionComponent<{
  header: string;
  label: string;
  img: string;
  videoSrc?: string;
  classImg?: string;
  classVideo?: string;
}> = (props) => {
  return (
    <ScrollModal header={props.header} label={props.label}>
      <div className="relative flex justify-center">
        <img
          src={props.img}
          alt="tv unit for play video inside"
          className={`z-20 ` + props.classImg}
        />
        <video
          className={`absolute z-10 ${props.classVideo}`}
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
