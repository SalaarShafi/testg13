import './App.css';
import React,{useState} from 'react';

// data
import dataFile from './dataFile'

// components
import Users from './users'
import SeniorUsers from './senior-users'
import Wfm from './wfm'

// component modal
import AddData from './addData' 

function App() {

  const [data, setData] = useState(dataFile);

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
              <Users data={data} setData={setData}/>
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
                <SeniorUsers data={data} setData={setData}/>
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
                <Wfm  data={data} setData={setData}/>
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
              <AddData data={data} setData={setData}/>
            </div>
        </div>
    </div>
    {/* <!-- /end of modal area.--> */}
    
    </>
  );
}

export default App;
