import React from "react";
import Badge from "@material-ui/core/Badge";
import { img_300, unavailable } from "../../config/Config";
import {Media} from "./style/Style";
import {PosterSingle} from "./style/Style";
import {TitlePoster} from "./style/Style";
import {SubTitlePoster} from "./style/Style";
import {Fecha} from "./style/Style";
import { Link } from 'react-router-dom';

export const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {

  const hadleFilm = (id) => {
    console.log(id)
  }
  return (
    <Media onClick={() => hadleFilm(id)}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 7 ? "primary" : "secondary"}
      />
      <Link to={`./film/${ id }`}>
        <PosterSingle
          src={poster ? `${img_300}/${poster}` : unavailable}
          alt={title}
        />
      </Link>
      <TitlePoster>{title}</TitlePoster>
      <SubTitlePoster className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <Fecha className="subTitle">{date}</Fecha>
      </SubTitlePoster>
    </Media>
  );
};
