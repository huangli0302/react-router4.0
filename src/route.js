import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import Login from './pages/login/Login.jsx';
import TaskList from './pages/task/TaskList.jsx';
// import ToDoTask from './pages/task/ToDoTask.jsx';
// import CompleteTask from './pages/task/CompleteTask.jsx';
const BasicExample = () => (
  <Router>
    <div className="rootRouter">
       <Route exact path="/" component={Login}/>
        <Route path="/TaskList" component={TaskList}/>
    </div>
  </Router>
)
export default BasicExample