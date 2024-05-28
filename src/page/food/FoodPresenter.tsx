import { Button, Grid, Stack } from "@mui/material";
import NavigationComponent from "../../components/navigation/NavigationComponent";
import SearchFoodField from "./components/SearchFoodField";
import FoodCard from "./components/FoodCard";
import { FoodCardElement } from "../../config/Interfaces";

export default function FoodPresenter() {
  const prop: FoodCardElement = {
    src: "/food/fish.jpg",
    description: "this is desc",
    title: "this is title",
  };

  return (
    <Grid
      container
      spacing={0}
      justifyContent="center"
      sx={{ minHeight: "100vh", minWidth: "100vw" }}
    >
      <Stack spacing={4} padding={10}>
        <NavigationComponent />
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent="space-between"
        >
          <SearchFoodField />
          <Button variant="contained">create food</Button>
        </Stack>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FoodCard prop={prop} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FoodCard prop={prop} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FoodCard prop={prop} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FoodCard prop={prop} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FoodCard prop={prop} />
          </Grid>
        </Grid>
      </Stack>
    </Grid>
  );
}
