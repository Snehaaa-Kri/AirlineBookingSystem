import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,LineChart, Line, PieChart, Pie, Cell  
} from "recharts";
import { Link } from "react-router-dom";


const bookingsData = [
  { day: 'Mon', bookings: 120 },
  { day: 'Tue', bookings: 200 },
  { day: 'Wed', bookings: 150 },
  { day: 'Thu', bookings: 278 },
  { day: 'Fri', bookings: 189 },
  { day: 'Sat', bookings: 239 },
  { day: 'Sun', bookings: 349 },
];

const revenueData = [
  { name: 'Delhi-Mumbai', value: 400000 },
  { name: 'Chennai-Bangalore', value: 300000 },
  { name: 'Kolkata-Delhi', value: 200000 },
  { name: 'Hyderabad-Goa', value: 100000 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AdminDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">Admin Dashboard</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-xl shadow-md">Total Flights Today: 128</div>
        <div className="bg-white p-4 rounded-xl shadow-md">Active Users: 2543</div>
        <div className="bg-white p-4 rounded-xl shadow-md">Revenue Today: ₹1,20,000</div>
        <div className="bg-white p-4 rounded-xl shadow-md">Support Tickets: 12</div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-md h-96">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Bookings This Week</h2>
          <ResponsiveContainer width="100%" height="85%">
            <LineChart data={bookingsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="bookings" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md h-96">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Revenue by Route</h2>
          <ResponsiveContainer width="100%" height="85%">
            <PieChart>
              <Pie data={revenueData} dataKey="value" nameKey="name" outerRadius={100} label>
                {revenueData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>
        {/* Controls */}
      <div className="mt-8 flex justify-around items-center gap-4">
        <Link to="/flights">
          <button className="bg-blue-600 text-white p-4 rounded-xl shadow hover:bg-blue-700 w-52">
            Add Flight
          </button>
        </Link>
  
        <Link to="/airports">
          <button className="bg-green-600 text-white p-4 rounded-xl shadow hover:bg-green-700 w-52">
            Add Airport
          </button>
        </Link>

        <Link to="/airplanes">
          <button className="bg-purple-600 text-white p-4 rounded-xl shadow hover:bg-purple-700 w-52">
            Add Airplane
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
