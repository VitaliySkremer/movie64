import {MySwiper} from "../ui/Swiper/MySwiper";
import {movieApi} from "../../services/movie";
import {Loader} from "../ui/Loader/Loader";

export const FilmsListTop = () => {

  const {data, isLoading, error} = movieApi.useGetTopMovieQuery('')
  return (
    <div>
      {isLoading
        ?<Loader/>
        :<>
          {data && <MySwiper list={data.items}/>}
         </>
      }
      {error && <div>Упс, ошибочка:(</div>}
    </div>
  )
}