import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  useLoaderData,
} from 'react-router-dom';

import { Contact as IContact } from '../contact';
import ContactComponent from '../components/contact';
import client from '../client';

export const loader = ({ params: { contactId } }: LoaderFunctionArgs) =>
  client.get<IContact>(`/contacts/${contactId}`).then(({ data }) => data);

export const action = ({
  params: { contactId },
  request,
}: ActionFunctionArgs) =>
  request.formData().then((data) =>
    client.put<IContact>(`/contacts/${contactId}`, {
      favorite: data.get('favorite') === 'true',
    })
  );

const Contact = () => {
  const contact = useLoaderData() as IContact;

  return <ContactComponent {...contact} />;
};

export default Contact;
