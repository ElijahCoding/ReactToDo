import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'take out the trash',
                completed: false
            },
            {
                id: 2,
                title: 'go to store',
                completed: true
            },
            {
                id: 3,
                title: 'wash dishes',
                completed: false
            }
        ]
    }

    markComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }) })
    }

    delTodo = (id) => {
        console.log('deleting')
    }

  render() {
      return (
          <div className="App">
              <Todos todos={this.state.todos}
                     markComplete={ this.markComplete }
                     delTodo={ this.delTodo }
                     />
          </div>
      );
  }
}

export default App;
