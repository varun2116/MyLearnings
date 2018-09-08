import { types } from '../constants/actionTypes';

export default function reducer(state = [], action){

    switch (action.type) {
      case types.ADD_TODO:
          return [...state, {
                              id:action.id,
                              text:action.payload,
                              completed: false
                            }]

      case types.TOGGLE_TODO:
          return state.map( (todo) =>
            //todo.id === action.id ? todo : todo //{ ...todo, completed : !todo.completed } : todo
            (todo.id === action.id) ? {id:todo.id, text:todo.text, completed: !todo.completed} : todo
            /*if(todo.id === action.id){
                return {id:todo.id, text:todo.text, completed: !todo.completed};
            }*/
            //return todo;
          );
      default:
          return state;
    }
}
