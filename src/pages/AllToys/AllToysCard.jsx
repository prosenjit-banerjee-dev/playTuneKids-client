import { Rating } from "flowbite-react";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const AllToysCard = ({ toys }) => {
  const { user } = useContext(AuthContext);
  const {
    _id,
    name,
    picture_url,
    seller_name,
    seller_email,
    price,
    description,
    sub_category,
    quantity,
    rating,
  } = toys || {};
  return (
    <>
      <tbody>
        {/* row */}
        <tr>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-16 h-16">
                  <img src={picture_url} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">{name}</div>
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
            </div>
          </td>
          <td>
            ${price}
            <br />
          </td>
          <td>{sub_category}</td>
          <td>{quantity}</td>
          <td>
            {seller_name}
            <br />
            {user && (
              <span className="badge badge-ghost badge-sm">{seller_email}</span>
            )}
          </td>
          <th>
            <Link to={`https://playtunekids-client.web.app/allToys/${_id}`}>
              <button className="btn btn-outline btn-primary btn-xs">
                View details
              </button>
            </Link>
          </th>
        </tr>
      </tbody>
    </>
  );
};

export default AllToysCard;
