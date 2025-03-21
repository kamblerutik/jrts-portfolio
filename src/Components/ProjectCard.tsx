import { Box, Button, Card, Typography } from "@mui/material";
import poster from "../assets/poster.png";

const ProjectCard = () => {
  return (
    <Card
      sx={{
        background: "rgba(15, 23, 42, 0.6)",
        borderRadius: "16px",
        padding: "1rem",
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        color: "#fff",
        cursor: "pointer",
        width: "100%", // Changed from 'full' to '100%' for proper width
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "0.8rem",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "100%",
              md: "800px",
            },
          }}
        >
          <img
            src={poster}
            alt="poster"
            style={{
              width: "100%",
              height: "150px",
              borderRadius: "5px",
            }}
          />
        </Box>
        <Box>
          {" "}
          <Typography variant="h5">Title</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            expedita quas id quae tenetur hic porro eos, animi beatae
            perspiciatis delectus, aliquid eaque veritatis voluptate!
          </Typography>
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{
          border: "1px solid rgba(255, 255, 255, 0.2)",
          backgroundColor: "#0f172a",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "8px",
          width: "100%",
          mt: "1rem",
          "&:hover": {
            backgroundColor: "#263345",
          },
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        Visit
      </Button>
    </Card>
  );
};

export default ProjectCard;
