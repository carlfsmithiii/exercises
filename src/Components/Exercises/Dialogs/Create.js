import React, { Component, Fragment } from "react";
import {
    Button,
  Fab,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import { Add } from "@material-ui/icons";

export default class extends Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  render() {
    const { open } = this.state;
    return (
      <Fragment>
        <Fab variant="round" onClick={this.handleToggle} size="small">
          <Add />
        </Fab>
        <Dialog
          open={open}
          onClose={this.handleToggle}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Create a New Exercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below.
            </DialogContentText>
            <form />
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="primary">Create</Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
