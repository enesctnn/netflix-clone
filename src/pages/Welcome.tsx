import React from 'react';
import NetflixShowImage from '../components/NetflixShowImage';
import ContentLayer from '../components/UI/ContentLayer';
import SignInWelcome from '../components/SignInWelcome';
import ExampleTvShow from '../components/ExampleTvShow';

import tv from '../assets/tv.png';
import appleTv from '../assets/device-pile.png';
import kidsShow from '../assets/kidshow.png';
import ScrollModal from '../components/UI/ScrollModal';
import GetStartedInput from '../components/UI/GetStartedInput';
import Questions from '../components/Questions';
import Footer from '../components/Footer';

const WelcomePage: React.FC<{}> = () => {
  return (
    <>
      <main>
        <NetflixShowImage />
        <SignInWelcome />
        <ContentLayer
          header="Enjoy on Your TV"
          label="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
    players, and more."
          img={tv}
          videoSrc="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
        />
        <ExampleTvShow />
        <ContentLayer
          header="Watch everywhere"
          label="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          img={appleTv}
          videoSrc="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
          className="h-[580px] mt-10 object-cover"
        />
        <ContentLayer
          header="Create profiles for kids"
          label="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
          img={kidsShow}
        />
        <ScrollModal header="Frequently Asked Questions">
          <Questions />
          <GetStartedInput />
        </ScrollModal>
      </main>
      <Footer />
    </>
  );
};

export default WelcomePage;
