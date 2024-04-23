import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Učební rozvrh</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/monday">Pondělí</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tuesday">Úterý</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/wednesday">Středa</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/thursday">Čtvrtek</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/friday">Pátek</Link>
            </li>
            {/* Přidat další odkazy pro další dny */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
