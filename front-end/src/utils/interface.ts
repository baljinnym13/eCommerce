export interface IGet {
  handleLogForm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  getCurrentUser: () => void;
  handleLogIn: () => void;
}
export interface IGet {
  handleLogForm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  getCurrentUser: () => void;
  handleLogIn: () => void;
}

export type SaveProduct = {
  _id: string;
  name: string;
  price: number;
  images: [string];
  discount: number;
};
export type PackProduct = {
  choice: string;
  _id: string;
  name: string;
  price: number;
  images: [string];
  discount: number;
};
export type Product = {
  name: string;
  description?: string;
  price: number;
  images: [string];
  discount: number;
  _id: string;
  category: string;
};
export type IProduct = {
  _id: string;
  name: string;
  description: string;
  price: number;
  images: [string];
  discount: number;
  isNew: boolean;
  category: string;
};

export interface IUser {
  firstName: String;
  lastName: String;
  email: string;
  password: String;
  repassword: String;
}

export interface ILoggedUser {
  firstName: string;
  lastName: string;
  email: string;
  profile_img: string;
}
// discount: number;
