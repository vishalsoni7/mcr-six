import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { ResturanContext } from "../context/ResturantContext";
import { Home } from "./Home";

export const SelectedCuisine = () => {
  const {
    restroState: { restaurantsData },
  } = useContext(ResturanContext);

  const { cuisineId } = useParams();

  const restro = restaurantsData?.find((res) => res?.id === +cuisineId);

  return (
    <div className="selected">
      <Home />
      <h2> {restro?.name} </h2>
      <div className="selected-card">
        {restro.menu?.map(({ name, price, imgSrc }) => (
          <NavLink key={price} className="link" to={`/resturant/${restro?.id}`}>
            <div className="card">
              <img src={imgSrc} alt={name} />
              <p> {name} </p>
              <span className="span-c"> {price} </span>
              <span className="span-c"> {restro?.name} </span>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
