import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/Login';
import CandidateForm from './components/CandidateForm';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import DashboardPage from './components/DashboardPage';
import TpPage from './components/TpTeamPage'
import PsTeamPage1 from './components/PsTeamPage1';
import SplLabPage from './components/SplLabPage';

import './App.css';
const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [candidateData, setCandidateData] = useState([]);

    const interns = [ 
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
            designation: 'Intern',
            dateOfInterview: '15-08-2024',
            selectionStatus: 'Unselected',
            dateOfJoining: '01-09-2024',
            photo: 'john_doe.jpg',
            workingStatus: 'Rejected',
            address: 'Address of Sameer',
        },
    ];

    // Set candidateData to the interns array
    React.useEffect(() => {
        setCandidateData(interns);
    }, []);

    const handleLogin = (email, password) => {
        if (email === 'admin@gmail.com' && password === '123123') {
            setIsAuthenticated(true);
        }
    };

    const handleCandidateSubmit = (candidate) => {
        setCandidateData([...candidateData, candidate]);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <LoginForm onLogin={handleLogin} />} />
                <Route path="/home" element={<HomePage /> ? <HomePage candidateData={candidateData} /> : <Navigate to="/" />} />
                <Route path="/search" element={<SearchPage /> ? <SearchPage interns={candidateData} /> : <Navigate to="/" />} />
                <Route path="/candidateform" element={<CandidateForm /> ? <CandidateForm onSubmit={handleCandidateSubmit} /> : <Navigate to="/" />} />
                <Route path="/dashboard/:internId" element={<DashboardPage /> ? <DashboardPage interns={candidateData} /> : <Navigate to="/" />} />
                <Route path="/tp-team" element={<TpPage /> ? <TpPage interns={candidateData} /> : <Navigate to="/" />} />
                <Route path="/ps-team" element={<PsTeamPage1 /> ? <PsTeamPage1 interns={candidateData} /> : <Navigate to="/" />} />
                <Route path="/spl-lab" element={<SplLabPage /> ? <SplLabPage candidateData={candidateData} /> : <Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;
