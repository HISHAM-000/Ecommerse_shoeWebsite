import { Product } from "./products.model";

export interface User {
  id?:string;
  fullName:string;
  email:string;
  password:string;
  role:string;
  cart?: Product[]
}