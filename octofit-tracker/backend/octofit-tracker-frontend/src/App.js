
import logo from './logo.svg';
import octofitLogoSmall from '../public/octofitapp-small.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App bg-light min-vh-100">
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={octofitLogoSmall} alt="Octofit Logo" className="octofit-logo-small me-2" />
            Octofit Tracker
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Teams</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Leaderboard</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow">
              <div className="card-body text-center">
                <img src={logo} className="App-logo mb-3" alt="logo" />
                <h1 className="display-4 mb-3">Welcome to <span className="text-primary">Octofit Tracker</span></h1>
                <p className="lead mb-4">
                  Track your fitness, join teams, and compete on the leaderboard!
                </p>
                <a className="btn btn-primary btn-lg mb-3" href="#">Get Started</a>
                <hr />
                <h2 className="h4 mb-3">Sample Activity Table</h2>
                <div className="table-responsive">
                  <table className="table table-striped table-bordered">
                    <thead className="table-primary">
                      <tr>
                        <th>Date</th>
                        <th>Activity</th>
                        <th>Duration (min)</th>
                        <th>Calories</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2026-01-22</td>
                        <td>Running</td>
                        <td>30</td>
                        <td>300</td>
                        <td>
                          <button className="btn btn-sm btn-outline-primary me-2">Edit</button>
                          <button className="btn btn-sm btn-outline-danger">Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <td>2026-01-21</td>
                        <td>Cycling</td>
                        <td>45</td>
                        <td>400</td>
                        <td>
                          <button className="btn btn-sm btn-outline-primary me-2">Edit</button>
                          <button className="btn btn-sm btn-outline-danger">Delete</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <a className="btn btn-success mt-3" href="#">Add Activity</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
