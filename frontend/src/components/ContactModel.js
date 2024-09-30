import React from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

const ContactModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="contact-modal-title"
      aria-describedby="contact-modal-description"
    >
      <Box sx={style}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography id="contact-modal-title" variant="h5" component="h2">
          Contact Us
        </Typography>
        <Typography id="contact-modal-description" sx={{ mt: 2 }}>
          We'd love to hear from you! Please fill out the form below.
        </Typography>
        <TextField
          required
          label="Name"
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <TextField
          required
          label="Email"
          type="email"
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <TextField
          required
          label="Feedback/Message"
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

export default ContactModal;
