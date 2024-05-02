import { useNavigate } from "react-router-dom";
import NavigationPresenter from "./NavigationPresenter";
import { useEffect, useState } from "react";
import { NavigationElement, NavigationItemInterface } from "../../config/Interfaces";

interface Props {
  window?: () => Window;
}

export default function NavigationComponent(props: Props) {
  
  // VARIABLE
  const drawerWidth = 240;
  const navTitle = "Diet Tracking";
  
  const navItemsGuest : NavigationItemInterface[] = [
    {
      title:'Sign In',
      onClick:() => {navigate('/login')}
    }
  ];
  // STATE
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navItems, setNavItems] = useState<NavigationItemInterface[]>(navItemsGuest);
  const navigate = useNavigate();

  useEffect(() => {

  },[])

  // FUNCTION
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // PROP
  const prop: NavigationElement = {
    drawerWidth,
    navTitle,
    mobileOpen,
    navItems,
    handleDrawerToggle,
  };

  return <NavigationPresenter prop={prop} />;
}
