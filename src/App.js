import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Booking from './Pages/Booking';
import Home from './Pages/Home';
import Thankyou from './Pages/Thankyou';

function App() {

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/thankyou" element={<Thankyou />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
