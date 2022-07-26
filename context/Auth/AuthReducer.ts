import { AuthState } from "./type";

type ActionAuthReducer =
  | { type: 'LOGIN_REQUEST' }
  | { type: 'LOGIN_SUCCESS' }
  | { type: 'LOGIN_ERROR'; payload: string }
  | { type: 'LOGOUT' };

const INITIAL_STATE: AuthState = {
  loading: false,
  checkEmail: false,
  errorMessage: '',
};

const AuthReducer = (
  state: AuthState = INITIAL_STATE,
  action: ActionAuthReducer,
): AuthState => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        checkEmail: true,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
      };
    default:
      return state;
  }
};

export { INITIAL_STATE, AuthReducer };
