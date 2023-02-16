import { Col, Row, Stack } from 'react-bootstrap';
import CancelButton from './cancel-button';
import SaveButton from './save-button';

const Actions = () => (
  <Row container>
    <Col xs={12} md={{ span: 10, offset: 2 }}>
      <Stack direction='horizontal' gap={2}>
        <SaveButton />
        <CancelButton />
      </Stack>
    </Col>
  </Row>
);

export default Actions;
