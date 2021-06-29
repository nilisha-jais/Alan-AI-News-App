import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

const Header = ({ articles }) => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.navbar}><Typography variant="h4" component="h2">📰 <strong>NEWS</strong></Typography></div>
            <div className={classes.logoContainer}>
                {articles.length ? (
                    <div className={classes.infoContainer}>
                        <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Open article number [4]</Typography></div>
                        <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Go back</Typography></div>
                    </div>
                ) : null}
                <img src="https://alan.app/docs/static/alan-logo-medium-white-1a45b442d1f5a635a14dada4b47ddada.svg" className={classes.alanLogo} alt="logo" />
            </div>
        </div>

    );
};
export default Header;