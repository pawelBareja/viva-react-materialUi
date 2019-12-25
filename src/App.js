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


function App() {
  return (
    <>
      <Topbar />
      <div>
        <Container maxWidth="xl">
          <CssBaseline />
          <LazyHero imageSrc={image}>
            <h1>Generic Startup Hype Headline</h1>
          </LazyHero>
          <FullWidthGrid />
          <Galeria />
        </Container>
        <Cookie />
        <ScrollToTop />
        {/* ... */}
      </div>


    </>
  );
}

export default App;
