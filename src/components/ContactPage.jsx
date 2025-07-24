import { useState } from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    alert("Message submitted!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6, textAlign: "center" }}>
      <Typography
        variant="h4"
        sx={{ mb: 4, fontWeight: "bold", textAlign: "center" }}
      >
        Contact Us
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: "400px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          backgroundColor: "rgba(240,240,240,0.4)",
          p: 3,
          borderRadius: 2,
          mb: 5,
        }}
      >
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Message"
          name="message"
          variant="outlined"
          multiline
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            bgcolor: "#ca7608ff",
            "&:hover": { bgcolor: "#a56700" },
            borderRadius: 0,
            width: "150px",
            alignSelf: "center",
          }}
        >
          Submit
        </Button>
      </Box>

      <Grid container spacing={2} justifyContent="center">
        <Grid
          item 
          xs={12}
          sm={4}
          sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <LocationOnIcon sx={{ mr: 1, color: "text.secondary" }} />
          <Typography variant="body1">Sawojajar Malang, Indonesia</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <PhoneIcon sx={{ mr: 1, color: "text.secondary" }} />
          <Typography variant="body1">+6389 456 3455</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <EmailIcon sx={{ mr: 1, color: "text.secondary" }} />
          <Typography variant="body1">www.funiro.com</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
