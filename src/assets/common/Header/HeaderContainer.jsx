import { useState } from "react";
import { withDateAndTime } from "../../../utils/withDateAndTime";
import Header from "./Header";


const HeaderContainer = ({currentDate, currentTime}) => {
  const [subTitle, setSubTitle] = useState("Тестовые торги на аппарат ЛОТОС №2033564");

  return <Header subTitle={subTitle} currentDate={currentDate} currentTime={currentTime} />
};


export default withDateAndTime(HeaderContainer);
