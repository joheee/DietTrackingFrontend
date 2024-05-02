import {
  Avatar,
  Button,
  Card,
  Container,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import NavigationComponent from "../../components/navigation/NavigationComponent";

export default function ProfilePresenter() {
  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", minWidth: "100vw" }}
    >
      <Stack spacing={4} padding={10}>
        <NavigationComponent />
        <Card variant="outlined" style={{ minWidth: "50rem" }}>
          <Stack spacing={4} padding={4}>
            <Stack width="100%" alignItems="center" justifyContent="center">
              <Avatar
                alt="Food"
                src="./home/home-food.png"
                sx={{ width: 200, height: 200 }}
              />
            </Stack>

            <TextField
              error={false}
              id="outlined-error-helper-text"
              label="name"
              defaultValue=""
              helperText=""
            />
            <TextField
              error={false}
              id="outlined-error-helper-text"
              label="age"
              defaultValue=""
              helperText=""
            />
            <TextField
              error={false}
              id="outlined-error-helper-text"
              label="height"
              defaultValue=""
              helperText=""
            />
            <TextField
              error={false}
              id="outlined-error-helper-text"
              label="weight"
              defaultValue=""
              helperText=""
            />
            <TextField
              error={false}
              id="outlined-error-helper-text"
              label="gender"
              defaultValue=""
              helperText=""
            />
            <TextField
              error={false}
              id="outlined-error-helper-text"
              label="country"
              defaultValue=""
              helperText=""
            />
            <TextField
              error={false}
              id="outlined-error-helper-text"
              label="email"
              defaultValue=""
              helperText=""
            />
            <Stack direction="row" justifyContent="space-evenly">
              <Button variant="contained">save</Button>
              <Button variant="contained">change password</Button>
              <Button variant="contained">logout</Button>
            </Stack>
          </Stack>
        </Card>
      </Stack>
    </Grid>
  );
}
