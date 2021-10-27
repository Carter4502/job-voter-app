import React from 'react';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import {useState, useEffect} from 'react';
import {listJobs} from './graphql/queries';
import awsconfig from './aws-exports';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Leaderboard.css";
import { styled } from '@mui/material/styles';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

Amplify.configure(awsconfig);

function Leaderboard() {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: "#F8F8F8",
          color: theme.palette.common.black,
          fontWeight: 'bold',
          fontFamily: 'Axiforma Bold'
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 16,
          fontFamily: 'Nunito'
        },
      }));

    const[jobs, setJobs] = useState([]);
    useEffect(() => {
        fetchJobs();
    }, [])
    const fetchJobs = async() => {
        try {
            const jobData = await API.graphql(graphqlOperation(listJobs));
            const jobList = jobData.data.listJobs.items;
            console.log('job list', jobList);
            jobList.sort((el1, el2) => {return el2.elo - el1.elo});
            setJobs(jobList);
        } catch (error) {
            console.log("Error fetching jobs.", error);
        }
    }
    return (
            <div>
                <div className="head3">
                <Link to="/"><Button className="lb2" variant='primary'>Contribute Votes</Button></Link>
                </div>
            <div className = "card2">
                <h1 className="leaderTitle">Leaderboard</h1>
            <div className="border">
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>Company</StyledTableCell>
                        <StyledTableCell>Position</StyledTableCell>
                        <StyledTableCell>Elo</StyledTableCell>
                    </TableRow>
                    </TableHead>
                <TableBody>
                {jobs.map((job, idx) => (
                    <TableRow
                    key={job.company}
                    >
                    <StyledTableCell component="th" scope="row">
                        {job.company}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">{job.position}</StyledTableCell>
                    <StyledTableCell component="th" scope="row">{job.elo}</StyledTableCell>
                    </TableRow>
                ))}
                </TableBody>
                </Table>
            </TableContainer>
            </div>
            </div>
            </div>
            
    );
}

export default Leaderboard;