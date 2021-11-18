import React, { useState, useEffect } from 'react';
import {
  Form,
  Input,
  Tag,
  Select,
  Button,
  Upload,
  message,
  Avatar,
  DatePicker,
  Row,
  Col,
} from 'antd';
import axios from 'axios';
import moment from 'moment';
import Swal from "sweetalert2";
import { useHistory } from 'react-router-dom';
import { LoadingOutlined, PlusOutlined, CloudDownloadOutlined } from '@ant-design/icons';

import Layout from '../../containers/Layout';
import { Card, SelectMultiple } from '../../commons';
import { Editor } from '../../components';
import { posts, group, categories }  from '../../mock/data';

const { Option } = Select;

/* eslint-disable no-template-curly-in-string */
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};
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
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 10;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

/* eslint-enable no-template-curly-in-string */

const EditContent = () => {
  let history = useHistory();
  const [form] = Form.useForm();
  const [data, setData] = useState(posts[0])
  const [toDo, onToDo] = useState([]);
  const [toDoDataUser, onToDoDataUser] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);
  const [editor, setEditor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(false);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos/").then(resp => {
      onToDo(state => {
        return resp.data.map(({ id, title }) => ({ id, label: title }));
      });
    });
  }, []);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos/").then(resp => {
      onToDoDataUser(state => {
        return resp.data
          .slice(0, 5)
          .map(({ id, title }) => ({ id, label: title }));
      });
    });
  }, []);

  const handleChangePhoto = async (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return;
    }
    if (info.file.status === 'done') {
      await getBase64(info.file.originFileObj, (avartar) => {
        setImageUrl(avartar);
      });
    }
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  const onFinish = (values) => {
    console.log(values);
    // form.resetFields();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be edit this content!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Edited");
        history.push('/content');
      }
    });
  };
  const onChange = (value) => {
    console.log(`selected ${value}`);
  }
  const onBlur = () => {
    console.log('blur');
  }

  const onFocus = () => {
    console.log('focus');
  }

  const onSearch = (val) => {
    console.log('search:', val);
  }

  const tagRender = (props) => {
    const { label, value, closable, onClose } = props;
    return (
      <Tag color={value} closable={closable} onClose={onClose} style={{ marginRight: 3 }}>
        {label}
      </Tag>
    );
  }
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  const options = [
    { value: 'gold' },
    { value: 'lime' },
    { value: 'green' },
    { value: 'cyan' }
  ];

  const disabledDate = (current) => {
    // Can not select days before today and today
    const start = new Date();
    return current && current < start.setDate(start.getDate() - 1);
  }

  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      console.log(file);
      onSuccess('ok');
    }, 0);
  };

  const handleChangeEditor = (content) => setEditor(content);

  const onChangeSelectMultiple = (val) => onToDoDataUser(val);

  const onChangeDatePicker = (date, dateString) => {
    // console.log("date", dateString);
    setDate(dateString);
  };

  return (
    <Layout>
      <Card>
        <Form
          form={form}
          layout="vertical"
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
          initialValues={{ 
            title: data.title,
            content: data.body,
            categories: data.category,
            website: toDo
          }}
        >
        <Row gutter={[16, 16]} className="mb-4">
          <Col xs={24} sm={12} md={16} lg={16} xl={16}>
              <Form.Item
                name={'title'}
                label="Title"
                rules={[
                  {
                    required: true,
                    message: 'Please enter title',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Content"
                name='content'
                rules={[
                  {
                    required: true,
                    message: 'Please enter content of post',
                  },
                ]}
              >
                <Editor
                  onChange={handleChangeEditor}
                  initialContent={data.body}
                  placeholder={"Write something or insert a heart ♥"}
                />
              </Form.Item>
              <Form.Item
                name={'website'}
                label="Website"
                rules={[
                  {
                    required: true,
                    message: 'Please select website',
                  },
                ]}
              >
                <SelectMultiple
                  dataBase={toDoDataUser}
                  toDos={toDo}
                  onChange={onChangeSelectMultiple}
                  onSelected={onToDoDataUser}
                />
              </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
              <Form.Item
                name={'categories'}
                label="Categories"
              >
                <Select
                  showSearch
                  placeholder="Select a group"
                  optionFilterProp="children"
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {
                    categories.map((item) => (
                      <Option value={item.id} key={item.id}>{item.name}</Option>
                    ))
                  }
                </Select>
              </Form.Item>
              <Form.Item
                name={'publishDate'}
                label="Publish Date"
                rules={[
                  {
                    required: true,
                    message: 'Please select date',
                  },
                ]}
              >
                <DatePicker
                  allowClear={false}
                  style={{ width: '100%' }}
                  showToday={false}
                  format={["DD/MM/YYYY"]}
                  // dateFormat="dd MMM yyyy"
                  disabledDate={disabledDate}
                  minDate={new Date()}
                  onChange={onChangeDatePicker}
                />
              </Form.Item>
              <Form.Item
                name={'group'}
                label="Group"
              >
                <Select
                  showSearch
                  placeholder="Select a group"
                  optionFilterProp="children"
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {
                    group.map((item) => (
                      <Option value={item.id} key={item.id}>{item.name}</Option>
                    ))
                  }
                </Select>
              </Form.Item>
              <Form.Item
                name={'tag'}
                label="Tag"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  mode="multiple"
                  showArrow
                  tagRender={tagRender}
                  style={{ width: '100%' }}
                  options={options}
                />
              </Form.Item>
              <Form.Item
                name={'feature_image'}
                label="Feature image"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="อัพโหลดรูปภาพขนาดไม่เกิน 5 MB เท่านั้น"
                rules={[
                  {
                    required: true,
                    message: 'Please images',
                  },
                ]}
              >
                <Upload
                  accept=".jpg, .jpeg, .png"
                  name="feature_image"
                  customRequest={dummyRequest}
                  listType="picture-card"
                  multiple={false}
                  showUploadList={false}
                  beforeUpload={beforeUpload}
                  onChange={handleChangePhoto}
                  onPreview={onPreview}
                // disabled={disableInput}
                >
                  {imageUrl !== '' ? (
                    <Avatar className="w-100" size={248} shape="square" src={imageUrl} />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              </Form.Item>
              <Form.Item>
                <Button type="primary" size="large" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </Layout>
  );
}

export default EditContent;
