import React from "react";
import "./toolBar.css";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
const ToolBar = () => {
  return (
    <div>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      ></SpeedDial>
      {/* <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 80 }}
        icon={<SpeedDialIcon />}
      ></SpeedDial> */}
    </div>
  );
};

export default ToolBar;
