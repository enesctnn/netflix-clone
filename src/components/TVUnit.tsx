import tv from '../assets/tv.png';
import ScrollModal from './UI/ScrollModal';

function TVUnit() {
  return (
    <ScrollModal
      header="Enjoy on Your TV"
      label="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
    players, and more."
    >
      <div className="relative flex justify-center">
        <img src={tv} alt="tv unit for play video inside" />
        <video
          className="absolute top-24 left-30 -z-10 "
          autoPlay
          playsInline
          muted
          loop
        >
          <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" />
        </video>
      </div>
    </ScrollModal>
  );
}

export default TVUnit;
