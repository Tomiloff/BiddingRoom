import styles from "./Room.module.css";


const Room = () => {
  return (
    <div className={styles.room}>

      <h2 className={styles.notification}>Уважаемые участники, во время Вашего хода Вы можете изменить параметры торгов, укаказзных в таблице:</h2>

      <div className="workingArea">

        <div className={styles.tradingWorkspace}>
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
          <div className={styles.competitionArea}>
            <div className={styles.participant}>
              <div className={styles.timer}>
                <time>00:02:00</time>
              </div>
              <h3 className={styles.parametersSubTitle}>Участник №1</h3>
              <ul className={styles.participantTable}>
                <li className={styles.termsStandard}>-</li>
                <li>80</li>
                <li>24</li>
                <li>30%</li>
                <li className={styles.price}>3,700,000 руб<br/>-25,000 руб<br/>2,475,000 руб</li>
              </ul>
            </div>
            <div className={styles.participant}>
              <div className={styles.timer}>
                <time>00:02:00</time>
              </div>
              <h3 className={styles.parametersSubTitle}>Участник №1</h3>
              <ul className={styles.participantTable}>
                <li className={styles.termsStandard}>-</li>
                <li>80</li>
                <li>24</li>
                <li>30%</li>
                <li className={styles.price}>3,700,000 руб<br/>-25,000 руб<br/>2,475,000 руб</li>
              </ul>
            </div>
            <div className={styles.participant}>
              <div className={styles.timer}>
                <time>00:02:00</time>
              </div>
              <h3 className={styles.parametersSubTitle}>Участник №1</h3>
              <ul className={styles.participantTable}>
                <li className={styles.termsStandard}>-</li>
                <li>80</li>
                <li>24</li>
                <li>30%</li>
                <li className={styles.price}>3,700,000 руб<br/>-25,000 руб<br/>2,475,000 руб</li>
              </ul>
            </div>
            <div className={styles.participant}>
              <div className={styles.timer}>
                <time>00:02:00</time>
              </div>
              <h3 className={styles.parametersSubTitle}>Участник №1</h3>
              <ul className={styles.participantTable}>
                <li className={styles.termsStandard}>-</li>
                <li>80</li>
                <li>24</li>
                <li>30%</li>
                <li className={styles.price}>3,700,000 руб<br/>-25,000 руб<br/>2,475,000 руб</li>
              </ul>
            </div>
            <div className={styles.participant}>
              <div className={styles.timer}>
                <time>00:02:00</time>
              </div>
              <h3 className={styles.parametersSubTitle}>Участник №1</h3>
              <ul className={styles.participantTable}>
                <li className={styles.termsStandard}>-</li>
                <li>80</li>
                <li>24</li>
                <li>30%</li>
                <li className={styles.price}>3,700,000 руб<br/>-25,000 руб<br/>2,475,000 руб</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.сontrolPanel}>
          <button className={styles.btnUpdate}>Обновить t</button>
          <button className={styles.btnComplete}>Завершить торги</button>
          <button className={styles.btnExit}>Выйти</button>
        </div>

      </div>
      
    </div>
  );
};


export default Room;