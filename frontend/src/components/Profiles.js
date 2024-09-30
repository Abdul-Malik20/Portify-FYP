import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Profiles = () => {
  const cardData = [
    {
      id: 1,
      name: "Abdul Malik",
      title: "Support : Software",
      imgSrc: "./images/malik.jpg",
      socialLinks: {
        linkedin: "#", // Add your LinkedIn URL
        facebook: "#", // Add your Facebook URL
        instagram: "#", // Add your Instagram URL
      },
    },
    {
      id: 2,
      name: "Al Muhasif Rifath",
      title: "Support : Hardware",
      imgSrc: "./images/rifath.jpg",
      socialLinks: {
        linkedin: "#", // Add your LinkedIn URL
        facebook: "#", // Add your Facebook URL
        instagram: "#", // Add your Instagram URL
      },
    },
    {
      id: 3,
      name: "Karthick",
      title: "Support : Hardware",
      imgSrc: "./images/karthick.jpg",
      socialLinks: {
        linkedin: "#", // Add your LinkedIn URL
        facebook: "#", // Add your Facebook URL
        instagram: "#", // Add your Instagram URL
      },
    },
  ];

  return (
    <>
      <Container></Container>
      <Container
        maxWidth="lg"
        sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}
      >
        <Box
          sx={{
            textAlign: "center",
            padding: "2rem",
            backgroundColor: "#f5f5f5",
            borderRadius: "10px",
            boxShadow: 3,
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: "bold", color: "#CD5C08" }}
          >
            Collective Genius: Introducing Our Team
          </Typography>
          <Typography
            variant="h6"
            component="h3"
            sx={{ color: "#555", marginTop: "0.5rem" }}
          >
            The <strong>Portify</strong> Team
          </Typography>
        </Box>
        <br />
        <Grid container spacing={2} justifyContent="center">
          {cardData.map((card) => (
            <Grid item xs={12} sm={6} md={4} key={card.id}>
              <Card sx={{ borderRadius: "15px", boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  sx={{
                    height: 450, // Increased height for the image
                    width: "100%", // Image fills the width of the card
                    objectFit: "cover", // Cover the area
                    borderRadius: "15px 15px 0 0",
                  }}
                  image={card.imgSrc}
                  alt={card.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {card.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.title}
                  </Typography>

                  {/* Social Media Icons */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      marginTop: "1rem",
                    }}
                  >
                    <IconButton
                      component="a"
                      href={card.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton
                      component="a"
                      href={card.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FacebookIcon />
                    </IconButton>
                    <IconButton
                      component="a"
                      href={card.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Profiles;
