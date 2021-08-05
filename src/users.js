import React from 'react'

const Users = () => {
    return (
        <>
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
        </>
    )
}

export default Users
