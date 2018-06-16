import * as ActionTypes from '../action-types/index';

const InitialState = {
    appName: "ToDooo",
    showIsUrgent: false,
    todoList: [],
    order: false,
}

export const reduce = (state = InitialState, action) => {
    switch (action.type) {
        case ActionTypes.TODO_ADD: {
            let newList = state.todoList.map(todo => todo);
            newList.push(action.todo);

            let newState = Object.assign({}, state, {todoList: newList});
            return newState;
        }

        case ActionTypes.TODO_DELETE: {
            let newList = state.todoList.filter(todo => {
                if (todo.id === action.id) {
                    return false;
                }
                else {
                    return true;
                }
            });

            let newState = Object.assign({}, state, {todoList: newList});
            return newState;
        }

        case ActionTypes.TOGGLE_IS_URGENT: {
            let newState = Object.assign({}, state, {showIsUrgent: !state.showIsUrgent});
            return newState;
        }

        case ActionTypes.TOGGLE_ORDER: {
            let newState = Object.assign({}, state, {order: (action.order)? true: false});
            return newState;
        }

        default: {
            return state;
        }
    }
}