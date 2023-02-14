import styles from './InputSerach.module.scss'
import {Input} from "../../ui/Input/Input";
import {FilmsSearch} from "../../FilmsList/FilmsSearch/FilmsSearch";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../Store/store";
import {setTitle} from "../../../Store/slices/searchSlice";

export const InputSearch = () => {
  const title = useSelector((state:RootState)=>state.parametersSearch.title)
  const dispatch = useDispatch();

  const changeInput = (event:React.ChangeEvent<HTMLInputElement>) =>{
    dispatch(setTitle(event.target.value))
  }

  return (
    <div className={styles.wrapper}>
      <Input
        value={title}
        onChange={changeInput}
        placeholder='Search'
      />
      <FilmsSearch/>
    </div>
  )
}