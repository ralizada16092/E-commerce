import { Box, Typography, Grid } from "@mui/material";
import product1 from "../assets/product1.jpeg";
import product2 from "../assets/product2.webp";
import product3 from "../assets/product3.jpeg";
import product4 from "../assets/product4.jpeg";
import product5 from "../assets/product5.jpeg";
import product6 from "../assets/product6.jpeg";
import room2 from "../assets/room2.jpeg";
import room3 from "../assets/room3.jpeg";
import room4 from "../assets/room4.jpeg";
export default function CollageSection() {
  const images = [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    room2,
    room3,
    room4,
  ];
  return (
    <Box sx={{ py: 5, px: { xs: 2, md: 8 }, textAlign: "center" }}>
      <Typography
        variant="h4"
        sx={{ mb: 2, fontWeight: "bold", color: "#3a352eff", fontSize: 13 }}
      >
        Share Your Setup with <br />
        <span style={{ color: "#3a352eff", fontSize: 38 }}>
          #FurniroFurniture
        </span>
      </Typography>

      <Box
        sx={{
          columnCount: { xs: 2, sm: 3, md: 4 },
          columnGap: "16px",
          mt: 3,
          height: "570px",
          width: "100%",
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            component="img"
            src={image}
            alt={`Collage ${index + 1}`}
            sx={{
              width: "100%",
              mb: 2,
              borderRadius: 2,
              display: "block",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
