import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EvStationTwoToneIcon from "@mui/icons-material/EvStationTwoTone";
import ChargingStationRoundedIcon from "@mui/icons-material/ChargingStationRounded";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar style={{ backgroundColor: "#F5F5F5" }}>
          <IconButton edge="start" sx={{ mr: 1 }}>
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              <EvStationTwoToneIcon fontSize="large" />
            </Link>
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ color: "#CD5C08" }}
          >
            <strong>Portify</strong>
          </Typography>
          <Button
            className="button"
            style={{ color: "black", backgroundColor: "#B7E0FF" }}
          >
            <Link
              to="/nearby-station"
              style={{ color: "black", textDecoration: "none" }}
            >
              <strong>Nearby Station</strong>{" "}
              <ChargingStationRoundedIcon fontSize="medium" />
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}
