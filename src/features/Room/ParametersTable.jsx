import styles from "../../pages/Room/Room.module.css";


const ParametersTable = () => {
  return (
    <div className={styles.parameters}>
      <h3 className={styles.parametersTitle}>Ход</h3>
      <h3 className={styles.parametersSubTitle}>Парметры и требования</h3>
      <ul className={styles.parametrsTable}>
        <li className={styles.termsStandard}>Наличие комплекса мероприятий, повышающих стандарты<br/>качества изготовления</li>
        <li>Срок изготовления лота, дней</li>
        <li>Гарантийные обязательства, мес.</li>
        <li>Условия оплаты</li>
        <li className={styles.price}>Стоимость изготовления лота, руб (без НДС)</li>
        <li>Действия:</li>
      </ul>
    </div>
  );
};


export default ParametersTable;