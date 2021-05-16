import styled from "styled-components";
/* 
sm: 576px,
md: 768px,
lg: 992px,
xl: 1200px,
xxl: 1400px 
*/

export const ListaConatainer = styled.div`
    margin-top:71px;
    min-height:100vh;
    font-size:20px;
    background-color:#141414;
`


export const ContainerLista = styled.div`
   
    display:flex;
    flex-wrap: wrap;
    justify-content:flex-start;

    padding: 20px 120px 20px  120px;
    @media (max-width: 1400px) {

        padding: 20px 100px 20px  100px;
    }
    @media (max-width: 1200px) {
        flex-wrap: wrap;
        justify-content:space-between;
        padding: 20px 100px 20px  100px;
    }
    @media (max-width: 992px) {
        padding: 20px 50px 20px  50px;
        flex-wrap: wrap;
        justify-content:space-between;
    }
    @media (max-width: 768px) {
        padding: 20px 0 20px  0;
        flex-wrap: wrap;
        justify-content:space-between;
    }

`
export const ContainerIconAdd = styled.div`
    width:300px;
    height:100px;
    border:2px solid white;
    border-radius:10px;
    font-size:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right: 30px;
    
    @media (max-width: 1200px) {
        margin-right: 0px;
  }
    @media (max-width: 768px) {
        width:49%;
    }
`
export const TextIconAdd = styled.input`
    font-size:20px;
    text-align: center;
    background:inherit;
    border:none;
    width:70%;
    color:white;
    &:focus{
        outline:none;
    }
    ::-webkit-input-placeholder {
        text-align: center;
    }
    ::placeholder {
        color: white;
    }

`
export const TextoListaVacia = styled.div`
    width:50%;
    display: flex;
    justify-content:center;
    align-items:center;
`
export const IconoAddList = styled.div`
    cursor:pointer;
    border-radius: 50%;
    height:50px;
    color:white;
    &:hover {
        color:#006BE6;
    }

`