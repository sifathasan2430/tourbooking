import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axios from "axios";
import UserAuthContext from "../../Context/Context";
import { useNavigate } from "react-router-dom";

const ListingsTable = () => {
  const navigate=useNavigate()
  const {user}=useContext(UserAuthContext)
  const [listings, setListings] = useState([]);
  useEffect(() => {
    if (!user?.email) return; 

    axios.get(`https://roommatefinder-server-site.vercel.app/admin/apartments?email=${user.email}`)
      .then((response) => {
        setListings(response.data);
      })
      .catch((error) => {
        console.error('Error fetching apartments:', error);
      });

  }, [user])
 const handleDelete = async (id) => {
  const confirm = await Swal.fire({
    title: 'Are you sure?',
    text: 'You won’t be able to revert this!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
  });

  if (confirm.isConfirmed) {
    // try {
    //   const res = await axios.delete(`https://roommatefinder-server-site.vercel.app/admin/delete-listing/${id}`);
    //   if (res.status === 200) {
    //     Swal.fire('Deleted!', 'Listing has been deleted.', 'success');
    //     setListings(prev => prev.filter(item => item._id !== id));
    //   }
    // } catch (error) {
    //   console.error(error);
    //   Swal.fire('Error!', 'Something went wrong.', 'error');
    // }
  }
};
console.log(listings)

  return (
    <div className="overflow-x-auto container  py-3 mx-auto  mt-6 rounded-lg ">
      <table className="min-w-full bg-white text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left font-semibold">Name</th>
            <th className="px-4 py-2 text-left font-semibold">Email</th>
            <th className="px-4 py-2 text-left font-semibold">Title</th>
            <th className="px-4 py-2 text-left font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {listings.map((item) => (
            <tr key={item._id} className="border-t">
              <td className="px-4 py-2">{item?.postedBy?.name}</td>
              <td className="px-4 py-2">{item?.postedBy?.email}</td>
              <td className="px-4 py-2">{item?.title}</td>
              <td className="px-4 py-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      Actions
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() =>navigate(`/dashboard/update-form/${item._id}`)}>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleDelete(item?._id)}
                      className="text-red-500"
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
            </tr>
          ))}
          {listings.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center py-4 text-gray-500">
                No listings found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListingsTable;
