import nfbg from '../assets/nfbg.jpg';

function NetflixShowImage() {
  return (
    <div className="flex flex-col w-screen relative -z-10">
      <div className="absolute top-0 h-10 w-full bg-gradient-to-b from-black/90 to-black/75 shadow-bottom -z-10" />
      <img
        className="opacity-70 -z-20 object-cover max-sm:h-[700px]"
        src={nfbg}
        alt="netflix background movies/shows"
      />
    </div>
  );
}

export default NetflixShowImage;
