import { Grid, Typography } from "@mui/material";

interface LandingCardInterface {
  title: string;
  src: string;
  description: string;
}
export default function LandingCard(prop: LandingCardInterface) {
  return (
    <Grid
      container
      sx={{ maxWidth: "15rem" }}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>
        <img src={prop.src} alt="" />
      </Grid>
      <Grid item>
        <Typography style={{ fontWeight: "bold", fontSize: "20px" }}>
          {prop.title}
        </Typography>
        <Typography>{prop.description} </Typography>
      </Grid>
    </Grid>
  );
}
