import {dataListUtils} from "../../../assets/utils";
import {FilmFind} from "./FilmFind/FilmFind";

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

export const FilmsSearch = () => {
  const list = dataListUtils;

  return (
    <SimpleBar style={{maxHeight:'100%', marginTop:'25px'} }>
      {list.items.map(film=>
        <FilmFind
          year={film.year}
          rating={film.imDbRating}
          name={film.title}
          img={film.image}
          key={film.id}
        />
      )}
    </SimpleBar>
  )
}