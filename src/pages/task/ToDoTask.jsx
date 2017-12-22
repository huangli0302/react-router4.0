import React from 'react';
import { Toast,NavBar, Icon} from 'antd-mobile';
import axios from 'axios';
import './css/todoTask.css';
export default class ToDoTask extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        list:null,
        aa:123
        };
    }
    componentWillMount () {
        axios.get('https://www.easy-mock.com/mock/5a17e84ab23118413626d2ff/example/getTaskList').then(res=>{
            //let data = JSON.parse(res.data);
            this.setState({list:res.data.tableData});
        })
    }
    render(){
        const tt = this.state.list;
        return(
           <div className="container">
             {tt&&tt.map((item,index) => {
                return (
                    <div key={index} className="todoTaskList">
                    <div>具体任务：{item.taskName}</div>
                    <div>期望状态：{item.produce}</div>
                    </div>
                )
                })}
           </div>
        );
    }
}