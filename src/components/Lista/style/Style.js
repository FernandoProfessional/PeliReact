import styled from "styled-components";

export const ListaComponent = styled.div`
    cursor: pointer;
  color:#006BE6;
  border-radius: 10px;
  width: 300px;
  height: 100px;
  border: solid 2px #006BE6;
  margin-bottom: 20px;
  margin-right: 30px;
  display: flex;
  font-size:20px;
 
  @media (max-width: 1200px) {
    margin-right: 0px;
  }
  @media (max-width: 768px) {
    margin-right: 0px;
    width: 49%;
  }
`;
export const ListText = styled.div`
  width: 260px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ListIcon = styled.div`
   
`;
export const ListSpacion = styled.div`
  width: 90%;
  height: 34%;
  border-radius: 50%;

  &:hover {
    color: red;
  }
`;