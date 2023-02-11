import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Card} from "../Card/Card";
import {FilmDemo} from "../../FilmDemo/FilmDemo";
import {IMovie} from "../../../services/movie";
import {useState} from "react";

interface MySwiperProps {
  list:IMovie[]
}

export const MySwiper = ({list}:MySwiperProps) => {

  return (
    <Card>
      <Swiper
        spaceBetween={25}
        slidesPerView={9}
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