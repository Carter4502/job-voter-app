import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import VotingOption from './VotingOption'
import {Button} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div class="head">
      <a href="https://www.twitter.com"><Button className="lb" variant='primary'>Leaderboard</Button></a>  
      </div>
      <h1 class="title"> Which internship do you like best? </h1>
      <div class="container">
      <VotingOption text="Amazon SDE Intern" />
      <VotingOption text="Dropbox LAUNCH Intern" />
      </div>
    </div>
  );
}

export default App;
