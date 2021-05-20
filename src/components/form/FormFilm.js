import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useAxios } from '../../hooks/useAxios';
import { AuthContext } from '../auth/AuthContext';
import styled from "styled-components";

const ButtonAddListFilm = styled.div`
  color:#70040A;
  background-color:#006BE6;
  padding:20px 30px;
  border-radius:10px;
  font-size:16px;
  cursor:pointer;
`
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function DialogSelect({idPeli}) {

    let {getListas,addPeliLista} = useAxios();
    const {
        user: { mail },
      } = useContext(AuthContext);
    const [listasPeliculas, setListasPeliculas] = useState([]);

    const listaPeticion = async () => {
        const { data } = await getListas(mail);
        console.log(data)
        setListasPeliculas(data);
      };
      useEffect(() => {
        listaPeticion();
      }, []);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [idColleccion, setIdColleccion] = React.useState('');

  const handleChange = (event) => {
    setIdColleccion(Number(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const addFilm = async(idPeli) => {
        const {data} = await addPeliLista(idColleccion,idPeli)
        setOpen(false);
      console.log(data)
  }

  return (
    <div>
      <ButtonAddListFilm onClick={handleClickOpen}>Add List</ButtonAddListFilm>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-dialog-select-label">List</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={idColleccion}
                onChange={handleChange}
                input={<Input />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {listasPeliculas && listasPeliculas.map(lista => (<MenuItem value={lista.idColecciones}>{lista.nameCollection}</MenuItem>))}
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() =>addFilm(idPeli)} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
