import React from 'react'

const Wfm = ({data, setData}) => {
    const {users} = data;
    return (
        <>
           {
                users.filter((item)=> item.role === 3).map((item, index)=> {
                    const {role, firstName, lastName} = item;
                    return (
                <tr>
            <th scope="row">{index}</th>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>Senior User</td>
            <td>
                <button type="button" className="btn btn-outline-danger btn-sm">Delete</button>
            </td>
        </tr>
                    )
                })
            }
                
        </>
    )
}

export default Wfm












            // <tr>
            //     <th scope="row">1</th>
            //     <td>Mark</td>
            //     <td>Otto</td>
            //     <td>WFM Professional</td>
            //     <td>
            //         <button type="button" className="btn btn-outline-danger btn-sm">Delete</button>
            //     </td>
            // </tr>