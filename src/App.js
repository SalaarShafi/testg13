import './App.css';

function App() {
  return (
    <>
    {/* <!-- navbar area, for filter input--> */}
    <nav className="navbar sticky-top navbar-light bg-light">
        <div className="container-fluid w-50">
            <label for="search-user" className="col-sm-2 col-form-label">Search for employee:</label>
            <div className="col-sm-10">
                <input type="text" className="form-control" id="search-user" placeholder="Enter a name"/>
            </div>
        </div>
    </nav>
    {/* <!-- /end of navbar area-->
    <!-- part for displaying user content--> */}
    <div className="container pt-5">
        <h2>Users</h2>
        <table className="table mb-5 align-middle" id="users">
            <thead>
                <tr>
                    <th style={{width : '20%'}} scope="col">#</th>
                    <th style={{width : '20%'}} scope="col">First</th>
                    <th style={{width : '20%'}} scope="col">Last</th>
                    <th style={{width : '20%'}} scope="col">Role</th>
                    <th style={{width : '20%'}} scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>User</td>
                    <td>
                      <button type="button" className="btn btn-outline-danger btn-sm">Delete</button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>User</td>
                    <td>
                      <button type="button" className="btn btn-outline-danger btn-sm">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <h2>Senior Users</h2>
        <table className="table mb-5 align-middle" id="senior-users">
            <thead>
                <tr>
                    <th style={{width : '20%'}} scope="col">#</th>
                    <th style={{width : '20%'}} scope="col">First</th>
                    <th style={{width : '20%'}} scope="col">Last</th>
                    <th style={{width : '20%'}} scope="col">Role</th>
                    <th style={{width : '20%'}} scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Senior User</td>
                    <td>
                      <button type="button" className="btn btn-outline-danger btn-sm">Delete</button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>Senior User</td>
                    <td>
                      <button type="button" className="btn btn-outline-danger btn-sm">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <h2>WFM</h2>
        <table className="table mb-5 align-middle" id="wfm-users">
            <thead>
                <tr >
                    <th style={{width : '20%'}} scope="col">#</th>
                    <th style={{width : '20%'}} scope="col">First</th>
                    <th style={{width : '20%'}} scope="col">Last</th>
                    <th style={{width : '20%'}} scope="col">Role</th>
                    <th style={{width : '20%'}} scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>WFM Professional</td>
                    <td>
                      <button type="button" className="btn btn-outline-danger btn-sm">Delete</button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>WFM Professional</td>
                    <td>
                      <button type="button" className="btn btn-outline-danger btn-sm">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-user-modal">
            Add User
        </button>
    </div>
    {/* <!-- /end of displaying content-->
    <!-- modal area--> */}
    <div className="modal fade" id="add-user-modal" tabindex="-1" aria-labelledby="add-user-modal-label" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="add-user-modal-label">Add a new user</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="mb-3">
                        <label for="first-name-input">First Name</label>
                        <input type="text" className="form-control" id="first-name-input" placeholder="Mark"/>
                    </div>
                    <div className="mb-3">
                        <label for="last-name-input">Last Name</label>
                        <input type="text" className="form-control" id="last-name-input" placeholder="Otto"/>
                    </div>
                    <div className="mb-3">
                        <label for="role-select">Role</label>
                        <select className="form-select" id="role-select" aria-label="Role select">
                            <option selected>Select a role</option>
                            <option value="1">User</option>
                            <option value="2">Senior User</option>
                            <option value="3">WFM</option>
                        </select>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- /end of modal area.--> */}
    
    </>
  );
}

export default App;
