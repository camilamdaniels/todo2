import React, { Component } from 'react';
import './TodoItem.css';
import './TodoForm.css';
import './Todo.css';

class TodoItem extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isEditing: false,
			task: this.props.task,
			completed: false
		}

		this.handleEdit = this.handleEdit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleComplete = this.handleComplete.bind(this);
	}

	markCompleted() {
		this.setState({
			completed: !this.state.completed
		})
	}

	handleComplete(event) {
		this.markCompleted();
	} 


	handleSubmit(event) {
		event.preventDefault();
		this.props.update(this.state.task, this.props.id);
		this.setState({
			isEditing: false
		})
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	edit() {
		this.setState({
			isEditing: true
		});
	}

	handleEdit(event) {
		this.edit();
	}

	handleDelete(event) {
		this.props.delete(this.props.id);
	}

	render() {
		if (this.state.isEditing) {
			return (
				<div className="Todo-edit-form">
					<form onSubmit={this.handleSubmit}>
						<input 
							type="text"
							name="task"
							value={this.state.task}
							onChange={this.handleChange}
					/>
					<button>SAVE</button>
					</form>
				</div>
			)
		}

		return(
			<ul className="Todo">
				<li onClick={this.handleComplete} className={this.state.completed ? "Todo-task completed" : "Todo-task"}>{this.props.task}</li>
				<div className="Todo-buttons">
					<button onClick={this.handleEdit}>Edit</button>
					<button onClick={this.handleDelete}>Delete</button>
				</div>
			</ul>
		)
	}
}

export default TodoItem;