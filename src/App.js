import { Fragment, useState } from 'react';
import StartScreen from './components/StartScreen';
import Cards from './components/Cards';
import FinalScreen from './components/FinalScreen';

export default function App(){
  const deck = [
    {cardNumber: "1", question: "O que é JSX?", response: "Uma extensão de linguagem do JavaScript"},
    {cardNumber: "2", question: "O React é __", response: "uma biblioteca JavaScript para construção de interfaces"},
    {cardNumber: "3", question: "Componentes devem iniciar com __", response: "letra maiúscula"},
    {cardNumber: "4", question: "Podemos colocar __ dentro do JSX", response: "expressões"},
    {cardNumber: "5", question: "O ReactDOM nos ajuda __", response: "interagindo com a DOM para colocar componentes React na mesma"},
    {cardNumber: "6", question: "Usamos o npm para __", response: "gerenciar os pacotes necessários e suas dependências"},
    {cardNumber: "7", question: "Usamos props para __", response: "passar diferentes informações para componentes"},
    {cardNumber: "8", question: "Usamos estado (state) para __", response: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"},
  ];
  const [change, setChange] = useState(<StartScreen change={() => changeToCard()} />);
  let deckIndex = 0;
  let failureScreen = false;

  function changeToCard(componentChanged){
    setChange(componentChanged = <Cards failureScreen={changeValueScreen} changeNextCard={() => changeNextCard()} cardNumber={deck[deckIndex].cardNumber} question={deck[deckIndex].question} response={deck[deckIndex].response} length={deck.length} />);
  }

  function changeNextCard(cardChanged){
    deckIndex = deckIndex + 1;
    if(deckIndex !== deck.length){
      setChange(cardChanged = <Cards failureScreen={changeValueScreen} changeNextCard={() => changeNextCard()} cardNumber={deck[deckIndex].cardNumber} question={deck[deckIndex].question} response={deck[deckIndex].response} length={deck.length} />);
    }else{
      changeEndGame(deckIndex);
    }
  }

  function changeValueScreen(choicedBorder) { 
    console.log("Entrei na função changeValueScreen!");
    
    if(choicedBorder !== "border-zap"){
      failureScreen = true;
      console.log(failureScreen);
    }
  }

  function changeEndGame(indexNumber) {
    console.log("Entrei na função changeEndGame!");

    if(indexNumber === deck.length){
      if(failureScreen === true){
        setChange(<FinalScreen failureScreen={failureScreen} />);
      }else{
        setChange(<FinalScreen failureScreen={failureScreen} />);
      }
    }
  }

  return (
    <Fragment>
      {change}
    </Fragment>
  );
}