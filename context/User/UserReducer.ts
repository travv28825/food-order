import { User } from "./type";

type ActionAuthReducer =
  | { type: 'SET_USER'; payload: User }
  | { type: 'LOGIN_SUCCESS' }
  | { type: 'LOGIN_ERROR'; payload: string }
  | { type: 'LOGOUT' };



const UserReducer = (
  state: User,
  action: ActionAuthReducer,
): User => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state, ...action.payload
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
      };
    case 'LOGOUT':
      return {
        ...state,
      };
    default:
      return state;
  }
};

export { UserReducer };
