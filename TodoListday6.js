import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col App">
          <ul className="list-group">
            {this.props.todoList.map(item => <TodoItem deleteItemById={this.props.deleteItemById} task={item.task} id={item.id} />)}
          </ul>
        </div>
      </div>
    )
  }
}

export default TodoList;


