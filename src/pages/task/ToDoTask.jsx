import React from 'react';
import { Toast,NavBar, Icon} from 'antd-mobile';
import axios from 'axios';
export default class ToDoTask extends React.Component{
    constructor(props) {
        super(props);
        this.state = {list: [1,2,3],
        aa:123
        };
        this.listData = this.listData.bind(this);
    }
    componenWillMount(){
        this.listData();
    }
    listData(){
        axios.get('https://www.easy-mock.com/mock/5a17e84ab23118413626d2ff/example/getTaskList').then(res=>{
           // this.setState({list:res.data});
        })
    }
    render(){
        const tt = this.state.list;
        console.log(tt);
        return(
           <div>
               dsfds
           </div>
        );
    }
}