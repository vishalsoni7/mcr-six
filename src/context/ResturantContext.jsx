import { createContext, useEffect, useReducer } from "react";
import { Reducer, restroInitialState } from "../reducer";

export const ResturanContext = createContext();

export const ResutantProvider = ({ children }) => {
  const localStorageState =
    JSON.parse(localStorage.getItem("data")) || restroInitialState;

  const [restroState, restroDispatch] = useReducer(Reducer, localStorageState);
  const values = { restroState, restroDispatch };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(restroState));
  }, [restroState]);

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
