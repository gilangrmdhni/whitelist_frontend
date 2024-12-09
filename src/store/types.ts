export interface AuthState {
    token: string;
    loading: boolean;
    error: string | null;
  }
  
  export interface LoginPayload {
    username: string;
    password: string;
    token: string;
  }
  