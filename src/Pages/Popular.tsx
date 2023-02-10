import {Layout} from "../components/Layout/Layout";
import {FilmsListPopular} from "../components/FilmsList/FilmsListPopular";
import {SelectFilm} from "../components/SelectFilm/SelectFilm";

export const Popular = () => {
  return (
    <Layout bg={'../src/assets/avatar.jpg'}>
      <SelectFilm/>
      <FilmsListPopular/>
    </Layout>
  )
}