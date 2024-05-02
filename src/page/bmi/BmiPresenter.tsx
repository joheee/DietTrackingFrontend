import {
  Button,
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import NavigationComponent from "../../components/navigation/NavigationComponent";
import BmiModal from "./modals/BmiModal";
import { BmiPagePresenterInterface } from "../../config/Interfaces";

export default function BmiPresenter({ prop }: BmiPagePresenterInterface) {
  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", minWidth: "100vw" }}
    >
      {!prop.bmiModal ? null : <BmiModal prop={prop} />}
      <NavigationComponent />
      <Card variant="outlined">
        <Stack spacing={5} paddingY={4} paddingX={2}>
          <Stack direction="row" spacing={5}>
            <Stack spacing={2} sx={{ minWidth: "20rem" }}>
              <TextField
                error={false}
                id="outlined-error-helper-text"
                label="how old are you?"
                defaultValue=""
                helperText=""
              />
              <TextField
                error={false}
                id="outlined-error-helper-text"
                label="what is your weight (kg)?"
                defaultValue=""
                helperText=""
              />
              <TextField
                error={false}
                id="outlined-error-helper-text"
                label="what is your height (cm)?"
                defaultValue=""
                helperText=""
              />
            </Stack>

            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
          </Stack>
          <Button variant="contained">next</Button>
        </Stack>
      </Card>
    </Grid>
  );
}
