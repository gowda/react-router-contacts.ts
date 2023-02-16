import { Row, Col, Stack } from 'react-bootstrap';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError() as { statusText?: string; message: string };

  return (
    <Row
      id='error-page'
      style={{ height: '100vh' }}
      className='align-items-center justify-content-center'
    >
      <Col xs={12}>
        <Stack>
          <h1 style={{ textAlign: 'center' }}>Oops!</h1>
          <p style={{ textAlign: 'center' }}>
            Sorry, an unexpected error has occurred.
          </p>
          <p style={{ textAlign: 'center' }}>
            <i>{error.statusText || error.message}</i>
          </p>
        </Stack>
      </Col>
    </Row>
  );
};

export default ErrorPage;
