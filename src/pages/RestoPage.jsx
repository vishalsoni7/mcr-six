import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ResturanContext } from "../context/ResturantContext";
import { Review } from "./Review";

export const RestroPage = () => {
  const {
    restroState: { restaurantsData, modal },
    restroDispatch,
  } = useContext(ResturanContext);

  const { restorId } = useParams();

  const currentRestro = restaurantsData.find((r) => r.id === +restorId);

  return (
    <div className="c">
      <div className="current">
        <div className="address">
          <h1> {currentRestro?.name} </h1>
          <span>
            {currentRestro.menu.map(({ name }) => (
              <span key={name}> {name} </span>
            ))}
          </span>
          <p> {currentRestro?.address} </p>
          <span> Average Rating: {currentRestro?.averageRating} </span>{" "}
        </div>
        <button
          onClick={() =>
            restroDispatch({ type: "TOGGLE_MODAL", payload: true })
          }
        >
          {" "}
          Add Review{" "}
        </button>
      </div>

      {modal && (
        <div
          onClick={() =>
            restroDispatch({ type: "TOGGLE_MODAL", payload: false })
          }
          className="habit_modal_outer_div"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="habit_modal_outer_container"
          >
            <Review />
          </div>
        </div>
      )}

      <h1> Reviews </h1>

      <div style={{ width: "100%" }}>
        {currentRestro?.ratings?.map((person, i) => (
          <div key={i} className="a">
            <div className="b">
              <div className="img-div">
                <img className="pp-img" src={person?.pp} />{" "}
                <span> {person?.revName} </span>
              </div>
              <span> {person?.comment} </span>
            </div>{" "}
            <button> {person?.rating} </button>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};
