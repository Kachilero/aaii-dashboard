import './App.scss';
import {Box, Container, Typography} from "@mui/material";
import NavBar from "./components/nav/NavBar";
import CardWrapper from "./components/card/CardWrapper";
import exampleStocks from './exampleStocks.json';

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
        {exampleStocks.frontPageItems.map((screen, index) => {
          return (
            <CardWrapper
              key={index}
              showIcon={screen.showIcon}
              headerTitle={screen.headerTitle}
              headerSubHeader={screen?.headerSubHeader ? screen?.headerSubHeader : null}
              cardTitle={screen?.cardTitle}
              description={screen.description}
              values={screen.value}
              footerCta={screen.footerCta}
              extraInfo={screen?.extraInfo ? screen?.extraInfo : null}
            />
          )
        })}
       
      </Container>
    </>
);
}

export default App;
