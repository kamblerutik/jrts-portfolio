import { Box } from "@mui/material";
import About from "./About";
import ProjectCard from "./ProjectCard";

const RightSide = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "50%" },
      }}
    >
      <About />
      <Box
        id="projects"
        sx={{
          height: "100vh",
          padding: "1rem",
        }}
      >
        <ProjectCard />
      </Box>
    </Box>
  );
};

export default RightSide;
