import {dataListUtils} from "../../../assets/utils";
import {FilmFind} from "./FilmFind/FilmFind";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import {movieApi} from "../../../services/movie";
import {useSelector} from "react-redux";
import {RootState} from "../../../Store/store";
import {Loader} from "../../ui/Loader/Loader";

export const FilmsSearch = () => {
  const list = dataListUtils;

  const params = useSelector((state:RootState)=>state.parametersSearch)

  const {data, isFetching, error} = movieApi.useSearchMovieQuery(params);

  return (
    <SimpleBar style={{maxHeight:'100%', marginTop:'25px'} }>
      {isFetching && <Loader/>}
      {error && <div>Упс, ошибочка:(</div>}
      {data && data.results.map(film=>
        <FilmFind
          year={film.year}
          rating={film.imDbRating}
          name={film.title}
          img={film.image}
          key={film.id}
        />
      )}

      {/*{list.items.map(film=>*/}
      {/*  <FilmFind*/}
      {/*    year={film.year}*/}
      {/*    rating={film.imDbRating}*/}
      {/*    name={film.title}*/}
      {/*    img={film.image}*/}
      {/*    key={film.id}*/}
      {/*  />*/}
      {/*)}*/}

    </SimpleBar>
  )
}