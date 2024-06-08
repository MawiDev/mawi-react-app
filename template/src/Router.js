import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Homepage from './pages/Homepage';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<NotFound />} />
    </>,
  ),
);
