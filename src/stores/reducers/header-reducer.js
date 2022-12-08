const initialState = {
  title: {
    subTitle: "Тестовые торги на аппарат ЛОТОС №2033564", 
  },
  date: {
    day: "",
    time: ""
  }
};


const headerReducer = (state = initialState, action) => {
 
  switch (action.type) {
        
    default:
      return state;
  }
};


export default headerReducer;