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

  const handleReject = (candidateToReject: Candidate) => {
    const updatedCandidates = savedCandidates.filter(
      (candidate) => candidate.login !== candidateToReject.login
    );
    setSavedCandidates(updatedCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
  };
  
  return (
    <div>
      <h1>Potential Candidates</h1>
      {savedCandidates.length === 0 ? (
        <p>No saved candidates yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {savedCandidates.map((candidate, index) => (
              <tr key={index}>
                <td><img src={candidate.avatar_url} alt={candidate.login} width="50" height="50" /></td>
                <td>{candidate.name}</td>
                <td>{candidate.location || 'Unknown'}</td>
                <td>{candidate.email || 'Unavailable'}</td>
                <td>{candidate.company || 'N/A'}</td>
                <td> <button onClick={() => handleReject(candidate)} className="button red">-</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SavedCandidates;