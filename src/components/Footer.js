import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Wszelkie prawa zastrzeżone ©   Viva Polonia. '}

            {new Date().getFullYear()}
            {'.'}
            {'Projekt & realizacja '}
            <Link color="inherit" href="#">
                bareja.studio
      </Link>
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: "#ededed",
        paddding: "0",
        margin: "0",

    },
}
));


export default function Pricing() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />

            <Container maxWidth="xl" component="footer" className={classes.footer}>
                <Box my={2}>
                    <Copyright />
                </Box>
            </Container>

        </React.Fragment>
    );
}