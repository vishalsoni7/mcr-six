import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { ResturanContext } from "../context/ResturantContext";
import { Home } from "./Home";

export const SelectedCuisine = () => {
  const {
    restroState: { restaurantsData },
  } = useContext(ResturanContext);

  const { cuisineId } = useParams();

  const restro = restaurantsData?.filter(
    (res) => res?.cuisine_id === +cuisineId
  );

  return (
    <div className="selected">
      <Home />

      <div>
        {restro?.map(({ id, menu, name }) => (
          <div className="selected-card" key={id}>
            <h2>{name}</h2>
            <div className="cards-layout">
              {menu?.map(({ name, price, imgSrc }) => (
                <NavLink key={price} className="link" to={`/resturant/${id}`}>
                  <div className="card">
                    <img src={imgSrc} alt={name} />
                    <p>{name}</p>
                    <span className="span-c"> {price}</span>
                    <span className="span-c">{restro?.name}</span>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
