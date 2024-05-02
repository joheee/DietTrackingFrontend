import {
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function LoginPresenter() {
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Card variant="outlined" sx={{ minWidth: 500 }}>
          <CardContent>
            <Stack spacing={3} paddingY={4} paddingX={2}>
              <Typography variant="h3" sx={{ textAlign: "center" }}>
                Login
              </Typography>
              <TextField
                error={false}
                id="outlined-error-helper-text"
                label="email"
                defaultValue=""
                helperText=""
              />
              <TextField
                error={false}
                id="outlined-error-helper-text"
                label="password"
                type="password"
                defaultValue=""
                helperText=""
              />
              <Button variant="contained">continue</Button>
              <Typography>
                don't have account?
                <Link to="/register"> sign up now! </Link>
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
