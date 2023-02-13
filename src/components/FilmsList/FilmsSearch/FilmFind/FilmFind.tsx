import styles from './FilmFind.module.scss'
import {Skeleton} from "../../../ui/Skeleton/Skeleton";
interface FilmFindProps {
  img:string;
  name:string;
  rating:string;
  year:string;
}

export const FilmFind = ({img,name,rating,year}:FilmFindProps) => {
  return (
    <div className={styles.film}>
      <Skeleton
        src={img}
        height='200px'
        className={styles.skeleton}
        classNameImg={styles.img}
      />
      <div>
        <p className={styles.name}>{name}</p>
        <div className={styles.info__block}>
          <span className={styles.rating}>{rating} &nbsp;</span>
          <span>{year} &nbsp;</span>
          <span>film/serial &nbsp;</span>
        </div>
      </div>
    </div>
  )
}