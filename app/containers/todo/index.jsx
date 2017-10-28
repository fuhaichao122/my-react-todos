import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import TodoHeader from '../../components/Header'
import TodoList from '../../components/TodoList/index.js'
import TodoFooter from '../../components/Footer'

export default class Todos extends React.Component {
	constructor(props) {
		super(props);
		// this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			todos: [],
			isCheckAll: false
		}
	}

	//todo = {isDone: false, text: 'do something'}
	//检查是否全选状态
	checkAll() {
		let isCheckAll = false;
		if (this.state.todos.every(todo => todo.isDone)) {
			isCheckAll = true;
		}
		// console.log(this.state.todos)
		this.setState({
			todos: this.state.todos,
			isCheckAll: isCheckAll
		})
	}

	//添加todo
	addTodo(todoItem) {
		this.state.todos.push(todoItem);
		this.checkAll();
	}

	//改变todo的状态
	changeTodoState(index, isDone, isChangeAll=false) {
		if (isChangeAll) {
			this.setState({
				todos: this.state.todos.map(todo => {
					todo.isDone = isDone;
					return todo;
				}),
				isCheckAll: isDone
			})
		} else {
			this.state.todos[index].isDone = isDone;
			this.checkAll();
		}
	}

	//清除已经完成的todo
	clearDones() {
		let todos = this.state.todos.filter(todo => !todo.isDone);//error 箭头函数的使用
		this.setState({
			todos,
			isCheckAll: false
		})
	}

	//删除某个todo
	deleteTodo(index) {
		let todos = this.state.todos.filter((todo, i) => {
			if (i !== index) {
				return todo;//error没有使用return
			}
		});
		this.setState({
			todos: todos
		})
	}

	render() {
		let count = {
			todoCount: this.state.todos.length || 0,
			todoDonesCount: (this.state.todos && this.state.todos.filter(todo => todo.isDone).length) || 0//error  (todo) => {todo.isDone}
		};
		return (
			<div className="panel">
				<TodoHeader addTodo={this.addTodo.bind(this)} />
				<TodoList todos={this.state.todos} deleteBtn={this.deleteTodo.bind(this)} changeTodoState={this.changeTodoState.bind(this)} />
				<TodoFooter {...count} isCheckAll={this.state.isCheckAll} clearDones={this.clearDones.bind(this)} changeTodoState={this.changeTodoState.bind(this)} />
			</div>
		)
	}
}
