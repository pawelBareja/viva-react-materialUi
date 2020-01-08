import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import gridImage1 from "../assets/images/grid1.png";
import logo from "../assets/images/logo.png";

import gridImage2 from "../assets/images/grid2.jpg";
import gridImage3 from "../assets/images/grid3.jpg";
import Przycisk from "./Przycisk";
import WaveBefore from "./WaveBefore";
import WaveAfter from "./WaveAfter";


const theme = createMuiTheme();
const useStyles = makeStyles(theme => ({

  root: {
  },
  paper: {
    padding: theme.spacing(3, 2),
    textAlign: "left",
    color: theme.palette.text.secondary,
    boxShadow: "none",
    position: "relative",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  orderChange: {
    [theme.breakpoints.down('sm')]: {
      display: "flex",
      flexDirection: "column-reverse",
    },
  },
  verticalCenter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  afterImage: {
    width: "100%",
    height: "auto",
    maxWidth: "300px",
    position: "absolute",
    left: "0px",
    top: "0px",
  },
}
)
);

const styleImage = {
  borderRadius: "50%",
  width: "100%",
  maxWidth: "300px",
  height: "auto",
  margin: "0 auto",
}



export default function FullWidthGrid() {
  const classes = useStyles();
  console.log(theme);


  return (

    <MuiThemeProvider>
      <div>
        <WaveBefore color={"#fcb042"} />
        <section style={{ backgroundColor: "#fcb042" }}>
          <Grid container spacing={3}  >

            <Grid item xs={12} md={4} >
              <Paper className={classes.paper} style={{ backgroundColor: "#fcb042" }}>
                <img style={styleImage} src={gridImage1} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
              <Paper id={"O mnie"} className={classes.paper} style={{ backgroundColor: "#fcb042" }}>
                <Typography variant="h3" component="h3" style={{ color: "#fff" }}>
                  Hola
            </Typography>
                <Typography variant="h5" component="h3" style={{ color: "#fff" }}>
                  Bliżej Hiszpanii
            </Typography>
                <Typography component="p" style={{ margin: "10px 0", color: "#fff" }}>
                  Od dziecka jestem pytany o to, kim jestem - czuję się Polakiem i
                  Hiszpanem jednocześnie. Znam i rozumiem jedną i drugą kulturę.
                  Większość życia spędziłem w Polsce, ale jednocześnie tęsknię za
                  Hiszpanią. W Polsce od lat pracuję jako prezenter i konferansjer,
                  gdzie nabyłem ogromne doświadczenie. Bywałem zapraszany gościnnie
                  na wyjazdy “incentive” z firmami do Hiszpanii jako gość specjalny.
            </Typography>

                <Typography component="p" style={{ margin: "10px 0", color: "#fff" }}>
                  Projekt Viva Polonia jest budowany przeze mnie oraz mojego Przyjaciela Marcina Jańczuka od kilku lat. Chcę pokazywać, odkrywać Hiszpanię razem z Polakami. Kraj, za którym tęsknię, miejsce, w którym się urodziłem i żyłem do dwunastego roku życia, do którego wracałem latami by odwiedzić najbliższych.
            </Typography>

                <Typography component="p" style={{ margin: "10px 0", color: "#fff" }}>
                  Hiszpanię odczuwam i przeżywam - dosłownie, bo Hiszpanię i hiszpańskość się odczuwa. Hiszpania to nie tylko plaża i słońce - to podejście ludzi, życzliwość, szacunek wobec siebie, smaki spożywanych potraw, kolor ulic, gwar na straganie, szaleństwo fiest.
            </Typography>

                <Typography component="p" style={{ margin: "10px 0", color: "#fff" }}>
                  Spełniam swoje marzenie o życiu tu i tam - zabierając Państwa we wspólną podróż.
            </Typography>
                <Przycisk buttonText={"kontakt"} link={"#"} variant={"outlined"} color={"#fff"} />
              </Paper>
            </Grid>
          </Grid>
        </section>
        <WaveAfter />

        <section>
          <Grid container spacing={3} className={classes.orderChange}>
            <Grid item xs={12} md={8}>
              <Paper id={"Viva Polonia"} className={classes.paper}>
                <Typography variant="h3" component="h3">
                  Buen Viaje
            </Typography>
                <Typography variant="h5" component="h3">
                  Wyjazd w kameralnych grupach
            </Typography>
                <Typography component="p" style={{ margin: "10px 0" }}>
                  Od dziecka jestem pytany o to, kim jestem - czuję się Polakiem i
                  Hiszpanem jednocześnie. Znam i rozumiem jedną i drugą kulturę.
                  Większość życia spędziłem w Polsce, ale jednocześnie tęsknię za
                  Hiszpanią. W Polsce od lat pracuję jako prezenter i konferansjer,
                  gdzie nabyłem ogromne doświadczenie. Bywałem zapraszany gościnnie
                  na wyjazdy “incentive” z firmami do Hiszpanii jako gość specjalny.
            </Typography>

                <Typography component="p" style={{ margin: "10px 0" }}>
                  Projekt Viva Polonia jest budowany przeze mnie oraz mojego Przyjaciela Marcina Jańczuka od kilku lat. Chcę pokazywać, odkrywać Hiszpanię razem z Polakami. Kraj, za którym tęsknię, miejsce, w którym się urodziłem i żyłem do dwunastego roku życia, do którego wracałem latami by odwiedzić najbliższych.
            </Typography>

                <Typography component="p" style={{ margin: "10px 0" }}>
                  Hiszpanię odczuwam i przeżywam - dosłownie, bo Hiszpanię i hiszpańskość się odczuwa. Hiszpania to nie tylko plaża i słońce - to podejście ludzi, życzliwość, szacunek wobec siebie, smaki spożywanych potraw, kolor ulic, gwar na straganie, szaleństwo fiest.
            </Typography>

                <Typography component="p" style={{ margin: "10px 0" }}>
                  Spełniam swoje marzenie o życiu tu i tam - zabierając Państwa we wspólną podróż.
            </Typography>
                <Przycisk buttonText={"kontakt"} link={"#"} variant={"outlined"} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={classes.paper}>
                <img style={styleImage} src={gridImage2} />
                <img className={classes.afterImage} src={logo} />
              </Paper>
            </Grid>
          </Grid>
        </section>

        <WaveBefore color={"#fcb042"} />
        <section style={{ backgroundColor: "#fcb042" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Paper id={"Oferta"} className={classes.paper} style={{ backgroundColor: "#fcb042" }}>
                <img style={styleImage} src={gridImage3} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
              <Paper className={classes.paper} style={{ backgroundColor: "#fcb042" }}>
                <Typography variant="h3" component="h3" style={{ color: "#fff" }}>
                  Oferta
            </Typography>
                <Typography variant="h5" component="h3" style={{ color: "#fff" }}>
                  Bliżej Hiszpanii
            </Typography>
                <Typography component="p" style={{ margin: "10px 0", color: "#fff" }}>
                  Bez względu na to, czy wyjazd organizujemy dla osób prywatnych czy dla podmiotów firmowych naszym priorytetem jest dostarczenie niezapomnianych, pozytywnych wrażeń. Dialog podczas organizacji i w trakcie przebiegu wycieczki ma zapewnić pełne doświadczenie tego, co w Hiszpanii cenne i warte poznania.
  Oferujemy wycieczki dla osób indywidualnych. Oferta ta posiada z góry określony termin oraz przygotowany przez nas scenariusz, ale jesteśmy zawsze otwarci na Państwa uwagi oraz wymagania.
  Drugim rodzajem wycieczek w naszej ofercie są wyjazdy „szyte na miarę” dla podmiotów firmowych lub wcześniej zorganizowanych grup. W tym przypadku tworzymy scenariusz wspólnie z klientami, wysłuchując ich potrzeb i dostosowując program tak, by wszystkie oczekiwania zostały spełnione.
            </Typography>

                <Typography component="p" style={{ fontWeight: "900", color: "#fff" }}>
                  Fuerteventura
            </Typography>

                <Typography component="p" style={{ fontWeight: "900", color: "#fff" }}>
                  Oferta dla osób indywidualnych
            </Typography>

                <Typography component="p" style={{ margin: "10px 0", color: "#fff" }}>
                  Proszę sprawdź aktualny termin najbliższego wyjazdu. Przygotowujemy wyjazdy o różnej tematyce i zmieniających się motywach przewodnich. Niezmiennie w roli głównej Hiszpania i jej wiele wspaniałych twarzy. Chcemy, aby spędzony wspólnie czas był pozytywnym wspomnieniem, do którego będziecie Państwo wracać przy każdej możliwej okazji.
            </Typography>

                <Typography component="p" style={{ fontWeight: "900", color: "#fff" }}>
                  Oferta B2B
            </Typography>

                <Typography component="p" style={{ margin: "10px 0", color: "#fff" }}>
                  Incentive travel z Viva Polonia to gwarancja sukcesu dla naszych partnerów. Bez względu na to czy planujemy wyjazd dla pracowników, klientów czy samego zarządu - oferta będzie idealnie dopasowana do potrzeb zamawiającego.
            </Typography>

                <Typography component="p" style={{ fontWeight: "900", color: "#fff" }}>
                  Oferta „szyta na miarę”
            </Typography>

                <Typography component="p" style={{ margin: "10px 0", color: "#fff" }}>
                  Jeśli posiadacie Państwo zorganizowaną grupę i oczekujecie od organizatora „czegoś więcej” to doskonałe miejsce, żeby spełnić swoje oczekiwania. Poznać prawdziwą Hiszpanię można tylko w naszym towarzystwie.
            </Typography>


                <Przycisk buttonText={"kontakt"} link={"#"} variant={"outlined"} color={"#fff"} />
              </Paper>
            </Grid>
          </Grid>
        </section>
        <WaveAfter />
      </div>
    </MuiThemeProvider >
  );
}
