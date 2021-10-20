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
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 16,
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
            setJobs(jobList);
        } catch (error) {
            console.log("Error fetching jobs.", error);
        }
    }
    return (
            <div>
            <div className="head">
                <Link to="/"><Button className="lb" variant='primary'>Contribute</Button></Link>
            </div>
            <h1>Leaderboard</h1> 
            <div className="border">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 250 }} aria-label="simple table">
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
                    <TableCell component="th" scope="row">
                        {job.company}
                    </TableCell>
                    <TableCell component="th" scope="row">{job.position}</TableCell>
                    <TableCell component="th" scope="row">{job.elo}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
                </Table>
            </TableContainer>
            </div>
            </div>
            
    );
}

export default Leaderboard;