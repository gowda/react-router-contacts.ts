import { Button } from '@mui/material';
import { Form } from 'react-router-dom';

const NewButton = () => (
  <Form method='post'>
    <Button color='success' variant='contained' type='submit'>
      New
    </Button>
  </Form>
);

export default NewButton;
