import Header from "../components/Header"
import { useLocation } from 'react-router-dom';
import flightIcon from '../flightIcon.svg'

const Thankyou = () => {
    const location = useLocation();
    const { formData, Data } = location.state || {};
    return (
        <div>
            <Header />
            <div className="container mb-10">
                <h1 className="text-2xl font-bold mb-5 py-3 px-9 rounded-br-3xl rounded-tr-3xl bg-secondary">Thankyou for booking !</h1>
                <div className="grid grid-cols-2 gap-3 md:block">

                    <div className="bg-white shadow-lg rounded-lg overflow-hidden  md:mb-3">
                        <div className=" px-5">
                            <div className="p-4  border-b-2 border-dashed border-secondary my-2">
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
                            <div className="py-4 text-left  flex flex-col">
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
                    <div className="rounded-lg overflow-hidden w-full bg-white flex">
                        <table className=" w-full">
                            <tbody className=" divide-y divide-gray-200">
                                {Object.entries(formData).map(([field, value]) => (
                                    <tr key={field} className="md:flex md:justify-between">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900 uppercase">{field}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-500 capitalize">{value}</div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Thankyou