import './App.scss';
import {Box, Container, Typography} from "@mui/material";
import NavBar from "./components/nav/NavBar";
import CardWrapper from "./components/card/CardWrapper";

function App() {
  return (
    <>
      <Container component='section'>
        <NavBar />
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Starting
          </Typography>
        </Box>
      </Container>
      <Container component='section'>
        <CardWrapper />
      </Container>
    </>
);
}

export default App;
