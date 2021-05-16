import styled from "styled-components";

export const Media = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  padding: 5px;
  margin: 5px 0;
  background-color: #282c34;
  border-radius: 10px;
  position: relative;

  &:hover {
    background-color: white;
    color: black;
  }
/*   @media screen and (max-width: 992px) {
    width: 60%;
  } */
  @media screen and (max-width: 550px) {
    width: 46%;
  }

`;
export const PosterSingle = styled.img`
  border-radius: 10px;
`;
export const TitlePoster = styled.b`
  width: 100%;
  text-align: center;
  font-size: 17px;
  padding: 8px 0;
`;
export const SubTitlePoster = styled.span`
  display: flex;
  justify-content: space-between;
  padding-bottom: 3px;
  padding: 0 2px;
  padding-bottom: 3px;
`;
export const Fecha = styled.span`
  display: flex;
  justify-content: space-between;
  padding-bottom: 3px;
  padding: 0 2px;
  padding-bottom: 3px;
`;