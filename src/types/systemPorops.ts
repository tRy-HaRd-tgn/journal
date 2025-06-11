import { Dispatch, SetStateAction } from "react";

export interface SystempProps {
  img: string;
  text: string;
  link: string;
  setState: Dispatch<SetStateAction<any>>;
}
