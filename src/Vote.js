import React from 'react';
import VotingOption from './VotingOption';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import "./Vote.css"
import {Link} from 'react-router-dom';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import awsconfig from './aws-exports';
import {useState, useEffect} from 'react';
import {listJobs} from './graphql/queries';
import {updateJob} from './graphql/mutations';

var EloRating = require('elo-rating');
Amplify.configure(awsconfig);
function Vote() {
    const[job1, setJob1] = useState(-1);
    const[job2, setJob2] = useState(-1);
    const[jobs, setJobs] = useState([]);
    useEffect(() => {
        fetchJobs();
    }, [])
    useEffect(() => {
      setVotingOptions();
      // eslint-disable-next-line
    }, [jobs])
    const fetchJobs = async() => {
        console.log("fetched.");
        try {
            const jobData = await API.graphql(graphqlOperation(listJobs));
            const jobList = jobData.data.listJobs.items;
            console.log('job list', jobList);
            setJobs(jobList);
        } catch (error) {
            console.log("Error fetching jobs.", error);
        }
    }
    const votedFor = (vote) => {
        var winner = vote === 1 ? job1:job2;
        var loser = vote === 1 ? job2:job1;
        const newWinnerElo = EloRating.calculate(jobs[winner].elo, jobs[loser].elo).playerRating;
        const newLoserElo = EloRating.calculate(jobs[winner].elo, jobs[loser].elo).opponentRating;
        const winningJob = jobs[winner];
        const losingJob = jobs[loser];
        updateDB(winningJob, newWinnerElo, winner);
        updateDB(losingJob, newLoserElo, loser);
    }
    const updateDB = async(job, newElo, idx) => {
      console.log("updated.");
      try {
        job.elo = newElo;
        delete job.createdAt;
        delete job.updatedAt;
        const jobData = await API.graphql(graphqlOperation(updateJob, {input: job}));
        const jobList = [...jobs];
        jobList[idx] = jobData.data.updateJob;
        setJobs(jobList);
      } catch (error) {
        console.log('Error when updating elo in database.', error);
      }
    }
    const setVotingOptions = () => {
        if (jobs.length === 0) {
          return;
        }
        var j1 = Math.floor(Math.random() * jobs.length);
        var j2 = Math.floor(Math.random() * jobs.length);
        while (j2 === j1) {
          j2 = Math.floor(Math.random() * jobs.length);
        }
        setJob1(j1);
        setJob2(j2);
    }

    return (
        <div className="App">
      <div className="head">
      <Link to={{pathname: "/leaderboard", state: {jobs}}}><Button className="lb" variant='primary'>Leaderboard</Button></Link>  
      </div>
      <h1 className="title"> Which internship would you take? </h1>
      <div className="container">
      {job1 !== -1 && <button className="voteButton" onClick={() => votedFor(1)}><VotingOption image={jobs[job1].imgURL} company={jobs[job1].company} position={jobs[job1].position} salary={jobs[job1].salary}/> </button>}
      {job2 !== -1 && <button className="voteButton" onClick={() => votedFor(2)}><VotingOption image={jobs[job2].imgURL} company={jobs[job2].company} position={jobs[job2].position} salary={jobs[job2].salary}/></button>}
      </div>
    </div>
    );
}

export default Vote;