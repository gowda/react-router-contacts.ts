import { Contact } from '../../contact';

type Props = Pick<Contact, 'notes'>;

const Notes = ({ notes }: Props) => {
  if (!notes) {
    return null;
  }

  return <p style={{ marginTop: '0.7rem', marginBottom: '0.7rem' }}>{notes}</p>;
};

export default Notes;
