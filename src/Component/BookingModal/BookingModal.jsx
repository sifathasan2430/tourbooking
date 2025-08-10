import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import useAxiosSecure from '../../Customhook/useAxiosSecure';
import Swal from 'sweetalert2';
import UserAuthContext from '../../Context/Context';

const BookingModal = ({ packageData, children }) => {
const {user}=useContext(UserAuthContext)
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [open, setOpen] = useState(false); // Control modal

  const onSubmit = async (data) => {
    const bookingData = {
      
     tour_name: packageData.title,
     
     
      buyer_name: user.displayName,
      buyer_email: user.email,
      
      guide_email:packageData.guideEmail,
      guide_name: packageData.guideName,
      
      departure_date:packageData.
departureDate,
        departureLocation: packageData.location,



      tour_id: packageData._id,

      status: 'notpaid'
    };

    try {
      const res = await axiosSecure.post('/bookings', bookingData);
      if (res.data.insertedId) {
        Swal.fire({
          title: 'Success!',
          text: 'Your booking has been confirmed.',
          icon: 'success',
          confirmButtonText: 'Cool'
        });
        reset();       // clear form
        setOpen(false); // close modal
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Failed to make booking. Please try again.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book Your Package</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div>
              <Label>Package Name</Label>
              <Input value={packageData.title} disabled />
            </div>
            <div>
              <Label>Price</Label>
              <Input value={`$${packageData.price}`} disabled />
            </div>
            <div>
              <Label>Your Name</Label>
              <Input value={user?.displayName} disabled />
            </div>
            <div>
              <Label>Your Email</Label>
              <Input value={user?.email} disabled />
            </div>
            <div>
              <Label htmlFor="bookingDate">Booking Date</Label>
              <Input
                id="bookingDate"
                type="date"
                {...register("bookingDate", { required: true })}
              />
              {errors.bookingDate && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          </div>
          <Button type="submit">Confirm Booking</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
