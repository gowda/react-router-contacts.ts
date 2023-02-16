import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CancelButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      type='button'
      variant='danger'
      className='shadow-none rounded-1'
      onClick={() => navigate(-1)}
    >
      Cancel
    </Button>
  );
};

export default CancelButton;
