import {movieApi} from "../../services/movie";
import { Loader } from "../ui/Loader/Loader";
import {MySwiper} from "../ui/Swiper/MySwiper";


export const FilmsListPopular = () => {
  const {data, isLoading, error} = movieApi.useGetPopularMovieQuery('')
  return (
    <div>
      {isLoading
        ? <Loader/>
        : <>
           {data && <MySwiper list={data.items}/>}
          </>
      }
      {error && <div>Упс, ошибочка:(</div>}
    </div>
  )
}