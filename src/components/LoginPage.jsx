import { Box, Typography, TextField, Button } from "@mui/material";

export default function LoginPage() {
  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 8,
        p: 4,
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: "background.paper",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
        Sign In
      </Typography>
      <form>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          required
          sx={{ mb: 3 }}
        />
        <Button
          variant="contained"
          sx={{ bgcolor: "#ca7608ff", "&:hover": { bgcolor: "#a56700" } }}
          type="submit"
        >
          Sign In
        </Button>
      </form>
    </Box>
  );
}
