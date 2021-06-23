import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, {Component} from 'react';
import './App.css';
import Todos from './components/todo/Todos'
import Header from './components/header/Header';
import AddTodo from './components/addTodo/AddTodo';
import About from './components/about/About';

import uuid from 'react-uuid';


// function App() {

//   const name="Tony";

//   return (
//     <div className="App">
//       <h1>Hello {name}</h1>
//     </div>
//   );S
// }s
class App extends Component{

  state={
    todos:[]
  }

  //get todos
  //Life Cycle Method
  componentDidMount(){
    this.setState({todos:JSON.parse( localStorage.getItem("todos"))});
  }

  //mark todos
  markComplete=(id)=>{
    this.setState({todos: this.state.todos.map(todo=>{
      if(todo.id===id){
        todo.completed=!todo.completed
     }
     return todo;
    })})
    localStorage.setItem("todos",JSON.stringify(this.state.todos))
  }

  //Delete Todos
  deleteTodo=(id)=>{
    this.setState({todos: [...this.state.todos.filter(todo=>
      todo.id!==id)]})
    localStorage.setItem("todos",JSON.stringify([...this.state.todos.filter(todo=>
        todo.id!==id)]));
  }

  //add Todo
  addTodo=(title)=>{
    const newTodo={
      id:uuid(),
      title:title,
      completed:false,
    }
    this.setState({todos:[...this.state.todos, newTodo]});
    localStorage.setItem("todos",JSON.stringify([...this.state.todos,newTodo]))
  }

  render(){
    return( 
      <Router>
        <div className="app">
          <div className="container">
            <Header />
            <Route exact path="/" render={props=> (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
      );
  }
}
export default App;

