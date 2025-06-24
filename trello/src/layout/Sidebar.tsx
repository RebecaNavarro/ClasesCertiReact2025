import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Divider,
} from "@mui/material";
import { Home, Info } from "@mui/icons-material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useAuth } from "../contexts/AuthContext";
import { useAuthReducer } from "../contexts/AuthReducerContext";

const drawerWidth = 240;

interface SidebarProps {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  isMobile: boolean;
}

const Sidebar = ({
  mobileOpen,
  handleDrawerToggle,
  isMobile,
}: SidebarProps) => {

  const { dispatch } = useAuthReducer();

  const { t } = useTranslation();

  const location = useLocation();
  const { logout } = useAuth();
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/"
            selected={location.pathname === "/"}
          >
            <ListItemIcon>
              <BusinessCenterIcon />
            </ListItemIcon>
            <ListItemText primary={t("sidebar.projects")} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/Login"
            selected={location.pathname === "/login"}
            onClick={() => {
              logout();
              dispatch({ type: 'LOGOUT' });
            }}
          >
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            <ListItemText primary={t("sidebar.logout")} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      {isMobile && (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      )}

      {!isMobile && (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      )}
    </>
  );
};

export default Sidebar;