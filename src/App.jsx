import React, { Component } from "react";
import Task from "./components/Task";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      add: true,
      name: "Task tracker",
      list: [],
    };
  }
  updateList = () => {
    let newItem = document.querySelector("#newList").value;
    let list = [
      ...this.state.list,
      {
        task: newItem,
        id: Math.round(Math.random(1, 10000) * 100),
        important: false,
      },
    ];
    if (newItem.length < 2) {
      alert("Please type something!");
    } else {
      this.setState({
        list: list,
      });
    }
    document.querySelector("#newList").value = "";
  };

  enterEventHandle = (event) =>
    event.key === "Enter" ? this.updateList() : "";

  remove = (id) => {
    let list = this.state.list.filter((task) => task.id !== id);
    this.setState({
      list,
    });
  };
  reset = () => {
    let result = window.confirm("Are you sure want to reset the list?");
    if (result) {
      this.setState({ list: [] });
    }
  };
  toggleImportant = (listItem) => {
    let index = this.state.list.indexOf(listItem);
    let item = this.state.list[index];
    let importantItem = (item.important = !item.important);
    this.setState({
      important: importantItem,
    });
  };
  render() {
    return (
      <div className="wrapper p-0 m-5">
        <div className="text-center">
          <h5 className="container bg-dark text-light p-2">
            {this.state.name}
          </h5>
          <div className="input-holder">
            <input
              onKeyUp={this.enterEventHandle}
              className="w-100 p-1 text-center"
              placeholder="New list item..."
              id="newList"
              type="text"
            />
          </div>
          <button
            onClick={this.updateList}
            className="btn btn-primary w-100 m-0"
          >
            ADD
          </button>
          <button onClick={this.reset} className="btn btn-danger w-100">
            Reset
          </button>
        </div>
        {this.state.list.length >= 1 ? (
          this.state.list.map((listItem) => (
            <Task
              key={listItem.id}
              listItem={listItem}
              remove={this.remove}
              toggleImportant={this.toggleImportant}
            />
          ))
        ) : (
          <h1 className="empty-list">List is empty...</h1>
        )}
      </div>
    );
  }
}

export default App;
