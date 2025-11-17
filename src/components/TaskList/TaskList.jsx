import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
     
  return (
    <div  id='task-list' className='h-[55%] flex items-center justify-start gap-5 flex-nowrap rounded-xl  mt-5 py-5 w-full overflow-x-auto'>
          {data.tasks.map((elem,idx) =>{

               if(elem.active){
                    return <AcceptTask key={idx} data={elem}/>
               }
               if(elem.newTask){
                    return <NewTask key={idx} data={elem}/>
               }
               if(elem.completed){
                    return <CompleteTask key={idx} data={elem}/>
               }
               if(elem.failed){
                    return <FailedTask key={idx} data={elem}/>
               }
          
          
          
          
          
 } )}































        {/* <div className='shrink-0 h-full w-[400px] bg-red-400 rounded-xl p-5'>
          <div className='flex justify-between items center'>
             <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
             <h4 className='text-sm'>20 feb 2024</h4>
        </div>
           
        <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
    <p className='text-sm mt-2'>Create a video about the new features of React 18.</p>
         </div>

<div className='shrink-0 h-full w-[400px] bg-green-400 rounded-xl p-5'>
          <div className='flex justify-between items center'>
             <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
             <h4 className='text-sm'>20 feb 2024</h4>
        </div>
           
        <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
    <p className='text-sm mt-2'>Create a video about the new features of React 18.</p>
         </div> 

        
        <div className='shrink-0 h-full w-[400px] bg-blue-400 rounded-xl p-5'>
          <div className='flex justify-between items center'>
             <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
             <h4 className='text-sm'>20 feb 2024</h4>
        </div>
           
        <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
    <p className='text-sm mt-2'>Create a video about the new features of React 18.</p>
         </div> 


         <div className='shrink-0 h-full w-[400px] bg-yellow-400 rounded-xl p-5'>
          <div className='flex justify-between items center'>
             <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
             <h4 className='text-sm'>20 feb 2024</h4>
        </div>
           
        <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
    <p className='text-sm mt-2'>Create a video about the new features of React 18.</p>
         </div>  */}


    </div>
    )   
}

export default TaskList