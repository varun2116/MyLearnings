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
          return state.map( todo => {
            todo.id === action.id ? { ...todo, completed : !todo.compeleted } : todo
          });
      default:
          return state;
    }
}
