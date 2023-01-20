import { Contact } from '../../contact';

type Props = Pick<Contact, 'twitter'>;

const TwitterLink = ({ twitter }: Props) => {
  if (!twitter) {
    return null;
  }

  return (
    <p style={{ marginTop: '0.2rem', marginBottom: '0.2rem' }}>
      <a
        target='_blank'
        href={`https://twitter.com/${twitter}`}
        rel='noreferrer'
        style={{
          fontSize: '1.5rem',
          color: '#3992ff',
          textDecoration: 'none',
        }}
      >
        {twitter}
      </a>
    </p>
  );
};

export default TwitterLink;
