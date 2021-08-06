import React, {useState} from 'react'

const AddData = ({data, setData}) => {

    const [addFirstName, setAddFirstName] = useState('');
    const [addSecondName, setAddSecondName] = useState('');
    const [addRole, setAddRole] = useState('');

    function handleSave() {
        if (addFirstName && addSecondName && addRole) {
            setData({users:[...data.users, {role: addRole, firstName: addFirstName, lastName: addSecondName}]})
        }
    }

    function handleSelect(e) {
        setAddRole(parseInt(e.target.value));
    }

    

    return (
        <>
        <div className="modal-header">
                    <h5 className="modal-title" id="add-user-modal-label">Add a new user</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="mb-3">
                        <label for="first-name-input">First Name</label>
                        <input
                        onChange={(e)=> {setAddFirstName(e.target.value)}}
                        type="text" className="form-control" id="first-name-input" placeholder="Mark"/>
                    </div>
                    <div className="mb-3">
                        <label for="last-name-input">Last Name</label>
                        <input
                        onChange={(e)=> {setAddSecondName(e.target.value)}}
                        type="text" className="form-control" id="last-name-input" placeholder="Otto"/>
                    </div>
                    <div className="mb-3">
                        <label for="role-select">Role</label>
                        <select
                        onChange={(e)=> {handleSelect(e)} }
                        className="form-select" id="role-select" aria-label="Role select">
                            <option selected>Select a role</option>
                            <option value="1">User</option>
                            <option value="2">Senior User</option>
                            <option value="3">WFM</option>
                        </select>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button
                    onClick={handleSave}
                    type="button" className="btn btn-primary">Save changes</button>
            </div>
        </>
    )
}

export default AddData
