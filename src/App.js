import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    todo: "",
    todoList: [],
  };

  onChangeTodo = (event) => {
    this.setState({ todo: event.target.value });
  };

  onAddTodo = () => {
    this.setState({
      todoList: [
        ...this.state.todoList,
        { todo: this.state.todo, complete: false },
      ],
      todo: "",
    });
  };

  onCompleted = (index) => {
    const newTodoList = [...this.state.todoList];

    newTodoList[index] = {
      ...newTodoList[index],
      complete: !newTodoList[index].complete,
    };

    this.setState({ todoList: newTodoList });
  };

  render() {
    return (
      <div className="">
        <h3>Todo App</h3>
        <div>
          <input
            type="text"
            value={this.state.todo}
            onChange={this.onChangeTodo}
          />
          <button onClick={this.onAddTodo}>Add Todo</button>
        </div>
        <div className="filters">
          Filters:
          <button>Show All</button>
          <button>Show Completed</button>
          <button>Show Pending</button>
        </div>
        <ul>
          {this.state.todoList.map((item, index) => {
            return (
              <li className={item.complete ? "completedTodo" : ""}>
                <input
                  type="checkbox"
                  checked={item.complete}
                  onChange={() => this.onCompleted(index)}
                />
                <span>{item.todo}</span>
                <button>Delete Todo</button>
                <button>Copy Todo</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
