import React, { FC, useState } from 'react';
import { Button, Layout, Row, Modal } from 'antd';
import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';

const Event: FC = () => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <Layout>
      <EventCalendar events={[]} />
      <Row justify='center'>
        <Button
          onClick={() => setModalVisible(true)}
        >Add event</Button>
      </Row>
      <Modal
        title='Add event'
        visible={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}
      >
        <EventForm />
      </Modal>
    </Layout>
  );
};

export default Event;