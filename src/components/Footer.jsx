import { Box, Typography, Grid, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
export default function Footer() {
  return (
    <Box
      sx={{ backgroundColor: "#f5f5f5", py: 6, px: { xs: 2, md: 8 }, mt: 5 }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Funiro.
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Worldwide furniture store since 2020. We sell over 1000+ branded
            products on our website
          </Typography>
        </Grid>
 
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Menu
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Link href="#" underline="none" sx={{ color: "text.secondary" }}>
              Home
            </Link>
            <Link href="#" underline="none" sx={{ color: "text.secondary" }}>
              Shop
            </Link>
            <Link href="#" underline="none" sx={{ color: "text.secondary" }}>
              About
            </Link>
            <Link href="#" underline="none" sx={{ color: "text.secondary" }}>
              Contact
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Contact Us
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <LocationOnIcon fontSize="small" />
            Sawojajar Malang, Indonesia
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <PhoneIcon fontSize="small" /> +6389 456 3455
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
            www.funiro.com
          </Typography>
          <Box>
            <IconButton color="inherit" sx={{ fontSize: 16 }}>
              <FacebookIcon sx={{ fontSize: 18 }} />
              Facebook
            </IconButton>
            <IconButton color="inherit" sx={{ fontSize: 16 }}>
              <InstagramIcon sx={{ fontSize: 18 }} />
              Instagram
            </IconButton>
            <IconButton color="inherit" sx={{ fontSize: 16 }}>
              <TwitterIcon sx={{ fontSize: 18 }} />
              Twitter
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      <Typography
        variant="body2"
        sx={{ textAlign: "center", mt: 4, color: "text.secondary" }}
      >
        © 2025 Funiro. All rights reserved.
      </Typography>
    </Box>
  );
}
