import React from 'react';
import { TextField, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  fileInput: {
    display: 'none',
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        className={classes.textField}
      />
      <TextField
        id="roll-number"
        label="Roll Number"
        variant="outlined"
        className={classes.textField}
      />
      <label htmlFor="file-upload" className={classes.textField}>
        Choose a file
        <input id="file-upload" type="file" className={classes.fileInput} />
      </label>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        type="submit"
      >
        Submit
      </Button>
    </div>
  );
}

export default App;