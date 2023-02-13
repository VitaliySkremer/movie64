import { dataListUtils } from '../../assets/utils'
import { movieApi } from '../../services/movie'
import { Loader } from '../ui/Loader/Loader'
import { MySwiper } from '../ui/Swiper/MySwiper'

export const FilmsListPopular = () => {
	const { data, isLoading, error } = movieApi.useGetPopularMovieQuery('')
	const list = dataListUtils
	return (
		<div>
			{isLoading && <Loader />}
			{error && <div>Упс, ошибочка:(</div>}
			{data && <MySwiper list={list.items} />}
		</div>
	)
}
