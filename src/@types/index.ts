import { MouseEventHandler } from "react";

export interface PropsTable {
  projectName?: string;
  month?: string;
  days?: string;
  hours?: string;
  minuts?: number;
  seconds?: number;
  deadline?: string;
}
export interface DataApi {
  name?: string;
  deadline: string;
  id: string;
  created_at: string;
  updated_at: string;
}
export interface closeModal extends PropsTable {
  closeModaFunction: () => void;
  closeModalFunctionButton: MouseEventHandler<HTMLButtonElement>;
  month?: string;
  day?: number;
  hour?: number;
  id?: string;
}
