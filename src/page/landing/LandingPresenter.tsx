import { Button, Grid, Stack, Typography } from "@mui/material";
import LandingCard from "./components/LandingCard";
import { LandingPagePresenterInterface } from "../../config/Interfaces";
import NavigationComponent from "../../components/navigation/NavigationComponent";

export default function LandingPresenter({
  prop,
}: LandingPagePresenterInterface) {
  return (
    <Stack
      spacing={15}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <NavigationComponent />
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Grid maxWidth="33rem">
          <Typography style={{ fontWeight: "bold", fontSize: "50px" }}>
            Diet is importance <br /> for make body healthy
          </Typography>
          <Typography style={{ fontSize: "20px" }}>
            Want to diet? lets write meal and reach your target with Diet
            Tracking
          </Typography>
          <Button
            onClick={prop.handleBmi}
            variant="contained"
            style={{ minWidth: "100%" }}
          >
            start now
          </Button>
        </Grid>
        <img src="/home/home-food.png" alt="" />
      </Stack>

      <Stack direction="row" spacing={10}>
        <LandingCard
          src="/home/home-tool.png"
          title="As tool for you target"
          description="want to lose weight, decrease  BMI, or start living a healthier life? we have the good features to help you."
        />
        <LandingCard
          src="/home/home-note.png"
          title="More easier to recorded"
          description="Save foods and recipes, and use quick tools for quick and easy food tracking"
        />
        <LandingCard
          src="/home/home-recipe.png"
          title="Recipes"
          description="Find and create the own recipes from this Diet Tracking"
        />
      </Stack>
    </Stack>
  );
}
