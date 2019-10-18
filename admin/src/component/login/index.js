import React,{Component} from 'react'
import { Form, Icon, Input, Button, Checkbox ,Card,message} from 'antd';
import './index.less'
class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        message.error("输入信息有误请重试")
        //console.log('Received values of form: ', values);
      }else{
        this.$axios.post('/yapi/admin/login',JSON.stringify({us:123,ps:123}))
        .then((values)=>{
          console.log(values)
        })
        message.success("登陆成功1s后跳转首页",1,()=>{
          this.props.history.push('/admin')
        })
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className = "login-box">
      <Card style={{width:'300px',position:'fixed',top:'17vh',right:'50px'}}>
          <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
      </Card>
      </div>
    );
  }
}

const LoginForm = Form.create({ name: 'normal_login' })(Login);

// ReactDOM.render(<WrappedNormalLoginForm />, mountNode);
// class Login extends Component{
//     render(){
//         return(
//             <div className="login">
//                 这里是登录页面
//             </div>
//         )
//     }
// }
export default LoginForm