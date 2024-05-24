export interface IloginData {
  email: string;
  password: string;
}

export interface ILoginResponse {
  data: { userId: number };
}
