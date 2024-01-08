import { useState } from 'react';
import nfbg from '../assets/nfbg.jpg';
import Button from './UI/Button';
import { VscError } from 'react-icons/vsc';

type InputState = {
  isClicked: boolean;
  inputString: string;
};

function NetflixShowImage() {
  const [inputState, setInputState] = useState<InputState>({
    isClicked: false,
    inputString: '',
  });
  function inputChangeHandler(userEntry: string) {
    setInputState({
      isClicked: true,
      inputString: userEntry,
    });
  }
  function inputBlurHandler() {
    setInputState((prevState) => ({
      isClicked: true,
      inputString: prevState.inputString,
    }));
  }
  function submitionHandler(event: React.FormEvent) {
    event.preventDefault();
  }

  let inputFilled = null;

  if (inputState.inputString.trim() !== '' && inputState.isClicked) {
    inputFilled = true;
  }
  if (inputState.inputString.trim() === '' && inputState.isClicked) {
    inputFilled = false;
  }

  return (
    <div className="flex flex-col w-screen relative ">
      <form
        onSubmit={submitionHandler}
        className="absolute flex flex-col text-center top-52 w-full gap-3 text-white font-medium z-10"
      >
        <h2 className="text-3xl font-bold">
          Unlimited movies, TV shows, and more
        </h2>
        <p>Watch anywhere. Cancel anytime.</p>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <menu className="flex flex-row w-full justify-center gap-4 items-stretch">
          <div>
            <input
              value={inputState.inputString}
              onChange={(event) => inputChangeHandler(event.target.value)}
              onBlur={inputBlurHandler}
              id="email"
              type="email"
              name="email"
              placeholder="Email adress"
              required
              className={`bg-black/80 pl-2 py-4 rounded-md w-80 border-solid border-[1px] shadow-md shadow-black outline-offset-2
            ${
              inputFilled === false
                ? 'border-red-netflix-light'
                : 'border-green-400'
            }`}
            />
            {inputFilled === false && (
              <p className="text-red-netflix-light flex flex-row items-center text-sm drop-shadow-xl">
                <VscError /> Email is required.
              </p>
            )}
          </div>
          <Button className="max-h-[58px] text-2xl px-7">
            Get Started &gt;
          </Button>
        </menu>
      </form>
      <div className="absolute top-0 h-10 w-full bg-gradient-to-b from-black/90 to-black/75 shadow-bottom -z-10" />
      <img
        className="-z-20 object-cover max-sm:h-[700px]"
        src={nfbg}
        alt="netflix background movies/shows"
      />
    </div>
  );
}

export default NetflixShowImage;
