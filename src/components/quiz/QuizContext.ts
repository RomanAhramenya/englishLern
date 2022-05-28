import { createContext } from "react";
export interface AppContextInterface {
    page:string,
      setPage:(page:string)=>void,
      score:number,
      setScore:(score:number)=>void,
  }
export const QuizContext = createContext<AppContextInterface | null>(null)