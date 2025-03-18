import { Box, Typography } from "@mui/material";
import LeftSide from "./Components/LeftSide";
import RightSide from "./Components/RightSide";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";

const App = () => {
  const [active, setActive] = useState("");
  return (
    <Box
      sx={{
        display: "flex",
        background: "#0f172a",
        color: "#94a3b8",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          width: "50%",
          position: "relative",
          display: { xs: "none", md: "block" },
        }}
      >
        <LeftSide />
      </Box>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          flexDirection: "column",
          width: "100%",
          gap: "0.5rem",
          padding: "1rem",
        }}
      >
        <Typography variant="h5" fontWeight={"bolder"}>
          Rutik Kamble
        </Typography>
        <Typography variant="h6">
          I'm
          <Typewriter
            words={[
              " a Web Developer",
              " a Full Stack Developer",
              " an App Developer",
              " a Front-End Developer",
            ]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={1000}
          />
        </Typography>
        <Typography variant="body1">
          I build responsive, user-friendly web applications, specializing in
          full-stack development, mobile app development, and front-end
          solutions.
        </Typography>
        <Box
          mt={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <Link
            onClick={() => setActive("about")}
            to="about"
            smooth
            style={{
              color: active === "about" ? "#fff" : "",
              cursor: "pointer",
            }}
          >
            About
          </Link>
          <Link
            onClick={() => setActive("experience")}
            to="experience"
            smooth
            style={{
              color: active === "experience" ? "#fff" : "",
              cursor: "pointer",
            }}
          >
            Experience
          </Link>
          <Link
            onClick={() => setActive("projects")}
            to="projects"
            smooth
            style={{
              color: active === "projects" ? "#fff" : "",
              cursor: "pointer",
            }}
          >
            Projects
          </Link>
        </Box>
      </Box>
      <RightSide />
    </Box>
  );
};

export default App;
