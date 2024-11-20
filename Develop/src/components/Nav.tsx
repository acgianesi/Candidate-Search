import { Link } from "react-router-dom";

const Nav = () => {
  // DONE: Add necessary code to display the navigation bar and link between the pages
  return (
    <nav>
      <ul style={{ display: 'flex', padding: 0 }}>
        <li style={{ marginRight: '20px' }}>
          <Link
            to="/"
            style={{ color: 'white' }}>
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/SavedCandidates"
            style={{ color: 'white' }}>
            Potential Candidates
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
