import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { ListaComponent } from "./style/Style";
import { ListText } from "./style/Style";
import { ListIcon } from "./style/Style";
import { ListSpacion } from "./style/Style";
import { useAxios } from "../../hooks/useAxios";

export const Lista = ({ nameCollection, idCollecion }) => {
  let { deleteLista } = useAxios();

  const borrarLista = async (idLista) => {
    console.log(idLista);
    await deleteLista(idLista);
    window.location.reload();
  };
  const saludar = () => {
    console.log('ddddddd')
  }


  return (
    <ListaComponent onClick={saludar}>
      <ListText>{nameCollection}</ListText>
      <ListIcon>
        <ListSpacion>
          <HighlightOffIcon
            fontSize="large"
            color="inherit"
            onClick={() => borrarLista(idCollecion)}
          />
        </ListSpacion>
      </ListIcon>
    </ListaComponent>
  );
};
