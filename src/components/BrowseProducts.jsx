import {
  Box,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import room1 from "../assets/room1.jpeg";
import room2 from "../assets/room2.jpeg";
import room3 from "../assets/room3.jpeg";
import room4 from "../assets/room4.jpeg";
import room5 from "../assets/room5.jpeg";

const rooms = [
  {
    id: 1,
    name: "Bed Room",
    image: room1,
  },
  {
    id: 2,
    name: "Bed Room",
    image: room2,
  },
  {
    id: 3,
    name: "Living Room",
    image: room3,
  },
  {
    id: 4,
    name: "Living Room",
    image: room4,
  },
  {
    id: 5,
    name: "Kitchen",
    image: room5,
  },
];
export default function BrowseProducts() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % rooms.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + rooms.length) % rooms.length);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent:"space-between",
        px: { xs: 2, md: 8 },
        py: 3,
        gap: 3,
        alignItems: "center",
        backgroundColor: "rgba(199, 165, 14, 0.1)",
      }}
    >
      <Box sx={{ flex: "0 0 300px" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 2, fontSize: 30 }}
        >
          50+ Beautiful rooms inspiration
        </Typography>
        <Typography sx={{ mb: 3, color: "text.secondary", fontSize: 15 }}>
          Our designer already made a lot of beatiful prototipe of rooms that
          inspire you
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#ca7608ff",
            "&:hover": { bgcolor: "#a56700" },
            borderRadius: 0,
          }}
        >
          Explore More
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "500px", height: "350px" }}>
        <img
          src={rooms[current].image}
          alt={rooms[current].name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        <Typography
          sx={{
            position: "absolute",
            bottom: 16,
            left: 16,
            color: "rgba(17, 17, 17, 0.7)",
            fontWeight: "bold",
            backgroundColor: "rgba(194, 192, 192, 0.7)",
            padding: 3,
            borderRadius: 1,
          }}
        >
          {`${rooms[current].id} - ${rooms[current].name}`}
        </Typography>

        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            top: "50%",
            left: 1,
            transform: "translateY(-50%)",
            color: "rgba(198, 176, 176, 1)",
            backgroundColor: "rgba(212, 206, 206, 0.3)",
            "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
          }}
        >
          <ArrowBackIosIcon
            sx={{ fontSize: 20, color: "rgba(62, 37, 1, 0.3)" }}
          />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: 1,
            transform: "translateY(-50%)",
            color: "rgba(227, 216, 216, 1)",
            backgroundColor: "rgba(205, 205, 205, 0.3)",
            "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
          }}
        >
          <ArrowForwardIosIcon
            sx={{ fontSize: 20, color: "rgba(62, 37, 1, 0.3)" }}
          />
        </IconButton>
      </Box>
    </Box>
  );
}
