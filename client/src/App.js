import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Task } from './components/Task';
import AddTask from './components/AddTask';
import {Register} from './components/Register';
import { SignIn } from './components/SignIn';


function App() {
  return (
    <Router>
      <NavBar/>
      <Route exact path="/task" component={Task}/>
      <Route exact path="/addtask" component={AddTask}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/signin" component={SignIn}/>
    </Router>
  );
}

export default App;
