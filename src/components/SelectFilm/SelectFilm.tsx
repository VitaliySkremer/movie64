import {Card} from "../ui/Card/Card";
import styles from './SelectFilm.module.scss'
import {Button} from "../ui/Button/Button";
import {movieApi} from "../../services/movie";
import {useSelector} from "react-redux";
import {RootState} from "../../Store/store";
import {Loader} from "../ui/Loader/Loader";
import {useEffect, useState} from "react";
import {Skeleton} from "../ui/Skeleton/Skeleton";


export const SelectFilm = () => {
  const id = useSelector((state:RootState)=>state.movieId.id)
  const [loadImg, setLoadImg] = useState(true);
  const {data, isLoading, error} = movieApi.useGetMovieQuery(`${id}`);

  const onLoadImg = () =>{
    setLoadImg(false)
  }

  useEffect(()=>{
    setLoadImg(true)
  },[id])

  return (
    <div className={styles.wrapper} >
      {isLoading && <Loader/>}
      {error && <div>Упс, ошибочка:(</div>}
      {data && (
        <Card className={styles.card}>
          <div className={styles.img__wrapper}>
            {loadImg && <Skeleton className={styles.skeleton} height='400px'/>}
            <img
              style={loadImg?{display:'none'} :{}}
              onLoad={onLoadImg}
              className={styles.img}
              src={data.image}
              alt="logo"/>
            <Button>
              Показать трейлер {loadImg.toString()}
            </Button>
          </div>
          <div className={styles.description__wrapper}>
            <p className={styles.name}>
              <span className={styles.name_text}>{data.title}</span>
              <span className={styles.name_rating}>{data.imDbRating}</span>
            </p>
            <table className={styles.table}>
              <tbody>
              <tr>
                <td className={[styles.td__title, styles.td].join(' ')}>год производства</td>
                <td className={styles.td}>{data.year}</td>
              </tr>
              <tr>
                <td className={[styles.td__title,styles.td].join(' ')}>Страна</td>
                <td className={styles.td}>{data.countries}</td>
              </tr>
              <tr>
                <td className={[styles.td__title,styles.td].join(' ')}>Компания</td>
                <td className={styles.td}>{data.companies}</td>
              </tr>
              <tr>
                <td className={[styles.td__title,styles.td].join(' ')}>Жанр</td>
                <td className={styles.td}>{data.genres}</td>
              </tr>
              <tr>
                <td className={[styles.td__title,styles.td].join(' ')}>Режисёр</td>
                <td className={styles.td}>{data.directors}</td>
              </tr>
              <tr>
                <td className={[styles.td__title,styles.td].join(' ')}>Звёзды</td>
                <td className={styles.td}>{data.stars}</td>
              </tr>
              </tbody>
            </table>
            <p className={styles.description}>
              {data.plotLocal}
            </p>
          </div>
          <div>
            {/*<iframe*/}
            {/*  src="https://www.imdb.com/video/imdb/vi2959588889/imdb/embed"*/}
            {/*  frameBorder="0"></iframe>*/}
          </div>
        </Card>
      )}
    </div>
  )
}