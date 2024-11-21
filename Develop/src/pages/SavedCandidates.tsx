import { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const savedData = localStorage.getItem('savedCandidates');
    if (savedData) {
      const parsedCandidates = JSON.parse(savedData);
      setSavedCandidates(parsedCandidates);
    }
  }, []);
  return (
    <div>
      <h1>Potential Candidates</h1>
      {savedCandidates.length === 0 ? (
        <p>No saved candidates yet.</p>
      ) : (
        <ul>
          {savedCandidates.map((candidate, index) => (
            <li key={index}>
              <h2>{candidate.name}</h2>
              <img src={candidate.avatar_url} alt={candidate.login} />
              <p>{candidate.location}</p>
              <p>{candidate.email}</p>
              <p>{candidate.company}</p>
              <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
                GitHub Profile
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedCandidates;