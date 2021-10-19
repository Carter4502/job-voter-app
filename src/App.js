import React from 'react'
import Leaderboard from './Leaderboard.js';
import {Route} from 'react-router-dom';
import Vote from './Vote.js'
function App() {
  return (
    <div className="App">
      <Route exact path={["/","/vote"]} component={Vote} />
      <Route exact path="/leaderboard" component={Leaderboard} />
    </div>
  );
}

export default App;
