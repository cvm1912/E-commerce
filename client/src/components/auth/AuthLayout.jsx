import {Outlet} from 'react-router-dom'

function AuthLayout() {
    return ( 
        <div className="flex h-screen w-full">
          <div className='flex flex-col items-center justify-center w-1/2 bg-black'>
            <h1 className='text-white text-4xl font-extrabold'>Welcome to E-commerce</h1>
          </div>
          <div className='flex items-center justify-center w-1/2'>
            <Outlet/>
          </div>
        </div>
     );
}

export default AuthLayout;
