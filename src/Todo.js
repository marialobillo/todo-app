var React = require('react');

class Todo extends React.Component{
	render(){
		return (
			<div>
				<input type="text" placeholder="Add Todo Item" />
			</div>
		);
	}
}

module.exports = Todo;
