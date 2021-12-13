import { Fragment, useState } from 'react';

export default function StartScreen (props){
  const decks = {
    deckReact: [
      {cardNumber: "1", question: "O que é JSX?", response: "Uma extensão de linguagem do JavaScript"},
      {cardNumber: "2", question: "O React é __", response: "uma biblioteca JavaScript para construção de interfaces"},
      {cardNumber: "3", question: "Componentes devem iniciar com __", response: "letra maiúscula"},
      {cardNumber: "4", question: "Podemos colocar __ dentro do JSX", response: "expressões"},
      {cardNumber: "5", question: "O ReactDOM nos ajuda __", response: "interagindo com a DOM para colocar componentes React na mesma"},
      {cardNumber: "6", question: "Usamos o npm para __", response: "gerenciar os pacotes necessários e suas dependências"},
      {cardNumber: "7", question: "Usamos props para __", response: "passar diferentes informações para componentes"},
      {cardNumber: "8", question: "Usamos estado (state) para __", response: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"},
    ],

    deckJavaScript: [
      {cardNumber: "1", question: "O que é DOM?", response: "O Modelo de Objeto de Documento (DOM) é uma interface de programação para documentos HTML, XML e SVG"},
      {cardNumber: "2", question: "O JavaScript é __", response: "uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma"},
      {cardNumber: "3", question: "O querySelector serve para __", response: "retornar o primeiro elemento dentro do documento (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) que corresponde ao grupo especificado de seletores"},
      {cardNumber: "4", question: "Objetos NodeList são __ ", response: "coleções de nodos semelhantes aos objetos retornados pelos métodos Node.childNodes e document.querySelectorAll()"},
      {cardNumber: "5", question: "O loop de programação é __", response: "como fazer a mesma coisa repetidas vezes - o que é chamado de iteração na linguagem de programação"},
      {cardNumber: "6", question: "O nome das variáveis, chamados de __", response: " identificadores, obedecem determinadas regras."},
      {cardNumber: "7", question: "Trabalhamos com classes usuando __", response: "desejamos ter estilos específicos a um determinado elemento"},
      {cardNumber: "8", question: "O addEventListener é __", response: "a maneira de registrar uma espera de evento como especificada no W3C DOM"},
    ]
  };

  const [inputValue, setInputValue] = useState("");
  const [inputClassValidation, setInputClassValidation] = useState("");
  const [inputFeedBack, setInputFeedback] = useState("");
  const [deckCurrentTitle, setDeckCurrentTitle] = useState("");

  function handleStartInput(e){
    if(e.target.value !== "" && props.deckLength === 0){
      setInputClassValidation('warning-input');
      setInputFeedback(<FeedBack classFeedback='warning-feedback' msg={`Por gentileza, selecione um dos decks abaixo. E para continuar informe um valor maior que 1 zap.`} />);
    }else if(e.target.value === ""){
      setInputClassValidation('');
      setInputFeedback(<FeedBack classFeedback='none-feedback' msg=''/>);
      if(e.target.value === ''){
        setInputFeedback('');
      }
    }else if(e.target.value <= 1){
      setInputClassValidation('invalid-input');
      setInputFeedback(<FeedBack classFeedback='invalid-feedback' msg={`Por gentileza, informe valores acima de 1 zap. Deck: ${deckCurrentTitle}`} />);
    }else if(e.target.value > props.deckLength){
      setInputClassValidation('invalid-input');
      setInputFeedback(<FeedBack classFeedback='invalid-feedback' msg={`O deck ${deckCurrentTitle} contém somente ${props.deckLength} falshcards, informe um número aceitável, logo deve ser menor ou igual à ${props.deckLength} falshcards.`} />);      
    }else{
      setInputClassValidation('valid-input');
      setInputFeedback(<FeedBack classFeedback='valid-feedback' msg={`Número de zaps aceitável, confirme a seleção do deck ${deckCurrentTitle} logo abaixo. Caso deseje selecionar outro deck, basta clicar no mesmo.`} />);
    }

    setInputValue(e.target.value);
  }

  function inputSendValue(inputSendingValue) {
    if(inputSendingValue === ""){
      setInputClassValidation('invalid-input');
      setInputFeedback(<FeedBack classFeedback='invalid-feedback' msg='Por gentileza, informe uma meta de zaps.' />);
    }
    
    if(inputSendingValue > props.deckLength){
      setInputClassValidation('invalid-input');
      setInputFeedback(<FeedBack classFeedback='invalid-feedback' msg={`Por gentileza, informe uma quantidade válida de zaps. Deck: ${deckCurrentTitle}`} />);
    }
  }

  function handleValidation(inputCurrentValue, selectedDeckButton, deckTitle) {
    setDeckCurrentTitle(deckTitle);

    inputSendValue(inputCurrentValue);
    props.changingDeck(selectedDeckButton, inputCurrentValue, deckTitle);
  }
 
  return (
    <Fragment>
      <div className='start-screen'>
        <div className="brand-section">
          <img className="brand-section-logo" alt="logo.png" src="./assets/img/logo.png" />
        </div>

        <div className='input-content'>
          <input onChange={handleStartInput} value={inputValue} type='number' min='0' className={`start-input ${inputClassValidation}`} placeholder='Sua meta de zaps' /> 
          {inputFeedBack}
        </div>

        <button onClick={() => handleValidation(inputValue, decks.deckReact, "React")} className="start-button" data-identifier="start-zap-recall">
          <span className="start-button-text">Praticar React</span>
          <ion-icon className="start-button-icon" name="play-forward"></ion-icon>
        </button>

        <button onClick={() => handleValidation(inputValue, decks.deckJavaScript, "JavaScript")} className="start-button" data-identifier="start-zap-recall">
          <span className="start-button-text">Praticar JavaScript</span>
          <ion-icon className="start-button-icon" name="play-forward"></ion-icon>
        </button>
      </div>
    </Fragment>
  );
}

function FeedBack(props) {
  return (
    <div className={props.classFeedback}>{props.msg}</div>
  );
}