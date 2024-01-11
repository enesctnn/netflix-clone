import GetStartedInput from './UI/GetStartedInput';

function SignInWelcome() {
  function submitionHandler(event: React.FormEvent) {
    event.preventDefault();
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
      <GetStartedInput />
    </form>
  );
}

export default SignInWelcome;
