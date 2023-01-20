import { Button } from '@mui/material';
import { Form } from 'react-router-dom';

const DeleteButton = () => (
  <Form
    method='post'
    action='destroy'
    onSubmit={(event) => {
      // eslint-disable-next-line no-restricted-globals
      if (!confirm('Please confirm you want to delete this record.')) {
        event.preventDefault();
      }
    }}
  >
    <Button type='submit' color='error' variant='contained'>
      Delete
    </Button>
  </Form>
);

export default DeleteButton;
