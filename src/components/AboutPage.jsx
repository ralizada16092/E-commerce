import { Box, Typography } from "@mui/material";

export default function AboutPage() {
  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6, maxWidth: 800, mx: "auto", textAlign: "center" }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold" }}>
        About Us
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: 18, color: "rgba(72, 37, 2, 1)" }}>
        At <strong>Funiro Furniture</strong>, we believe that your home deserves furniture that combines comfort, style, and functionality.
        Since our founding, we have dedicated ourselves to providing high-quality, beautifully designed pieces that inspire and elevate your living spaces.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: 18, color: "text.primary" }}>
        Our mission is to bring timeless designs and sustainable materials together to create furniture that lasts and transforms your house into a home.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: 18, color: "text.primary" }}>
        We value customer satisfaction, innovation, and craftsmanship, always striving to deliver the best experience from selection to delivery.
      </Typography>
      <Typography variant="body1" sx={{ fontSize: 18, color: "text.primary" }}>
        Join us on this journey to make every room a story of elegance and comfort.
      </Typography>
    </Box>
  );
}
