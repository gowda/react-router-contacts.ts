import { CircularProgress, InputAdornment, TextField } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { Form, useSubmit } from 'react-router-dom';
import { useSearch } from '../../hooks/search';

const SearchField = () => {
  const { q, searching } = useSearch();
  const submit = useSubmit();

  return (
    <Form id='search-form' role='search'>
      <TextField
        id='q'
        aria-label='Search contacts'
        placeholder='Search'
        type='search'
        name='q'
        defaultValue={q}
        size='small'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              {searching ? (
                <CircularProgress color='inherit' size={20} />
              ) : (
                <SearchIcon />
              )}
            </InputAdornment>
          ),
        }}
        onChange={(event) => {
          const firstSearch = q === null;
          submit(event.currentTarget.form, { replace: !firstSearch });
        }}
      />
      <div className='sr-only' aria-live='polite' />
    </Form>
  );
};

export default SearchField;
