import {IconsList} from "./iconsList";
import {Star} from "./Star";
import {Search} from "./Search";
import {About} from "./About";
import {Cup} from "./Cup";

interface IconProps {
  icon:IconsList
}

export const Icons = ({icon}:IconProps) => {
  switch (icon){
    case IconsList.STAR: return <Star/>
    case IconsList.SEARCH: return <Search/>
    case IconsList.About: return <About/>
    case IconsList.Cup: return <Cup/>
  }
}