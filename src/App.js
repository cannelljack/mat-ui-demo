import React, { Component } from 'react';
import logo from './logo.svg';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';

import './App.css';

class App extends Component {
    state = {
        open:false,
    }

    handleShowDialogue = () => {
        this.setState({
            open: true,
        });
    };
    handleClose = () => {
        this.setState({ open: false });
    };

    render() {       
    return (
      <div className="App">
            <Drawer variant="permanent" anchor="left">
                <List>
                    <ListItem button>
                        <ListItemText primary = "Option 1"/>
                    </ListItem>

                    <ListItem button>
                        <ListItemText primary="Option 2" />
                    </ListItem>

                    <ListItem button>
                        <ListItemText primary="Option 3" />
                    </ListItem>

                    <ListItem button>
                        <ListItemText primary="Option 4" />
                    </ListItem>

                </List>
            </Drawer>




            <Grid style={{paddingLeft : "140px"}} container spacing={24}>
                    <Grid item xs>
                        <Paper >xs</Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper>xs</Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper >xs</Paper>
                    </Grid>
                </Grid>
            <Grid style={{ paddingLeft: "140px" }} container spacing={24}>
                    <Grid item xs>
                        <Paper>xs</Paper>
                    </Grid>
                <Grid item xs={6} md={2}>
                        <Paper >xs=6 md = 2</Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper>xs</Paper>
                    </Grid>
                </Grid>

            
            <Button variant="contained" style={{ margin: "30px" }} onClick={this.handleShowDialogue}> Show Dialogue</Button>

            <Dialog
                open={this.state.open}
                onClose={this.handleClose}
            >
                <DialogTitle>{"Alert"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        You have been alerted
            </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose}>
                        Disagree
            </Button>
                    <Button onClick={this.handleClose} autoFocus>
                        Agree
            </Button>
                </DialogActions>
            </Dialog>
            


      </div>
    );
  }
}

export default App;
