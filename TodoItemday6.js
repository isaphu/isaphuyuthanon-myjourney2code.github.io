import React, { Component } from 'react'
import './TodoItem.css'

class TodoItem extends Component {

  render() {
    const task = this.props.task;
    const id = this.props.id;

    function handleDelete() {
      return this.props.deleteItemById(id)
    }

    return (
      <li className="list-group-item">
        <div className="container">
          <div className="row">
            <div className="col-10 todo-item">
              ID: {id} || {task}
            </div>
            <div onClick={handleDelete} className="col-2 btn btn-danger">
              Delete
          </div>
          </div>
        </div>
      </li>
    )
  }
}

export default TodoItem;


