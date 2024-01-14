import { motion } from 'framer-motion';
import { useState } from 'react';

import { VscError } from 'react-icons/vsc';

import Button from './Button';

type InputState = {
  isBlured: boolean;
  inputString: string;
  isClicked: boolean;
};

function GetStartedInput() {
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
  if (inputState.inputString.trim() !== '' && inputState.isBlured) {
    inputFilled = true;
  }
  if (inputState.inputString.trim() === '' && inputState.isBlured) {
    inputFilled = false;
  }
  return (
    <>
      <p className="my-3">
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
            className={`bg-black/80 pl-4 pt-5 pb-2 rounded-md w-80 border-solid border-[1px] shadow-md shadow-black outline-offset-2
            ${inputFilled === null ? 'border-white ' : ''}
            ${
              inputFilled === false
                ? 'border-red-netflix-light '
                : 'border-green-400 '
            }`}
          />
          <motion.span
            className="whitespace-nowrap text-gray-400 absolute left-4 top-4"
            animate={
              inputState.isClicked
                ? {
                    x: -15,
                    scale: 0.7,
                    y: -15,
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
        <Button className="max-h-[58px] text-2xl px-7" isRed>
          Get Started &gt;
        </Button>
      </menu>
    </>
  );
}

export default GetStartedInput;
