import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";

function App() {
	return (
		<Box>
			<Navbar />
			<Home />
			<ToastContainer />
		</Box>
	);
}

export default App;
