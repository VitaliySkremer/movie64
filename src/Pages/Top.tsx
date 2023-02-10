import {Layout} from "../components/Layout/Layout";
import {SelectFilm} from "../components/SelectFilm/SelectFilm";
import {FilmsListTop} from "../components/FilmsList/FilmsListTop";


export const Top = () => {

  return (
    <Layout bg={'../src/assets/koko.jpg'}>
      <SelectFilm/>
      <FilmsListTop/>
    </Layout>
  )
}