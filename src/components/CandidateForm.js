import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/candidateform.css'

const CandidateForm = () => {
    const [candidate, setCandidate] = useState({
        id: '',
        name: '',
        yearOfPassing: '',
        gender: '',
        branch: '',
        degree: '',
        educationDetails: '',
        contactNumber: '',
        resume: null,
        team: '',
        designation: '',
        interviewDate: '',
        selectionStatus: '',
        joiningDate: '',
        photo: null,
        workingStatus: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setCandidate({ ...candidate, [name]: files ? files[0] : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('id', candidate.id);
        formData.append('name', candidate.name);
        formData.append('yearOfPassing', candidate.yearOfPassing);
        formData.append('gender', candidate.gender);
        formData.append('branch', candidate.branch);
        formData.append('degree', candidate.degree);
        formData.append('educationDetails', candidate.educationDetails);
        formData.append('contactNumber', candidate.contactNumber);
        formData.append('resume', candidate.resume);
        formData.append('team', candidate.team);
        formData.append('designation', candidate.designation);
        formData.append('interviewDate', candidate.interviewDate);
        formData.append('selectionStatus', candidate.selectionStatus);
        formData.append('joiningDate', candidate.joiningDate);
        formData.append('photo', candidate.photo);
        formData.append('workingStatus', candidate.workingStatus);
        formData.append('address', candidate.address);

        try {
            const response = await fetch('http://localhost:5000/add-intern', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                const result = await response.json();
                console.log('Candidate added:', result);
                setCandidate({
                    id: '',
                    name: '',
                    yearOfPassing: '',
                    gender: '',
                    branch: '',
                    degree: '',
                    educationDetails: '',
                    contactNumber: '',
                    resume: null,
                    team: '',
                    designation: '',
                    interviewDate: '',
                    selectionStatus: '',
                    joiningDate: '',
                    photo: null,
                    workingStatus: '',
                    address: ''
                });
            } else {
                console.error('Failed to add candidate');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="candidate-form-page">
            <div className="sidebar">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/search">Search</Link></li>
                    <li><Link to="/candidateform">Candidate Form</Link></li>
                    <li><Link to="/tp-team">Training and Placement</Link></li>
                    <li><Link to="/ps-team">Personalized Skill</Link></li>
                    <li><Link to="/spl-lab">Special Lab</Link></li>
                </ul>
                <div className="logout-button">
                    <Link to="/">Logout</Link>
                </div>
            </div>

            <div className="candidate-form-container">
                <h2 id='cfh2'>Add New Intern</h2>
                <form onSubmit={handleSubmit} className="candidate-form" encType="multipart/form-data">
                    <div>
                        <label>Roll.no:</label>
                        <input type="id" name="id" value={candidate.id} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" value={candidate.name} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Year of Passing:</label>
                        <input type="text" name="yearOfPassing" value={candidate.yearOfPassing} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Gender:</label>
                        <select name="gender" value={candidate.gender} onChange={handleChange} >
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label>Branch:</label>
                        <input type="text" name="branch" value={candidate.branch} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Degree:</label>
                        <input type="text" name="degree" value={candidate.degree} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Education Details:</label>
                        <input type="text" name="educationDetails" value={candidate.educationDetails} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Contact Number:</label>
                        <input type="text" name="contactNumber" value={candidate.contactNumber} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Resume:</label>
                        <input type="file" name="resume" onChange={handleChange} />
                    </div>
                    <div>
                        <label>Team:</label>
                        <select name="gender" value={candidate.gender} onChange={handleChange} >
                            <option value="">Select</option>
                            <option value="tp">Training and Placement</option>
                            <option value="ps">Personalized Skill</option>
                            <option value="spllab">Special Lab</option>
                        </select>
                    </div>
                    <div>
                        <label>Designation:</label>
                        <input type="text" name="designation" value={candidate.designation} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Interview Date:</label>
                        <input type="date" name="interviewDate" value={candidate.interviewDate} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Selection Status:</label>
                        <input type="text" name="selectionStatus" value={candidate.selectionStatus} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Joining Date:</label>
                        <input type="date" name="joiningDate" value={candidate.joiningDate} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Photo:</label>
                        <input type="file" name="photo" onChange={handleChange} />
                    </div>
                    <div>
                        <label>Working Status:</label>
                        <input type="text" name="workingStatus" value={candidate.workingStatus} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Address:</label>
                        <textarea name="address" value={candidate.address} onChange={handleChange} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default CandidateForm;
