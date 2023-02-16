import { Button } from 'react-bootstrap';
import { Form } from 'react-router-dom';

const NewButton = () => (
  <Form method='post'>
    <Button variant='success' type='submit' className='rounded-1'>
      New
    </Button>
  </Form>
);

export default NewButton;
