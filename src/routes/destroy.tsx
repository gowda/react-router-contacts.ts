import axios from 'axios';
import { ActionFunctionArgs, redirect } from 'react-router-dom';
import { Contact } from '../contact';

// eslint-disable-next-line import/prefer-default-export
export const action = ({ params: { contactId } }: ActionFunctionArgs) =>
  axios.delete<Contact>(`/contacts/${contactId}`).then(() => redirect('/'));
