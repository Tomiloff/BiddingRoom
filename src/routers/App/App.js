import React from 'react';
import HeaderContainer from '../../Header/HeaderContainer';
import RoomContainer from '../../pages/Room/RoomContainer';
import './App.css';


function App() {
  return (
    <div className="appWrapper">
      <HeaderContainer />
      <RoomContainer/>
    </div>
  );
}


export default App;
