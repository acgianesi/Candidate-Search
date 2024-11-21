import { Link } from "react-router-dom";

const Nav = () => {
  // DONE: Add necessary code to display the navigation bar and link between the pages
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <Link
            to="/"
            style={{ color: 'white' }}>
            Home
          </Link>
        </li>

        <li className="nav-item">
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
