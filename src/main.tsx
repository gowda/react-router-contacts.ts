import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { createRouter } from './router';

const setupMocks = () => {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line global-require
    return import('./mocks/browser').then(({ worker }) => worker.start());
  }

  return Promise.resolve(true);
};

setupMocks()
  .then(() => createRouter())
  .then((router) =>
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    )
  );
