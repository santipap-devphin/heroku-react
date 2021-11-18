import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
// import { userApi } from '../../apis';
// import { withRouter } from "react-router-dom";
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import { LoginStyled } from './style'
// import { userActions } from '../../store/actions';
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };
  }

  componentDidMount() {}

  onFinish = (values) => {
    this.setState({
      loading: true,
    });
    Swal.fire({
      title: 'Login Success.',
      timer: 1500,
      icon: 'success',
      showCancelButton: false,
      showConfirmButton: false,
    }).then(() => setTimeout(() => {
      localStorage.setItem('auth', JSON.stringify(new Date()));
      this.props.history.push('/dashboard')
    }, 1500));
    // userApi
    //   .login(values)
    //   .then(async (res) => {
    //     if (res) {
    //       this.setState({
    //         loading: false,
    //       });
    //       await localStorage.setItem('auth', res.accessToken);
    //       await localStorage.setItem('RefreshToken', res.refreshToken);
    //       Swal.fire({
    //         title: 'Login Success.',
    //         timer: 1500,
    //         icon: 'success',
    //         showCancelButton: false,
    //         showConfirmButton: false,
    //       }).then(() => setTimeout(() => this.props.history.push('/'), 1500));
    //     }
    //   })
    //   .catch((err) => {
    //     this.setState({
    //       loading: false,
    //     });
    //     throw err;
    //   });
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  render() {
    const { loading } = this.state;
    return (
      <LoginStyled>
        <Form
          name="basic"
          className="form-signin"
          layout="vertical"
          initialValues={{
            email: 'admin@admin.com',
            password: 'admin@admin.com',
          }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <div className="text-center mb-4">
            <div className="logo-form-signin">
              {/* <img
                className=""
                src="/assets/images/logo@2x.png"
                alt=""
                height={72}
              /> */}
            </div>
            {/* <h1 className="h3 mb-3 font-weight-normal">Lorem Ipsum</h1> */}
            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <code>when an unknown printer took a galley of type and scrambled it to make a type specimen book.</code></p> */}
          </div>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password minLength={8} />
          </Form.Item>

          <Form.Item>
            <div className="d-flex justify-content-end">
              {/* <Form.Item
                className="text-left"
                name="remember"
                valuePropName="checked"
                noStyle
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item> */}
              <Link
                className="login-form-forgot text-right"
                to="/forget-password"
              >
                Forgot password
              </Link>
            </div>
          </Form.Item>

          <Form.Item className="text-center mb-3">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button w-100"
              loading={loading}
            >
              Log in
            </Button>
          </Form.Item>
          <p className="mt-3 mb-3 text-center">© 2017-2020</p>
        </Form>
      </LoginStyled>
    );
  }
}

// const mapStateToProps = (state) => {
//   return { user: state.user };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     userActions: bindActionCreators(userActions, dispatch),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
export default Login;
