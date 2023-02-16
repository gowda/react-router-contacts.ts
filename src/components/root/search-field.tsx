import { Form, InputGroup, Spinner } from 'react-bootstrap';
import { Form as RouterForm, useSubmit } from 'react-router-dom';
import { useSearch } from '../../hooks/search';

const SearchField = () => {
  const { q, searching } = useSearch();
  const submit = useSubmit();

  return (
    <RouterForm id='search-form' role='search'>
      <InputGroup className='border rounded-1 py-0'>
        <InputGroup.Text className='bg-white border-0'>
          {searching ? (
            <Spinner
              animation='border'
              role='status'
              size='sm'
              className='rounded-circle'
            >
              <span className='visually-hidden'>Searching...</span>
            </Spinner>
          ) : (
            <i className='bi bi-search' />
          )}
        </InputGroup.Text>
        <Form.Control
          id='q'
          className='ps-0 border-0 shadow-none'
          aria-label='Search contacts'
          placeholder='Search'
          type='search'
          name='q'
          defaultValue={q || undefined}
          onChange={(event) => {
            const firstSearch = q === null;
            submit(event.currentTarget.form, { replace: !firstSearch });
          }}
        />
      </InputGroup>
      <div className='sr-only' aria-live='polite' />
    </RouterForm>
  );
};

export default SearchField;
