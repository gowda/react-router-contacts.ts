import { Button } from '@mui/material';
import { Form } from 'react-router-dom';

const EditButton = () => (
  <Form action='edit'>
    <Button type='submit' color='primary' variant='contained'>
      Edit
    </Button>
  </Form>
);

export default EditButton;
