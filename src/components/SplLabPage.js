import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/spllabpage.css'; // Create a separate CSS file for this page
import logo from '../images/bit-logo-1.png';

const SplLabPage = ({ candidateData }) => {
    // Filter candidates for 'Special Lab' team and active interns
    const splLabCandidates = candidateData.filter(candidate => 
        candidate.team === 'Special Lab' && candidate.workingStatus === 'Working'
    );

    return (
        <div className="spllab-page">
            <header className="header">
                <div className="header-left">
                    <img src={logo} alt="BIT Logo" className="clg-logo" />
                    <h1 className="title">BIT - <br />Interview Candidates Details</h1>
                </div>
                <div className="header-right">
                    <p>Welcome, Admin !!!</p>
                </div>
            </header>

            <div className="sidebar">
                <ul>
                    <li>
                        <NavLink to="/home" activeClassName="active-link">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/search" activeClassName="active-link">Search</NavLink>
                    </li>
                    <li>
                        <NavLink to="/candidateform" activeClassName="active-link">Candidate Form</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tp-team" activeClassName="active-link">Training and Placement</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ps-team" activeClassName="active-link">Personalized Skill</NavLink>
                    </li>
                    <li>
                        <NavLink to="/spl-lab" activeClassName="active-link">Special Lab</NavLink>
                    </li>
                </ul>
                <div className="logout-button">
                    <NavLink to="/" activeClassName="active-link">Logout</NavLink>
                </div>
            </div>

            <div className="main-content">
                <h2 id='spl-h2'>Currently Working Interns in <br />Special Lab</h2>
                <table className="candidates-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Year of Passing</th>
                            <th>Gender</th>
                            <th>Branch and Degree</th>
                            <th>Educational Details</th>
                            <th>Contact Number</th>
                            <th>Resume</th>
                            <th>Team</th>
                            <th>Designation</th>
                            <th>Date of Interview</th>
                            <th>Selection Status</th>
                            <th>Date of Joining</th>
                            <th>Working Status</th>
                            <th>Address</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        splLabCandidates.map((candidate) => (
                            <tr key={candidate.id}>
                                <td>{candidate.name}</td>
                                <td>{candidate.yearOfPassing}</td>
                                <td>{candidate.gender}</td>
                                <td>{candidate.branch}, {candidate.degree}</td>
                                <td>{candidate.educationDetails}</td>
                                <td>{candidate.contactNumber}</td>
                                <td><a href={`/resumes/${candidate.resumeUpload}`} target="_blank" rel="noopener noreferrer">Download</a></td>
                                <td>{candidate.team}</td>
                                <td>{candidate.designation}</td>
                                <td>{candidate.dateOfInterview}</td>
                                <td>{candidate.selectionStatus}</td>
                                <td>{candidate.dateOfJoining}</td>
                                <td>{candidate.workingStatus}</td>
                                <td>{candidate.address}</td>
                                <td><NavLink to={`/dashboard/${candidate.id}`}>View Details</NavLink></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SplLabPage;
