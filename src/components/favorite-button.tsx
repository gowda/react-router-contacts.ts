import { useMemo } from 'react';
import { Button } from 'react-bootstrap';
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
        className='shadow-none fw-bold p-0'
        style={{
          color: favorite ? '#eeb004' : '#a4a4a4',
          minWidth: 'auto',
        }}
      >
        {favorite ? (
          <i className='bi bi-star-fill' />
        ) : (
          <i className='bi bi-star' />
        )}
      </Button>
    </Form>
  );
};
export default FavoriteButton;
