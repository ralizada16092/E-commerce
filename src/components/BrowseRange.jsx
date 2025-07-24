import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import diningimg from "../assets/diningimg.jpeg";
import livingimg from "../assets/livingimg.jpeg";
import bedroomimg from "../assets/bedroomimg.jpeg";

export default function BrowseRange(){
    const categories = [
        {
            title: "Dining",
            image: diningimg,
    },
            {
            title: "Living",
            image: livingimg,
    },
            {
            title: "Bedroom",
            image: bedroomimg
          }
    ];
    return(
           <Box sx={{ py: 8, px: { xs: 2, md: 8 }, textAlign: "center" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Browse The Range
      </Typography>
         <Typography variant="body1" sx={{ mb: 6, color: "text.secondary" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
       <Grid container spacing={3} justifyContent="center">
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ boxShadow: "none"}}>
              <CardMedia
                component="img"
                image={category.image}
                alt={category.title}
                sx={{ borderRadius: 2, height: 400,   width: 300, objectFit: "cover" }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ mt: 2, fontWeight: "medium", textAlign: "center" }}
                >
                  {category.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      </Box>
    );
}