import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ResturanContext } from "../context/ResturantContext";

export const Home = () => {
  const {
    restroState: { cuisineData },
  } = useContext(ResturanContext);

  return (
    <div>
      <h1> Food Odering App </h1> <h3> Select Your Cuisine: </h3>
      <div>
        {" "}
        {cuisineData.map(({ id, name }) => (
          <button key={id}>
            <NavLink className="link" to={`/cuisine/${id}`}>
              {" "}
              {name}{" "}
            </NavLink>{" "}
          </button>
        ))}{" "}
      </div>
    </div>
  );
};
