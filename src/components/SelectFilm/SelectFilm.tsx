import {Card} from "../ui/Card/Card";
import styles from './SelectFilm.module.scss'
import {Button} from "../ui/Button/Button";
export const SelectFilm = () => {
  return (
    <div className={styles.wrapper} >
      <Card className={styles.card}>
        <div className={styles.img__wrapper}>
          <img className={styles.img} src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6762_AL_.jpg" alt="logo"/>
          <Button>
            Показать трейлер
          </Button>
        </div>
        <div className={styles.description__wrapper}>
          <p className={styles.name}>
            <span className={styles.name_text}>Аватар 2 путь воды</span>
            <span className={styles.name_rating}>9.9</span>
          </p>
          <table className={styles.table}>
            <tr>
              <td className={[styles.td__title, styles.td].join(' ')}>год производства</td>
              <td className={styles.td}>2000</td>
            </tr>
            <tr>
              <td className={[styles.td__title,styles.td].join(' ')}>Страна</td>
              <td className={styles.td}>США</td>
            </tr>
            <tr>
              <td className={[styles.td__title,styles.td].join(' ')}>Компания</td>
              <td className={styles.td}>ворнер брозерс</td>
            </tr>
            <tr>
              <td className={[styles.td__title,styles.td].join(' ')}>Жанр</td>
              <td className={styles.td}>драма, биография, история, военный</td>
            </tr>
            <tr>
              <td className={[styles.td__title,styles.td].join(' ')}>Режисёр</td>
              <td className={styles.td}>Стивен спилберг</td>
            </tr>
            <tr>
              <td className={[styles.td__title,styles.td].join(' ')}>Звёзды</td>
              <td className={styles.td}>Лионардо ди Капри,...</td>
            </tr>
          </table>
          <p className={styles.description}>
            Дом Кобб — талантливый вор, лучший из лучших в опасном искусстве извлечения: он крадёт ценные секреты из глубин подсознания во время сна, когда человеческий разум наиболее уязвим. Редкие способности Кобба сделали его ценным игроком в привычном к предательству мире промышленного шпионажа, но они же превратили его в извечного беглеца и лишили всего, что он когда-либо любил. И вот у Кобба появляется шанс исправить ошибки. Его последнее дело может вернуть всё назад, но для этого ему нужно совершить невозможное — инициацию. Вместо идеальной кражи Кобб и его команда спецов должны будут провернуть обратное. Теперь их задача — не украсть идею, а внедрить её. Если у них получится, это и станет идеальным преступлением. Но никакое планирование или мастерство не могут подготовить команду к встрече с опасным противником, который, кажется, предугадывает каждый их ход. Врагом, увидеть которого мог бы лишь Кобб.
          </p>
        </div>
        <div>

        </div>
      </Card>
    </div>
  )
}