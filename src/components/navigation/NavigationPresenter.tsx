import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavigationPresenterInterface } from "../../config/Interfaces";

export default function NavigationPresenter({
  prop,
}: NavigationPresenterInterface) {
  const drawer = (
    <Box onClick={prop.handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        onClick={prop.handleLandingPage}
        variant="h6"
        sx={{ my: 2, cursor: "pointer" }}
      >
        {prop.navTitle}
      </Typography>
      <Divider />
      <List>
        {prop.navItems.map((item, i) => (
          <ListItem onClick={item.onClick} key={i} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={prop.handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              cursor: "pointer",
              display: { xs: "none", sm: "block" },
            }}
            onClick={prop.handleLandingPage}
          >
            {prop.navTitle}
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {prop.navItems.map((item, i) => (
              <Button onClick={item.onClick} key={i} sx={{ color: "#fff" }}>
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={prop.mobileOpen}
          onClose={prop.handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: prop.drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
