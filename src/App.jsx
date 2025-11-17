 import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import AuthProvider from './context/AuthProvider.jsx'
import { AuthContext } from './context/AuthContext.jsx'
// import { setlocalStorage } from './utils/localStorage'
// import { getlocalStorage } from './utils/localStorage'

const App = () => {
const [user, setUser] = useState(null);
const [loggedInUserData,setloggedInUserData] = useState(null)
const [userData] = useContext(AuthContext);

useEffect(()=>{
const loggedInUser = localStorage.getItem('loggedInUser')

  if(loggedInUser){
    const userData =JSON.parse(loggedInUser)
    setUser(userData.role)
    setloggedInUserData(userData.data)
  }

},[])



const handleLogin = (email,password) => {
  if (email == 'admin@me.com' && password == '123') {
    setUser('admin');
    localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}));
    // console.log(user)
  }
else if(userData){   
  const employee = userData.find((emp) => emp.email === email && emp.password === password);
  if(employee){
 setUser('employee');
 setloggedInUserData (employee);
    localStorage.setItem('loggedInUser',JSON.stringify({role:'employees',data:employee}));
    // console.log(user)
}
  else{
    alert ("Invalid Credentials")
  }
}
}


 
  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> : ''}
    {user=='admin' ? <AdminDashboard changeUser={setUser} /> :(user == 'employee'? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/> : null)}
   
   {/* <EmployeeDashboard/> */}
   {/* <AdminDashboard/> */}

    </>
  )
}

export default App
