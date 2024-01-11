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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        id="root"
        element={<RootLayout />}
        errorElement={<ErrorPage />}
      >
        <Route index element={<WelcomePage />} />
        <Route path="*" element={<WrongNavigationPage />} />
      </Route>
    </>
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
