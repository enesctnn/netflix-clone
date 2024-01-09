import Button from './UI/Button';
import { VscError } from 'react-icons/vsc';

import { motion } from 'framer-motion';
import { useState } from 'react';

type InputState = {
  isBlured: boolean;
  inputString: string;
  isClicked: boolean;
};

function SignInWelcome() {
  const [inputState, setInputState] = useState<InputState>({
    isBlured: false,
    inputString: '',
    isClicked: false,
  });
  let inputFilled: boolean | null = null;
  function inputChangeHandler(userEntry: string) {
    setInputState((prevState) => ({
      isBlured: true,
      inputString: userEntry,
      isClicked: prevState.isClicked,
    }));
  }
  function inputBlurHandler() {
    setInputState((prevState) => ({
      isBlured: true,
      inputString: prevState.inputString,
      isClicked: inputFilled === false ? false : prevState.isClicked,
    }));
  }
  function inputClickHandler() {
    setInputState((prevState) => ({
      isBlured: prevState.isBlured,
      inputString: prevState.inputString,
      isClicked: true,
    }));
  }
  function submitionHandler(event: React.FormEvent) {
    event.preventDefault();
  }
  if (inputState.inputString.trim() !== '' && inputState.isBlured) {
    inputFilled = true;
  }
  if (inputState.inputString.trim() === '' && inputState.isBlured) {
    inputFilled = false;
  }

  return (
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
      <menu className="flex flex-row w-full justify-center gap-4 items-stretch ">
        <div className="relative">
          <input
            value={inputState.inputString}
            onChange={(event) => inputChangeHandler(event.target.value)}
            onClick={inputClickHandler}
            onBlur={inputBlurHandler}
            id="email"
            type="email"
            name="email"
            required
            className={`bg-black/80 pl-2 py-4 rounded-md w-80 border-solid border-[1px] shadow-md shadow-black outline-offset-2
            ${inputFilled === null ? 'border-white ' : ''}
            ${
              inputFilled === false
                ? 'border-red-netflix-light'
                : 'border-green-400'
            }`}
          />
          <motion.span
            className="whitespace-nowrap text-gray-400 absolute left-2 top-4"
            animate={
              inputState.isClicked
                ? {
                    x: -15,
                    scale: 0.7,
                    y: -18,
                  }
                : {
                    x: 0,
                    scale: 1,
                    y: 0,
                  }
            }
          >
            Email adress
          </motion.span>
          {inputFilled === false && (
            <p className="text-red-600 flex flex-row items-center text-sm drop-shadow-md font-medium mt-1">
              <VscError size="20" /> Email is required.
            </p>
          )}
        </div>
        <Button className="max-h-[58px] text-2xl px-7">Get Started &gt;</Button>
      </menu>
    </form>
  );
}

export default SignInWelcome;
