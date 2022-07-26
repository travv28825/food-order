export interface AuthState {
  loading: boolean;
  checkEmail: boolean;
  errorMessage: string;
}

export interface AuthContextProps {
  loginState: AuthState
  login: any;
  logout: any;
}

export interface authCredentials {
  email: string;
};
