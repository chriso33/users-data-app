export interface User {
  id: number;
  name: string;
  email: string;
  friends: {
    id: number,
    name: string,
    email: string,
  }[];
}