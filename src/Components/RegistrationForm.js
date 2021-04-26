import React from "react";
//makestyle
import { makeStyles } from "@material-ui/core/styles";
// necessary imports
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles({
  root: {
    padding: 16,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  cardStyle: {
    padding: 16,
  },
  input: {
    margin: "16px 0px",
  },
  title: {
    color: "#005aa8",
  },
  label: {
    color: "#4b5c70",
  },
});

const RegistrationForm = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submit_form = (e) => {
    handleClick();
    // e.preventDefault();
  };

  return (
    <div>
      <Container className={classes.root}>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert onClose={handleClose} severity="success">
            You Have Registered Successfully, Thank You!
          </Alert>
        </Snackbar>
        <h1 className={classes.title}>Conference Online Registration Form</h1>
        <p>
          Please fill up the form below to register for the conference on Human
          Computer Interactions
        </p>
        <Card className={classes.cardStyle}>
          <form
            autoComplete="off"
            className={classes.form}
            onSubmit={submit_form}
          >
            <h5 className={classes.label}>Full Name</h5>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              required={true}
              className={classes.input}
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              required={true}
              className={classes.input}
            />
            <h5 className={classes.label}>Address</h5>
            <TextField
              id="outlined-basic"
              label="E-mail"
              variant="outlined"
              required={true}
              type="email"
              className={classes.input}
            />
            <TextField
              id="outlined-basic"
              label="Street Adress"
              variant="outlined"
              className={classes.input}
            />
            <TextField
              id="outlined-basic"
              label="City"
              variant="outlined"
              className={classes.input}
            />
            <TextField
              id="outlined-basic"
              label="State"
              variant="outlined"
              className={classes.input}
            />
            <TextField
              id="outlined-basic"
              label="Country"
              variant="outlined"
              className={classes.input}
            />
            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              type="number"
              className={classes.input}
            />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
        </Card>
      </Container>
    </div>
  );
};

export default RegistrationForm;
