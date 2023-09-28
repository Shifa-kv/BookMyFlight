import { useNavigate } from 'react-router-dom'
import flightIcon from '../flightIcon.svg'

const FlightSearchResults = ({ data }) => {
    const navigate = useNavigate();
    // redirect to booking page on flight book button click
    const handleBookingRedirect = (id)=>{
        console.log(id)
        navigate(`/booking/${id}`)
    }
    return (
        <div>
            <div className="mt-4">
                {data.length > 0 ? (
                    <div className="grid grid-cols-3 gap-4 flex-wrap md:block">
                        {data.map((flight, index) => (
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex-[2_2_0%]  md:mb-3" key={index}>  
                                <div className="p-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="text-left">
                                            <span className="block text-xs text-gray-500">Depart</span>
                                            <span className="block text-lg text-gray-900 font-semibold">{flight.deptTime}</span>
                                        </div>
                                        <div className="text-right">
                                            <span className="block text-xs text-gray-500">Arrives</span>
                                            <span className="block text-lg text-gray-900 font-semibold">{flight.arivalTime}</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 mt-6">
                                        <div className="text-left">
                                            <span className="block text-4xl text-secondary font-light">{flight.deptAirport}</span>
                                            <span className="block text-lg text-primary">{flight.deptCity}</span>
                                        </div>
                                        <div className="text-center relative">
                                            <img
                                                src={flightIcon}
                                                className="w-16 sm:w-10 mx-auto"
                                            />
                                        </div>
                                        <div className="text-right">
                                            <span className="block text-4xl text-secondary font-light">{flight.arivalAirport}</span>
                                            <span className="block text-lg text-primary">{flight.arivalCity}</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 mt-6">
                                        <div className="text-left">
                                            <span className="block text-xs text-gray-500">AIRLINE</span>
                                            <span className="block text-lg text-primary font-semibold">{flight.airline}</span>
                                        </div>
                                        <div className="text-center ">
                                            <span className="block text-xs text-gray-500">FLIGHT</span>
                                            <span className="block text-lg text-primary font-semibold">{flight.flight_number}</span>
                                        </div>
                                        <div className="text-right">
                                            <span className="block text-xs text-gray-500">CLASS</span>
                                            <span className="block text-lg text-primary font-semibold capitalize">{flight.class}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-primary flex px-4">
                                    <h2 className='text-left w-full text-white text-lg font-thin py-3'>₹ {flight.price}</h2>
                                    <button 
                                    className="text-right w-full py-3 uppercase text-white text-lg font-bold"
                                    onClick={()=>{handleBookingRedirect(flight.id)}}
                                    >
                                        Book now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='w-full text-center py-10 border-dashed border-2 border-gray-400 rounded-lg'>
                        <h2>Oh oh! No flights found!</h2>
                    </div>
                )}
            </div>
        </div>
    )
}
export default FlightSearchResults
