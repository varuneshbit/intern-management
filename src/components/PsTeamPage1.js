import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../css/psteampage.css'; // Ensure this CSS file is properly imported
import logo from '../images/bit-logo-1.png';
import psLogo from '../images/ps-team-logo.jpg'

const PsTeamPage1 = ({ interns }) => {
    // Ensure interns is defined before using filter
    if (!interns) {
        return <div>Loading...</div>;
    }

    // Filter candidates for the "Personalized Skill" team and active interns
    const psTeamCandidates = interns.filter(candidate => 
        candidate.team === 'Personalized Skill' && candidate.workingStatus === 'Working'
    );

    return (
        <div className="tp-team-page">
            <header className="header">
                <div className="header-left">
                    <img src={psLogo} alt="BIT Logo" className="clg-logo" />
                    <h1 className="title">BIT - <br />Interview Candidates Details</h1>
                </div>
                <div className="header-right">
                    <p>Welcome, Admin !!!</p>
                </div>
            </header>

            <div className="sidebar">
                <ul>
                    <li>
                        <NavLink to="/home" className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/search" className={({ isActive }) => isActive ? 'active-link' : ''}>Search</NavLink>
                    </li>
                    <li>
                        <NavLink to="/candidateform" className={({ isActive }) => isActive ? 'active-link' : ''}>Candidate Form</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tp-team" className={({ isActive }) => isActive ? 'active-link' : ''}>Training and Placement</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ps-team" className={({ isActive }) => isActive ? 'active-link' : ''}>Personalized Skill</NavLink>
                    </li>
                    <li>
                        <NavLink to="/spl-lab" className={({ isActive }) => isActive ? 'active-link' : ''}>Special Lab</NavLink>
                    </li>
                </ul>
                <div className="logout-button">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>Logout</NavLink>
                </div>
            </div>

            <div className="main-content">
                <h2 id='ps-h2'>Currently Working Interns in <br />Personalized Skill Team</h2>
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
                        {psTeamCandidates.length > 0 ? (
                            psTeamCandidates.map(candidate => (
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
                        ) : (
                            <tr>
                                <td colSpan="15">No active interns found in the Personalized Skill team.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

PsTeamPage1.propTypes = {
    interns: PropTypes.array.isRequired,
};

export default PsTeamPage1;
