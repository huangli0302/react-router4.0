import React, { Component } from 'react';
import { createForm } from 'rc-form';
import axios from 'axios';
import './Login.css';
import cookie from'js-cookie'
import { Toast,NavBar, Icon,InputItem,Picker, List,Button,WingBlank} from 'antd-mobile';
// import Text from '../node_modules/_antd-mobile@2.1.1@antd-mobile/lib/text';
class App extends Component {
  constructor(props) { 
    super(props) 
    this.state = { 
      source:[],
      data:{
        username:'',
        sourceId:'',
        password:''
      },
      load:false,
      sourceList:[]
     }
     this.login = this.login.bind(this);
   }
  
   login(){
   	//向TestWrapper组件的context属性中的router添加一个路由地址。这句话的作用等同于：window.location.href='xxx/Test'
    //this.context.router.push("/Test");
    axios.post('https://www.easy-mock.com/mock/5a17e84ab23118413626d2ff/example/login').then(res=>{
      if(res.data.success){
        sessionStorage.setItem("token",res.data.token);
        this.props.history.push('/TaskList');
      }
    
    });
    
   }
  render() {
    const source = this.state.source;
    const { getFieldProps } = this.props.form;
    //const tt = [{'value':"123","label":321}];
    const tt = this.state.sourceList;
    return (
      <div className="App">
        <NavBar
            mode="dark"
            rightContent={[
              <Icon key="1" type="ellipsis" />,
            ]}
          >登录</NavBar>
          <div className="login">
            <div className="userMessage">
            <List renderHeader={() => ''}>
              <InputItem
                clear
                placeholder="请输入用户名"
                ref={el => this.autoFocusInst = el}
                onBlur={this.getUser}
              >用户名</InputItem>
              { source.length>0 &&
                <Picker data = {tt} cols={1} {...getFieldProps('district3')} className="forss"  onOk={this.getSourceId}>
                  <List.Item arrow="horizontal">数据源</List.Item>
                </Picker>
                }
              <InputItem
                clear
                type="password"
                placeholder="请输入密码"
                ref={el => this.customFocusInst = el}
                onBlur={this.getpassWord}
              >密&emsp;码</InputItem>
            </List>
            </div>
            <div className="loginButton"> 
              <WingBlank>
                {
                 this.state.load && <Button style={{backgroundColor:'#108ee9',color:"#fff"}} onClick={this.login} loading>登录</Button>
                }
                {
                 !this.state.load && <Button style={{backgroundColor:'#108ee9',color:"#fff"}} onClick={this.login}>登录</Button>
                }
              </WingBlank>
            </div>
          </div>
      </div>
    );
  }
}
const TestWrapper = createForm()(App);
// 向模块组件中，注入路由
// TestWrapper.contextTypes={
// 	router: React.PropTypes.object.isRequired 
// }

export default TestWrapper;
