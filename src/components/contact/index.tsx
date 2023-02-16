/* eslint-disable jsx-a11y/alt-text */
import { Col, Row, Stack } from 'react-bootstrap';
import FavoriteButton from '../favorite-button';
import { Contact as IContact } from '../../contact';
import Actions from './actions';
import Name from './name';
import TwitterLink from './twitter-link';
import Notes from './notes';

type Props = IContact;

const Contact = ({ first, last, avatar, favorite, twitter, notes }: Props) => (
  <Row id='contact' container spacing={2}>
    <Col xs='auto'>
      <img
        key={avatar}
        src={avatar}
        style={{
          width: '12rem',
          height: '12rem',
          backgroundColor: '#c8c8c8',
          borderRadius: '1.5rem',
          objectFit: 'cover',
        }}
      />
    </Col>
    <Col item>
      <Stack direction='horizontal' gap={1}>
        <Name first={first} last={last} />
        <FavoriteButton favorite={favorite} />
      </Stack>
      <TwitterLink twitter={twitter} />
      <Notes notes={notes} />
      <Actions />
    </Col>
  </Row>
);

export default Contact;
