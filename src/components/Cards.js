import { Fragment, useState } from 'react';

export default function Cards(){
  const [flip, setFlip] = useState({frontFaceFlipped: "", backFaceFlipped: "back-face"})
  const [border, setBorder] = useState("");
  const [changeFooter, setChangeFooter] = useState(<CardFooterBack borderFooter={borderCard}/>)

  function flipCard(flipped){
    flipped = {frontFaceFlipped: "front-face-flipped", backFaceFlipped: "back-face-flipped"};
    setFlip(flipped);
  }

  function borderCard(choicedBorder){
    setBorder(choicedBorder);
    newBackFooter();
  }

  function newBackFooter(changedBackFooter){
    setChangeFooter(changedBackFooter = <NewCardFooterBack />)
  }

  return (
    <Fragment>
      <header className='header'>
        <img className='header-logo' alt='logo-mini.png' src='./assets/img/logo-mini.png'/>
      </header>

      <div className='container-card'>
        <section className='card'>
          <div className={`front-face ${flip.frontFaceFlipped} face ${border}`}>
            <div className='card-content'>
              <div className='card-header-front'>
                1/8
              </div>
              <div className='card-body-front'>
                O que é JSX?
              </div>
              <div className='card-footer-front'>
                <img onClick={() => flipCard()} className='card-footer-img' alt='turn.png' src='./assets/img/turn.png' />
              </div>
            </div>
          </div>
          <div className={`${flip.backFaceFlipped} face ${border}`}>
            <div className='card-content'>
              <div className='card-header-back'>
                <span className='card-header-back-title'>O que é JSX?</span> 
                <span className='card-header-back-counter'>1/8</span>
              </div>
              <div className='card-body-back'>
                <p className='card-body-back-response'>Uma extensão de linguagem do JavaScript</p>
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
  return(
    <div className='card-footer-back'>
      <div className='card-footer-back-content'>
        <button onClick={() => props.borderFooter("border-learned-now")} className='card-footer-back-button button-learned-now'>Aprendi <br/> agora</button>
        <button onClick={() => props.borderFooter("border-dont-remember")} className='card-footer-back-button button-dont-remember'>Não <br/> lembrei</button>
        <button onClick={() => props.borderFooter("border-remembered-with-effort")} className='card-footer-back-button button-remembered-with-effort'>Lembrei <br/> com <br/> esforço</button>
        <button onClick={() => props.borderFooter("border-zap")} className='card-footer-back-button button-zap'>Zap!</button>
      </div>
    </div>    
  );
}

function NewCardFooterBack() {
  return(
    <div className='card-newfooter-back'>
      <img className='card-footer-img' alt='turn.png' src='./assets/img/turn.png' />
    </div>    
  );
}