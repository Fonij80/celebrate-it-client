import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Box } from "@mui/material";

export const Layout = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #A8D5BA 0%, #FFB5C2 100%)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </Box>
  );
};
