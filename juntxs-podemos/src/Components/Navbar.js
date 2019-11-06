import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import firebase from "../config/firebase";

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.db = firebase.firestore();
        this.state = {
            name: ""
        };
    }

    signOut = e => {
        firebase
            .auth()
            .signOut()
            .then(u => {
                console.log("signed out")
                window.location.href = "/"
            })
    }

    render() {
        return (
            <div>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6">
                            Home
                        </Typography>
                        <Button color="inherit" onClick={this.signOut}>
                            Sign out
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}