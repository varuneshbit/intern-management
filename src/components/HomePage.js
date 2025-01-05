import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/homepage.css';
import logo from '../images/bit-logo-1.png';

const HomePage = ({ candidateData }) => {
    const candidates = [
        {
            id: '7376221CS345',
            name: 'Varunesh',
            yearOfPassing: 2026,
            gender: 'Male',
            branch: 'CSE',
            degree: 'B.E',
            educationDetails: 'B.E in Computer Science',
            contactNumber: '1234567890',
            resumeUpload: 'resume_varunesh.pdf',
            team: 'Training and Placement',
            designation: 'Intern',
            dateOfInterview: '15-08-2024',
            selectionStatus: 'Selected',
            dateOfJoining: '01-09-2024',
            photo: 'varun.jpg',
            workingStatus: 'Working',
            address: 'Address of Varunesh',
        },
        {
            id: '7376222AL139',
            name: 'Harish',
            yearOfPassing: 2026,
            gender: 'Male',
            branch: 'AIML',
            degree: 'B.Tech',
            educationDetails: 'B.Tech in AIML',
            contactNumber: '1234567890',
            resumeUpload: 'resume_harish.pdf',
            team: 'Training and Placement',
            designation: 'Intern',
            dateOfInterview: '15-08-2024',
            selectionStatus: 'Selected',
            dateOfJoining: '01-09-2024',
            photo: 'harish.jpg',
            workingStatus: 'Working',
            address: 'Address of Harish',
        },
        {
            id: '7376222CB146',
            name: 'Saravanan',
            yearOfPassing: 2026,
            gender: 'Male',
            branch: 'CSBS',
            degree: 'B.Tech',
            educationDetails: 'B.Tech in CSBS',
            contactNumber: '1234567890',
            resumeUpload: 'resume_saravanan.pdf',
            team: 'Personalized Skill',
            designation: 'Intern',
            dateOfInterview: '15-08-2024',
            selectionStatus: 'Unselected',
            dateOfJoining: '01-09-2024',
            photo: 'saravanan.jpg',
            workingStatus: 'Rejected',
            address: 'Address of Saravanan',
        },
        {
            id: '7376222AL174',
            name: 'Monesh',
            yearOfPassing: 2026,
            gender: 'Male',
            branch: 'AIML',
            degree: 'B.Tech',
            educationDetails: 'B.Tech in AIML',
            contactNumber: '1234567890',
            resumeUpload: 'resume_monesh.pdf',
            team: 'Personalized Skill',
            designation: 'Intern',
            dateOfInterview: '15-08-2024',
            selectionStatus: 'Unselected',
            dateOfJoining: '01-09-2024',
            photo: 'monesh.jpg',
            workingStatus: 'Rejected',
            address: 'Address of Monesh',
        },
        {
            id: '7376222AL120',
            name: 'Chandru',
            yearOfPassing: 2026,
            gender: 'Male',
            branch: 'AIML',
            degree: 'B.Tech',
            educationDetails: 'B.Tech in AIML',
            contactNumber: '1234567890',
            resumeUpload: 'resume_chandra-mouleeswaran.pdf',
            team: 'Special Lab',
            designation: 'Intern',
            dateOfInterview: '15-08-2024',
            selectionStatus: 'Selected',
            dateOfJoining: '01-09-2024',
            photo: 'chandru.jpg',
            workingStatus: 'Working',
            address: 'Address of Chandru',
        },
        {
            id: '7376221CS224',
            name: 'Sameer',
            yearOfPassing: 2026,
            gender: 'Male',
            branch: 'CSE',
            degree: 'B.E',
            educationDetails: 'B.Tech in Computer Science',
            contactNumber: '1234567890',
            resumeUpload: 'resume_sameer.pdf',
            team: 'Special Lab',
            designation: 'Intern',
            dateOfInterview: '15-08-2024',
            selectionStatus: 'Unselected',
            dateOfJoining: '01-09-2024',
            photo: 'john_doe.jpg',
            workingStatus: 'Rejected',
            address: 'Address of Sameer',
        },
    ];

    return (
        <div className="home-page">
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
                <h2 id='hph2'>Currently Working Interns at <br />Bannari Amman Institute of Technology</h2>
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
                    candidates.map((candidate) => (
                    <tr key={candidate.id}>
                        <td>{candidate.name}</td>
                        <td>{candidate.yearOfPassing}</td>
                        <td>{candidate.gender}</td>
                        <td>{candidate.branch}, {candidate.degree}</td>
                        <td>{candidate.educationDetails}</td>
                        <td>{candidate.contactNumber}</td>
                        <td><a href={`/resumes/${candidate.resumeUpload}`} target="_blank" rel="noopener noreferrer">Download</a></td>
                        <td>{candidate.team}</td> {/* Displaying the Team */}
                        <td>{candidate.designation}</td>
                        <td>{candidate.dateOfInterview}</td>
                        <td>{candidate.selectionStatus}</td>
                        <td>{candidate.dateOfJoining}</td>
                        <td>{candidate.workingStatus}</td>
                        <td>{candidate.address}</td>
                        <td><NavLink to={`/dashboard/${candidate.id}`}>View Details</NavLink></td>
                    </tr>
                ))}
                </tbody>

                </table>
            </div>
        </div>
    );
};

export default HomePage;
