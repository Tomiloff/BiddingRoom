import HeaderTime from "../../../features/HeaderTime/HeaderTime";
import styles from "./Header.module.css";


const Header = ({header, currentDate, currentTime}) => {
  debugger;
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <h1 className={styles.topTitle}>Ход торгов</h1>
        <h1 className={styles.subTitleTop}>{header.title.subTitle}</h1>
        <HeaderTime currentDate={currentDate} currentTime={currentTime} />
      </div>
    </div>
  )
};


export default Header;