import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import "./TodoList.css";
import './Todo.css';

class TodoList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			todos: []
		}

		this.addTodo = this.addTodo.bind(this);
		this.delete = this.delete.bind(this);
		this.update = this.update.bind(this);
	}

	update(task, id) {
		let newTodos = [...this.state.todos];

		for (let i = 0; i < newTodos.length; i++) {
			if (newTodos[i].id === id) newTodos[i].task = task;
		}

		this.setState({
			todos: newTodos
		})
	}

	delete(id) {
		this.setState({
			todos: this.state.todos.filter(todo => todo.id !== id)
		})
	}

	addTodo(todo) {
		this.setState({
			todos: [...this.state.todos, todo]
		})
	}

	render() {
		return (
			<div className="TodoList">
				<h1>
					Todo List! <span>Surprisingly, no cats were harmed while developing this innovative app.</span>
				</h1>
				<TodoForm addTodo={this.addTodo}/>
				{this.state.todos.map((todo) => (
					<TodoItem task={todo.task} delete={this.delete} key={todo.id} id={todo.id} update={this.update}/>
					))
				}
			</div>
		)
	}
}

export default TodoList;