export interface IUserState {
  name?: string;
  email?: string;
  password?: string;
  verified: boolean;
  avatar?: string;
}

export const state: IUserState = {
  verified: false
};
