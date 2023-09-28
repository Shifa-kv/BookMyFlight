import Header from "../components/Header"
import { Link, useNavigate, useParams } from 'react-router-dom';
import flightData from '../flightdata.json';
import { useEffect, useState } from "react";
import flightIcon from '../flightIcon.svg'


const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Data, setData] = useState();
  // get flight details
  useEffect(() => {
    const flights = flightData?.filter((flight) => flight.id === id);
    const taxAdded = ((flights[0].price / 100) * 5);
    const totalPrice = (flights[0].price + taxAdded).toFixed(2);
    setData({ ...flights[0], totalPrice })
  }, [id]);
  // state for storing form data
  const [formData, setFormData] = useState({
    passengerName: '',
    email: '',
    phoneNumber: '',
    preferredSeat: 'no-preference', 
    paymentMethod: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  // handle booking form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // handle booking submission and redirect to thankyou page
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate('/thankyou', { state: { formData, Data } });

  };

  return (
    <div>
      <Header />
      <div className="container flex-wrap md:block mb-20">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden  md:mb-3">
          <div className="bg-primary flex px-4">
            <Link to="/" className="text-white py-2">Go back</Link>
          </div>
          <div className="flex md:block px-5">
            <div className="p-4 w-6/12 md:w-full md:border-b md:border-r-0 border-r border-dashed border-primary my-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-left">
                  <span className="block text-xs text-gray-500">Depart</span>
                  <span className="block text-lg text-gray-900 font-semibold">{Data?.deptTime}</span>
                </div>
                <div className="text-right">
                  <span className="block text-xs text-gray-500">Arrives</span>
                  <span className="block text-lg text-gray-900 font-semibold">{Data?.arivalTime}</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-left">
                  <span className="block text-4xl text-secondary font-light">{Data?.deptAirport}</span>
                  <span className="block text-lg text-primary">{Data?.deptCity}</span>
                </div>
                <div className="text-center relative">
                  <img
                    src={flightIcon}
                    className="w-16 sm:w-10 mx-auto"
                  />
                </div>
                <div className="text-right">
                  <span className="block text-4xl text-secondary font-light">{Data?.arivalAirport}</span>
                  <span className="block text-lg text-primary">{Data?.arivalCity}</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-left">
                  <span className="block text-xs text-gray-500">AIRLINE</span>
                  <span className="block text-lg text-primary font-semibold">{Data?.airline}</span>
                </div>
                <div className="text-center ">
                  <span className="block text-xs text-gray-500">FLIGHT</span>
                  <span className="block text-lg text-primary font-semibold">{Data?.flight_number}</span>
                </div>
                <div className="text-right">
                  <span className="block text-xs text-gray-500">CLASS</span>
                  <span className="block text-lg text-primary font-semibold capitalize">{Data?.class}</span>
                </div>
              </div>
            </div>
            <div className="p-4 text-right md:w-full w-6/12 flex flex-col">
              <p>Basic price</p>
              <h2 className=' w-full text-lg text-secondary font-bold mb-3'>₹ {Data?.price}</h2>
              <p >Tax</p>
              <h3 className=' w-full text-lg font-bold text-secondary mb-3'>5%</h3>
              <div className=" h-full border-t-2 border-dashed border-secondary flex-col justify-end flex">
                <p>Total price</p>
                <h3 className=' w-full text-2xl font-bold '>{Data?.totalPrice}</h3>
              </div>

            </div>
          </div>
        </div>
        <div className="bg-white mt-2  px-9 rounded-lg pt-4 pb-9">
          <form onSubmit={handleSubmit}>
            <h4 className="text-lg  w-full border-b-2 border-secondary py-2 mb-4 font-bold">Personal details</h4>
            <div className="grid grid-cols-2 gap-x-3">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Passenger Name</label>
                <input
                  type="text"
                  name="passengerName"
                  className="w-full px-3 py-2 border border-secondary mt-2 rounded-md focus:outline-0 focus:shadow-md"
                  placeholder="Enter passenger name"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-3 py-2 border border-secondary mt-2 rounded-md focus:outline-0 focus:shadow-md"
                  placeholder="Enter email"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  className="w-full px-3 py-2 border border-secondary mt-2 rounded-md focus:outline-0 focus:shadow-md"
                  placeholder="Enter phone number"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Preferred Seat</label>
                <select
                name="preferredSeat"
                  className="w-full px-3 py-2 border border-secondary mt-2  rounded-md focus:outline-0 focus:shadow-md"
                >
                  <option value="window">Window Seat</option>
                  <option value="aisle">Aisle Seat</option>
                  <option value="middle">Middle Seat</option>
                  <option value="no-preference" selected>No Preference</option>
                </select>
              </div>
            </div>
            <h4 className="text-lg  w-full border-b-2 border-secondary py-2 mb-4 font-bold">Payment details</h4>
            <div className="grid grid-cols-2 gap-x-3">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Payment Method</label>
                <select
                name="paymentMethod"
                  className="w-full px-3 py-2 border border-secondary mt-2 rounded-md focus:outline-0 focus:shadow-md"
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled selected>
                    Select payment method
                  </option>
                  <option value="credit">Credit Card</option>
                  <option value="debit">Debit Card</option>
                  <option value="paypal">PayPal</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  className="w-full px-3 py-2 border border-secondary mt-2 rounded-md focus:outline-0 focus:shadow-md"
                  placeholder="Enter card number"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Expiration Date</label>
                <input
                  type="text"
                  name="expirationDate"
                  className="w-full px-3 py-2 border border-secondary mt-2 rounded-md focus:outline-0 focus:shadow-md"
                  placeholder="MM/YYYY"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  className="w-full px-3 py-2 border border-secondary mt-2 rounded-md focus:outline-0 focus:shadow-md"
                  placeholder="CVV"
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90  focus:outline-0"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Booking