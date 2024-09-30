import React, { useState } from "react";
import { Button, Typography, Container } from "@mui/material";
import "../styles/font.css";
import ContactModal from "../components/ContactModel";
import { Link } from "react-router-dom";

function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <Container style={{ textAlign: "start", paddingTop: "50px" }}>
      <Typography
        style={{ color: "white" }}
        variant="h2"
        component="h2"
        gutterBottom
      >
        <span className="dancing-script">Charge Smarter, Drive Further</span>
      </Typography>
      <Typography variant="h6" component="p" gutterBottom>
        <span className="rajdhani-semibold" style={{ color: "#FCDE70" }}>
          Never waste time searching for an available EV charging port again.
          Portify connects you to real-time data, helping you find the nearest
          charging station with open ports. Stay powered, stay efficient.
        </span>
      </Typography>
      <Button
        variant="contained"
        size="large"
        style={{
          marginRight: "15px",
          backgroundColor: "#F5F5F5",
          color: "#6C4E31",
        }}
      >
        <Link
          to="/nearby-station"
          style={{ color: "black", textDecoration: "none" }}
        >
          Get Nearby Station
        </Link>
      </Button>
      <Button
        variant="outlined"
        style={{ color: "white" }}
        size="large"
        onClick={handleOpen}
      >
        Contact Us
      </Button>
      <ContactModal open={modalOpen} handleClose={handleClose} />
    </Container>
  );
}

export default Home;
