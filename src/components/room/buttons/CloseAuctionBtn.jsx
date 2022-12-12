import styles from "./buttons.module.css";


const CloseAuctionBtn = ({handleStop}) => {
  return (
    <button onClick={handleStop} className={styles.btnComplete}>Завершить торги</button>
  );
};


export default CloseAuctionBtn;