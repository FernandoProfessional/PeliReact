import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import LoginForm from '../form/LoginForm';
import styled from "styled-components";

const ButtonLogin = styled.button`
  background-color:#006BE6;
  width:140px;
  height:40px;
  font-size:20px;
  color:white;
  outline:none;
  border:none;
  border-radius:5px;
  margin-left: 35px;
  cursor:pointer;
  &:hover{
    background-color:#338EF5;
  }
`

export default function LoginDialog() {

    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <ButtonLogin onClick={handleClickOpen}>
          Login
        </ButtonLogin>
        <Dialog   
          style={{backgroundColor: 'hsla( 0.6turn , 100% , 50% , 0.5 )'}}

          open={open}
         /*  onClose={handleClose} */
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle  style={{backgroundColor: '#59849C',color:'white'}} id="alert-dialog-title">{"Login Form"}</DialogTitle>
          <DialogContent style={{backgroundColor: '#59849C'}}>

            <LoginForm handleClose={handleClose} />

          </DialogContent>
          <DialogActions style={{backgroundColor: '#59849C'}}>
            <Button onClick={handleClose}  style={{color: 'white'}} autoFocus>
              Close
            </Button> 
       
          </DialogActions>
        </Dialog>
      </div>
    );
  }