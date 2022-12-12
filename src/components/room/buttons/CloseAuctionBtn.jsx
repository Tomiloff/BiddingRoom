import styles from "./buttons.module.css";
import auctionIcon from "../../../assets/all-images/icons/auction.svg";


const CloseAuctionBtn = ({handleStop}) => {
  return (
    <button onClick={handleStop} className={styles.btnComplete}>
      <p>Завершить торги</p>
      <img src={auctionIcon} alt="auctionIcon" /> 
    </button>
  );
};


export default CloseAuctionBtn;