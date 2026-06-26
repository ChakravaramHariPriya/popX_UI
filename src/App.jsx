import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

function App() {

  const location = useLocation();

  return (

    <div className="app">

      <div className="mobile-container">

        <AnimatePresence mode="wait">

          <Routes
            location={location}
            key={location.pathname}
          >

            <Route
              path="/"
              element={<Landing />}
            />

            <Route
              path="/login"
              element={<Login />}
            />

            <Route
              path="/signup"
              element={<Signup />}
            />

            <Route
              path="/profile"
              element={<Profile />}
            />

          </Routes>

        </AnimatePresence>

      </div>

    </div>

  );

}

export default App;