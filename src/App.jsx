import './App.css';
import { GlobalForm } from './context/context-form';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import MoveLogin from './page/MoveLogin';
import Form from './page/Form';
import Login from './page/Login';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MoveLogin />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/createdacount',
      element: <Form />,
    },
  ]);

  return (
    <>
      <GlobalForm>
        <RouterProvider router={router} />
      </GlobalForm>
    </>
  );
};

export default App;
