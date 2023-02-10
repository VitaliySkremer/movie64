import {movieApi} from "../../services/movie";
import {MySwiper} from "../ui/Swiper/MySwiper";

export const FilmsListPopular = () => {
  const {data, isLoading} = movieApi.useGetPopularMovieQuery('')
  return (
    <div>
      {isLoading
        ? <div>Идёт загрузка</div>
        : <>
           {data && <MySwiper list={data.items}/>}
          </>
      }
    </div>
  )
}