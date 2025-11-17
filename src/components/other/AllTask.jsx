import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext.jsx'

const AllTask = () => {
  const [employees] = useContext(AuthContext)
  if (!employees) {
    return <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-48 '></div>
  }
  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
      <div className='bg-red-400 text-white font-semibold mb-3 py-3 px-4 rounded grid grid-cols-5 gap-4'>
        <h2>Employee Name</h2>
        <h3>New Task</h3>
        <h5>Active Task</h5>
        <h5>Completed</h5>
        <h5>Failed</h5>
      </div>
      <div className='max-h-[420px] overflow-auto space-y-3'>
        {employees.map((elem) => (
          <div
            key={elem.id}
            className='bg-[#111111] text-white py-3 px-4 rounded border border-green-400 grid grid-cols-5 gap-4 items-center'
          >
            <h2 className='capitalize'>{elem.firstname}</h2>
            <h3 className='font-semibold text-blue-500'>{elem.taskCounts.newTask}</h3>
            <h5 className='font-semibold text-yellow-400'>{elem.taskCounts.active}</h5>
            <h5 className='font-semibold'>{elem.taskCounts.completed}</h5>
            <h5 className='font-semibold text-red-500'>{elem.taskCounts.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllTask


  

