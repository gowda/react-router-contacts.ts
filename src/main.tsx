import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './assets/styles.scss';
import { createRouter } from './router';

const setupMocks = () => {
  if (import.meta.env.VITE_ENABLE_MSW === 'true') {
    // eslint-disable-next-line global-require
    return import('./mocks/browser').then(({ worker }) =>
      worker.start({
        serviceWorker: {
          url: `${import.meta.env.BASE_URL}mockServiceWorker.js`,
        },
        onUnhandledRequest: 'bypass',
      })
    );
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
