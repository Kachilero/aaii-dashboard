import './App.scss';
import {Box, Container, Typography} from "@mui/material";
import NavBar from "./components/nav/NavBar";

function App() {
  return (
    <Container component='section'>
      <NavBar />
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Starting
        </Typography>
      </Box>
    </Container>
  );
}

export default App;
