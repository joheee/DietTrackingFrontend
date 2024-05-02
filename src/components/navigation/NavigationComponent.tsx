import { useNavigate } from "react-router-dom";
import NavigationPresenter from "./NavigationPresenter";
import { useEffect, useState } from "react";
import {
  NavigationElement,
  NavigationItemInterface,
} from "../../config/Interfaces";

export default function NavigationComponent() {
  // VARIABLE
  const drawerWidth = 240;
  const navTitle = "Diet Tracking";

  const navItemsGuest: NavigationItemInterface[] = [
    {
      title: "Sign In",
      onClick: () => navigate("/login"),
    },
  ];

  const navItemsUser: NavigationItemInterface[] = [
    {
      title: "Foods",
      onClick: () => navigate("/foods"),
    },
    {
      title: "BMI",
      onClick: () => navigate("/bmi"),
    },
    {
      title: "Blogs",
      onClick: () => navigate("/blogs"),
    },
  ];

  // STATE
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navItems, setNavItems] =
    useState<NavigationItemInterface[]>(navItemsGuest);
  const navigate = useNavigate();

  useEffect(() => {
    setNavItems(navItemsUser);
    setNavItems(navItemsGuest);
  }, []);

  // FUNCTION
  function handleDrawerToggle() {
    setMobileOpen((prevState) => !prevState);
  }

  function handleLandingPage() {
    navigate("/");
  }

  // PROP
  const prop: NavigationElement = {
    drawerWidth,
    navTitle,
    mobileOpen,
    navItems,
    handleDrawerToggle,
    handleLandingPage
  };

  return <NavigationPresenter prop={prop} />;
}
