import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import MailOutlineIcon from '@material-ui/icons/MailOutline';


const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

const buttonStyle = {
    borderRadius: "20px",
    borderWidth: "2px",
}

export default function Przycisk(props) {
    const classes = useStyles();
    const { buttonText, link, variant } = props;


    return (
        <div>
            <div>
                <Button style={buttonStyle}
                    variant={variant}
                    size="medium"
                    color="primary"
                    aria-label="add"
                    className={classes.margin}
                    href={link}
                >
                    <MailOutlineIcon className={classes.extendedIcon} />
                    {buttonText}
                </Button>
            </div>

        </div>
    );
}
