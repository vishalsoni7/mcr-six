import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ResturanContext } from "../context/ResturantContext";

export const Review = () => {
  const {
    restroState: { input },
    restroDispatch,
  } = useContext(ResturanContext);

  const { restorId } = useParams();

  const handleInput = (e) => {
    const { name, value } = e.target;
    restroDispatch({
      type: "UPDATE_INPUT",
      payload: {
        ...input,
        [name]: value,
        pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0",
        revName: "Vishal",
      },
    });
  };

  const submitHandler = () => {
    restroDispatch({
      type: "ADD_RATINGS",
      payload: { id: restorId },
    });
    restroDispatch({
      type: "UPDATE_INPUT",
      payload: {
        rating: "",
        comment: "",
        revName: "",
        pp: "",
      },
    });
    restroDispatch({ type: "TOGGLE_MODAL", payload: false });
  };

  return (
    <div>
      <h2> Add Your Review </h2>{" "}
      <div className="review">
        <span> Ratings: </span>
        <select name="rating" onChange={(e) => handleInput(e)}>
          {" "}
          <option value="1">1 </option> <option value="2"> 2</option>{" "}
          <option value="3"> 3</option> <option value="4"> 4</option>{" "}
          <option value="5">5 </option>{" "}
        </select>{" "}
      </div>
      <div className="review">
        <span> Comment: </span>{" "}
        <input name="comment" onChange={(e) => handleInput(e)} type="text" />{" "}
      </div>
      <button onClick={submitHandler}> Submit </button>
    </div>
  );
};
