const SET_MODE = "room/SET_MODE"


const initialState = {
  participants: [
    {
      id: 1,
      login: "user1",
      password: "user1",
      tradingMode: false
    },
    {
      id: 2,
      login: "user2",
      password: "user2",
      tradingMode: false
    },
    // {
    //   id: 3,
    //   login: "user3",
    //   password: "user3",
    //   tradingMode: false
    // },
    // {
    //   id: 4,
    //   login: "user4",
    //   password: "user4",
    //   tradingMode: false
    // },
    // {
    //   id: 5,
    //   login: "user5",
    //   password: "user5",
    //   tradingMode: false
    // },
  ]
};


const roomReducer = (state = initialState, action) => {
 
  switch (action.type) {
    case SET_MODE:
      return {
        ...state,
        ...state.participants.forEach((user) => user.id === action.payload.id ? user.tradingMode = action.payload.statusMode : user.tradingMode)
      };
        
    default:
      return state;
  }
};


export const setTradingMode = (id, statusMode) => ({type: SET_MODE, payload:{id, statusMode}});


export default roomReducer;