import './main.css';
// import logo from './logo.svg';
import {
  React, useState, /* , useEffect */
} from 'react';
import { useNavigate } from 'react-router-dom';

import socket from '../../websocketclient.js';

const Main = function () {
  // useful for state reference
  // https://ru.react.js.org/tutorial/tutorial.html#showing-the-past-moves

  // useEffect(() => {
  //   // create the sockets if not done yet

  // });
  const buttonClick = (key) => {
    // send socket
    socket.socketRef.emit('pressKey', {
      key
    }, (response) => {
      console.log('pressKey');
      console.log(response);
    });
  };

  return (
    <div className="Main">
      <div id="playerForm">
        <div className="form-group">
          <button class="bigboi" onClick={() => buttonClick('q')}>Q</button>
          <button class="bigboi" onClick={() => buttonClick('b')}>B</button>
          <button class="bigboi" onClick={() => buttonClick('p')}>P</button>
          {/* <Link to="/game/new_game">last-ditch-effort</Link> */}
        </div>
        <div className="form-group">
          <button class="bigboi" onClick={() => buttonClick('1')}>1</button>
          <button class="bigboi" onClick={() => buttonClick('2')}>2</button>
          <button class="bigboi" onClick={() => buttonClick('3')}>3</button>
          <button class="bigboi" onClick={() => buttonClick('4')}>4</button>
          {/* <Link to="/game/new_game">last-ditch-effort</Link> */}
        </div>
      </div>
      <div className="form-group">
          <button class="bigboi" onClick={() => buttonClick('s')}>S</button>
          {/* <Link to="/game/new_game">last-ditch-effort</Link> */}
        </div>
    </div>
  );
};

export default Main;
