import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import MainApp from './components/MainApp';
import ErrorPage from './components/Error';
import RootLayout from './components/Root';

const router = createBrowserRouter([
  {
    path: '',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: 'main-app',
        element: <MainApp />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
