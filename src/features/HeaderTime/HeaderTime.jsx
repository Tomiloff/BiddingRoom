import styles from "./HeaderTime.module.css";


const HeaderTime = ({currentDate, currentTime}) => {
  return (
    <time className={styles.time}>{`(${currentDate} ${currentTime})`}</time>
  );
};


export default HeaderTime;





