import React from 'react';
import PropTypes from 'prop-types';
import {deleteTodo} from './../redux/actions/index';

const TodoListItem = (props) => {
    let todo = props.todoItem;
    let date = new Date(todo.createdDateTime);
    console.log('date :', date);

    return (
        <div className="list-group-item">
            <div className="start-xs row">
                <span className="col-md-5"><b>{todo.name}</b></span>
                <span className="col-md-4">{`${date.getFullYear()}/${date.getMonth()}/${date.getDate()}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}</span>
                <span className="col-md-2 text-danger"><b>{todo.isUrgent&&"URGENT"}</b></span>
                <button className="col-md-1 btn btn-outline-danger" onClick={() => props.dispatch(deleteTodo(todo.id))}>X</button>
            </div>            
        </div>
    );
};

TodoListItem.propTypes = {
    todoItem: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        createdDateTime: PropTypes.number.isRequired,
        isUrgent: PropTypes.bool.isRequired
    }).isRequired,
    dispatch: PropTypes.func.isRequired
};

export default TodoListItem;