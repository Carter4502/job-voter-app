import React from 'react';
import VotingOption from './VotingOption';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import "./Vote.css"
import {Link} from 'react-router-dom';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);
function Vote() {
    return (
        <div className="App">
      <div class="head">
      <Link to="/leaderboard"><Button className="lb" variant='primary'>Leaderboard</Button></Link>  
      </div>
      <h1 class="title"> Which internship do you like best? </h1>
      <div class="container">
      <VotingOption text="Amazon SDE Intern" />
      <VotingOption text="Dropbox LAUNCH Intern" />
      </div>
    </div>
    );
}

export default Vote;