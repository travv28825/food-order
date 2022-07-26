export interface UserIdentity {
  id: string;
  user_id: string;
  identity_data: {
    [key: string]: any;
  };
  provider: string;
  created_at: string;
  last_sign_in_at: string;
  updated_at?: string;
}

export interface User {
  id: string;
  email?: string;
  phone?: string;
  role?: string;
  app_metadata?: {
    provider?: string;
    [key: string]: any;
  };
  user_metadata?: {
    [key: string]: any;
  };
  aud?: string;
  confirmation_sent_at?: string;
  recovery_sent_at?: string;
  email_change_sent_at?: string;
  new_email?: string;
  invited_at?: string;
  action_link?: string;
  created_at?: string;
  confirmed_at?: string;
  email_confirmed_at?: string;
  phone_confirmed_at?: string;
  last_sign_in_at?: string;
  updated_at?: string;
  identities?: UserIdentity[];
}

export interface UserContextProps {
  userState: User;
}
