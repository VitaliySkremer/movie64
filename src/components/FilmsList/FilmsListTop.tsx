import { movieApi } from '../../services/movie'
import { Loader } from '../ui/Loader/Loader'
import { MySwiper } from '../ui/Swiper/MySwiper'

export const FilmsListTop = () => {
	const { data, isLoading, error } = movieApi.useGetTopMovieQuery('')
	return (
		<div>
			{isLoading && <Loader />}
			{error && <div>Упс, ошибочка:(</div>}
			{data && <MySwiper list={data.items} />}
		</div>
	)
}
