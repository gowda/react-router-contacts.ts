import { useLoaderData } from 'react-router-dom';
import { Contact } from '../contact';

export interface LoaderData {
  contacts: Contact[];
  q: string | null;
}

export const useContacts = () => {
  const { contacts } = useLoaderData() as LoaderData;
  return contacts;
};
