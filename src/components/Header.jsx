import { Link } from 'react-router-dom'
import flight from '../flight.svg'

const Header = () => {
    return (
        <div className='container'>
            <div className='flex items-center'>
                <Link to='/' className='flex items-center'>
                    <div className=' h-[100px]'>
                        <img src={flight} width={300} className='object-cover h-full  object-center' />
                    </div>
                    <h1 className=' text-2xl font-extrabold '>BookMyFlight</h1>
                </Link>
                <hr className='ml-3 w-full border-1 border-primary' />
            </div>
        </div>
    )
}
export default Header