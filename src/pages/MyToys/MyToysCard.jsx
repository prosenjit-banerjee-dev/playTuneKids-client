
import { AuthContext } from "../../Providers/AuthProvider";
import { Rating } from "flowbite-react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { data } from "autoprefixer";
import { Link } from "react-router-dom";

const MyToysCard = ({ updateToys, toys, setUpdateToys, user }) => {
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const {
    _id,
    name,
    seller_name,
    seller_email,
    price,
    description,
    sub_category,
    quantity,
    rating,
    status,
  } = toys || {};
  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`https://play-tune-kids-server-pbrudro.vercel.app/addedtoys/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data?.deletedCount > 0) {
                swalWithBootstrapButtons.fire(
                  "Deleted!",
                  "Your toys has been deleted.",
                  "success"
                );
                const remaining = updateToys?.filter((toy) => toy._id !== id);
                setUpdateToys(remaining);
              }
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your abort to delete",
            "error"
          );
        }
      });
  };
  return (
    <>
      <tbody>
        {/* row */}
        <tr>
          <td>
            <div className="flex items-center space-x-3">
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
            <Link to={`/edittoys/${_id}`} className="btn btn-outline mr-5">
              Edit
            </Link>
            

            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-outline btn-error"
            >
              Delete
            </button>
          </th>
        </tr>
      </tbody>
    </>
  );
};

export default MyToysCard;
