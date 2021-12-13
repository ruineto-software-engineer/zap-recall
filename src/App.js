import { Fragment, useState } from 'react';
import StartScreen from './components/StartScreen';
import Cards from './components/Cards';
import FinalScreen from './components/FinalScreen';

export default function App(){
  const [deck, setDeck] = useState([]);
  const [change, setChange] = useState(<StartScreen changingDeck={changeDeck} deckLength={deck.length} />);
  let deckIndex = 0;
  let goalZap = 0;
  let checkGoalZap = 0;

  function changeDeck(selectedDeck, inputValue, deckTitle) {
    setDeck([ ...selectedDeck]);
    setChange(<StartScreen changingDeck={changeDeck} deckLength={selectedDeck.length} />);
    inputValidation(inputValue, selectedDeck, deckTitle);
  }

  function inputValidation(inputValue, currentDeck, currentDeckTitle) {
    goalZap = inputValue;
    if(inputValue <= 1 || inputValue > currentDeck.length){
      return;
    }else{
      changeToCard('', currentDeck, currentDeckTitle);
    }
  }

  function changeToCard(componentChanged, actualDeck, actualTitle){
    setChange(componentChanged = <Cards failureScreen={changeValueScreen} cardTitle={actualTitle} changeNextCard={() => changeNextCard('', actualDeck, actualTitle)} cardNumber={actualDeck[deckIndex].cardNumber} question={actualDeck[deckIndex].question} response={actualDeck[deckIndex].response} length={actualDeck.length} />);
  }

  function changeNextCard(cardChanged, actualDeck, actualTitle){
    deckIndex = deckIndex + 1;
    if(deckIndex !== actualDeck.length){
      setChange(cardChanged = <Cards failureScreen={changeValueScreen} cardTitle={actualTitle} changeNextCard={() => changeNextCard()} cardNumber={actualDeck[deckIndex].cardNumber} question={actualDeck[deckIndex].question} response={actualDeck[deckIndex].response} length={actualDeck.length} />);
    }else{
      changeEndGame(deckIndex, actualDeck);
    }
  }

  function changeValueScreen(choicedBorder) {    
    if(choicedBorder === "border-zap"){
      checkGoalZap = checkGoalZap + 1;
    }
  }

  function changeEndGame(indexNumber, actualDeck) {
    let forgotZaps = goalZap - checkGoalZap;
    
    if(indexNumber === actualDeck.length){      
      if(parseInt(goalZap) === parseInt(checkGoalZap) || parseInt(checkGoalZap) > parseInt(goalZap)){
        setChange(<FinalScreen failureScreen={false} resultGame={forgotZaps} restartingGame={() => restartGame()} />);
      }else{
        setChange(<FinalScreen failureScreen={true} resultGame={forgotZaps} restartingGame={() => restartGame()} />);
      }
    }
  }

  function restartGame() {
    window.location.reload(true);
  }

  return (
    <Fragment>
      {change}
    </Fragment>
  );
}