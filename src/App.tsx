import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import RootLayout from './pages/Root';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" id="root" element={<RootLayout />}></Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
