import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import { FoodCardInterface } from "../../../config/Interfaces";

export default function FoodCard({ prop }: FoodCardInterface) {
  return (
    <Card sx={{ maxWidth: 345, position: "relative" }}>
      <CardActionArea
        sx={{
          position: "relative",
          overflow: "hidden",
          "&:hover .overlay": { height: "100%" },
        }}
      >
        <CardMedia
          component="img"
          height="345"
          image={prop.src}
          alt={prop.title}
        />
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "60px",
            background: "rgba(0, 0, 0, 0.6)",
            color: "white",
            padding: 1,
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            transition: "height 0.3s ease",
          }}
        >
          <Typography variant="h6">{prop.title}</Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
}
