var React = require('react');

var TodosCount = function(props){
	return (
		<div className="alert alert-secondary">
			<h4>Total Todos: {props.todosCount}</h4>
		</div>
	);
}


module.exports = TodosCount;
