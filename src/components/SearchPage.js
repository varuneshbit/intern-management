import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/searchpage.css'; 

const SearchPage = ({ interns = [] }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredInterns, setFilteredInterns] = useState(interns);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
        const query = event.target.value.toLowerCase();
    
        const results = interns.filter(intern =>
            (intern.id && intern.id.toLowerCase().includes(query)) ||
            (intern.name && intern.name.toLowerCase().includes(query)) ||
            (intern.yearOfPassing && intern.yearOfPassing.toString().includes(query)) ||
            (intern.gender && intern.gender.toLowerCase().includes(query)) ||
            (intern.branch && intern.branch.toLowerCase().includes(query)) ||
            (intern.team && intern.team.toLowerCase().includes(query)) ||
            (intern.selectionStatus && intern.selectionStatus.toLowerCase().includes(query))
        );
    
        setFilteredInterns(results);
    };    

    return (
        <div className="search-page">
            {/* Sidebar Section */}
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

            {/* Main Search Content */}
            <div className="main-content">
                <header className="search-header">
                    <h1>Search Interns :</h1>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </header>
                <div className="search-results">
                    {filteredInterns.length > 0 ? (
                        <table className="results-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Year of Passing</th>
                                    <th>Gender</th>
                                    <th>Branch</th>
                                    <th>Team</th>
                                    <th>Selection Status</th>
                                    <th>Designation</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredInterns.map(intern => (
                                    <tr key={intern.id}>
                                        <td>{intern.id}</td>
                                        <td>{intern.name}</td>
                                        <td>{intern.yearOfPassing}</td>
                                        <td>{intern.gender}</td>
                                        <td>{intern.branch}</td>
                                        <td>{intern.team}</td> 
                                        <td>{intern.selectionStatus}</td>
                                        <td>{intern.designation}</td>
                                        <td>
                                            <Link to={`/dashboard/${intern.id}`}>View Details</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No results found</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
