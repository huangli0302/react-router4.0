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

class Task extends React.Component{
    render(){
        return(
            <div className="taskList">
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    rightContent={[
                    <Icon key="1" type="ellipsis" />,
                    ]}
                >审批
                </NavBar>
                <Router>
                    <div>
                        <NavLink to='/TaskList/CompleteTask'>已办按任务</NavLink> ;
                        <NavLink to='/TaskList/ToDoTask'>待办任务</NavLink>
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