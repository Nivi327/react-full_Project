import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./container/Home";
import { Signin } from "./container/Signin";
import { Signup } from "./container/Signup";

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;