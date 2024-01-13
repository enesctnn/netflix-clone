import { Outlet } from 'react-router-dom';
import Header from '../components/UI/Header';

function RootHomePage() {
  return (
    <>
      <Header isHome />
      <Outlet />
    </>
  );
}

export default RootHomePage;
