import { Contact } from '../../contact';

type Props = Pick<Contact, 'first' | 'last'>;

const Name = ({ first, last }: Props) => (
  <h1 style={{ marginTop: '0.2rem', marginBottom: '0.2rem' }}>
    {first || last ? (
      <>
        {first} {last}
      </>
    ) : (
      <i>No Name</i>
    )}
  </h1>
);

export default Name;
