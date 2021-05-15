import React from "react";
import Badge from "@material-ui/core/Badge";
import { img_300, unavailable } from "../../config/Config";
import styled from "styled-components";

const Media = styled.div`
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
const PosterSingle = styled.img`
  border-radius: 10px;
`;
const TitlePoster = styled.b`
  width: 100%;
  text-align: center;
  font-size: 17px;
  padding: 8px 0;
`;
const SubTitlePoster = styled.span`
  display: flex;
  justify-content: space-between;
  padding-bottom: 3px;
  padding: 0 2px;
  padding-bottom: 3px;
`;
const Fecha = styled.span`
  display: flex;
  justify-content: space-between;
  padding-bottom: 3px;
  padding: 0 2px;
  padding-bottom: 3px;
`;

export const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {

  const hadleFilm = () => {
    console.log('hola')
  }
  return (
    <Media onClick={hadleFilm}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 7 ? "primary" : "secondary"}
      />
      <PosterSingle
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <TitlePoster>{title}</TitlePoster>
      <SubTitlePoster className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <Fecha className="subTitle">{date}</Fecha>
      </SubTitlePoster>
    </Media>
  );
};
