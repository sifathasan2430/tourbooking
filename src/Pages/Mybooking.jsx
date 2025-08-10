import React, { useContext } from "react";
import UserAuthContext from "../Context/Context";
import Swal from "sweetalert2";
import useAxiosSecure from "../Customhook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Component/Loader";

const MyBooking = () => {
  const { user } = useContext(UserAuthContext);
  const axiosSecure = useAxiosSecure();

  const bookingCallApi = async () => {
    const response = await axiosSecure.get("/bookings", {
      params: { email: user?.email },
    });
    return response.data;
  };

  const {
    data: booking = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: bookingCallApi,
    enabled: !!user?.email, // only run if email exists
  });
console.log(booking)
  const updateStatus = (e, id) => {
    const status = e.target.value;
    axiosSecure
      .patch(
        "/updatestatus",
        { status },
        { params: { id } }
      )
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            title: "Status updated",
            icon: "success",
          });
        }
      })
      .catch((err) => console.log(err));
  };

  if (isLoading) return <Loader />;
  if (isError) return <p className="text-center text-red-500">Failed to load bookings.</p>;

  return (
    <div className="container mx-auto overflow-x-auto p-4 md:p-8">
      {booking.length > 0 ? (
        <table className="min-w-full table-auto border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
            <tr>
              <th className="py-3 px-4 border">#</th>
              <th className="py-3 px-4 border">Guide Info</th>
              <th className="py-3 px-4 border">Tour Name</th>
              <th className="py-3 px-4 border">Departure Date</th>
              <th className="py-3 px-4 border">Departure Location</th>
              <th className="py-3 px-4 border">Status</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {booking.map((item, index) => (
              <tr
                key={item._id}
                className="hover:bg-gray-50 transition duration-150"
              >
                <td className="py-3 px-4 border">{index + 1}</td>
                <td className="py-3 px-4 border">
                  <div className="flex items-center gap-3">
                    
                    <div className="text-left">
                      <div className="font-bold">{item.guide_name}</div>
                      <div className="text-xs text-gray-500">{item.guide_email}</div>
                      <div className="text-xs text-gray-500">{item.contactNo}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4 border">{item.tour_name}</td>
                <td className="py-3 px-4 border">{new Date(item.departure_date).toLocaleDateString()}</td>
                <td className="py-3 px-4 border">
                  {item.departureLocation}
                </td>
                <td className="py-3 px-4 border">
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500 py-10">
          You have no bookings yet.
        </p>
      )}
    </div>
  );
};

export default MyBooking;
