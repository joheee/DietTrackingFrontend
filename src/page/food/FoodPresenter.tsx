import { Grid, Stack } from "@mui/material";
import NavigationComponent from "../../components/navigation/NavigationComponent";
import SearchFoodField from "./components/SearchFoodField";
import FoodCard from "./components/FoodCard";
import { FoodCardElement } from "../../config/Interfaces";

export default function FoodPresenter() {
  
  const prop : FoodCardElement = {
    src: '/food/fish.jpg',
    description: 'this is desc',
    title:'this is title'
  }

  return (
    <Grid
      container
      spacing={0}
      justifyContent="center"
      sx={{ minHeight: "100vh", minWidth: "100vw" }}
    >
      <Stack spacing={4} padding={10}>
        <NavigationComponent />
        <SearchFoodField />
        <FoodCard prop={prop} />
        <FoodCard prop={prop} />
      </Stack>
    </Grid>
  );
}
