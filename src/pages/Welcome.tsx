import React from 'react';
import NetflixShowImage from '../components/NetflixShowImage';
import TVUnit from '../components/TVUnit';
import SignInWelcome from '../components/SignInWelcome';
import ExampleTvShow from '../components/ExampleTvShow';

const WelcomePage: React.FC<{}> = () => {
  return (
    <main>
      <NetflixShowImage />
      <SignInWelcome />
      <TVUnit />
      <ExampleTvShow />
    </main>
  );
};

export default WelcomePage;
