import styles from './FilmDemo.module.scss'

interface IFilmDemoProps {
  filmId: string;
  name: string;
  img: string;
  rating: string
}

export const FilmDemo = ({filmId,name, img,rating}:IFilmDemoProps) => {
  return (
    <div className={styles.film}>
      <p className={styles.rating}>{rating}</p>
      <img className={styles.img} src={img} loading={"lazy"}/>
      <p className={styles.name}>{name}</p>
    </div>
  )
}