import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Refferal/Main";
<<<<<<< HEAD
import GetStarted from "./components/GetStarted/GetStarted";
=======
import HowItWorks from "./components/How to works/how-it-works";
>>>>>>> 6cb72393281486d0f0ae754f435bd7d8d34a63a7

function App() {
  return (
    <Box>
      <ToastContainer />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/refferal" element={<Main />} />
          <Route path="/getStarted" element={<GetStarted />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Box>
  );
}

export default App;
