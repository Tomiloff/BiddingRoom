import styles from "./buttons.module.css";


const UpdateTimeBtn = ({handleUpdate}) => {
  return (
    <button onClick={handleUpdate} className={styles.btnUpdate}>Обновить t</button>
  );
};


export default UpdateTimeBtn;