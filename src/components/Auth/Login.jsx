import React,{useState} from 'react'

const Login = ({handleLogin}) => {

  
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const submitHandler=(e)=>{
        e.preventDefault()
        handleLogin (email,password)
        // console.log("email:",email)
        // console.log("password:",password)

        setEmail("")
        setPassword("") 
    }

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }
            }
                 className='flex flex-col items-center justify-center'>
                <input
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)

                }}
                required className='border-2 border-emerald-600 text-xl py-3 px-5 text-black outline-none bg-transparent rounded-full placeholder:text-grey-500' type="email" placeholder="Enter your email" />

                <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required className='mt-5 border-2 border-emerald-600 text-xl py-3 px-5 text-black outline-none bg-transparent rounded-full placeholder:text-grey-500' type="password" placeholder="Enter your password" />
                <button className='border-2 mt-5 border-emerald-600 text-xl py-3 px-5 text-white outline-none bg-emerald-600 rounded-full'>login</button>

                </form>

      </div>
    </div>
  )
}

export default Login