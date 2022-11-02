import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";

function App() {
	return (
		<Box>
			<ToastContainer />
			<Navbar />
			<Home />
			<Footer />
		</Box>
	);
}

export default App;
