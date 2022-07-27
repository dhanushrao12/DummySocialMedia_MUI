import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Add from "./components/Add";

const theme = createTheme({
  palette: {
    primary: {
      main: "#06283D",
    },
    secondary: {
      main: "#1363DF",
    },
    tertiary: {
      main: "#47B5FF",
    },
    dull: {
      main: "#e16c89",
    },
    light: {
      main: "#DFF6FF",
    },
    white: {
      main: "#ffffff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Navbar />
        <Stack direction={"row"} spacing={1} justifyContent={"left"}>
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
