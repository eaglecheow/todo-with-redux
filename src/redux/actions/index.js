import * as ActionTypes from '../action-types/index';

export const addTodo = (todo) => {
    return {
        type: ActionTypes.TODO_ADD,
        todo
    }
}

export const deleteTodo = (id) => {
    return {
        type: ActionTypes.TODO_DELETE,
        id
    }
}

export const toggleIsUrgent = () => {
    return {
        type: ActionTypes.TOGGLE_IS_URGENT,
    }
}

export const toggleOrder = (order) => {
    return {
        type: ActionTypes.TOGGLE_ORDER,
        order
    }
}