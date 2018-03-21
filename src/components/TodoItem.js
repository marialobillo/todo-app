var React = require('react');

var TodoItem = function(props){
	return (
		<li className="list-group-item row justify-content-between">
			<span className="col-md-5 btn-left todo-item">{props.todo}</span>
			<button
				className="btn btn-danger btn-right"
				onClick={props.onDeleteBtnClick}
				value={props.index}
				>
				Delete</button>
		</li>
	);
}


module.exports = TodoItem;
