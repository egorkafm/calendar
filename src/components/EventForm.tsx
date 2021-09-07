import React, { FC } from 'react';
import { Form, Input } from 'antd';
import { rules } from '../utils/rules';

const EventForm: FC = () => {
  return (
    <Form>
      <Form.Item
        label="Event description"
        name="description"
        rules={[ rules.required() ]}
      >
        <Input 

        />
      </Form.Item>
    </Form>
  );
};

export default EventForm;