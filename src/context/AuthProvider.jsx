import React,{useEffect,useState } from 'react'
import { getlocalStorage, setlocalStorage } from '../utils/localStorage'
import { AuthContext } from './AuthContext.jsx'

const AuthProvider = ({children}) => {
  // localStorage.clear()
    const [userData, setuserData] = useState(null)
    useEffect(() => {  
        setlocalStorage();
        const {employees} = getlocalStorage();
        setuserData (employees)
        
     }
    , [])


  return (
    <div>
    <AuthContext.Provider value={[userData,setuserData]}>
         {children}
    </AuthContext.Provider>
    </div>
    
  )
}

export default AuthProvider