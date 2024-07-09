import React from 'react'

interface User {
  id: number;
  name: string;
  email: string;
}

//fetch- treat data as static or unchanging,
// render at build time
// disable caching- next js will render at request time
const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users',
    { next: { revalidate: 10}} //run background to get fresh data every 10 sec
  );
  const users: User[] = await res.json();


  return (
    <>
    <h1>Users</h1>
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
      {users.map(user => <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>)}
      </tbody>
      </table>
    </>
  )
}

export default UsersPage