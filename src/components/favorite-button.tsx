import { useMemo } from 'react';
import { Button } from '@mui/material';
import {
  Star as StarIcon,
  StarOutline as StarOutlineIcon,
} from '@mui/icons-material';
import { useFetcher } from 'react-router-dom';
import { Contact } from '../contact';

type Props = Pick<Contact, 'favorite'>;

const FavoriteButton = ({ favorite: propFavorite }: Props) => {
  const { Form, formData } = useFetcher();
  const favorite = useMemo(() => {
    if (!formData) {
      return propFavorite;
    }

    const formFavorite = formData.get('favorite');
    return formFavorite === 'true';
  }, [formData, propFavorite]);

  return (
    <Form method='post'>
      <Button
        type='submit'
        variant='text'
        name='favorite'
        value={favorite ? 'false' : 'true'}
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
        sx={{
          boxShadow: 'none',
          fontSize: '1.5rem',
          fontWeight: 400,
          padding: 0,
          color: favorite ? '#eeb004' : '#a4a4a4',
          minWidth: 'auto',
        }}
      >
        {favorite ? <StarIcon /> : <StarOutlineIcon />}
      </Button>
    </Form>
  );
};
export default FavoriteButton;
