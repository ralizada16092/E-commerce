import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { useState } from "react";
import product1 from "../assets/product1.jpeg";
import product2 from "../assets/product2.webp";
import product3 from "../assets/product3.jpeg";
import product4 from "../assets/product4.jpeg";
import product5 from "../assets/product5.jpeg";
import product6 from "../assets/product6.jpeg";
import product7 from "../assets/product7.jpeg";
import product8 from "../assets/product8.jpeg";
import ShareIcon from "@mui/icons-material/Share";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
export default function OurProducts({ likedProducts, toggleLike, addToCart }) {
  const products = [
    {
      id: 1,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      image: product1,
    },
    {
      id: 2,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      image: product2,
    },
    {
      id: 3,
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      image: product3,
    },
    {
      id: 4,
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      image: product4,
    },
    {
      id: 5,
      name: "Grifo",
      description: "Night lamp",
      price: "Rp 1.500.000",
      image: product5,
    },
    {
      id: 6,
      name: "Muggo",
      description: "Small mug",
      price: "Rp 150.000",
      image: product6,
    },
    {
      id: 7,
      name: "Pingky",
      description: "Cute bed set",
      price: "Rp 7.000.000",
      image: product7,
    },
    {
      id: 8,
      name: "Potty",
      description: "Minimalist flower pot",
      price: "Rp 500.000",
      image: product8,
    },
  ];

  const [visibleCount, setVisibleCount] = useState(4);

  const handleShowMore = () => {
    setVisibleCount(products.length);
  };
  const handleShowLess = () => {
    setVisibleCount(4);
  };

  const handleShare = (product) => {
    if (navigator.share) {
      navigator
        .share({
          title: product.name,
          text: `${product.name}`,
          url: window.location.href,
        })
        .catch((error) => console.error("Error sharing", error));
    } else {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => alert("Link copied to clipboard!"))
        .catch(() => alert("Share not supported and unable to copy link."));
    }
  };
  return (
    <Box sx={{ py: 5, px: { xs: 2, md: 8 }, textAlign: "center" }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
        Our Products
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {products.slice(0, visibleCount).map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Card
              sx={{
                boxShadow: "none",
                borderRadius: 0,
                height: "100%",
                width: 250,
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "rgba(200, 200, 200, 0.3)",
              }}
            >
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                sx={{
                  height: 250,
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                }}
                className="product-image"
              />
              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  bgcolor: "rgba(0,0,0,0.5)",
                  opacity: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "opacity 0.3s ease",
                  cursor: "pointer",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: "white",
                    color: "rgba(127, 73, 2, 1)",
                    borderColor: "rgba(127, 73, 2, 1)",
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                >
                  Add to cart
                </Button>
                <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.3,
                      color: "white",
                      cursor: "pointer", 
                    }}
                    onClick={(e) => {
                      e.stopPropagation(); 
                      handleShare(product); 
                    }}
                  >
                    <ShareIcon sx={{ fontSize: 17 }} />
                    <Typography variant="body2">Share</Typography>
                  </Box>

                  <Box
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(product);
                    }}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.3,
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    {likedProducts.some((p) => p.id === product.id) ? (
                      <FavoriteIcon sx={{ fontSize: 20, color: "red" }} />
                    ) : (
                      <FavoriteBorderIcon sx={{ fontSize: 17 }} />
                    )}
                    <Typography variant="body2">Like</Typography>
                  </Box>
                </Box>
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: "medium" }}>
                  {product.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mt: 1 }}
                >
                  {product.description}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "text.primary", mt: 1, fontWeight: "bold" }}
                >
                  {product.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {visibleCount < products.length ? (
        <Button
          variant="outlined"
          onClick={handleShowMore}
          sx={{
            mt: 4,
            backgroundColor: "white",
            color: "rgba(127, 73, 2, 1)",
            borderColor: "rgba(127, 73, 2, 1)",
          }}
        >
          Show More
        </Button>
      ) : (
        <Button
          variant="outlined"
          onClick={handleShowLess}
          sx={{
            mt: 4,
            backgroundColor: "white",
            color: "rgba(127, 73, 2, 1)",
            borderColor: "rgba(127, 73, 2, 1)",
          }}
        >
          Show Less
        </Button>
      )}
      <style>
        {`
          .MuiCard-root:hover .product-image {
            transform: scale(1.1);
          }
          .MuiCard-root:hover .overlay {
            opacity: 1;
          }
        `}
      </style>
    </Box>
  );
}
