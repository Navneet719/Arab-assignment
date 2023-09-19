import Navbar from './Components/Navbar'
import Plans from './Components/Plans'
import Perks from './Components/Perks';

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";


function App() {
  return (

    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/Plans" element={<Plans />} />
        </Routes>
        <Routes>
          <Route path="/Perks" element={<Perks />} />
        </Routes>

      </div>
    </Router>



  );
}

export default App;
