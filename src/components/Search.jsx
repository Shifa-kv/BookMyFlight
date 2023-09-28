import { useState } from 'react';
import flightData from '../flightdata.json';
import FlightSearchResults from './FlightSearchResults';

const Search = () => {
  const [searchResults, setSearchResults] = useState(null);

  const [formData, setFormData] = useState({
    deptCity: 'Mumbai',
    arrivalCity: 'Bangalore',
    date: '',
    class: '',
  });
  
// set search field data on input change
  const handleSelectChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
// search data on search form submit
  const handleSearch = (e) => {
    e.preventDefault();
    const { deptCity, arrivalCity, date, class: flightClass } = formData;
    console.log('data', date, arrivalCity, flightClass)
    const results = flightData.filter((flight) => {
      if (flightClass) {
        return (
          flight.deptCity === deptCity &&
          flight.arivalCity === arrivalCity &&
          flight.class === flightClass &&
          flight.date === date
        );
      }
      else{
        return (
          flight.deptCity === deptCity &&
          flight.arivalCity === arrivalCity &&
          flight.date === date
        );
      }
    });

    setSearchResults(results);
  };

  return (
    <div className="container relative">  
      <form
        className="flex space-x-2 md:space-x-1 sm:block sm:space-x-0 md:flex-wrap justify-center"
        onSubmit={handleSearch}
      >
        <div className=" w-full sm:w-full md:w-5/12 border-2 border-secondary rounded-lg px-1  relative mt-3">
          <label className="block text-sm  absolute font-bold -top-3 bg-main px-2 left-3">From</label>
          <select
            name="deptCity"
            className="block w-full p-3 bg-main focus-visible:outline-0"
            onChange={handleSelectChange}
          >
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
            
          </select>
        </div>
        <div className=" w-full sm:w-full md:w-5/12 border-2 border-secondary rounded-lg px-1  relative mt-3">
          <label className="block text-sm absolute font-bold -top-3 bg-main px-2 left-3">To</label>
          <select
            name="arrivalCity"
            className="block w-full p-3 bg-main focus-visible:outline-0"
            onChange={handleSelectChange}
          >
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
            <option value="Mumbai">Mumbai</option>
            
          </select>
        </div>
        <div className=" w-full sm:w-full md:w-5/12 border-2 border-secondary rounded-lg px-1  relative mt-3">
          <label className="block text-sm absolute font-bold -top-3 bg-main px-2 left-3">Date</label>
          <input 
          type="date" 
          name="date" 
          min='2023-10-01'
          max='2023-11-30'
          className="w-full bg-transparent block h-full p-3 focus-visible:outline-0" 
          onChange={handleSelectChange}
          />
        </div>
        <div className=" w-full sm:w-full md:w-5/12 border-2 border-secondary rounded-lg px-1  relative mt-3">
          <label className="block text-sm absolute font-bold -top-3 bg-main px-2 left-3">Class</label>
          <select
            name="class"
            className="block w-full p-3 border-0 focus-visible:outline-0 bg-main"
            onChange={handleSelectChange}
          >
            <option value="">All</option>
            <option value="economy">Economy</option>
            <option value="business">Business</option>
            <option value="first class">First class</option>
          </select>
        </div>
        <div className=" bg-secondary  w-full sm:w-full md:w-5/12 rounded-lg px-1 flex items-center justify-center relative mt-3" >
          <input type="submit" name="submit" value='search' className='uppercase font-bold p-3' />
        </div>
      </form>

      {searchResults&&
        <FlightSearchResults data={searchResults} />
      }
    </div>
  )
}
export default Search