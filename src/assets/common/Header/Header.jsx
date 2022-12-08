import styles from "./Header.module.css";


const Header = ({header}) => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <h1 className={styles.topTitle}>Ход торгов</h1>
        <h1 className={styles.subTitleTop}>{header.title.subTitle}</h1>
        <time>(09.11.2020 07:00)</time>
      </div>
    </div>
  )
};


export default Header;