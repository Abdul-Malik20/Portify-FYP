import React from "react";
import { Box, Typography, Container, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#F5F5F5",
        padding: "20px 0",
        borderTop: "1px solid #E0E0E0",
        position: "relative",
        bottom: 0,
        width: "100%",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <IconButton
            component="a"
            href="https://www.linkedin.com/school/mohamed-sathak-a.j.college-of-engineering/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            sx={{ color: "#0e76a8" }}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.instagram.com/msajce/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            sx={{ color: "#E1306C" }}
          >
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.facebook.com/msaj.engg.college/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            sx={{ color: "#3b5998" }}
          >
            <FacebookIcon fontSize="large" />
          </IconButton>
          <IconButton
            component="a"
            href="https://x.com/msajce_engg?lang=en&mx=2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            sx={{ color: "#1DA1F2" }}
          >
            <TwitterIcon fontSize="large" />
          </IconButton>
        </Box>

        <Typography variant="body2" color="textSecondary">
          © {currentYear} <strong>Portify</strong>. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
