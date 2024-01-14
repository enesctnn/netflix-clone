import GetStartedInput from './UI/GetStartedInput';
import NetflixBg from './UI/NetflixBg';

function SignInWelcome() {
  function submitionHandler(event: React.FormEvent) {
    event.preventDefault();
  }

  return (
    <form
      onSubmit={submitionHandler}
      className="relative flex flex-col text-center w-full gap-3 text-white font-medium z-10"
    >
      <NetflixBg />
      <div className="absolute bottom-10 left-0 right-0">
        <h2 className="text-3xl font-bold">
          Unlimited movies, TV shows, and more
        </h2>
        <p>Watch anywhere. Cancel anytime.</p>
        <GetStartedInput />
      </div>
    </form>
  );
}

export default SignInWelcome;
