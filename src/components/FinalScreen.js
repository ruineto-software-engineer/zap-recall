import { Fragment } from 'react';

export default function FinalScreen(props) {
  console.log(props.failureScreen);
  return(
    <Fragment>
      {props.failureScreen === true ?
        <FailureScreen />
        :
        <SuccessScreen />
      }
    </Fragment>
  );
}

function FailureScreen(){
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
          Você esqueceu alguns flashcards.. <br/> Não desanime! Na próxima você consegue!
        </p>
      </div>  
    </Fragment>
  );
}

function SuccessScreen(){
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
      </div>
    </Fragment>
  );
}