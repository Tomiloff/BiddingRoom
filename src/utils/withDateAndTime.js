export const withDateAndTime = (Component) => {
  const dateAndTimeComponent = () => {
    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;

    const currentDate = `${day}.${month}.${year}`;

    let hours = date.getHours();
    let minutes = date.getMinutes();

    if(hours < 10) hours = `0${hours}`;
    if(minutes < 10) minutes = `0${minutes}`;

    const currentTime = `${hours}:${minutes}`;

    return (
      <Component currentDate={currentDate} currentTime={currentTime}/>
    );
  };

  return dateAndTimeComponent;
};