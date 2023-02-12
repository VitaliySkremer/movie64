import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Card} from "../Card/Card";
import {FilmDemo} from "../../FilmDemo/FilmDemo";
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper';
import { IMovie } from '../../../services/model';

interface MySwiperProps {
  list:IMovie[]
}

export const MySwiper = ({list}:MySwiperProps) => {

  return (
    <Card>
      <Swiper
        modules={[Scrollbar]}
        spaceBetween={15}
        slidesPerView={10}
        scrollbar={{ draggable: true}}
      >
        {list.map(film=>
          <SwiperSlide key={film.id}>
            <FilmDemo
              rating={film.imDbRating}
              filmId={film.id}
              name={film.title}
              img={film.image}
            />
          </SwiperSlide>
        )}
      </Swiper>
    </Card>
  )
}