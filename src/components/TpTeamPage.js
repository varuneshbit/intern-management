import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/tpteampage.css';
import logo from '../images/bit-logo-1.png';

const TpTeamPage = ({ interns }) => {
    // Filter interns to get only those from 'Training and Placement' and with 'Working' status
    const tpTeamInterns = interns.filter(intern => intern.team === 'Training and Placement' && intern.workingStatus === 'Working');

    return (
        <div className="tp-team-page">
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
                <h2 id='tp-h2'>Currently Working Interns in<br />Training and Placement Team</h2>
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
                        {tpTeamInterns.map((intern) => (
                            <tr key={intern.id}>
                                <td>{intern.name}</td>
                                <td>{intern.yearOfPassing}</td>
                                <td>{intern.gender}</td>
                                <td>{intern.branch}, {intern.degree}</td>
                                <td>{intern.educationDetails}</td>
                                <td>{intern.contactNumber}</td>
                                <td><a href={`/resumes/${intern.resumeUpload}`} target="_blank" rel="noopener noreferrer">Download</a></td>
                                <td>{intern.team}</td>
                                <td>{intern.designation}</td>
                                <td>{intern.dateOfInterview}</td>
                                <td>{intern.selectionStatus}</td>
                                <td>{intern.dateOfJoining}</td>
                                <td>{intern.workingStatus}</td>
                                <td>{intern.address}</td>
                                <td><NavLink to={`/dashboard/${intern.id}`}>View Details</NavLink></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TpTeamPage;
