import React from 'react'
import './index.scss';

function App() {
  const [count, setCount] = React.useState(0);

  const onClickRandom = () => {
    var numPool = [], // по непонятным причинам без этой строки не работает рандомайзер
    count = Math.ceil(Math.random()*100);
    setCount(count);
    console.log(count);
  };

  return (
    <nav class="navbar">
      <div class="container">
              <div class="navbar-wrap">
                  <ul class="navbar-menu">
                      <li><a href="index.html">Рандомайзер</a></li>
                      <li><a href="game.html">Игра</a></li>
                  </ul>
              </div>
      </div>
      
        <div className="App">
          <div>
              <h2>Рандомайзер:</h2>
              <h1>{count}</h1>
              <button onClick={onClickRandom} className="random">жмяк</button>

          </div>
        </div>
    </nav>
  );
}

export default App;
