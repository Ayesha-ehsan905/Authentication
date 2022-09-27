export interface IAuthContext {
  user: any;
  signIn: (user: string, password: string, callBack: VoidFunction) => void;
  signOut: (callBack: VoidFunction) => void;
}
