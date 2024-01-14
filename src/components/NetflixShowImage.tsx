import nfbg from '../assets/nfbg.jpg';

function NetflixShowImage() {
  return (
    <div
      style={{ backgroundImage: `url(${nfbg})` }}
      className="relative -z-10 h-[448px] bg-cover select-none opacity-60"
    >
      <div className="h-30 bg-gradient-to-b from-[#111] to-transparent" />

      <div className="mt-60 h-30 bg-gradient-to-b from-transparent to-black" />
    </div>
  );
}

export default NetflixShowImage;
