import styles from './FilmDemo.module.scss'
import {useDispatch} from "react-redux";
import {setIdMovie} from "../../Store/slices/movieIdSlice";
import {Skeleton} from "../ui/Skeleton/Skeleton";

interface IFilmDemoProps {
  filmId: string;
  name: string;
  img: string;
  rating: string
}

export const FilmDemo = ({filmId,name, img,rating}:IFilmDemoProps) => {
  const dispatch = useDispatch();

  return (
    <div onClick={()=>dispatch(setIdMovie(filmId))} className={styles.film}>
      <p className={styles.rating}>{rating}</p>
      <Skeleton
        src={img}
        className={styles.skeleton}
        height='200px'
        classNameImg={styles.img}
      />
      <p className={styles.name}>{name}</p>
    </div>
  )
}