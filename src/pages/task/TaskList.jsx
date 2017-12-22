import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    NavLink
  } from 'react-router-dom';
import { Toast,NavBar, Icon} from 'antd-mobile';
import axios from 'axios';
import ToDoTask from './ToDoTask.jsx';
import CompleteTask from './CompleteTask.jsx';
import './css/task.css';
class Task extends React.Component{
    render(){
        return(
            <div className="taskList">
                <NavBar
                    mode="dark"
                    rightContent={[
                    <Icon key="1" type="ellipsis" />,
                    ]}
                >我的任务
                </NavBar>
                <Router>
                    <div>
                        <div className="taskTitle">
                        <NavLink to='/TaskList/CompleteTask' activeClassName="select">已办按任务</NavLink>
                        <NavLink to='/TaskList/ToDoTask' activeClassName="select">待办任务</NavLink>
                        </div>
                        <Route path="/TaskList" render={() => (<Redirect to="/TaskList/ToDoTask"/>)}></Route >
                        <Route path="/TaskList/ToDoTask" component={ToDoTask} />
                        <Route path="/TaskList/CompleteTask" component={CompleteTask} />
                    </div>
                </Router>
            </div>
        );
    }
}
export default Task