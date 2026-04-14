import HomePage from "./MainPage/HomePage/HomePage";
import Login from "./Login/Login.jsx";
import { useState } from 'react';

import { BrowserRouter, Route, Router, Routes} from 'react-router-dom';

function App() {

  const [selectedUserPass, setSelectedUserPass] = useState({
    Username: null,
    Password: null,
  });

  

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage selectedUserPass={selectedUserPass} />} />
          <Route path="/" element={<Login setSelectedUserPass={setSelectedUserPass} />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;