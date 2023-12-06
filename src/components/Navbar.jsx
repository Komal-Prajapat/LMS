import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="w-[100%] h-20 bg-blue-400 flex ">
      <img src="logo.jpg" alt="" className='m-3 w-15 h-15 rounded-[100%] '/>
            <input type="text" placeholder='search' className='h-11 ml-10 mt-3 rounded w-64' />
            <button className='bg-blue-900 w-12 h-11 rounded mt-3'></button>
      </div>
      <br/>
      <div className="w-[100%] h-11 bg-black flex " >
       <Link to='/html'> <li className='text-white list-none p-2 font-bold ml-4'>HTML</li></Link>     
  
  <Link to='/css'> <li className='text-white list-none p-2 font-bold ml-4'>CSS</li> </Link>    
   
   <Link to='/js'> <li className='text-white list-none p-2 font-bold ml-4'>JS</li></Link>
      
    <Link to='/react'> <li className='text-white list-none p-2 font-bold ml-4'>React</li> </Link>      
 
 {/* <Link to=''> <li className='text-white list-none p-2 font-bold ml-4'>MongoDb</li></Link>
      
   <Link to=''> <li className='text-white list-none p-2 font-bold ml-4'>C</li>
     </Link>  <Link to=''> <li className='text-white list-none p-2 font-bold ml-4'>C++</li>
     </Link>  <Link to=''> <li className='text-white list-none p-2 font-bold ml-4'>JAVA</li>
  </Link>     <Link to=''> <li className='text-white list-none p-2 font-bold ml-4'>Python</li>
</Link> */}

  </div>

    </>
  )
}

export default Navbar
