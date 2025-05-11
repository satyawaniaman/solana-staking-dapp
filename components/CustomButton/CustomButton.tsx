import { Button, ButtonProps } from "@mui/material";
import React from "react";

export const CustomButton = (props: ButtonProps) => {
  return (
    <Button
      variant="contained"
      sx={{
        padding: "14px 32px",
        borderRadius: "12px",
        textTransform: "none",
        fontWeight: 600,
        fontSize: 16,
        background: "linear-gradient(90deg, #14F195 0%, #9945FF 100%)",
        boxShadow: "0px 4px 12px rgba(20, 241, 149, 0.2)",
        transition: "all 0.3s ease",
        "&:hover": {
          background: "linear-gradient(90deg, #0ba76a 0%, #7a31d4 100%)",
          boxShadow: "0px 6px 16px rgba(20, 241, 149, 0.3)",
          transform: "translateY(-2px)",
        },
      }}
      {...props}
    >
      {props.children}
    </Button>
  );
};
