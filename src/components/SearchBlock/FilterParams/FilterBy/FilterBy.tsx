import styles from './FIlterBy.module.scss'
import {CheckBox} from "../../../ui/CheckBox/CheckBox";
import SimpleBar from 'simplebar-react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../Store/store";
import {removeGenres} from "../../../../Store/slices/searchSlice";
import {removeGroups} from "../../../../Store/slices/searchSlice";
import {addGenres} from "../../../../Store/slices/searchSlice";
import {addGroups} from "../../../../Store/slices/searchSlice";

interface FilterByProps {
  title: string;
  list: string[];
  className?:string;
}

export const FilterBy = ({title,list,className}:FilterByProps) => {

  const listChecked = useSelector((state:RootState) =>
    title==='Жанры'?state.parametersSearch.genres: state.parametersSearch.groups)
  const dispatch = useDispatch();

  const handleCheck = (value:string) =>{
    const fieldGenre = title==='Жанры'

    if(listChecked.includes(value)){

      fieldGenre ? dispatch(removeGenres(value)) : dispatch(removeGroups(value));
      return
    }
    fieldGenre ? dispatch(addGenres(value)) : dispatch(addGroups(value));
  }

  return (
    <div className={className}>
      <p className={styles.title}>{title}:</p>
      <SimpleBar className={styles.wrapper}>
        {list.map(label=>
          <CheckBox
            key={label}
            checked={listChecked.includes(label)}
            onChange={()=>handleCheck(label)}
            className={styles.checkbox}
            title={label}
          />
        )}
      </SimpleBar>
    </div>
  )
}