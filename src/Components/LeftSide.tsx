import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";

const LeftSide = () => {
  const [active, setActive] = useState("about");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        gap: "0.5rem",
        padding: "4rem",
        position: "fixed",
      }}
    >
      <Typography variant="h3" fontWeight={"bolder"}>
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
        full-stack development, mobile app development, and front-end solutions.
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
            fontSize: "1.5rem",
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
            fontSize: "1.5rem",
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
            fontSize: "1.5rem",
          }}
        >
          Projects
        </Link>
      </Box>
    </Box>
  );
};

export default LeftSide;
