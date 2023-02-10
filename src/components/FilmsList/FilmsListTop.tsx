import {MySwiper} from "../ui/Swiper/MySwiper";
import {movieApi} from "../../services/movie";

export const FilmsListTop = () => {

  const {data, isLoading} = movieApi.useGetTopMovieQuery('')
  return (
    <div>
      {isLoading && <div>Идёт загрузка</div>}
      {data && <MySwiper list={data.items}/>}
    </div>
  )
}