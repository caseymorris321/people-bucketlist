import React, { useState} from 'react';
import PeopleTable from '../../components/peopleTable/peopleTable';
import './PeoplePage.css'; 

function PeoplePage() {
    const [people, setPeople] = useState([]);
    const [apiStatus, setApiStatus] = useState('');

    // Function to fetch a single user from "https://randomuser.me/api/"
    const fetchSinglePerson = async () => {
        try {
            const response = await fetch('https://randomuser.me/api/');
            if (!response.ok) throw new Error('Network response was not ok.');
            const data = await response.json();
            // Append the new user to the current list of people
            setPeople(currentPeople => [...currentPeople, ...data.results]);
            setApiStatus('Success: The API is functioning correctly.');
        } catch (error) {
            console.error('Fetch error:', error);
            setApiStatus('Failure: Something isn\'t working. Please try again later.');
        }
    };

    return (
        <>
            <h2>People Page</h2>
            <article>
                <p>Click the button below to fetch data for a single random person from an API.</p>
                <div style={{ textAlign: 'center' }}>
                    <button onClick={fetchSinglePerson}>Get API Data</button>
                </div>
                <div>
                    <h3>API Status:</h3>
                    <p>{apiStatus}</p>
                </div>
                <div className="people-table">
                    <PeopleTable people={people} />
                </div>
            </article>
        </>
    );
}

export default PeoplePage;