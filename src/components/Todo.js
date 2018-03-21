var React = require('react');
var TodoForm = require('./TodoForm');

class Todo extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			todos: []
		};
		this.handleNewTodoItem = this.handleNewTodoItem.bind(this);
	}
	handleNewTodoItem(todo){
		this.setState((prevState) => {
			var todos = prevState.todos.concat(todo);

			return {
				todos: todos
			};
		});
	}
	render(){
		var todoList = [];
		var todos = this.state.todos;
		for(let i = 0; i < todos.length; ++i){
			todoList.push(<li className="list-group-item">{todos[i]}</li>);
		}
		return (
			<div>
				<TodoForm onNewTodoItem={this.handleNewTodoItem} />
				<ul className="list-group">
					{todoList}
				</ul>
			</div>
		);
	}
}

module.exports = Todo;
