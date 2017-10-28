import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import List from './list.js'


export default class TodoList extends React.Component {
	constructor(props) {
		super(props);
		// this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render() {
		let todos = this.props.todos;
		return (
			<ul className="todo-list">
				{todos.map((todo, index) => {
					return <List key={index} index={index} {...this.props} {...todo} />
				})}
			</ul>
		)
	}
}