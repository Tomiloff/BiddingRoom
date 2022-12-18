import { useState } from "react";
import { withDateAndTime } from "../utils/withDateAndTime";
import Header from "./Header";

const subTitle = "Тестовые торги на аппарат ЛОТОС №2033564";

const HeaderContainer = ({currentDate, currentTime}) => {
  return <Header subTitle={subTitle} currentDate={currentDate} 
                  currentTime={currentTime} />
};


export default withDateAndTime(HeaderContainer);
