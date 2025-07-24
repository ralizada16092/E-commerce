import { Box, Typography, Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import heroimg from "../assets/heroimg.jpeg";

export default function HeroSection() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "70vh",
        position: "relative",
      }}
    >
      <img
        src={heroimg}
        alt="Hero"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      <Paper
        sx={{
          maxWidth: "70vh",
          height: "40vh",
          bgcolor: "rgba(236, 206, 160, 0.95)",
          p: { xs: 3, md: 8 },
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          position: "absolute",
          top: { xs: "20%", md: "5%" },
          right: { xs: "5%", md: "10%" },
        }}
      >
        <Typography
          variant="subtitle2"
          color="#3c3b39ff"
          sx={{ fontWeight: 600, letterSpacing: 2, mb: 1 }}
        >
          NEW ARRIVAL
        </Typography>
        <Typography
          variant="h4"
          align="left"
          sx={{
            fontWeight: 700,
            mb: 2,
            fontFamily: "'Playfair Display', serif",
            color: "#B88E2F",
            lineHeight: 1.1,
          }}
        >
          Discover Our New Collection
        </Typography>
        <Typography variant="body1" align="left" color="#555" sx={{ mb: 3 }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/shop"
          sx={{
            backgroundColor: "#B88E2F",
            color: "white",
            fontWeight: 600,
            px: 5,
            py: 1.5,
            borderRadius: 0,
            textTransform: "none",
            fontSize: "0.7rem",
            "&:hover": { backgroundColor: "#a17a27" },
          }}
        >
          BUY NOW
        </Button>
      </Paper>
    </Box>
  );
}
