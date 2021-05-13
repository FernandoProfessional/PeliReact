import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import RegistrationForm from '../form/RegistrationForm';
import styled from "styled-components";

const ButtonRegister = styled.button`
  background-color:#006BE6;
  color:white;
  font-size: 25px;
  width:200px;
  height:40px;
  border:none;
  border-radius:5px;
`

export default function RegisterDialog() {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <ButtonRegister onClick={handleClickOpen}>
          Register
        </ButtonRegister>
        <Dialog
          open={open}
         /*  onClose={handleClose} */
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Register Form"}</DialogTitle>
          <DialogContent>
            <RegistrationForm handleClose={handleClose}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              Close
            </Button> 
       
          </DialogActions>
        </Dialog>
      </div>
    );
  }