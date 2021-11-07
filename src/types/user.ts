import { Dispatch, SetStateAction } from "react";

export interface User {
  user?: string;
  setUser: Dispatch<SetStateAction<string>>;
}