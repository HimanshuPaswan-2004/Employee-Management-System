import React,{useContext, useState} from 'react'
import { AuthContext } from '../../context/AuthContext.jsx'


const CreateTask = () => { 


  const [userData,setuserData] = useContext(AuthContext)

const [taskTitle, setTaskTitle] = useState('')
const [taskDescription , setTaskDescription] = useState('')
const [taskDate, settaskDate] = useState('')
const [AssignTo, setAssignTo] = useState('')
const [Category, setCategory] = useState('')

const submitHandler = (e) => {
  e.preventDefault();

  const newTaskItem = {
    title: taskTitle,
    description: taskDescription,
    date: taskDate,
    category: Category,
    active: false,
    newTask: true,
    completed: false,
    failed: false,
  }

  const updated = userData.map((emp) => {
    if (AssignTo === emp.firstname) {
      return {
        ...emp,
        tasks: [...emp.tasks, newTaskItem],
        taskCounts: {
          ...emp.taskCounts,
          newTask: emp.taskCounts.newTask + 1,
        },
      }
    }
    return emp
  })

  setuserData(updated)
  localStorage.setItem('employees', JSON.stringify(updated))

  setTaskTitle('')
  setTaskDescription('')
  settaskDate('')
  setAssignTo('')
  setCategory('')
}


  return (
    <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
      
      {/* Form Section */}
      <div className="mt-10 bg-[#1a1a1a] p-8 rounded-xl shadow-lg w-full">
        <form onSubmit={(e) =>{
        submitHandler(e)
        }} className="flex flex-wrap w-full items-start justify-between gap-10">
          
          {/* Left Section */}
          <div className="w-full md:w-[45%] space-y-6">
            <div>
              <h3 className="mb-2 font-semibold text-gray-300">Task Title</h3>
              <input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)}
                className="w-full bg-transparent border border-gray-600 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                type="text"
                placeholder="Make a UI design"
              />
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-gray-300">Date</h3>
              <input value={taskDate} onChange={(e) => settaskDate(e.target.value)}
                className="w-full bg-transparent border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:border-green-500"
                type="date"
              />
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-gray-300">Assign to</h3>
              <input value={AssignTo} onChange={(e) => setAssignTo(e.target.value)}
                className="w-full bg-transparent border border-gray-600 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                type="text"
                placeholder="employee name"
              />
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-gray-300">Category</h3>
              <input value={Category} onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-transparent border border-gray-600 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                type="text"
                placeholder="design, dev, etc"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-[45%] flex flex-col">
            <h3 className="mb-2 font-semibold text-gray-300">Description</h3>
            <textarea
              value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}
              className="w-full h-[200px] bg-transparent border border-gray-600 rounded-md px-3 py-2 text-white placeholder-gray-400 resize-none focus:outline-none focus:border-green-500"
              placeholder="Enter task description..."
            ></textarea>

            <button
              type="submit"
              className="mt-5 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md py-2 transition-all"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTask
