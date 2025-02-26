import React, { useState } from "react";
import ListCard from "./ListCard";

const flightsData = [
    {
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdXixNZsEDGIWS15QEWpqkoDOP5z4DBl9WSw&s",
        airline: "Air India",
        flightNumber: "AI 101",
        time: "06:30 - 09:45",
        duration: "3h 15m",
        type: "Direct",
        baggage: "25kg, Cabin Baggage 7kg",
        facilities: ["In-flight entertainment", "In-flight meal", "Power & USB Port"],
        price: "INR 5,499",
        oldPrice: "INR 6,200",
      },
      {
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLIEyJ-EYgoHpuFHPKfA4Qr4BqkDChWRbjsQ&s",
        airline: "IndiGo",
        flightNumber: "6E 234",
        time: "10:00 - 12:15",
        duration: "2h 15m",
        type: "Direct",
        baggage: "20kg, Cabin Baggage 7kg",
        facilities: ["Power & USB Port"],
        price: "INR 4,250",
        oldPrice: "INR 5,000",
      },
      {
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/AirAsia_New_Logo.svg/1200px-AirAsia_New_Logo.svg.png",
        airline: "AirAsia India",
        flightNumber: "I5 567",
        time: "14:00 - 16:20",
        duration: "2h 20m",
        type: "Direct",
        baggage: "15kg, Cabin Baggage 7kg",
        facilities: ["In-flight meal"],
        price: "INR 3,999",
        oldPrice: "INR 4,500",
      },
      {
        imageURL: "https://s3-symbol-logo.tradingview.com/spicejet--600.png",
        airline: "SpiceJet",
        flightNumber: "SG 890",
        time: "18:30 - 21:00",
        duration: "2h 30m",
        type: "Direct",
        baggage: "20kg, Cabin Baggage 7kg",
        facilities: ["In-flight entertainment", "Power & USB Port"],
        price: "INR 4,899",
        oldPrice: "INR 5,700",
      },
      {
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlD_CFs8_UsBROZyFrZkExAeY0Ot9764OtLw&s",
        airline: "Vistara",
        flightNumber: "UK 202",
        time: "07:45 - 10:30",
        duration: "2h 45m",
        type: "Direct",
        baggage: "25kg, Cabin Baggage 7kg",
        facilities: ["In-flight entertainment", "In-flight meal"],
        price: "INR 6,799",
        oldPrice: "INR 7,500",
      },{
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhhbRWH6ZUDU1CsHkNDlX8t_q4YzQyysOkFw&s",
        airline: "Go First",
        flightNumber: "G8 345",
        time: "12:00 - 14:10",
        duration: "2h 10m",
        type: "Direct",
        baggage: "15kg, Cabin Baggage 7kg",
        facilities: ["In-flight meal"],
        price: "INR 3,700",
        oldPrice: "INR 4,200",
      },
      {
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ3Gq_woK4rbx6iyGpcNLtyaO4ks5dmUjDpw&s",
        airline: "Akasa Air",
        flightNumber: "QP 777",
        time: "21:15 - 23:45",
        duration: "2h 30m",
        type: "Direct",
        baggage: "20kg, Cabin Baggage 7kg",
        facilities: ["Power & USB Port"],
        price: "INR 4,299",
        oldPrice: "INR 4,900",
      },
      {
        imageURL: "https://banner2.cleanpng.com/20180711/xtv/aawlcwh8g.webp",
        airline: "Garuda Indonesia",
        flightNumber: "GI 2023",
        time: "06:00 - 07:40",
        duration: "1h 40m",
        type: "Direct",
        baggage: "20kg, Cabin Baggage 7kg",
        facilities: ["In-flight entertainment", "In-flight meal", "Power & USB Port"],
        price: "IDR 2.723.000",
        oldPrice: "IDR 2.993.003",
      },
      {
        imageURL: "https://banner2.cleanpng.com/20180711/xtv/aawlcwh8g.webp",
        airline: "Garuda Indonesia",
        flightNumber: "GI 5678",
        time: "08:00 - 09:30",
        duration: "1h 30m",
        type: "Direct",
        baggage: "30kg, Cabin Baggage 7kg",
        facilities: ["In-flight entertainment", "Power & USB Port"],
        price: "IDR 3.163.400",
        oldPrice: "IDR 3.566.000",
      },
      {
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGmBJhg_rKvf5_5XDcJebPegZveGSmzZFfrw&s",
        airline: "Xiamen Air",
        flightNumber: "XA 1102",
        time: "20:25 - 21:50",
        duration: "1h 25m",
        type: "Direct",
        baggage: "20kg, Cabin Baggage 7kg",
        facilities: ["Power & USB Port"],
        price: "IDR 2.192.900",
        oldPrice: "IDR 2.650.500",
      },
];

function Lists() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flightsPerPage = 3;
  
    const handleLoadMore = () => {
      // Move to the next batch of 4 flights, or loop back to the start
      setCurrentIndex((prevIndex) =>
        prevIndex + flightsPerPage >= flightsData.length ? 0 : prevIndex + flightsPerPage
      );
    };
  
    return (
      <div className="p-6 w-full h-full overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Searched Flights</h2>
  
        <div className="space-y-4">
          {flightsData.slice(currentIndex, currentIndex + flightsPerPage).map((flight, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <ListCard flight={flight} />
            </div>
          ))}
        </div>
  
        <div className="flex justify-center mt-4">
          <button
            onClick={handleLoadMore}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Next
          </button>
        </div>
      </div>
    );
  }
   
export default Lists;
