import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function ShopPage({ cartItems, setCartItems }) {
  const increaseQty = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1;
    setCartItems(updatedCart);
  };

  const decreaseQty = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    } else {
      updatedCart.splice(index, 1);
    }
    setCartItems(updatedCart);
  };

  const totalPrice = cartItems.reduce((total, item) => {
    const numericPrice = parseFloat(item.price.replace(/[^\d]/g, ""));
    return total + numericPrice * item.quantity;
  }, 0);

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Your Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #ddd",
                py: 1,
                mb: 1,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <img src={item.image} alt={item.name} width={60} />
                <Box>
                  <Typography>{item.name}</Typography>
                  <Typography color="text.secondary">{item.price}</Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <IconButton size="small" onClick={() => decreaseQty(index)}>
                  <RemoveIcon />
                </IconButton>
                <Typography>{item.quantity}</Typography>
                <IconButton size="small" onClick={() => increaseQty(index)}>
                  <AddIcon />
                </IconButton>
              </Box>
            </Box>
          ))}
          <Typography variant="h6" sx={{ mt: 2, textAlign: "right" }}>
            Total: Rp {totalPrice.toLocaleString()}
          </Typography>
        </>
      )}
    </Box>
  );
}
