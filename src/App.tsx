import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import RootLayout from './pages/Root';
import WelcomePage from './pages/Welcome';
import ErrorPage from './pages/Error';
import WrongNavigationPage from './pages/WrongNavigation';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './util/http';
import HomePage from './pages/Home';
import RootHomePage from './pages/RootHome';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route path="/" id="root" element={<RootLayout />}>
        <Route index element={<WelcomePage />} />
      </Route>
      <Route path="home" element={<RootHomePage />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<WrongNavigationPage />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
