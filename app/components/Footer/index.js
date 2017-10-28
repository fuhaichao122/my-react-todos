import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class TodoFooter extends React.Component {
	constructor(props) {
		super(props);
		// this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	handleChange() {
		let checkAll = !this.props.isCheckAll;
		this.props.changeTodoState(null, checkAll, true);//error  event参数添加，如果要使用event
	}

	handleClick() {
		this.props.clearDones();
	}

	render() {
		return (
			<div className="clearfix todo-footer">
				<input type="checkbox" className="fl" checked={this.props.isCheckAll} onChange={this.handleChange.bind(this)} />
				<span className="fl">{this.props.todoDonesCount}已完成 / {this.props.todoCount}总数</span>
				<button className="fr" onClick={this.handleClick.bind(this)}>清除完成项</button>
			</div>
		)
	}
}

export default TodoFooter