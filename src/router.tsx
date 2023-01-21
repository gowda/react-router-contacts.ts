import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './error-page';
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from './routes/contact';
import EditContact, { action as editAction } from './routes/edit-contact';
import Root, {
  loader as rootLoader,
  action as rootAction,
} from './routes/root';
import { action as destroyAction } from './routes/destroy';
import Index from './routes';

// eslint-disable-next-line import/prefer-default-export
export const createRouter = () =>
  createBrowserRouter(
    [
      {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        action: rootAction,
        children: [
          {
            errorElement: <ErrorPage />,
            children: [
              { index: true, element: <Index /> },
              {
                path: 'contacts/:contactId',
                element: <Contact />,
                loader: contactLoader,
                action: contactAction,
              },
              {
                path: 'contacts/:contactId/edit',
                element: <EditContact />,
                loader: contactLoader,
                action: editAction,
              },
              {
                path: 'contacts/:contactId/destroy',
                errorElement: <ErrorPage />,
                action: destroyAction,
              },
            ],
          },
        ],
      },
    ],
    { basename: import.meta.env.BASE_URL }
  );
