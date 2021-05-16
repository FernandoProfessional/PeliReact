import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/auth/AuthContext";
import { useAxios } from "../hooks/useAxios";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { Lista } from "../components/Lista/Lista";
import { useForm } from "../hooks/useForm";
import { ListaConatainer } from "./style/StyleLista";
import { ContainerLista } from "./style/StyleLista";
import { ContainerIconAdd } from "./style/StyleLista";
import { TextIconAdd } from "./style/StyleLista";
import { TextoListaVacia } from "./style/StyleLista";
import { IconoAddList } from "./style/StyleLista";

export const ListaScreen = () => {
  let { getListas, newLista, addPeliLista} = useAxios();
  const {
    user: { mail },
  } = useContext(AuthContext);

  const [listasPeliculas, setListasPeliculas] = useState([]);

  const [values, handleInputChange] = useForm({
    nombreLista: "",
  });

  const listaPeticion = async () => {
    const { data } = await getListas(mail);
    setListasPeliculas(data);
  };
  const crearLista = async () => {
    if (values.nombreLista !== "") {
      await newLista(mail, values.nombreLista);
      window.location.reload();
    }
  };

 


  useEffect(() => {
    listaPeticion();
  }, []);

  return (
    <ListaConatainer>
      <ContainerLista>
        <ContainerIconAdd>
          <TextIconAdd
            onChange={handleInputChange}
            name="nombreLista"
            placeholder="CREATE LIST"
          />
          <IconoAddList>
            <AddCircleOutlineIcon fontSize="inherit" onClick={crearLista} />
          </IconoAddList>
        </ContainerIconAdd>
        {listasPeliculas.length > 0 ? (
          listasPeliculas.map((elemento) => (
            <Lista
              key={elemento.idColecciones}
              idCollecion={elemento.idColecciones}
              nameCollection={elemento.nameCollection}
            />
          ))
        ) : (
          <TextoListaVacia>
            No tiene listas. Escriba el nombre de la lista y haga click en el
            icono.
          </TextoListaVacia>
        )}
      </ContainerLista>
        

    </ListaConatainer>
  );
};
