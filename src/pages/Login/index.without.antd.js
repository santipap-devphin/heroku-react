import React, { Fragment, useState, useEffect } from 'react';
import Form, { Field, useForm } from 'rc-field-form';
import axios from 'axios';

import { LoginWrapper } from './style'
import Input from '../../commons/Input';
import LabelField from '../../commons/LabelField';
import SelectMultiple from '../../commons/SelectMultiple';

const Error = ({ children }) => (
  <ul className="list-unstyled text-danger text-left">
    {children.map(error => (
      <li>{error}</li>
    ))}
  </ul>
);

const FieldState = ({ form, name }) => {
  const touched = form.isFieldTouched(name);
  const validating = form.isFieldValidating(name);
  return (
    <div
      style={{
        color: 'green',
        // position: 'absolute',
        // marginTop: -35,
        // left: 200,
      }}
    >
      {touched ? <span>Touched!</span> : null}
      {validating ? <span>Validating!</span> : null}
    </div>
  );
};

const myMessages = {
    default: '${name} 看起来怪怪的……',
    required: '你需要一个 ${displayName}',
    types: {
        number: '嗨，这个 ${name} 不是一个合格的 ${type}',
    },
    enum: '${name} 不在 ${enum} 中呢',
    whitespace: '${name} 不可以是空的啦',
    pattern: {
        mismatch: '${name} 并不符合格式：${pattern}',
    },
};

const Login = () => {
  const [form] = useForm();
  const [toDo, onToDo] = useState([]);
  const [toDoDataUser, onToDoDataUser] = useState([]);

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
  // eslint-disable-next-line no-undef
  const onFinish = values => {
    console.log('Finish:', values);
  };
  return (
    <LoginWrapper>
      <Form
        className="form-signin" 
        form={form}
        onFinish={onFinish}
        validateMessages={myMessages}
      >
        <LabelField 
          name="email"
          label=""
          messageVariables={{ displayName: '字段' }}
          rules={[
            { required: true },
            { required: true, message: <h1>Please input your E-mail!</h1> },
            { type: 'email', message: 'The input is not valid E-mail!', },
            // { type: 'enum', enum: ['aaa', 'bbb'] },
            // { type: 'date' },
            // { whitespace: true },
            // { pattern: /^\w{3}$/ },
          ]}>
          <Input placeholder="Email"/>
        </LabelField>
        <LabelField
          name="password"
          messageVariables={{ displayName: '密码' }}
          rules={[{ required: true }, { type: 'password'} ]}
        >
          <Input placeholder="password"/>
        </LabelField>
        {/* {(values, form) => {
          const usernameError = form.getFieldError('username');
          const passwordError = form.getFieldError('password');
          const errors = form.getFieldsError();
          if (errors) {
            console.log('Render with Errors:', values, form.getFieldsError());
          }

          return (
            <Fragment>
              <Field name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                ]}
              >
                <Input
                  // type="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={({ target: { value } }) => {
                    console.log('Email change:', value);
                  }}
                  // onFocus
                  // onBlur
                />
              </Field>
              <FieldState form={form} name="email" />
              <Error>{usernameError}</Error>

              <Field
                name="password"
                rules={[
                  { required: true },
                  context => ({
                    validator(_, __, callback) {
                      if (context.isFieldTouched('password2')) {
                        context.validateFields(['password2']);
                        callback();
                        return;
                      }
                      callback();
                    },
                  }),
                ]}
              >
                <Input className="form-control" placeholder="Password" />
              </Field>
              <FieldState form={form} name="password" />
              <Error>{passwordError}</Error>

              <br />

              <button
                className="btn"
                type="button"
                onClick={() => {
                  form.validateFields();
                }}
              >
                Validate All
              </button>

              <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
              <p className="mt-5 mb-3 text-muted">Forgot your password ?</p>
            </Fragment>
          );
        }} */}
        <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
        <p className="mt-5 mb-3 text-muted">Forgot your password ?</p>
      </Form>
      {/* <SelectMultiple
        dataBase={toDoDataUser}
        toDos={toDo}
        onSelected={onToDoDataUser}
      /> */}
    </LoginWrapper>
  );
}

export default Login;
