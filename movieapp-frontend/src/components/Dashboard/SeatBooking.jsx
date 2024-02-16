import React, { useState } from "react";
import { MdEventSeat } from "react-icons/md";

const SeatBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (row, seat) => {
    const seatId = `${row}${seat}`;
    const isSelected = selectedSeats.includes(seatId);

    if (isSelected) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const getPriceForSeat = (row) => {
    if (row <= 2) { 
      return 200;
    } else if (row <= 4) {
      return 400;
    } else {
      return 600;
    }
  };

  const totalSelectedSeatsPrice = selectedSeats.reduce((total, seat) => {
    const row = seat.charCodeAt(0) - 65 + 1; // Convert row letter to row number
    return total + getPriceForSeat(row);
  }, 0);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-cover" style={{ color: "white", backgroundImage: `url("https://imgs.search.brave.com/hfBmWq0D6r_UrUwOi-Z7UMoQ306NMzw8pU7y0PKOznM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/OTU3Njk4MTYyNjMt/OWI5MTBiZTI0ZDVm/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4T0h4OGJX/OTJhV1VsTWpCMGFH/VmhkR1Z5ZkdWdWZE/QjhmREI4Zkh3dw")` }}>
      <div className="w-full max-w-3xl p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Movie Seat Booking</h1>
        <div className="overflow-x-auto mb-4">
          <table className="border-collapse  border-gray-300 mx-auto">
            <tbody>
              {[...Array(6)].map((_, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="p-2">{String.fromCharCode(65 + rowIndex)}</td>
                  {[...Array(8)].map((__, seatIndex) => (
                    <td key={seatIndex} className="p-2">
                      <div
                        className={`w-10 h-10 border  border-gray-300 rounded-md cursor-pointer flex justify-center items-center ${
                          selectedSeats.includes(`${String.fromCharCode(65 + rowIndex)}${seatIndex + 1}`)
                            ? "bg-blue-500 text-white"
                            : "bg-white text-black"
                        }`}
                        onClick={() => toggleSeat(String.fromCharCode(65 + rowIndex), seatIndex + 1)}
                      >
                        <MdEventSeat />
                      </div>
                    </td>
                  ))}   
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-gray-800 p-4 rounded-md text-center">
          <h2 className="text-xl font-bold mb-2">Booking Summary</h2>
          <p className="mb-2">Movie: Your Movie Name</p>
          
          <p className="mb-2">Selected Seats: {selectedSeats.join(", ")}</p>

          <p className="mb-2">Total Seats: {selectedSeats.length}</p>
          <p className="mb-2">Total Price: ${totalSelectedSeatsPrice}</p>
          <button disabled={false} className="bg-blue-500 text-white px-4 py-2 rounded-md">Confirm Ticket</button>
        </div>
      </div>
    </div>
  );
};

export default SeatBooking;
