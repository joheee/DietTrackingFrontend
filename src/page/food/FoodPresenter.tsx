import { Grid, Stack } from "@mui/material";
import NavigationComponent from "../../components/navigation/NavigationComponent";
import SearchFoodField from "./components/SearchFoodField";

export default function FoodPresenter() {
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
      </Stack>
    </Grid>
  );
}
