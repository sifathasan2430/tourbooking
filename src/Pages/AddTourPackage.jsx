import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { FaTimes, FaPlus } from 'react-icons/fa';
import useAxiosSecure from '../Customhook/useAxiosSecure';
import { useContext } from 'react';
import UserAuthContext from '../Context/Context';
import { useMutation } from '@tanstack/react-query';


const categories = [
  "Adventure",
  "Family",
  "Luxury",
  "Cultural",
  "Wildlife",
  "Beach",
  "Cruise",
  "Honeymoon"
];


const difficulties = ["Easy", "Moderate", "Challenging"];


const PackageForm = ({ onCancel, onSubmitSuccess }) => {
  const { user } = useContext(UserAuthContext);
  const axiosSecure = useAxiosSecure();
const mutation=useMutation({
  mutationFn:async()=>{

  }
})

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
   
  } = useForm({
    defaultValues: {
      title: "",
      location: "",
      duration: "",
      departureDate: "",
      groupSize: "",
      difficulty: "Moderate",
      price: "",
      discount: "",
      description: "",
      featured: false,
      category: "Adventure",
      highlights: [{ text: "" }],
      itinerary: [{ day: 1, title: "", description: "" }],
      included: [{ text: "" }],
      notIncluded: [{ text: "" }],
      images: "",
      guideEmail: user?.email,
      guidePhoto: user?.photoURL,
      guideName: user?.displayName || user?.email,
    }
  });


  const {
    fields: highlightFields,
    append: appendHighlight,
    remove: removeHighlight
  } = useFieldArray({
    control,
    name: "highlights"
  });


  const {
    fields: itineraryFields,
    append: appendItinerary,
    remove: removeItinerary
  } = useFieldArray({
    control,
    name: "itinerary"
  });


  const {
    fields: includedFields,
    append: appendIncluded,
    remove: removeIncluded
  } = useFieldArray({
    control,
    name: "included"
  });


  const {
    fields: notIncludedFields,
    append: appendNotIncluded,
    remove: removeNotIncluded
  } = useFieldArray({
    control,
    name: "notIncluded"
  });


  const onSubmit = async (data) => {
    try {
      const packageData = {
        ...data,
        rating: 0,
        reviews: [],
        createdAt: new Date().toISOString(),
        status: "active"
      }
         const res = await axiosSecure.post("/addtourpackage", packageData);
   if (res.data.insertedId) {
        alert("Tour package created successfully!");
        reset();
        onSubmitSuccess?.();
      }
    } catch (error) {
      console.error("Error creating package:", error);
      alert("Failed to create package. Please try again.");
    }
  };


  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Create New Tour Package</h2>
     
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
     
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2">Package Title*</label>
            <input
              {...register("title", { required: "Title is required" })}
              className={`w-full px-4 py-2 border rounded-lg ${errors.title ? "border-red-500" : ""}`}
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
          </div>


          <div>
            <label className="block text-gray-700 mb-2">Location*</label>
            <input
              {...register("location", { required: "Location is required" })}
              className={`w-full px-4 py-2 border rounded-lg ${errors.location ? "border-red-500" : ""}`}
            />
            {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
          </div>


          <div>
            <label className="block text-gray-700 mb-2">Duration*</label>
            <input
              {...register("duration", { required: "Duration is required" })}
              className={`w-full px-4 py-2 border rounded-lg ${errors.duration ? "border-red-500" : ""}`}
            />
            {errors.duration && <p className="text-red-500 text-sm mt-1">{errors.duration.message}</p>}
          </div>


          <div>
            <label className="block text-gray-700 mb-2">Departure Date*</label>
            <input
              type="date"
              min={new Date().toISOString().split('T')[0]}
              {...register("departureDate", { required: "Departure date is required" })}
              className={`w-full px-4 py-2 border rounded-lg ${errors.departureDate ? "border-red-500" : ""}`}
            />
            {errors.departureDate && <p className="text-red-500 text-sm mt-1">{errors.departureDate.message}</p>}
          </div>


          <div>
            <label className="block text-gray-700 mb-2">Group Size*</label>
            <input
              type="number"
              min="1"
              {...register("groupSize", {
                required: "Group size is required",
                min: { value: 1, message: "Minimum 1 participant" }
              })}
              className={`w-full px-4 py-2 border rounded-lg ${errors.groupSize ? "border-red-500" : ""}`}
            />
            {errors.groupSize && <p className="text-red-500 text-sm mt-1">{errors.groupSize.message}</p>}
          </div>


          <div>
            <label className="block text-gray-700 mb-2">Difficulty Level*</label>
            <select
              {...register("difficulty")}
              className="w-full px-4 py-2 border rounded-lg"
            >
              {difficulties.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>


          <div>
            <label className="block text-gray-700 mb-2">Price ($)*</label>
            <input
              type="number"
              min="0"
              step="0.01"
              {...register("price", {
                required: "Price is required",
                min: { value: 0, message: "Price cannot be negative" }
              })}
              className={`w-full px-4 py-2 border rounded-lg ${errors.price ? "border-red-500" : ""}`}
            />
            {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
          </div>


          <div>
            <label className="block text-gray-700 mb-2">Discount (%)</label>
            <input
              type="number"
              min="0"
              max="100"
              {...register("discount", {
                min: { value: 0, message: "Minimum 0%" },
                max: { value: 100, message: "Maximum 100%" }
              })}
              className={`w-full px-4 py-2 border rounded-lg ${errors.discount ? "border-red-500" : ""}`}
            />
            {errors.discount && <p className="text-red-500 text-sm mt-1">{errors.discount.message}</p>}
          </div>


          <div className="flex items-center">
            <input
              type="checkbox"
              id="featured"
              {...register("featured")}
              className="h-5 w-5 text-amber-600 rounded"
            />
            <label htmlFor="featured" className="ml-2 text-gray-700">Featured Package</label>
          </div>


          <div>
            <label className="block text-gray-700 mb-2">Category*</label>
            <select
              {...register("category", { required: "Category is required" })}
              className={`w-full px-4 py-2 border rounded-lg ${errors.category ? "border-red-500" : ""}`}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
          </div>
        </div>


        {/* Description */}
        <div>
          <label className="block text-gray-700 mb-2">Description*</label>
          <textarea
            {...register("description", { required: "Description is required" })}
            rows="4"
            className={`w-full px-4 py-2 border rounded-lg ${errors.description ? "border-red-500" : ""}`}
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
        </div>


  
        <div>
          <label className="block text-gray-700 mb-2">Highlights*</label>
          {highlightFields.map((field, index) => (
            <div key={field.id} className="flex items-center mb-2">
              <input
                {...register(`highlights.${index}.text`, { required: "Highlight cannot be empty" })}
                className={`flex-1 px-4 py-2 border rounded-lg ${errors.highlights?.[index]?.text ? "border-red-500" : ""}`}
              />
              {highlightFields.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeHighlight(index)}
                  className="ml-2 p-2 text-red-500 hover:text-red-700"
                >
                  <FaTimes />
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => appendHighlight({ text: "" })}
            className="mt-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 flex items-center"
          >
            <FaPlus className="mr-2" /> Add Highlight
          </button>
        </div>


        {/* Itinerary */}
        <div>
          <label className="block text-gray-700 mb-2">Itinerary*</label>
          {itineraryFields.map((field, index) => (
            <div key={field.id} className="mb-6 p-4 border rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 mb-2">Day*</label>
                  <input
                    type="number"
                    min="1"
                    {...register(`itinerary.${index}.day`, {
                      required: "Day number is required",
                      min: { value: 1, message: "Minimum day is 1" }
                    })}
                    className={`w-full px-4 py-2 border rounded-lg ${errors.itinerary?.[index]?.day ? "border-red-500" : ""}`}
                  />
                  {errors.itinerary?.[index]?.day && (
                    <p className="text-red-500 text-sm mt-1">{errors.itinerary[index].day.message}</p>
                  )}
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2">Title*</label>
                  <input
                    {...register(`itinerary.${index}.title`, { required: "Title is required" })}
                    className={`w-full px-4 py-2 border rounded-lg ${errors.itinerary?.[index]?.title ? "border-red-500" : ""}`}
                  />
                  {errors.itinerary?.[index]?.title && (
                    <p className="text-red-500 text-sm mt-1">{errors.itinerary[index].title.message}</p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Description*</label>
                <textarea
                  {...register(`itinerary.${index}.description`, { required: "Description is required" })}
                  rows="3"
                  className={`w-full px-4 py-2 border rounded-lg ${errors.itinerary?.[index]?.description ? "border-red-500" : ""}`}
                />
                {errors.itinerary?.[index]?.description && (
                  <p className="text-red-500 text-sm mt-1">{errors.itinerary[index].description.message}</p>
                )}
              </div>
              <button
                type="button"
                onClick={() => removeItinerary(index)}
                className="mt-2 px-4 py-2 bg-red-100 hover:bg-red-200 rounded-lg text-red-700"
              >
                Remove Day
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => appendItinerary({
              day: itineraryFields.length + 1,
              title: "",
              description: ""
            })}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 flex items-center"
          >
            <FaPlus className="mr-2" /> Add Day
          </button>
        </div>


        {/* Included/Not Included */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2">What's Included*</label>
            {includedFields.map((field, index) => (
              <div key={field.id} className="flex items-center mb-2">
                <input
                  {...register(`included.${index}.text`, { required: "Item cannot be empty" })}
                  className={`flex-1 px-4 py-2 border rounded-lg ${errors.included?.[index]?.text ? "border-red-500" : ""}`}
                />
                {includedFields.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeIncluded(index)}
                    className="ml-2 p-2 text-red-500 hover:text-red-700"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => appendIncluded({ text: "" })}
              className="mt-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 flex items-center"
            >
              <FaPlus className="mr-2" /> Add Item
            </button>
          </div>


          <div>
            <label className="block text-gray-700 mb-2">Not Included</label>
            {notIncludedFields.map((field, index) => (
              <div key={field.id} className="flex items-center mb-2">
                <input
                  {...register(`notIncluded.${index}.text`)}
                  className="flex-1 px-4 py-2 border rounded-lg"
                />
                {notIncludedFields.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeNotIncluded(index)}
                    className="ml-2 p-2 text-red-500 hover:text-red-700"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => appendNotIncluded({ text: "" })}
              className="mt-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 flex items-center"
            >
              <FaPlus className="mr-2" /> Add Item
            </button>
          </div>
        </div>


      
        <div>
          <label className="block text-gray-700 mb-2">Image URL*</label>
          <input
            {...register("images", { required: "Image URL is required" })}
            className={`w-full px-4 py-2 border rounded-lg ${errors.images ? "border-red-500" : ""}`}
          />
          {errors.images && <p className="text-red-500 text-sm mt-1">{errors.images.message}</p>}
        </div>


    
        <div className="flex justify-end gap-4 pt-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-lg shadow transition"
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg shadow-md transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating..." : "Create Package"}
          </button>
        </div>
      </form>
    </div>
  );
};


export default PackageForm;

