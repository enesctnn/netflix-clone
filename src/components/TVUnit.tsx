import tv from '../assets/tv.png';

function TVUnit() {
  return (
    <div className="flex flex-col items-center text-white gap-20">
      <div className="bg-gray-500/40 w-screen h-2" />
      <div className="flex flex-col items-center gap-4">
        <h1 className="whitespace-nowrap text-4xl font-bold">
          Enjoy on Your TV
        </h1>
        <p className="text-xl">
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </p>
        <div className="relative">
          <img src={tv} alt="tv unit for play video inside" />
          <video
            className="absolute top-24 left-20 -z-10"
            autoPlay
            playsInline
            muted
            loop
          >
            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default TVUnit;
