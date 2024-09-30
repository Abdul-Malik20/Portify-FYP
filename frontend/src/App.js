import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./index.css";
import Profiles from "./components/Profiles";
import EVNews from "./components/EVNews";
import HowItWorks from "./components/HowItWorks";
import NearbyStation from "./pages/NearbyStation";

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Router>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundImage: isMobile
            ? `url(./images/car-mobile.jpg)`
            : `url(./images/carbg.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          [theme.breakpoints.down("md")]: {
            backgroundPosition: "top",
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 1,
          }}
        />
        <Box sx={{ position: "relative", zIndex: 2 }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nearby-station" element={<NearbyStation />} />
          </Routes>
        </Box>
      </Box>
      <Profiles />
      <hr />
      <EVNews />
      <hr />
      <HowItWorks />
      <Footer />
    </Router>
  );
}

export default App;
