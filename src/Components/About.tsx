import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        height: { xs: "fit", md: "100vh" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "1rem", md: "1.5rem" },
        }}
      >
        I'm a developer passionate about creating accessible, pixel-perfect user
        interfaces that combine thoughtful design with robust engineering. My
        favorite work lies at the intersection of design and development,
        crafting experiences that not only look great but are also optimized for
        performance and usability. Currently, I’m focused on building modern web
        and mobile applications using technologies like
        <span style={{ color: "#fff" }}> React</span>,
        <span style={{ color: "#fff" }}> React Native</span>, and
        <span style={{ color: "#fff" }}> Node.js</span>. I’m particularly
        interested in creating seamless user experiences with a strong emphasis
        on accessibility, performance, and scalability. Whether it's designing
        intuitive user interfaces or implementing complex backend logic, I
        always aim to provide a smooth and inclusive experience for every user.
        In the past, I’ve worked on various projects — from creating a video
        player in
        <span style={{ color: "#fff" }}> React</span> to developing
        authentication systems and integrating real-time chat features with{" "}
        <span style={{ color: "#fff" }}> Socket.io</span>. Each project has
        given me a deeper understanding of how to build robust applications that
        meet users' needs and expectations. When I’m not coding, you’ll probably
        find me exploring new technologies, reading up on software development
        trends, or spending time with my friends and family. I'm always looking
        for ways to grow and expand my skill set, both professionally and
        personally.
      </Typography>
    </Box>
  );
};

export default About;
