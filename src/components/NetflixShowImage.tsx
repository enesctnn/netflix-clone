import nfbg from '../assets/nfbg.webp';
import Button from './UI/Button';

function NetflixShowImage() {
  return (
    <div className="flex flex-col w-screen h-105 relative text-center">
      <div className="absolute flex flex-col text-center top-40 w-full gap-3 text-white font-medium z-10">
        <h2 className="text-3xl font-bold">
          Unlimited movies, TV shows, and more
        </h2>
        <p>Watch anywhere. Cancel anytime.</p>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <menu className="flex flex-row w-full justify-center gap-4">
          <input
            type="text"
            placeholder="Email adress"
            className="bg-black/80 pl-2 py-4 rounded-md w-80 border-white border-solid border-1 shadow-md shadow-black"
          />
          <Button>Get Started &gt;</Button>
        </menu>
      </div>
      <div className="absolute top-0 h-10 w-full bg-gradient-to-b from-black/90 to-black/75 shadow-bottom -z-10" />
      <img className="-z-20" src={nfbg} alt="netflix background movies/shows" />
    </div>
  );
}

export default NetflixShowImage;
