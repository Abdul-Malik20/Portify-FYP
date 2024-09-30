import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

const NearbyStation = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <Card
        sx={{
          maxWidth: 400,
          padding: 4,
          boxShadow: 3,
          backgroundColor: "#f5f5f5",
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image="./images/fb.jpg"
          alt="Charging Station"
        />
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Hardware Setup Not Finished
          </Typography>
          <Typography variant="body1" color="text.secondary">
            "Great things take time. Stay tuned for the latest updates on nearby
            EV stations!"
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={() => alert("Stay tuned!")}
          >
            Notify Me
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default NearbyStation;
