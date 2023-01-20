import axios from 'axios';
import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  useLoaderData,
} from 'react-router-dom';

import { Contact as IContact } from '../contact';
import ContactComponent from '../components/contact';

export const loader = ({ params: { contactId } }: LoaderFunctionArgs) =>
  axios.get<IContact>(`/contacts/${contactId}`).then(({ data }) => data);

export const action = ({
  params: { contactId },
  request,
}: ActionFunctionArgs) =>
  request
    .formData()
    .then((data) =>
      axios.put<IContact>(`/contacts/${contactId}`, {
        favorite: data.get('favorite') === 'true',
      })
    );

const Contact = () => {
  const contact = useLoaderData() as IContact;

  return <ContactComponent {...contact} />;
};

export default Contact;
