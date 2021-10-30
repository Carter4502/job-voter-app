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
import SearchBar from "material-ui-search-bar";

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
    const[filteredJobs, setFilteredJobs] = useState([]);
    const[searched, setSearched] = useState("");
    const[filteredEmpty, setFilteredEmpty] = useState(true);
    useEffect(() => {
        fetchJobs();
    }, [])
    const requestSearch = (searchedVal) => {
        
      const filteredJobs = jobs.filter((row) => {
        return row.company.toLowerCase().startsWith(searchedVal.toLowerCase())
      })
      setFilteredEmpty(false);
      setFilteredJobs(filteredJobs);
    };
    
    const cancelSearch = () => {
        setSearched("");
        setFilteredEmpty(true);
        requestSearch(searched);
    };
    const fetchJobs = async() => {
        try {
            const jobData = await API.graphql(graphqlOperation(listJobs));
            const jobList = jobData.data.listJobs.items;
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
                <h1 className="leaderTitle">Leaderboard</h1>
            <div className = "card2">
                <SearchBar
            value={searched}
            onChange={(searchVal) => requestSearch(searchVal)}
            onCancelSearch={() => cancelSearch()}
            className="searchBar"
            placeholder="Search a company"
            />
            <div className="border">
            
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                    {(filteredEmpty || filteredJobs.length === jobs.length) &&<StyledTableCell>#</StyledTableCell>}
                        <StyledTableCell>Company</StyledTableCell>
                        <StyledTableCell>Pay</StyledTableCell>
                        <StyledTableCell>Elo</StyledTableCell>
                    </TableRow>
                    </TableHead>
                <TableBody>
                {(filteredEmpty || filteredJobs.length === jobs.length) && jobs.map((job, idx) => (
                    <TableRow
                    key={job.company}
                    >
                    <StyledTableCell component="th" scope="row">
                        {idx + 1}
                        </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                        {job.company}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">${job.salary}/hr</StyledTableCell>
                    <StyledTableCell component="th" scope="row">{job.elo}</StyledTableCell>
                    </TableRow>
                ))}
                {!filteredEmpty && filteredJobs.length !== jobs.length && filteredJobs.map((job, idx) => (
                    <TableRow
                    key={job.company}
                    >
                    <StyledTableCell component="th" scope="row">
                        {job.company}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">${job.salary}/hr</StyledTableCell>
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