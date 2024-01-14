function NetflixBg() {
  return (
    <div
      style={{ backgroundImage: `url(/nfbg.jpg)` }}
      className="h-[448px] bg-cover select-none opacity-65"
    >
      <div className="h-30 bg-gradient-to-b from-[#111] to-transparent " />
      <div className="mt-60 h-30 bg-gradient-to-b from-transparent to-black" />
    </div>
  );
}

export default NetflixBg;
