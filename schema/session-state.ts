export default interface SessionState {
  _id: string;
  isLoggedIn: boolean;
  username: string;
  email: string;
  subscription: number;
}
