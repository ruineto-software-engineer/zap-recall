import { Fragment, useState } from 'react';
import StartScreen from './components/StartScreen';
import Cards from './components/Cards';

export default function App(){
  const [change, setChange] = useState(<StartScreen change={() => changeToCard()} />);

  function changeToCard(componentChanged){
    setChange(componentChanged = <Cards />);
  }
  console.log(change);
  
  return (
    <Fragment>
      {change}
    </Fragment>
  );
}