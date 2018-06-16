import React from 'react';
import PropTypes from 'prop-types';

import TodoListItem from './TodoListItem';

const TodoList = (props) => {
    let todoList = props.todoList.sort((current, next) => {
        if (props.order) {
            return current.createdDateTime - next.createdDateTime;
        }
        else {
            return next.createdDateTime - current.createdDateTime;
        }
    });

    return (
        <div className="card m-2">
            <div className="card-header">
                <h2>Your To-Do</h2> 
            </div>
            <div className="list-group list-group-flush card-body">
                {
                    todoList.map(todo => {
                        if (props.showUrgent) {
                            return todo.isUrgent && <TodoListItem key={todo.id} todoItem={todo} dispatch={props.dispatch}/>;
                        }
                        else {
                            return <TodoListItem key={todo.id} todoItem={todo} dispatch={props.dispatch}/>;
                        }
                    })
                }
            </div>
        </div>
    );
};

TodoList.propTypes = {
    todoList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        createdDateTime: PropTypes.number.isRequired,
        isUrgent: PropTypes.bool.isRequired
    })).isRequired,
    order: PropTypes.bool.isRequired,
    showUrgent: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default TodoList;