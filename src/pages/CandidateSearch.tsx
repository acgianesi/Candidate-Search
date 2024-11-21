import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchCandidate = async () => {
    try {
      const candidates = await searchGithub();
      if (candidates.length === 0) {
        setError('No candidates available!');
        return;
      }

      const user = await searchGithubUser(candidates[0].login);
      setCandidate(user);
    } catch (error) {
      setError('Something went wrong...');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCandidate();
  }, []);

  const handleSave = () => {
    if (candidate) {
      const updatedCandidates = [...savedCandidates, candidate];
      setSavedCandidates(updatedCandidates);
      localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
    }
  };

  const handleNext = async () => {
    setLoading(true);
    setError('');
    await fetchCandidate();
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {candidate && !loading && !error && (
       
       <div className='card'>
          <h1 className="title">Candidate Search</h1>
          <h2>{candidate.name} {(candidate.login)}</h2>
          <img className='card-image' src={candidate.avatar_url} alt={candidate.login} />
          <p>Location:{candidate.location || 'Unknown'}</p>
          <p>Email:{candidate.email || 'Unavailable'}</p>
          <p>Company:{candidate.company || 'N/A'}</p>
          <a href={candidate.html_url} target="_blank" rel="noopener noreferrer"></a>
          <br />
         <div className='button-container'>
          <button className="button green" onClick={handleSave}>+</button>
          <button className="button red" onClick={handleNext}>-</button>
        </div>
        </div>
      )}
    </div>
  );
};

export default CandidateSearch;
