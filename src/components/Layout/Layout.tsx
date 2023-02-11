import styles from './Layout.module.scss'

interface ILayoutProps {
  children:React.ReactNode;
  bg:string;
}

export const Layout = ({children, bg}:ILayoutProps) => {
  const classStyle = {
     backgroundImage: `url("${bg}")`,
  }
  return (
    <div style={classStyle} className={styles.layout}>
      <div className={styles.wrapper}>
        {children}
      </div>
    </div>
  )
}