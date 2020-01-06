import React from 'react'
import CssBaseline from "@material-ui/core/CssBaseline"
import Container from '@material-ui/core/Container'
import Topbar from './components/Topbar'
import LazyHero from 'react-lazy-hero'
import image from "./assets/images/conrado.png"
import FullWidthGrid from "./components/FullWidthGrid"
import Cookie from "./components/Cookies"
import ScrollToTop from './components/ScrollToTop'
import Galeria from "./components/Galeria"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import WaveBefore from "./components/WaveBefore"


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fcb042',
      // backgroundColor: "#fff",
    },
    secondary: {
      main: '#be1e2d',
    },

  },
});


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Topbar />
        <div>
          <Container maxWidth="xl" style={{ backgroundColor: "#fff" }}>
            <LazyHero imageSrc={image}>
              <h1>Generic Startup Hype Headline</h1>
            </LazyHero>
            <FullWidthGrid />
            <Galeria />
            <ContactForm />
          </Container>
          <WaveBefore color={"#ededed"} />
          <Footer />
          <Cookie />
          <ScrollToTop />
          {/* ... */}
        </div>
      </ThemeProvider>


    </>
  );
}

export default App;
