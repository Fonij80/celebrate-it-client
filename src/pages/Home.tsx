import { Box } from "@mui/material";
import { Hero, Advantages } from "../components/organisms";
import { Contact } from "./Contact";

export const Home = () => {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #A8D5BA 0%, #FFB5C2 100%)",
        }}
      >
        {/* Hero Content */}
        <Hero />

        {/* Animated Advantages Section */}
        <Advantages />
      </Box>
      <Contact />
    </>
  );
};

export default Home;
