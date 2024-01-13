import Header from '../components/UI/Header';
import { Outlet } from 'react-router-dom';

const RootLayout: React.FC<{}> = () => {
  return (
    <>
      <Header isWelcome />
      <Outlet />
    </>
  );
};

export default RootLayout;
