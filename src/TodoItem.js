import React, { Component } from 'react';

import { PropTypes } from "prop-types";

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px dotted #ccc',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    render() {
        const { id, title } = this.props.todo
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {''}
                    {title}
                    <button style={buttonStyle} onClick={this.props.deleteTodo.bind(this, id)}>X</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
const buttonStyle = {
    background: '#ff0000',
    color: '#FFF',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
