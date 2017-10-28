import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class List extends React.Component {
	constructor(props) {
		super(props);
		// this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	handleMouseover() {
		this.button.style.display = 'inline';
	}

	handleMouseout() {
		this.button.style.display = 'none';
	}

	handleChange() {
		let isDone = !this.props.isDone;
		this.props.changeTodoState(this.props.index, isDone);
	}

	handleClick() {
		this.props.deleteBtn(this.props.index);
	}
	
	render() {
		let doneStyle = this.props.isDone ? {textDecoration: 'line-through'} : {textDecoration: 'none'};
		return (
			<li onMouseOver={this.handleMouseover.bind(this)} onMouseOut={this.handleMouseout.bind(this)}>
				<input type="checkbox" checked={this.props.isDone} onChange={this.handleChange.bind(this)} />
				<span style={doneStyle}>{this.props.text}</span>
				<button className="fr" ref={(btn) => {this.button = btn;}} style={{display:'none'}} onClick={this.handleClick.bind(this)}>删除</button>
			</li>
		)
	}
}

export default List