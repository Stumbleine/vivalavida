import { Button } from "@mui/material";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function NavigationBtn({ route, label, type }) {
  const location = useLocation();
  const active = route ? location.pathname === route : false;
  return (
    <Button
      component={NavLink}
      to={route}
      //   variant="contained"
      sx={{
        color: active ? "pink" : "terciary.main",
        // background: "white",
        // fontStyle: "italic",
        textTransform: "none",
        px: 1,
      }}
    >
      {label}
    </Button>


  );
}
