import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import "./TodoForm.css";
import "./Todo.css";

class TodoForm extends Component {

	constructor(props) {
		super(props);

		this.state = {
			task: ''
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.addTodo({...this.state, id: uuid()});
		this.setState({
			task: ''
		})
	}
 
	render() {
		return(
				<form className="NewTodoForm" onSubmit={this.handleSubmit}>
					<label htmlFor="task">New Todo</label>
					<input 
						type="text"
						name="task"
						value={this.state.task}
						onChange={this.handleChange}
						id="task"
					/>
					<button>ADD TODO</button>
				</form>
		)
	}
}

export default TodoForm;