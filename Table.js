import React from 'react'

const Table = ({users, onDeletehandle}) => {
  
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Team</th>
          <th>Score</th>
         </tr>
      </thead>
      <tbody>
        {
          users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.color}</td>
                <td>{user.point}</td>
                <td>{user.id}</td>
                <td><button onClick={()=>{onDeletehandle(user.id)}}>Delete</button></td>
            </tr>
            )
          })
        }

      </tbody>


  </table>
  )
}

export default Table