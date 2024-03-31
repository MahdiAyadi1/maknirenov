import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { CssBaseline, Paper } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import { Email } from "@mui/icons-material";

export default function BottomNav() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <Box sx={{ width: 500 }}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <CssBaseline />
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            "& .Mui-selected": {
              backgroundColor: "transparent",
              color: "gray", // Set background color for selected item
            },
          }}
        >
          {/* <BottomNavigationAction label="Recents" icon={<RestoreIcon />} /> */}
          <BottomNavigationAction label="Email" icon={<Email />} />
          <BottomNavigationAction label="Appeler" icon={<CallIcon />} />
          <BottomNavigationAction
            label="Itinéraire"
            icon={<LocationOnIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
