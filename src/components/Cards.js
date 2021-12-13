import { Fragment, useState } from 'react';

export default function Cards(props){
  const [flip, setFlip] = useState({frontFaceFlipped: "", backFaceFlipped: "back-face"})
  const [border, setBorder] = useState("");
  const [changeFooter, setChangeFooter] = useState(<CardFooterBack failureScreenCard={props.failureScreen} borderFooter={borderCard}/>);

  function flipCard(flipped){
    flipped = {frontFaceFlipped: "front-face-flipped", backFaceFlipped: "back-face-flipped"};
    
    setFlip(flipped);
  }

  function flipBackCard(flippedBack, footerOriginal, borderOriginal){
    flippedBack = {frontFaceFlipped: "", backFaceFlipped: "back-face"};
    
    setFlip(flippedBack);
    setChangeFooter(footerOriginal = <CardFooterBack failureScreenCard={props.failureScreen} borderFooter={borderCard}/>);
    setBorder(borderOriginal = "");
  }

  function borderCard(choicedBorder){
    setBorder(choicedBorder);
    newBackFooter();
  }

  function newBackFooter(changedBackFooter){
    setChangeFooter(changedBackFooter = <NewCardFooterBack flipToFront={() => flipBackCard()} changingNextCard={props.changeNextCard} />);
  }

  return (
    <Fragment>
      <div className='container-card'>
        <header className='header'>
          <img className='header-logo' alt='logo-mini.png' src='./assets/img/logo-mini.png'/>
        </header>

        <div className='card-title'>{props.cardTitle}</div>

        <section className='card' data-identifier="flashcard">
          <div className={`${flip.frontFaceFlipped} face ${border}`}>
            <div className='card-content'>
              <div className='card-header-front' data-identifier="counter">
                {props.cardNumber}/{props.length}
              </div>
              <div className='card-body-front'>
                {props.question}
              </div>
              <div className='card-footer-front'>
                <img onClick={() => flipCard()} className='card-footer-img' alt='turn.png' src='./assets/img/turn.png' data-identifier="arrow"/>
              </div>
            </div>
          </div>
          <div className={`${flip.backFaceFlipped} face ${border}`}>
            <div className='card-content'>
              <div className='card-header-back'>
                <span className='empty'>###</span>
                <span className='card-header-back-title'>{props.question}</span> 
                <span className='card-header-back-counter'>{props.cardNumber}/{props.length}</span>
              </div>
              <div className='card-body-back'>
                <p className='card-body-back-response'>{props.response}</p>
              </div>
              {changeFooter}
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
}

function CardFooterBack(props){  
  function borderScreen(choicedBorder) {
    props.borderFooter(choicedBorder);
    props.failureScreenCard(choicedBorder);
  }

  return(
    <div className='card-footer-back'>
      <div className='card-footer-back-content'>
        <button onClick={() => borderScreen("border-learned-now")} className='card-footer-back-button button-learned-now'>
          <span className='card-footer-back-button-span'>Aprendi <br/> agora</span>
        </button>
        <button onClick={() => borderScreen("border-dont-remember")} className='card-footer-back-button button-dont-remember'>
          <span className='card-footer-back-button-span'>Não <br/> lembrei</span>
        </button>
        <button onClick={() => borderScreen("border-remembered-with-effort")} className='card-footer-back-button button-remembered-with-effort'>
          <span className='card-footer-back-button-span'>Lembrei <br/> com <br/> esforço</span>
        </button>
        <button onClick={() => borderScreen("border-zap")} className='card-footer-back-button button-zap'>
          <span className='card-footer-back-button-span'>Zap!</span>
        </button>
      </div>
    </div>    
  );
}

function NewCardFooterBack(props) {
  function handleBackToFront(){
    props.flipToFront();
    props.changingNextCard();
  }

  return(
    <div className='card-newfooter-back'>
      <img onClick={() => handleBackToFront()} className='card-footer-img' alt='turn.png' src='./assets/img/turn.png' data-identifier="arrow" />
    </div>    
  );
}