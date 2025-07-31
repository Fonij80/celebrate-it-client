import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Box } from "@mui/material";

export const Layout = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #BBD8A3 0%, #B99470 100%)",
        // background: "#BBD8A3",
        // display: "flex",
        // flexDirection: "column",
      }}
    >
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </Box>
  );
};
