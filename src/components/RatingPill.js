import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function RatingPill({rating}) {
  return (
    <div
      className={`bg-${
        Number(rating) < 3 ? "danger" : "success"
      } text-white product-rating px-1`}
    >
      {rating} <FontAwesomeIcon icon={faStar} />
    </div>
  );
}

export default RatingPill;
