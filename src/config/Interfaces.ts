export interface LandingPagePresenterElement {
  handleBmi: () => void;
}
export interface LandingPagePresenterInterface {
  prop: LandingPagePresenterElement;
}

export interface NavigationItemInterface {
  title: string;
  onClick: () => void;
}
export interface NavigationElement {
  drawerWidth: number;
  navTitle: string;
  mobileOpen: boolean;
  navItems: NavigationItemInterface[];
  handleDrawerToggle: () => void;
  handleLandingPage:() => void
}
export interface NavigationPresenterInterface {
  prop: NavigationElement;
}
