import React, { useContext, useEffect, useState } from "react";
import TourCardGrid from "../Component/FeaturedCard/FeaturedCard";
import UserAuthContext from "../Context/Context";
import useAxiosSecure from "../Customhook/useAxiosSecure";
import Loader from "../Component/Loader";

const Allpackage = () => {
  const axiosSecure = useAxiosSecure();
  

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(""); // 'asc' or 'desc' or ''
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch tours whenever search or sort changes
  useEffect(() => {
    setLoading(true);
    axiosSecure
      .get("/alltourpackage", {
        params: {
          ...(search ? { location: search } : {}),
          ...(sort ? { sort } : {}),
        },
      })
      .then((res) => setTours(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [search, sort]);

  // Search submit handler
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.area.value.trim();
    setSearch(value);
  };

  // Reset filters
  const clearFilters = () => {
    setSearch("");
    setSort("");
  };

  return (
    <div className="p-4 container mx-auto">
      {/* Search and Sort Controls */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
          <label className="input flex items-center border border-gray-300 rounded px-2 py-1">
            <svg
              className="h-5 opacity-50 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              name="area"
              type="search"
              placeholder="Filter by location"
              defaultValue={search}
              className="outline-none border-none"
            />
          </label>
          <button type="submit" className="btn btn-neutral">
            Search
          </button>
        </form>

        {/* Sort select */}
        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="font-medium">
            Sort by Price:
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option value="">Default</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>

          {(search || sort) && (
            <button
              onClick={clearFilters}
              className="btn btn-sm btn-outline ml-4"
              type="button"
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>

      {/* Tours grid */}
      <h2 className="text-2xl font-bold mb-8 text-center">Available Tours</h2>

      {loading ? (
        <Loader />
      ) : tours.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <TourCardGrid key={tour._id} tour={tour} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No tours found.</p>
      )}
    </div>
  );
};

export default Allpackage;
