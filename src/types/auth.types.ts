//auth type
export type TUser = {
  user: string;
  role: string;
  iat: number;
  exp: number;
};
export type TAuthState = {
  user: null | TUser;
  token: null | string;
  // role: string | null;
};
