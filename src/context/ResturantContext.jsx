import { createContext, useReducer } from "react";
import { Reducer, restroInitialState } from "../reducer";

export const ResturanContext = createContext();

export const ResutantProvider = ({ children }) => {
  const [restroState, restroDispatch] = useReducer(Reducer, restroInitialState);
  const values = { restroState, restroDispatch };
  return (
    <>
      {" "}
      <ResturanContext.Provider value={values}>
        {" "}
        {children}{" "}
      </ResturanContext.Provider>{" "}
    </>
  );
};
