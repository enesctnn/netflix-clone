import React from 'react';
import NetflixShowImage from '../components/NetflixShowImage';
import TVUnit from '../components/TVUnit';

const WelcomePage: React.FC<{}> = () => {
  return (
    <main>
      <NetflixShowImage />
      <TVUnit />
    </main>
  );
};

export default WelcomePage;
