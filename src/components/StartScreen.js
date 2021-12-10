import { Fragment } from 'react';

export default function StartScreen (props){
  return (
    <Fragment>
      <div className='start-screen'>
        <div className="brand-section">
          <img className="brand-section-logo" alt="logo.png" src="./assets/img/logo.png" />
        </div>
        <button onClick={props.change} className="start-button">
          <span className="start-button-text">Praticar React</span>
          <img className="start-button-img" alt="next.png" src="./assets/img/next.png" />
        </button>
      </div>
    </Fragment>
  );
}