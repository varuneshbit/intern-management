import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/dashboardpage.css';

const DashboardPage = ({ interns = [] }) => { // Default to an empty array
    const { internId } = useParams();
    const [internDetails, setInternDetails] = useState(null);

    useEffect(() => {
        const selectedIntern = interns.find(intern => intern.id === internId);
        setInternDetails(selectedIntern);
    }, [internId, interns]);

    if (!internDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="dashboard-page">
            <h1>{internDetails.name}'s Profile</h1>
            <div className="intern-details">
                <table>
                    <tbody>
                        <tr>
                            <td><strong>Profile Picture:</strong></td>
                            <td><img src={`/images/${internDetails.photo}`} alt={internDetails.name} className="profile-pic" /></td>
                        </tr>
                        <tr>
                            <td><strong>Year of Passing:</strong></td>
                            <td>{internDetails.yearOfPassing}</td>
                        </tr>
                        <tr>
                            <td><strong>Gender:</strong></td>
                            <td>{internDetails.gender}</td>
                        </tr>
                        <tr>
                            <td><strong>Branch:</strong></td>
                            <td>{internDetails.branch}</td>
                        </tr>
                        <tr>
                            <td><strong>Degree:</strong></td>
                            <td>{internDetails.degree}</td>
                        </tr>
                        <tr>
                            <td><strong>Educational Details:</strong></td>
                            <td>{internDetails.educationDetails}</td>
                        </tr>
                        <tr>
                            <td><strong>Contact Number:</strong></td>
                            <td>{internDetails.contactNumber}</td>
                        </tr>
                        <tr>
                            <td><strong>Resume:</strong></td>
                            <td><a href={`/resumes/${internDetails.resumeUpload}`} target="_blank" rel="noopener noreferrer">Download</a></td>
                        </tr>
                        <tr>
                            <td><strong>Designation:</strong></td>
                            <td>{internDetails.designation}</td>
                        </tr>
                        <tr>
                            <td><strong>Date of Interview:</strong></td>
                            <td>{internDetails.dateOfInterview}</td>
                        </tr>
                        <tr>
                            <td><strong>Selection Status:</strong></td>
                            <td>{internDetails.selectionStatus}</td>
                        </tr>
                        <tr>
                            <td><strong>Date of Joining:</strong></td>
                            <td>{internDetails.dateOfJoining}</td>
                        </tr>
                        <tr>
                            <td><strong>Working Status:</strong></td>
                            <td>{internDetails.workingStatus}</td>
                        </tr>
                        <tr>
                            <td><strong>Address:</strong></td>
                            <td>{internDetails.address}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashboardPage;
