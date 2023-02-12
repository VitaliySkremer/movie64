import styles from './Skeleton.module.scss'

interface SkeletonProps {
  height?: string;
  className?:string
}

export const Skeleton = ({className,height='100px'}:SkeletonProps) => {
  return (
    <div className={[styles.skeleton,className].join(' ')} style={{height:height}}/>
  )
}