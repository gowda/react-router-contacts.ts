import axios from 'axios';
import { LoaderFunctionArgs, redirect } from 'react-router-dom';
import RootComponent from '../components/root';
import { Contact } from '../contact';
import { LoaderData } from '../hooks/root';

export const loader = ({ request: { url } }: LoaderFunctionArgs) => {
  const { searchParams } = new URL(url);
  const q = searchParams.get('q');

  return axios
    .get<Contact[]>('/contacts', { params: { q } })
    .then(({ data: contacts }) => ({ contacts, q } as LoaderData));
};

export const action = () =>
  axios
    .post<Contact>('/contacts')
    .then(({ data: { id } }) => redirect(`/contacts/${id}/edit`));

const Root = () => <RootComponent />;

export default Root;
