import { ActionFunctionArgs, redirect, useLoaderData } from 'react-router-dom';
import axios from 'axios';

import { Contact } from '../contact';
import EditContactComponent from '../components/edit-contact';

export const action = ({
  request,
  params: { contactId },
}: ActionFunctionArgs) =>
  request
    .formData()
    .then((data) => Object.fromEntries(data))
    .then((attrs) => axios.put<Contact>(`/contacts/${contactId}`, attrs))
    .then(() => redirect(`/contacts/${contactId}`));

const EditContact = () => {
  const contact = useLoaderData() as Contact;

  return <EditContactComponent {...contact} />;
};

export default EditContact;
