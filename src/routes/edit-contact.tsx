import { ActionFunctionArgs, redirect, useLoaderData } from 'react-router-dom';

import { Contact } from '../contact';
import EditContactComponent from '../components/edit-contact';
import client from '../client';

export const action = ({
  request,
  params: { contactId },
}: ActionFunctionArgs) =>
  request
    .formData()
    .then((data) => Object.fromEntries(data))
    .then((attrs) => client.put<Contact>(`contacts/${contactId}`, attrs))
    .then(() => redirect(`/contacts/${contactId}`));

const EditContact = () => {
  const contact = useLoaderData() as Contact;

  return <EditContactComponent {...contact} />;
};

export default EditContact;
