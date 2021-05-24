import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    todo: "",
    todoList: [],
    option: 0,
  };

  onChangeTodo = (event) => {
    this.setState({ todo: event.target.value });
  };

  onAddTodo = () => {
    const len = this.state.todoList.length;
    this.setState({
      todoList: [
        ...this.state.todoList,
        { todo: this.state.todo, complete: false, index: len }
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
    const handleClick = (index) => {
      const curArr = this.state.todoList;
      delete curArr[index];
      this.setState({todoList: curArr});
    }

    const handleCopy = (items) => {
      const curArr = this.state.todoList;
      items.index = this.state.todoList.length;
      curArr.push(items);
      this.setState({todoList: curArr});
    }

    const handleShowAll = () => {
      this.setState({option : 0});
    }

    const handleShowCompleted = () => {
      this.setState({option : 1});
    }

    const handleShowPending = () => {
      this.setState({option : 2});
    }

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
          <button onClick = {() => {handleShowAll()}}>Show All</button>
          <button onClick={() => {handleShowCompleted()}}>Show Completed</button>
          <button onClick = {() => {handleShowPending()}}>Show Pending</button>
        </div>
        <ul>
          {this.state.todoList.map((item, index) => {
            console.log(item);
            if(item.complete && (this.state.option === 0 || this.state.option === 1)) {
              return (
                <li className={item.complete ? "completedTodo" : ""} key={index}>
                  <input
                    type="checkbox"
                    checked={item.complete}
                    onChange={() => {this.onCompleted(index)}}
                  />
                  <span>{item.todo}</span>
                  <button onClick={() => handleClick(item.index)}>Delete Todo</button>
                  <button onClick = {() => handleCopy(item)}>Copy Todo</button>
                </li>
              );
            }
            else if(!item.complete && (this.state.option === 0 || this.state.option === 2)) {
              return (
                <li className={item.complete ? "completedTodo" : ""} key={index}>
                  <input
                    type="checkbox"
                    checked={item.complete}
                    onChange={() => {this.onCompleted(index)}}
                  />
                  <span>{item.todo}</span>
                  <button onClick={() => handleClick(item.index)}>Delete Todo</button>
                  <button onClick = {() => handleCopy(item)}>Copy Todo</button>
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}

export default App;
