import React from 'react';
import TodoList from './Components/TodoList'
import './App.css';
import _ from 'lodash';
import Axios from 'axios';
import {Button} from 'antd'

class App extends React.Component {
  state = {
    inputValue: "",
    todoList: [],
    editedId: null,
    editedText: null,
  }

  clickToSendRequest = () => {
    Axios.get("http://www.mocky.io/v2/5e82e4942f00006cfa2fc586")
    .then(response => {
      console.log(response.data)
      this.setState({
        todoList: response.data
      })
    })
     .catch(error => {
       console.log(error)
     })
  }

  addTodoItem = () => {
    const inputValue = this.state.inputValue;
    const todoList = this.state.todoList;
    const newTodoObj = {
      id: _.uniqueId(),
      task: inputValue
    }

    // อย่าทำแบบนี้นะ: this.state.todoList.push(inputValue);

    this.setState({
      inputValue: '',
      todoList: [newTodoObj, ...todoList]
    })
  }

  deleteItemById = targetId => {
    let newTodoList = this.state.todoList.filter(itemEle => targetId !== itemEle.id)

    this.setState({
      todoList: newTodoList,
    })
  }

  // componentDidMount(){
  //   this.clickToSendRequest
  // }

  editItemById = () => {
    const targetId = this.state.editedId;
    const editedText = this.state.editedText

    let newTodoList = this.state.todoList.map((todoItem) => {
      if (todoItem.id === targetId) {
        return {
          id: todoItem.id,
          task: editedText,
        }
      } else {
        return todoItem
      }
    })

    console.log(newTodoList)

    this.setState({
      todoList: newTodoList
    })
  }

  onChangeInputValue = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  onChangeEditedId = (e) => {
    this.setState({
      editedId: Number(e.target.value)
    })
  }

  onChangeEditedText = (e) => {
    this.setState({
      editedText: e.target.value
    })
  }

  render() {
    const inputValue = this.state.inputValue;
    const editedId = this.state.editedId;
    const editedText = this.state.editedText;

    return (
      <div className="container" >
        <br />
        <Button onClick={this.clickToSendRequest}>Click to send request</Button> 
        <br />
        <div className="row">
          <input value={inputValue} onChange={this.onChangeInputValue} className="form-control col-10 App" placeholder="Enter Todo-list" />
          <Button onClick={this.addTodoItem} type="button" className="col-2 App btn btn-primary">Add</Button>
        </div>
        <br />
        <div className="row">
          <input value={editedText} onChange={this.onChangeEditedText} className="form-control col-8 App" placeholder="Edit text here" />
          <input value={editedId} onChange={this.onChangeEditedId} className="form-control col-2 App" placeholder="Edited ID" />
          <Button onClick={this.editItemById} className="col-2 App btn btn-primary" >Edit</Button>
        </div>
        <br />
        <TodoList deleteItemById={this.deleteItemById} todoList={this.state.todoList} />
      </div>
    );
  }
}

export default App;
