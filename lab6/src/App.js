import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import Error404Page from './Components/Error404Page';
import Layout from './Components/Layout';
import CarsPage from './Components/CarsPage';
import carData from './cars.json'
import AddCarPage from './Components/AddCarPage';


function App() {
  const [cars, setCars] = useState(carData);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'cars',
          element: <CarsPage cars={ cars }/>,
          children: [
            {
              path: 'new',
              element: <AddCarPage cars={ cars } setCars={ setCars }/>,
            },
          ],
        },
        {
          path: 'about',
          element: <AboutPage />,
        },
        {
          path: '*',
          element: <Error404Page />,
        },
      ],
    },
  ]);
  
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;
