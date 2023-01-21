import { ActionFunctionArgs, redirect } from 'react-router-dom';

import { Contact } from '../contact';
import client from '../client';

// eslint-disable-next-line import/prefer-default-export
export const action = ({ params: { contactId } }: ActionFunctionArgs) =>
  client.delete<Contact>(`contacts/${contactId}`).then(() => redirect('/'));
