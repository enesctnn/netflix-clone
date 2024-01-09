import React from 'react';
import NetflixShowImage from '../components/NetflixShowImage';
import TVUnit from '../components/TVUnit';
import SignInWelcome from '../components/SignInWelcome';

const WelcomePage: React.FC<{}> = () => {
  return (
    <main>
      <NetflixShowImage />
      <SignInWelcome />
      <TVUnit />
    </main>
  );
};

export default WelcomePage;
