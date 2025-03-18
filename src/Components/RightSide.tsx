import { Box } from "@mui/material";
import About from "./About";

const RightSide = () => {
  return (
    <Box
      sx={{
        width: "50%",
      }}
    >
      <About />
      <Box
        id="projects"
        sx={{
          height: "100vh",
        }}
      >
        Projects
      </Box>
    </Box>
  );
};

export default RightSide;
