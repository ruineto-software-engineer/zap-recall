import { Fragment } from 'react';

export default function FinalScreen(props) {
  return(
    <Fragment>
      {props.failureScreen === true ?
          props.resultGame === 1 ?
          <FailureScreen forgottenZaps={props.resultGame} textFlashCard="fashcard" restartedGame={props.restartingGame} />
          :
          <FailureScreen forgottenZaps={props.resultGame} textFlashCard="fashcards" restartedGame={props.restartingGame} />
        :
        <SuccessScreen restartedGame={props.restartingGame} />
      }
    </Fragment>
  );
}

function FailureScreen(props){
  return(
    <Fragment>
      <div className='screen-container'>
        <header className='header-screen'>
          <img className='header-screen-logo' alt='logo-mini.png' src='./assets/img/logo-mini.png'/>
        </header>

        <h1 className='screen-container-title'>
          Putz.. <img className='screen-container-img' alt='sad.png' src='./assets/img/sad.png' />
        </h1>
        <p className='screen-container-subtitle'>
          Você esqueceu {props.forgottenZaps} {props.textFlashCard}.. <br/> Não desanime! Na próxima você consegue!
        </p>

        <button onClick={props.restartedGame} className="start-button">
          <span className="start-button-text">Tentar novamente</span>
          <ion-icon className="start-button-icon" name="play-forward"></ion-icon>
        </button>
      </div>  
    </Fragment>
  );
}

function SuccessScreen(props){
  return(
    <Fragment>
      <div className='screen-container'>
        <header className='header-screen'>
          <img className='header-screen-logo' alt='logo-mini.png' src='./assets/img/logo-mini.png'/>
        </header>
        
        <h1 className='screen-container-title'>
          PARABÉNS! <img className='screen-container-img' alt='party.png' src='./assets/img/party.png' />
        </h1>
        <p className='screen-container-subtitle'>Você não esqueceu de nenhum flashcard!</p>

        <button onClick={props.restartedGame} className="start-button">
          <span className="start-button-text">Tentar novamente</span>
          <ion-icon className="start-button-icon" name="play-forward"></ion-icon>
        </button>
      </div>
    </Fragment>
  );
}