import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CancelButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      type='button'
      variant='contained'
      color='error'
      onClick={() => navigate(-1)}
    >
      Cancel
    </Button>
  );
};

export default CancelButton;
