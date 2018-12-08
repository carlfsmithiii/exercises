import React, { Component } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  withStyles
} from "@material-ui/core";

const styles = theme => ({
  FormControl: {
    width: 300
  }
});

export default withStyles(styles)(
  class extends Component {
    state = this.getInitState();

    getInitState() {
      const { exercise } = this.props;

      return exercise
        ? exercise
        : {
            title: "",
            description: "",
            muscles: ""
          };
    }

    handleChange = name => ({ target: { value } }) =>
      this.setState({
        [name]: value
      });

    handleSubmit = () => {
      // TODO: validate
      const { exercise } = this.state;

      this.props.onSubmit({
        ...exercise,
        id: exercise.title.toLocaleLowerCase().replace(/ /g, "-")
      });

      this.setState({
        open: false,
        exercise: {
          title: "",
          description: "",
          muscles: ""
        }
      });
    };

    render() {
      const { classes, muscles: categories } = this.props,
        { title, description, muscles } = this.state;
      return (
        <form>
          <TextField
            label="Title"
            value={title}
            onChange={this.handleChange("title")}
            margin="normal"
            className={classes.FormControl}
          />
          <br />
          <FormControl className={classes.FormControl}>
            <InputLabel htmlFor="muscles">Muscles</InputLabel>
            <Select value={muscles} onChange={this.handleChange("muscles")}>
              {categories.map(category => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />
          <TextField
            multiline
            rows="4"
            label="Description"
            value={description}
            onChange={this.handleChange("description")}
            margin="normal"
            className={classes.FormControl}
          />
          <br />
          <Button
            onClick={this.handleSubmit}
            variant="contained"
            color="primary"
          >
            Create
          </Button>
        </form>
      );
    }
  }
);
