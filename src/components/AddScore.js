import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const AddScore = props => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({ username: "", score: "" });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  // Save score and close modal form
  const handleSave = () => {
    props.addScore(user);
    handleClose();
  };

  return (
    <div>
       <Button variant="outlined" color="primary" style={{margin: 10}} onClick={handleClickOpen}>
        New Score
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New score</DialogTitle>
        <DialogContent>
        <TextField autoFocus fullWidth label="Username" name="username" 
              value={user.username} onChange={handleChange}/> 
         <TextField fullWidth label="Score" name="score" 
              value={user.score} onChange={handleChange}/>   
        </DialogContent>
        <DialogActions>
            <Button color="secondary" onClick={handleClose}>Cancel</Button>
            <Button color="primary" onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddScore;
