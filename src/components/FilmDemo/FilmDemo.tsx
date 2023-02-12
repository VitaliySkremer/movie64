import styles from './FilmDemo.module.scss'
import {useDispatch} from "react-redux";
import {setIdMovie} from "../../Store/slices/movieIdSlice";
import { useState} from "react";
import {Skeleton} from "../ui/Skeleton/Skeleton";

interface IFilmDemoProps {
  filmId: string;
  name: string;
  img: string;
  rating: string
}

export const FilmDemo = ({filmId,name, img,rating}:IFilmDemoProps) => {
  const [loadImg, setLoadImg] = useState(true);
  const dispatch = useDispatch();
  const onLoadImg = () =>{
    setLoadImg(false)
  }

  return (
    <div onClick={()=>dispatch(setIdMovie(filmId))} className={styles.film}>
      <p className={styles.rating}>{rating}</p>
      {loadImg && <Skeleton className={styles.skeleton} height='200px'/>}
      <img
        onLoad={onLoadImg}
        style={loadImg?{display:'none'} :{}}
        className={styles.img}
        src={img} loading={"lazy"}
      />
      <p className={styles.name}>{name}</p>
    </div>
  )
}