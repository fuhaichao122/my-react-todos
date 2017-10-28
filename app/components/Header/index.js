import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class TodoHeader extends React.Component {
	constructor(props) {
		super(props);
		// this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render() {
		return (
			<div className="panel-header">
				<input type="text" placeholder="Add a todo list" onKeyUp={this.handleKeyup.bind(this)} />
			</div>
		)
	}
	handleKeyup(event) {
		let value = event.target.value;
		if (event.keyCode === 13 && value.trim()) {
			let todoNewItem = {
				isDone: false,
				text: value
			};
			event.target.value = '';
			this.props.addTodo(todoNewItem);
		}		
	}
}

export default TodoHeader