import { Col, Row } from 'react-bootstrap';
import { Outlet, useNavigation } from 'react-router-dom';
import Sidebar from './sidebar';

const Root = () => {
  const { state } = useNavigation();
  return (
    <Row
      className='justify-content-start align-items-center'
      style={{ height: '100vh' }}
    >
      <Col xs={12} md={3} className='h-100'>
        <Sidebar />
      </Col>
      <Col
        id='detail'
        xs={12}
        md={9}
        className={`h-100 ${state === 'loading' ? 'loading' : ''}`}
        style={{ padding: '2rem 4rem' }}
      >
        <Outlet />
      </Col>
    </Row>
  );
};

export default Root;
