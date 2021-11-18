import React from 'react';
import { Form, Input, Button, Select } from 'antd';

import Layout from '../../containers/Layout';
import { Card } from '../../commons';

 const { Option } = Select;


/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const ChangePassword = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Layout>
      <Card className="col-12 col-xl-6">
        <Form
          layout="vertical"
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
        <Form.Item
          name={'youname'}
          label="Your Name"
          rules={[
            {
              required: false,
              message: 'Please enter your name.',
            },
          ]}
        >
        <Input value="Amilo" />  
        </Form.Item>
          <Form.Item
          name={'email'}
          label="Email"
          rules={[
            {
              required: false,
              message: 'Please enter your email.',
            },
          ]}
        >
        <Input />  
        </Form.Item>
        <Form.Item name="theme" label="Theme" rules={[{ required: true }]}>
            <Select
              placeholder="Select a theme for this user"
             //  onChange={onGenderChange}
              allowClear
            >
              <Option value="light">Light</Option>
              <Option value="park">Dark</Option>
              <Option value="primary">Primary</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name={'oldpass'}
            label="Current Password"
            rules={[
              {
                required: true,
                message: 'Please enter your current password.',
              },
            ]}
          >
            <Input.Password />
            
          </Form.Item>
          <Form.Item
            name={'newpass'}
            label="New Password"
            rules={[
              {
                required: true,
                message: 'Please enter your new password',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="Confirm New Password"
            dependencies={['newpass']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your new password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('newpass') === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Layout>
  );
}

export default ChangePassword;
