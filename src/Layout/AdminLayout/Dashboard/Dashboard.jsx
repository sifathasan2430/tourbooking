import React from "react";
import { FaUsers, FaGlobe, FaDollarSign, FaClipboardList } from "react-icons/fa";
import StatCard from "../../../Component/StatCard/StatCard";

const DashboardCard = () => {
  // Dummy data for now
  
const stats = [
  {
    title: "Total Revenue",
    value: "$12,450",
    change: 8.2,
    icon: "revenue"
  },
  {
    title: "Total Users",
    value: "1,250",
    change: 5.1,
    icon: "users"
  },
  {
    title: "New Bookings",
    value: "320",
    change: -3.5,
    icon: "bookings"
  },
  {
    title: "Returning Visitors",
    value: "870",
    change: 0,
    icon: "users"
  }
];
  return (
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((item, index) => (
        <StatCard 
          key={index}
          title={item.title}
          value={item.value}
          change={item.change}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default DashboardCard;
