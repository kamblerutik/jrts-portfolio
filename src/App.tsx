import { Box } from "@mui/material";
import LeftSide from "./Components/LeftSide";
import RightSide from "./Components/RightSide";

const App = () => {
  return (
    <Box
      sx={{
        display: "flex",
        background: "#0f172a",
        color: "#94a3b8",
      }}
    >
      <Box
        sx={{
          width: "50%",
          position: "relative",
        }}
      >
        <LeftSide />
      </Box>
      <RightSide />
    </Box>
  );
};

export default App;
