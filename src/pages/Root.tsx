import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const RootLayout: React.FC<{}> = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default RootLayout;
