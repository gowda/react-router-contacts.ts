import { NavLink } from 'react-router-dom';
import { useContacts } from '../../hooks/root';

const ContactsNav = () => {
  const contacts = useContacts();

  if (contacts.length === 0) {
    return (
      <p>
        <i>No contacts</i>
      </p>
    );
  }
  return (
    <nav>
      <ul>
        {contacts.map(({ id, first, last, favorite }) => (
          <li key={id}>
            <NavLink
              to={`/contacts/${id}`}
              className={({ isActive, isPending }) =>
                // eslint-disable-next-line no-nested-ternary
                isActive ? 'active' : isPending ? 'pending' : ''
              }
            >
              {first || last ? (
                <>
                  {first} {last}
                </>
              ) : (
                <i>No Name</i>
              )}{' '}
              {favorite ? <span>★</span> : null}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ContactsNav;
