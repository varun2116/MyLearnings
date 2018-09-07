import { types } from '../constants/actionTypes';

let nextTodoId = 0;

export function addTodo(payload){
    return {
        type: types.ADD_TODO,
        id: nextTodoId++,
        payload
    };
}

export function toggleTodo(id) {
    return {
        type: types.TOGGLE_TODO,
        id
    }
}
