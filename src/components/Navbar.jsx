import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  TextField,
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button as MuiButton,
} from "@mui/material";

import StorefrontIcon from "@mui/icons-material/Storefront";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";

import product1 from "../assets/product1.jpeg";
import product2 from "../assets/product2.webp";
import product3 from "../assets/product3.jpeg";
import product4 from "../assets/product4.jpeg";
import product5 from "../assets/product5.jpeg";
import product6 from "../assets/product6.jpeg";
import product7 from "../assets/product7.jpeg";
import product8 from "../assets/product8.jpeg";

const products = [
  {
    id: 1,
    name: "Syltherine Stylish Cafe Chair",
    image: product1,
    price: "Rp 2.500.000",
  },
  {
    id: 2,
    name: "Leviosa Modern Chair",
    image: product2,
    price: "Rp 2.500.000",
  },
  {
    id: 3,
    name: "Lolito Luxury Big Sofa",
    image: product3,
    price: "Rp 7.000.000",
  },
  {
    id: 4,
    name: "Respira Outdoor Bar Table",
    image: product4,
    price: "Rp 500.000",
  },
  { id: 5, name: "Grifo Night Lamp", image: product5, price: "Rp 1.500.000" },
  { id: 6, name: "Muggo Small Mug", image: product6, price: "Rp 150.000" },
  {
    id: 7,
    name: "Pingky Cute Bed Set",
    image: product7,
    price: "Rp 7.000.000",
  },
  {
    id: 8,
    name: "Potty Minimalist Flower Pot",
    image: product8,
    price: "Rp 500.000",
  },
];

export default function Navbar({ likedProducts, toggleLike, cartItems }) {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showLikedModal, setShowLikedModal] = useState(false);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowSearch(false);
    setSearchQuery("");
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{ backgroundColor: "white", zIndex: 1100 }}
      >
        <Toolbar sx={{ justifyContent: "space-between", position: "relative" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <StorefrontIcon sx={{ color: "#905312ff" }} />
            <Typography
              variant="h6"
              component={Button}
              onClick={() => setShowSearch(false)}
              sx={{
                textDecoration: "none",
                color: "inherit",
                fontWeight: "bold",
                cursor: "pointer",
                background: "none",
                border: "none",
                padding: 0,
                fontSize: "1.25rem",
              }}
            >
              Furniro
            </Typography>
          </Box>

          {showSearch ? (
            <Box sx={{ flexGrow: 1, mx: 2, position: "relative" }}>
              <TextField
                autoFocus
                placeholder="Search products..."
                variant="outlined"
                size="small"
                fullWidth
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{
                  backgroundColor: "white",
                  borderRadius: 0,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 0,
                    "&.Mui-focused fieldset": {
                      borderColor: "rgba(73, 72, 72, 0.7)",
                    },
                  },
                }}
                onBlur={() => {
                  setTimeout(() => setShowSearch(false), 200);
                }}
              />
              {searchQuery && (
                <Paper
                  sx={{
                    position: "absolute",
                    top: "40px",
                    left: 0,
                    right: 0,
                    maxHeight: "250px",
                    overflowY: "auto",
                    zIndex: 10,
                  }}
                >
                  {filteredProducts.length > 0 ? (
                    <List>
                      {filteredProducts.map((product) => (
                        <ListItem
                          key={product.id}
                          button
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => handleProductClick(product)}
                          sx={{
                            cursor: "pointer",
                            "&:hover": { backgroundColor: "#f0f0f0" },
                          }}
                        >
                          <ListItemAvatar>
                            <Avatar
                              src={product.image}
                              alt={product.name}
                              variant="square"
                            />
                          </ListItemAvatar>
                          <ListItemText
                            primary={product.name}
                            secondary={product.price}
                          />
                        </ListItem>
                      ))}
                    </List>
                  ) : (
                    <Typography sx={{ p: 1, color: "gray" }}>
                      No results found
                    </Typography>
                  )}
                </Paper>
              )}
            </Box>
          ) : (
            <Box>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/shop">
                Shop
              </Button>
              <Button color="inherit" component={Link} to="/about">
                About
              </Button>
              <Button color="inherit" component={Link} to="/contact">
                Contact
              </Button>
            </Box>
          )}

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton component={Link} to="/login" sx={{ color: "inherit" }}>
              <AccountCircleIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                setShowSearch((prev) => !prev);
                setSearchQuery("");
              }}
              sx={{ color: "inherit" }}
            >
              <SearchIcon />
            </IconButton>

            <IconButton
              sx={{ color: likedProducts.length > 0 ? "red" : "inherit" }}
              onClick={() => setShowLikedModal(true)}
            >
              {likedProducts.length > 0 ? (
                <FavoriteIcon />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>

            <IconButton component={Link} to="/cart" sx={{ color: "inherit" }}>
              <ShoppingCartIcon />
              {cartItems.length > 0 && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 5,
                    right: 5,
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                    width: 16,
                    height: 16,
                    fontSize: "0.7rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {cartItems.length}
                </Box>
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Dialog open={!!selectedProduct} onClose={handleCloseModal}>
        <DialogTitle>{selectedProduct?.name}</DialogTitle>
        <DialogContent>
          <Box
            component="img"
            src={selectedProduct?.image}
            alt={selectedProduct?.name}
            sx={{ width: "100%", borderRadius: 1, mb: 2 }}
          />
          <DialogContentText>{selectedProduct?.price}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <MuiButton onClick={handleCloseModal} color="primary">
            Close
          </MuiButton>
        </DialogActions>
      </Dialog>

      <Dialog
        open={showLikedModal}
        onClose={() => setShowLikedModal(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Liked Products</DialogTitle>
        <DialogContent dividers>
          {likedProducts.length === 0 ? (
            <Typography>No liked products yet.</Typography>
          ) : (
            <List>
              {likedProducts.map((product) => (
                <ListItem
                  key={product.id}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(product);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    setSelectedProduct(product);
                    setShowLikedModal(false);
                  }}
                >
                  <ListItemAvatar>
                    <Avatar
                      src={product.image}
                      alt={product.name}
                      variant="square"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={product.name}
                    secondary={product.price}
                  />
                </ListItem>
              ))}
            </List>
          )}
        </DialogContent>
        <DialogActions>
          <MuiButton onClick={() => setShowLikedModal(false)}>Close</MuiButton>
        </DialogActions>
      </Dialog>
    </>
  );
}
