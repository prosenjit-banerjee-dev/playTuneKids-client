import { Rating } from "flowbite-react";
import { Link } from "react-router-dom";

const CategoryCard = ({ c }) => {
  const {
    _id,
    name,
    seller_name,
    picture_url,
    seller_email,
    price,
    description,
    sub_category,
    quantity,
    rating,
    status,
  } = c || {};

  return (
    <div className="card w-96 h-56 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price: {price}</p>
        <div>
          <Rating>
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star filled={false} />
            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
              {rating} out of 5
            </p>
          </Rating>
        </div>
        <p>Available Quantity: {quantity}</p>
        <div className="card-actions justify-end">
          <Link to={`https://playtunekids-client.web.app/allToys/${_id}`}>
            <button className="btn btn-primary btn-outline btn-md">
              View details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
